import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
    Trophy, Code, MessageSquare, ThumbsUp, MessageCircle, 
    Image as ImageIcon, Briefcase, Hash, Repeat2, ArrowRight, 
    Pencil, Trash2, MoreHorizontal, Check, X, Bookmark, Share2, 
    TrendingUp, UserPlus, Zap, Link as LinkIcon, Paperclip
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

interface Post {
    id: number;
    user_id: number;
    author_name: string;
    author_role: string;
    author_photo: string | null;
    type: 'achievement' | 'writeup' | 'snippet' | 'standard';
    content: string;
    url: string | null;
    image_url: string | null;
    created_at: string;
    like_count: number;
    comment_count: number;
    has_liked: number;
    original_post_id?: number | null;
    original_content?: string | null;
    original_author_name?: string | null;
}

interface Comment {
    id: number;
    post_id: number;
    user_id: number;
    content: string;
    created_at: string;
    author_name: string;
    author_photo: string | null;
}

interface TrendingTag {
    tag: string;
    count: number;
}

interface CommunityFeedProps {
    onlineStatus?: Record<number, boolean>;
    onUserClick?: (userId: number) => void;
    onTabChange?: (tab: string) => void;
}

const SkeletonPost = () => (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-zinc-800 animate-pulse">
        <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gray-200 dark:bg-zinc-800 rounded-full"></div>
            <div className="space-y-2 flex-1">
                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-1/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-zinc-800 rounded w-1/2"></div>
            </div>
        </div>
        <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-5/6"></div>
        </div>
    </div>
);

const isImageUrl = (url: string | null) => {
    if (!url) return false;
    // Check for common image extensions, even with query parameters (e.g., Unsplash)
    return /\.(jpeg|jpg|gif|png|webp|bmp|svg|avif)(\?.*)?$/i.test(url);
};

const resolveMediaUrl = (url: string | null) => {
    if (!url) return '';
    if (url.startsWith('/uploads')) return `http://localhost:3000${url}`;
    return url;
};

const CommunityFeed: React.FC<CommunityFeedProps> = ({ onlineStatus = {}, onUserClick, onTabChange }) => {
    const { token, user } = useAuth();
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newPostContent, setNewPostContent] = useState('');
    
    // Attachment States
    const [activeAttachment, setActiveAttachment] = useState<'photo' | 'link' | 'achievement' | 'snippet' | null>(null);
    const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
    const [attachmentUrl, setAttachmentUrl] = useState('');
    const [attachmentPreview, setAttachmentPreview] = useState<string | null>(null);
    const [postType, setPostType] = useState<'standard' | 'achievement' | 'snippet'>('standard');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isInputExpanded, setIsInputExpanded] = useState(false);
    const [connectionsCount, setConnectionsCount] = useState<number>(0);
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [trendingTags, setTrendingTags] = useState<TrendingTag[]>([]);
    const [postMenuOpen, setPostMenuOpen] = useState<number | null>(null);
    const [editingPost, setEditingPost] = useState<number | null>(null);
    const [editContent, setEditContent] = useState('');
    const [showComments, setShowComments] = useState<Set<number>>(new Set());
    const [postComments, setPostComments] = useState<Record<number, Comment[]>>({});
    const [commentInputs, setCommentInputs] = useState<Record<number, string>>({});
    const [isReposting, setIsReposting] = useState<number | null>(null);
    const [postFilter, setPostFilter] = useState<'all' | 'mine'>('all');
    const [feedType, setFeedType] = useState<'global' | 'network'>('global');
    const [pendingDeleteId, setPendingDeleteId] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setPostMenuOpen(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const initFeed = async () => {
            setIsLoading(true);
            await Promise.all([fetchPosts(), fetchConnectionsData(), fetchTrendingTags()]);
            setIsLoading(false);
        };
        initFeed();
    }, []);

    const fetchTrendingTags = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/posts/trending', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            setTrendingTags(data);
        } catch (error) {
            console.error('Failed to fetch trending tags', error);
        }
    };

    const fetchConnectionsData = async () => {
        try {
            const countRes = await fetch('http://localhost:3000/api/connections/count', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const countData = await countRes.json();
            setConnectionsCount(countData.count || 0);

            const suggRes = await fetch('http://localhost:3000/api/connections/suggestions', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const suggData = await suggRes.json();
            setSuggestions(suggData);
        } catch (error) {
            console.error('Failed to fetch connections data', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [feedType]);

    const fetchPosts = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/posts?filter=${feedType}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            // Silencing non-critical logs as per cleanup request
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAttachmentFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setAttachmentPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
            setActiveAttachment('photo');
        }
    };

    const handleCreatePost = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPostContent.trim() && !attachmentFile && !attachmentUrl) return;

        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('content', newPostContent);
            formData.append('type', postType);
            
            if (attachmentFile) {
                formData.append('photo', attachmentFile);
            }
            if (attachmentUrl) {
                // If it's a URL, decide if it's an image or a link
                if (activeAttachment === 'photo') {
                    formData.append('image_url', attachmentUrl);
                } else {
                    formData.append('link_url', attachmentUrl);
                }
            }

            const response = await fetch('http://localhost:3000/api/posts', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                    // Note: Content-Type is set automatically for FormData
                },
                body: formData
            });

            if (response.ok) {
                resetCreatePost();
                fetchPosts();
                fetchTrendingTags();
            } else {
                alert('Failed to create post');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetCreatePost = () => {
        setNewPostContent('');
        setActiveAttachment(null);
        setAttachmentFile(null);
        setAttachmentUrl('');
        setAttachmentPreview(null);
        setPostType('standard');
        setIsInputExpanded(false);
    };

    const handleLike = async (postId: number) => {
        setPosts(prevPosts => prevPosts.map(p => {
            if (p.id === postId) {
                const newHasLiked = p.has_liked ? 0 : 1;
                const newLikeCount = newHasLiked ? p.like_count + 1 : Math.max(0, p.like_count - 1);
                return { ...p, has_liked: newHasLiked, like_count: newLikeCount };
            }
            return p;
        }));

        try {
            await fetch(`http://localhost:3000/api/posts/${postId}/like`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });
        } catch (error) {
            console.error('Failed to toggle like', error);
            fetchPosts();
        }
    };

    const fetchComments = async (postId: number) => {
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${postId}/comments`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            setPostComments(prev => ({ ...prev, [postId]: data }));
        } catch (error) {
            console.error('Failed to fetch comments', error);
        }
    };

    const toggleComments = (postId: number) => {
        setShowComments(prev => {
            const next = new Set(prev);
            if (next.has(postId)) {
                next.delete(postId);
            } else {
                next.add(postId);
                fetchComments(postId);
            }
            return next;
        });
    };

    const handleComment = async (postId: number) => {
        const content = commentInputs[postId];
        if (!content?.trim()) return;

        try {
            const res = await fetch(`http://localhost:3000/api/posts/${postId}/comments`, {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content })
            });

            if (res.ok) {
                setCommentInputs(prev => ({ ...prev, [postId]: '' }));
                fetchComments(postId);
                setPosts(prev => prev.map(p => p.id === postId ? { ...p, comment_count: (p.comment_count || 0) + 1 } : p));
            }
        } catch (error) {
            console.error('Failed to add comment', error);
        }
    };

    const handleRepost = async (postId: number) => {
        if (!confirm('Repost this to your feed?')) return;
        setIsReposting(postId);
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${postId}/repost`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                fetchPosts();
            }
        } catch (error) {
            console.error('Failed to repost', error);
        } finally {
            setIsReposting(null);
        }
    };

    const handleSend = async (post: Post) => {
        const shareData = {
            title: `Check out ${post.author_name}'s post on CyberSphere`,
            text: post.content.substring(0, 50) + (post.content.length > 50 ? '...' : ''),
            url: `http://localhost:5173/posts/${post.id}`
        };

        if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.error('Error sharing post', error);
            }
        } else {
            try {
                await navigator.clipboard.writeText(shareData.url);
                alert('Post link copied to clipboard!');
            } catch (error) {
                console.error('Failed to share post', error);
            }
        }
    };

    const handleConnect = async (receiverId: number) => {
        try {
            const res = await fetch('http://localhost:3000/api/connections/request', {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ receiver_id: receiverId })
            });
            if (res.ok) {
                setSuggestions(prev => prev.filter(s => s.id !== receiverId));
            }
        } catch (error) {
            // Silencing error logs for cleaner production-like feel
        }
    };

    const handleDeletePost = async (postId: number) => {
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                setPosts(prev => prev.filter(p => p.id !== postId));
            }
        } catch (error) {
            // Error handled silently for better UX, though in production we'd use a toast
        }
        setPendingDeleteId(null);
        setPostMenuOpen(null);
    };

    const handleSaveEdit = async (postId: number) => {
        if (!editContent.trim()) return;
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
                method: 'PUT',
                headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: editContent })
            });
            if (res.ok) {
                setPosts(prev => prev.map(p => p.id === postId ? { ...p, content: editContent } : p));
                setEditingPost(null);
            }
        } catch (error) {
            console.error('Failed to edit post', error);
        }
    };

    const glassStyle = "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-white/20 dark:border-zinc-800/20";

    return (
        <div className="bg-[#f0f2f5] dark:bg-zinc-950 min-h-screen pt-4 md:pt-6 pb-12 px-2 sm:px-4 lg:px-8 -mx-3 md:-mx-6 w-[calc(100%+1.5rem)] md:w-[calc(100%+3rem)]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 md:gap-6 justify-center">
                
                {/* Left Sidebar - Profile & Nav */}
                <div className="hidden xl:block w-64 flex-shrink-0 space-y-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`${glassStyle} rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-none`}
                    >
                        <div className="h-24 bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 w-full relative">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.6),rgba(0,0,0,0))]"></div>
                        </div>
                        <div className="px-5 pb-5 -mt-12 relative text-center border-b border-gray-100 dark:border-zinc-800">
                            <div className="relative inline-block mx-auto mb-4">
                                <div className="w-24 h-24 rounded-3xl border-4 border-white dark:border-zinc-900 bg-gray-200 dark:bg-zinc-800 overflow-hidden flex items-center justify-center shadow-lg transform rotate-3">
                                    {user?.photo_url ? (
                                        <img src={user.photo_url} alt={user.name} className="w-full h-full object-cover -rotate-3 scale-110" />
                                    ) : (
                                        <div className="-rotate-3 font-black text-3xl text-gray-500">{user?.name?.charAt(0) || 'U'}</div>
                                    )}
                                </div>
                                <span className="absolute -bottom-1 -right-1 flex h-6 w-6">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-6 w-6 border-4 border-white dark:border-zinc-900 bg-green-500 shadow-sm"></span>
                                </span>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white tracking-tight leading-tight">{user?.name}</h3>
                            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-widest">{user?.role === 'user' ? 'Cybersecurity Enthusiast' : 'Tech Recruiter'}</p>
                        </div>
                        <div className="p-2">
                            <button 
                                onClick={() => onTabChange && onTabChange('network')}
                                className="w-full text-left py-3 px-4 text-xs font-bold text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-800/50 rounded-xl transition-all flex justify-between items-center group"
                            >
                                <span className="flex items-center"><UserPlus className="w-4 h-4 mr-3 text-blue-500" /> Connections</span>
                                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-lg group-hover:scale-110 transition-transform">{connectionsCount}</span>
                            </button>
                            <button 
                                onClick={() => setPostFilter(postFilter === 'mine' ? 'all' : 'mine')}
                                className={`w-full text-left py-3 px-4 text-xs font-bold rounded-xl transition-all flex items-center ${postFilter === 'mine' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-800/50'}`}
                            >
                                <Briefcase className={`w-4 h-4 mr-3 ${postFilter === 'mine' ? 'text-white' : 'text-indigo-500'}`} />
                                <span>{postFilter === 'mine' ? 'Showing My Posts' : 'My Items'}</span>
                            </button>
                            <button className="w-full text-left py-3 px-4 text-xs font-bold text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-800/50 rounded-xl transition-all flex items-center">
                                <Bookmark className="w-4 h-4 mr-3 text-amber-500" /> Saved Items
                            </button>
                        </div>
                    </motion.div>

                    {/* Trending Tags Sidebar */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`${glassStyle} rounded-2xl p-5 shadow-sm`}
                    >
                        <div className="flex items-center mb-4 space-x-2">
                            <TrendingUp className="w-5 h-5 text-blue-500" />
                            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tighter">Trending Topics</h4>
                        </div>
                        <div className="space-y-3">
                            {trendingTags.length > 0 ? trendingTags.map(tag => (
                                <div key={tag.tag} className="group cursor-pointer">
                                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">{tag.tag}</p>
                                    <p className="text-[10px] text-gray-400 font-medium">{tag.count} recent posts</p>
                                </div>
                            )) : (
                                <p className="text-xs text-gray-400 italic">Exploring the latest trends...</p>
                            )}
                        </div>
                        <button className="w-full mt-4 py-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest hover:underline text-left">
                            See all trending
                        </button>
                    </motion.div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 max-w-[600px] w-full space-y-6">
                    
                    {/* Create Post Card */}
                    <div className={`${glassStyle} rounded-2xl p-5 shadow-lg shadow-gray-200/20`}>
                        <div className="flex space-x-4 mb-4">
                            <div className="h-12 w-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center font-black text-indigo-600 dark:text-indigo-400 flex-shrink-0 shadow-inner">
                                {user?.name?.charAt(0) || 'U'}
                            </div>
                            <div className="flex-1">
                                {!isInputExpanded ? (
                                    <button 
                                        onClick={() => setIsInputExpanded(true)}
                                        className="w-full text-left bg-gray-50 dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 dark:text-gray-500 rounded-2xl px-5 py-3 font-medium transition-all cursor-text min-h-12 border border-gray-200 dark:border-zinc-800"
                                    >
                                        Share an achievement, snippet, or update...
                                    </button>
                                ) : (
                                    <motion.form 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        onSubmit={handleCreatePost} 
                                        className="space-y-4"
                                    >
                                        <textarea
                                            className="w-full bg-transparent text-gray-900 dark:text-white border-0 focus:ring-0 resize-none min-h-[100px] text-sm md:text-base outline-none font-medium"
                                            placeholder="What's on your mind?"
                                            autoFocus
                                            value={newPostContent}
                                            onChange={(e) => setNewPostContent(e.target.value)}
                                        />
                                        
                                        {/* Attachment Preview Section */}
                                        <AnimatePresence>
                                            {activeAttachment && (
                                                <motion.div 
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="relative bg-gray-50 dark:bg-zinc-800/50 rounded-2xl p-4 border border-gray-100 dark:border-zinc-800 overflow-hidden"
                                                >
                                                    <button 
                                                        type="button"
                                                        onClick={() => { setActiveAttachment(null); setAttachmentFile(null); setAttachmentUrl(''); setAttachmentPreview(null); }}
                                                        className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-full hover:bg-black transition-colors z-10 shadow-lg"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>

                                                    {activeAttachment === 'photo' && (
                                                        <div className="space-y-3">
                                                            {attachmentPreview ? (
                                                                <img src={attachmentPreview} alt="Upload preview" className="w-full max-h-60 object-cover rounded-xl shadow-md" />
                                                            ) : attachmentUrl ? (
                                                                <img src={attachmentUrl} alt="URL preview" className="w-full max-h-60 object-cover rounded-xl shadow-md" />
                                                            ) : (
                                                                <div className="flex flex-col items-center justify-center py-6 border-2 border-dashed border-gray-200 dark:border-zinc-700 rounded-xl">
                                                                    <ImageIcon className="w-10 h-10 text-gray-300 mb-2" />
                                                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Select a photo or paste URL below</p>
                                                                </div>
                                                            )}
                                                            <div className="flex gap-2">
                                                                <button 
                                                                    type="button"
                                                                    onClick={() => fileInputRef.current?.click()}
                                                                    className="flex-1 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                                >
                                                                    <Paperclip className="w-3.5 h-3.5 mr-2" /> Upload File
                                                                </button>
                                                                <input 
                                                                    type="text" 
                                                                    placeholder="Or paste Image URL..." 
                                                                    className="flex-[2] bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-2 text-[10px] focus:ring-1 focus:ring-blue-500 font-bold"
                                                                    value={attachmentUrl}
                                                                    onChange={(e) => { setAttachmentUrl(e.target.value); setAttachmentFile(null); setAttachmentPreview(null); }}
                                                                />
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeAttachment === 'link' && (
                                                        <div className="flex items-center space-x-3">
                                                            <LinkIcon className="w-5 h-5 text-indigo-500" />
                                                            <input 
                                                                type="text" 
                                                                placeholder="Paste Link URL here..." 
                                                                className="flex-1 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-blue-500 font-bold"
                                                                value={attachmentUrl}
                                                                autoFocus
                                                                onChange={(e) => setAttachmentUrl(e.target.value)}
                                                            />
                                                        </div>
                                                    )}

                                                    {activeAttachment === 'achievement' && (
                                                        <div className="flex items-center space-x-3 text-amber-600 dark:text-amber-400">
                                                            <Trophy className="w-6 h-6 animate-bounce" />
                                                            <span className="text-xs font-black uppercase tracking-widest">Marking as Achievement</span>
                                                        </div>
                                                    )}

                                                    {activeAttachment === 'snippet' && (
                                                        <div className="flex items-center space-x-3 text-cyan-600 dark:text-cyan-400">
                                                            <Code className="w-6 h-6 animate-pulse" />
                                                            <span className="text-xs font-black uppercase tracking-widest">Marking as Code Snippet</span>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <input 
                                            type="file" 
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            className="hidden"
                                            accept="image/*"
                                        />

                                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-3 border-t border-gray-100 dark:border-zinc-800">
                                            <div className="flex items-center space-x-1">
                                                <button 
                                                    type="button"
                                                    onClick={() => { setActiveAttachment('photo'); setPostType('standard'); }}
                                                    className={`p-2.5 rounded-xl transition-all ${activeAttachment === 'photo' ? 'bg-blue-100 text-blue-600 shadow-inner' : 'hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-400 font-bold'}`}
                                                    title="Attach Photo"
                                                >
                                                    <ImageIcon className="w-5 h-5" />
                                                </button>
                                                <button 
                                                    type="button"
                                                    onClick={() => { setActiveAttachment('link'); setPostType('standard'); }}
                                                    className={`p-2.5 rounded-xl transition-all ${activeAttachment === 'link' ? 'bg-indigo-100 text-indigo-600 shadow-inner' : 'hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-400 font-bold'}`}
                                                    title="Attach Link"
                                                >
                                                    <LinkIcon className="w-5 h-5" />
                                                </button>
                                                <button 
                                                    type="button"
                                                    onClick={() => { setPostType('achievement'); setActiveAttachment('achievement'); }}
                                                    className={`p-2.5 rounded-xl transition-all ${postType === 'achievement' ? 'bg-amber-100 text-amber-600 shadow-inner' : 'hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-400 font-bold'}`}
                                                    title="Achievement"
                                                >
                                                    <Trophy className="w-5 h-5" />
                                                </button>
                                                <button 
                                                    type="button"
                                                    onClick={() => { setPostType('snippet'); setActiveAttachment('snippet'); }}
                                                    className={`p-2.5 rounded-xl transition-all ${postType === 'snippet' ? 'bg-cyan-100 text-cyan-600 shadow-inner' : 'hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-400 font-bold'}`}
                                                    title="Code Snippet"
                                                >
                                                    <Code className="w-5 h-5" />
                                                </button>
                                            </div>

                                            <div className="flex items-center space-x-3 w-full sm:w-auto">
                                                <button 
                                                    type="button" 
                                                    onClick={resetCreatePost}
                                                    className="flex-1 sm:flex-none px-4 py-2 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors"
                                                >
                                                    Discard
                                                </button>
                                                <button 
                                                    type="submit" 
                                                    disabled={(!newPostContent.trim() && !attachmentFile && !attachmentUrl) || isSubmitting}
                                                    className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest disabled:opacity-50 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
                                                >
                                                    {isSubmitting ? 'Posting...' : 'Create Post'}
                                                </button>
                                            </div>
                                        </div>
                                    </motion.form>
                                )}
                            </div>
                        </div>

                        {!isInputExpanded && (
                            <div className="flex items-center px-4 pt-3 border-t border-gray-50 dark:border-zinc-800 space-x-8">
                                <button onClick={() => { setIsInputExpanded(true); setActiveAttachment('photo'); }} className="flex items-center space-x-2 py-2 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-blue-500 transition-colors">
                                    <ImageIcon className="w-5 h-5 text-blue-500" /> <span className="hidden sm:inline">Photo</span>
                                </button>
                                <button onClick={() => { setIsInputExpanded(true); setPostType('achievement'); setActiveAttachment('achievement'); }} className="flex items-center space-x-2 py-2 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-amber-500 transition-colors">
                                    <Trophy className="w-5 h-5 text-amber-500" /> <span className="hidden sm:inline">Achievement</span>
                                </button>
                                <button onClick={() => { setIsInputExpanded(true); setPostType('snippet'); setActiveAttachment('snippet'); }} className="flex items-center space-x-2 py-2 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-cyan-500 transition-colors">
                                    <Code className="w-5 h-5 text-cyan-500" /> <span className="hidden sm:inline">Snippet</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Feed Tabs Selector */}
                    <div className="flex items-center justify-between px-2 bg-white/40 dark:bg-zinc-900/40 p-1 rounded-2xl border border-gray-100 dark:border-zinc-800 backdrop-blur-sm">
                        <button 
                            onClick={() => setFeedType('global')}
                            className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl transition-all font-black text-xs uppercase tracking-widest ${feedType === 'global' ? 'bg-white dark:bg-zinc-800 text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
                        >
                            <Hash className="w-4 h-4" />
                            <span>Global Feed</span>
                        </button>
                        <button 
                            onClick={() => setFeedType('network')}
                            className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl transition-all font-black text-xs uppercase tracking-widest ${feedType === 'network' ? 'bg-white dark:bg-zinc-800 text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
                        >
                            <UserPlus className="w-4 h-4" />
                            <span>Network</span>
                        </button>
                    </div>

                    {/* Feed Sorting Indicator */}
                    <div className="flex items-center px-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-800 to-transparent"></div>
                        <span className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap flex items-center">
                            Sort by: <strong className="ml-1 text-gray-900 dark:text-white cursor-pointer hover:text-blue-600">Top Content ▾</strong>
                        </span>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-800 to-transparent"></div>
                    </div>

                    {/* Feed List */}
                    <div className="space-y-6">
                        {isLoading ? (
                            Array(3).fill(0).map((_, i) => <SkeletonPost key={i} />)
                        ) : (
                            <AnimatePresence mode="popLayout">
                                {posts
                                    .filter(p => postFilter === 'all' || p.user_id === user?.id)
                                    .map((post, index) => {
                                    const isOnline = !!onlineStatus[post.user_id];
                                    return (
                                        <motion.div 
                                            key={post.id}
                                            layout
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`${glassStyle} rounded-2xl shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-none transition-all duration-300 border border-gray-100 dark:border-zinc-800`}
                                        >
                                            <div className="px-5 pt-5 mb-3 flex justify-between items-start">
                                                <div className="flex space-x-3 cursor-pointer" onClick={() => onUserClick && onUserClick(post.user_id)}>
                                                    <div className="relative flex-shrink-0">
                                                        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-200 dark:bg-zinc-800 flex items-center justify-center font-black text-gray-500 shadow-inner group-hover:scale-105 transition-transform">
                                                            {post.author_photo ? (
                                                                <img src={post.author_photo} alt={post.author_name} className="w-full h-full object-cover" />
                                                            ) : (
                                                                post.author_name.charAt(0)
                                                            )}
                                                        </div>
                                                        <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                                                            <span className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white dark:border-zinc-900 ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="flex items-center space-x-1.5 flex-wrap">
                                                            <span className="font-bold text-sm text-gray-900 dark:text-white leading-tight hover:text-blue-600 transition-colors">{post.author_name}</span>
                                                            <span className="text-blue-500 hidden sm:inline"><Zap className="w-3 h-3 fill-blue-500" /></span>
                                                            {post.original_post_id && (
                                                                <span className="text-[10px] bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full flex items-center font-black uppercase tracking-tighter">
                                                                    <Repeat2 className="w-2.5 h-2.5 mr-1" /> Repost
                                                                </span>
                                                            )}
                                                        </div>
                                                        <span className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 font-medium">{post.author_role.charAt(0).toUpperCase() + post.author_role.slice(1)}</span>
                                                        <span className="text-[10px] text-gray-400 flex items-center font-bold uppercase tracking-tight">
                                                            {formatDistanceToNow(new Date(post.created_at))} ago • <span className="ml-1 text-[8px] opacity-70">🌐 GLOBAL</span>
                                                        </span>
                                                    </div>
                                            </div>
                                            <div className="relative flex-shrink-0" ref={postMenuOpen === post.id ? menuRef : null}>
                                                {pendingDeleteId === post.id ? (
                                                    <div className="flex items-center space-x-1.5 bg-red-50 dark:bg-red-900/20 p-1 rounded-xl border border-red-100 dark:border-red-900/30">
                                                        <span className="text-[8px] font-black text-red-600 uppercase tracking-widest px-2 leading-none">Delete?</span>
                                                        <button 
                                                            onClick={() => handleDeletePost(post.id)}
                                                            className="p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
                                                            title="Confirm"
                                                        >
                                                            <Check className="w-3 h-3" />
                                                        </button>
                                                        <button 
                                                            onClick={() => setPendingDeleteId(null)}
                                                            className="p-1.5 bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors"
                                                            title="Cancel"
                                                        >
                                                            <X className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => setPostMenuOpen(postMenuOpen === post.id ? null : post.id)}
                                                        className="text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 p-2 rounded-xl transition-colors active:scale-95"
                                                    >
                                                        <MoreHorizontal className="w-5 h-5" />
                                                    </button>
                                                )}
                                                {postMenuOpen === post.id && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        className="absolute right-0 top-10 z-50 bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-zinc-700 py-1.5 w-44 overflow-hidden"
                                                    >
                                                        {post.user_id === user?.id ? (
                                                            <>
                                                                <button
                                                                    onClick={() => { setEditingPost(post.id); setEditContent(post.content); setPostMenuOpen(null); }}
                                                                    className="w-full flex items-center space-x-3 px-4 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-colors"
                                                                >
                                                                    <Pencil className="w-4 h-4" />
                                                                    <span>Edit Post</span>
                                                                </button>
                                                                <button
                                                                    onClick={() => { setPendingDeleteId(post.id); setPostMenuOpen(null); }}
                                                                    className="w-full flex items-center space-x-3 px-4 py-2.5 text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                                                >
                                                                    <Trash2 className="w-4 h-4" />
                                                                    <span>Delete Post</span>
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <button className="w-full flex items-center space-x-3 px-4 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700">
                                                                <MessageSquare className="w-4 h-4" />
                                                                <span>Report Content</span>
                                                            </button>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>

                                        {post.type !== 'standard' && (
                                            <div className="px-5 mb-3">
                                                <span className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm
                                                    ${post.type === 'achievement' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : ''}
                                                    ${post.type === 'writeup' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : ''}
                                                    ${post.type === 'snippet' ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400' : ''}
                                                `}>
                                                    {post.type === 'achievement' && <Trophy className="w-3.5 h-3.5" />}
                                                    {post.type === 'writeup' && <MessageSquare className="w-3.5 h-3.5" />}
                                                    {post.type === 'snippet' && <Code className="w-3.5 h-3.5" />}
                                                    <span>{post.type}</span>
                                                </span>
                                            </div>
                                        )}

                                        <div className="px-5 mb-3">
                                            {editingPost === post.id ? (
                                                <div className="space-y-3">
                                                    <textarea
                                                        className="w-full text-sm font-medium text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-zinc-800 border-2 border-blue-400 rounded-2xl p-4 resize-none focus:outline-none"
                                                        rows={4}
                                                        value={editContent}
                                                        onChange={e => setEditContent(e.target.value)}
                                                        autoFocus
                                                    />
                                                    <div className="flex space-x-2">
                                                        <button
                                                            onClick={() => handleSaveEdit(post.id)}
                                                            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition shadow-lg shadow-blue-600/20"
                                                        >
                                                            <Check className="w-3.5 h-3.5" /><span>Save Changes</span>
                                                        </button>
                                                        <button
                                                            onClick={() => setEditingPost(null)}
                                                            className="flex items-center space-x-2 bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition"
                                                        >
                                                            <X className="w-3.5 h-3.5" /><span>Cancel</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="space-y-4">
                                                    <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed tracking-tight">{post.content}</p>
                                                    
                                                    {post.url && !isImageUrl(post.url) && !post.image_url && (
                                                        <a 
                                                            href={post.url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl group transition-all"
                                                        >
                                                            <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg group-hover:scale-110 transition-transform shadow-sm">
                                                                <LinkIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-none mb-1">External Link</p>
                                                                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 truncate max-w-[400px]">{post.url}</p>
                                                            </div>
                                                            <ArrowRight className="w-4 h-4 text-indigo-400 ml-auto group-hover:translate-x-1 transition-transform" />
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {(post.image_url || isImageUrl(post.url)) && (
                                            <div className="mb-4 w-full relative overflow-hidden bg-gray-100 dark:bg-zinc-800">
                                                <img 
                                                    src={resolveMediaUrl(post.image_url || post.url)} 
                                                    alt="Post visual content" 
                                                    className="w-full object-cover max-h-[600px] transition-transform duration-700 hover:scale-105" 
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                        )}

                                        <div className="px-5 py-3 border-t border-gray-50 dark:border-zinc-800/50 flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase tracking-tight">
                                            <div className="flex items-center space-x-1">
                                                {post.like_count > 0 ? (
                                                    <div className="flex items-center group cursor-pointer">
                                                        <div className="bg-blue-500 rounded-full p-1 border-2 border-white dark:border-zinc-900 shadow-sm transition-transform group-hover:scale-110">
                                                            <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
                                                        </div>
                                                        <span className="ml-2 group-hover:text-blue-600 transition-colors">{post.like_count}</span>
                                                    </div>
                                                ) : <span className="opacity-40">No interactions yet</span>}
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                {post.comment_count > 0 && (
                                                    <button onClick={() => toggleComments(post.id)} className="hover:text-blue-600 transition-colors uppercase tracking-widest">
                                                        {post.comment_count} {post.comment_count === 1 ? 'Comment' : 'Comments'}
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <div className="px-2 pb-2 flex justify-between gap-1">
                                            <button 
                                                onClick={() => handleLike(post.id)}
                                                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all duration-200 font-black text-xs uppercase tracking-widest ${post.has_liked ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}
                                            >
                                                <ThumbsUp className={`w-4 h-4 ${post.has_liked ? 'fill-blue-600 animate-bounce' : ''}`} />
                                                <span>Like</span>
                                            </button>
                                            <button 
                                                onClick={() => toggleComments(post.id)}
                                                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all font-black text-xs uppercase tracking-widest ${showComments.has(post.id) ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                <span>Comment</span>
                                            </button>
                                            <button 
                                                onClick={() => handleRepost(post.id)}
                                                disabled={isReposting === post.id}
                                                className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all font-black text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 disabled:opacity-30"
                                            >
                                                <Repeat2 className={`w-4 h-4 ${isReposting === post.id ? 'animate-spin' : ''}`} />
                                                <span>Repost</span>
                                            </button>
                                            <button 
                                                onClick={() => handleSend(post)}
                                                className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all font-black text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800"
                                            >
                                                <Share2 className="w-4 h-4" />
                                                <span>Share</span>
                                            </button>
                                        </div>

                                        <AnimatePresence>
                                            {showComments.has(post.id) && (
                                                <motion.div 
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden border-t border-gray-50 dark:border-zinc-800"
                                                >
                                                    <div className="px-5 py-4 space-y-5">
                                                        <div className="flex space-x-3">
                                                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-xs font-black text-white shadow-md flex-shrink-0">
                                                                {user?.name?.charAt(0)}
                                                            </div>
                                                            <div className="flex-1 space-y-2">
                                                                <textarea
                                                                    placeholder="Write a thoughtful comment..."
                                                                    className="w-full bg-gray-50/50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-800 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium placeholder:text-gray-400/80"
                                                                    rows={1}
                                                                    value={commentInputs[post.id] || ''}
                                                                    onChange={(e) => {
                                                                        setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }));
                                                                        e.target.style.height = 'auto';
                                                                        e.target.style.height = e.target.scrollHeight + 'px';
                                                                    }}
                                                                />
                                                                {commentInputs[post.id]?.trim() && (
                                                                    <button
                                                                        onClick={() => handleComment(post.id)}
                                                                        className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition shadow-lg shadow-blue-600/20"
                                                                    >
                                                                        Post Remark
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className="space-y-4">
                                                            {(postComments[post.id] || []).map(comment => (
                                                                <div key={comment.id} className="flex space-x-3">
                                                                    <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-zinc-800 overflow-hidden flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0 border border-gray-200 dark:border-zinc-700">
                                                                        {comment.author_photo ? (
                                                                            <img src={`http://localhost:3000${comment.author_photo}`} alt={comment.author_name} className="w-full h-full object-cover" />
                                                                        ) : (
                                                                            comment.author_name.charAt(0)
                                                                        )}
                                                                    </div>
                                                                    <div className="flex-1 bg-white/50 dark:bg-zinc-800/30 rounded-2xl p-4 shadow-sm border border-gray-50 dark:border-zinc-800">
                                                                        <div className="flex justify-between items-center mb-1">
                                                                            <span className="font-bold text-xs text-gray-900 dark:text-white">{comment.author_name}</span>
                                                                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                                                                                {formatDistanceToNow(new Date(comment.created_at))} ago
                                                                            </span>
                                                                        </div>
                                                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">{comment.content}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    )}

                        {!isLoading && posts.length === 0 && (
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-16 text-center border border-dashed border-gray-200 dark:border-zinc-800">
                                <div className="w-20 h-20 bg-gray-50 dark:bg-zinc-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <MessageCircle className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">The feed is remarkably quiet...</h3>
                                <p className="text-sm font-medium text-gray-500 max-w-xs mx-auto leading-relaxed">Be the digital pioneer your network needs. Share an insight, a snippet, or a breakthrough.</p>
                                <button 
                                    onClick={() => setIsInputExpanded(true)}
                                    className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest px-8 py-3 rounded-2xl shadow-xl shadow-blue-600/30 transition-all active:scale-95"
                                >
                                    Start the conversation
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar - Suggestions */}
                <div className="hidden xl:block w-72 flex-shrink-0">
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`${glassStyle} rounded-2xl p-6 shadow-sm sticky top-6`}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center space-x-2">
                                <Zap className="w-5 h-5 text-amber-500" />
                                <h3 className="font-black text-sm text-gray-900 dark:text-white uppercase tracking-tighter">Expand Network</h3>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            {suggestions.length > 0 ? suggestions.slice(0, 3).map((suggestion) => (
                                <div key={suggestion.id} className="group relative">
                                    <div className="flex space-x-3 mb-3">
                                        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-zinc-800 text-gray-400 font-black flex justify-center items-center group-hover:scale-105 transition-transform">
                                            {suggestion.photo_url ? (
                                                <img src={`http://localhost:3000${suggestion.photo_url}`} alt={suggestion.name} className="w-full h-full object-cover" />
                                            ) : (
                                                suggestion.name.charAt(0)
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-tight truncate">{suggestion.name}</h4>
                                            <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-0.5 truncate">{suggestion.role}</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleConnect(suggestion.id)}
                                        className="w-full flex items-center justify-center space-x-2 border-2 border-gray-100 dark:border-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm"
                                    >
                                        <UserPlus className="w-3.5 h-3.5" />
                                        <span>Connect</span>
                                    </button>
                                </div>
                            )) : (
                                <div className="text-center py-4">
                                    <p className="text-xs text-gray-400 font-medium font-italic">No new connections found in your sector.</p>
                                </div>
                            )}
                        </div>
                        {suggestions.length > 0 && (
                            <button className="w-full mt-8 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-xl transition-all flex items-center justify-center border border-gray-100 dark:border-zinc-800">
                                Discover More <ArrowRight className="w-3.5 h-3.5 ml-2" />
                            </button>
                        )}
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default CommunityFeed;
