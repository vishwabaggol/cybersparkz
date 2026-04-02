import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Check, ArrowRight, Leaf, Sprout, TreePine } from 'lucide-react';

const MembershipTiers: React.FC = () => {
    const { user, token } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    // Provide default fallback to 'free' if missing
    const currentTier = user?.membership_tier || 'free'; 

    const tiers = [
        {
            id: 'free',
            name: 'Seed',
            subtitle: 'The Groundwork',
            desc: 'Establish your presence and explore the ecosystem.',
            price: 0,
            duration: 'Lifetime',
            features: [
                'Community Feed Access',
                'Basic Public Profile',
                '2 Job Applications / month'
            ],
            icon: Leaf,
            theme: 'stone',
            popular: false
        },
        {
            id: 'standard',
            name: 'Sapling',
            subtitle: 'The Consistent',
            desc: 'Nurture your career with core tools and unlimited growth.',
            price: 149,
            duration: '1 Month',
            features: [
                'AI Resume Builder',
                'Unlimited Job Applications',
                'Direct Messaging'
            ],
            icon: Sprout,
            theme: 'emerald',
            popular: true
        },
        {
            id: 'platinum',
            name: 'Canopy',
            subtitle: 'The Thriving',
            desc: 'Reach new heights with personalized mentorship and premium access.',
            price: 999,
            duration: '1 Year',
            features: [
                'Everything in Sapling',
                '1-on-1 Mentorship',
                'Direct Recruiter Referrals'
            ],
            icon: TreePine,
            theme: 'teal',
            popular: false
        }
    ];

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleUpgrade = async (tierId: string) => {
        setIsLoading(true);
        setMessage(null);

        try {
            const res = await fetch('http://localhost:3000/api/users/upgrade', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ tier: tierId })
            });

            if (!res.ok) {
                throw new Error('Failed to upgrade');
            }

            setMessage({ text: `Growth achieved! Welcome to the ${tierId} plan.`, type: 'success' });
            setTimeout(() => {
                window.location.reload(); 
            }, 1000);
            
        } catch (error) {
            setMessage({ text: 'Error processing upgrade', type: 'error' });
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 bg-[#F9F9F6] dark:bg-stone-900 min-h-screen">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100 mb-4 tracking-wide">Cultivate Your Growth</h2>
                
                {message && (
                    <div className={`mt-4 inline-block px-4 py-2 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {message.text}
                    </div>
                )}
            </div>

            <div className="grid md:grid-cols-3 gap-8 justify-center">
                {tiers.map((tier) => {
                    const Icon = tier.icon;
                    const isCurrentPlan = currentTier === tier.id;
                    
                    return (
                        <div 
                            key={tier.name} 
                            className={`relative bg-white dark:bg-stone-800 rounded-2xl p-8 border ${isCurrentPlan ? 'border-emerald-500 shadow-lg shadow-emerald-500/10 scale-105 z-20' : tier.popular ? 'border-emerald-600/50 shadow-md shadow-emerald-900/5 scale-105 z-10' : 'border-stone-200 dark:border-stone-700 shadow-sm'} flex flex-col transition-all hover:-translate-y-1`}
                        >
                            {isCurrentPlan && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-emerald-500 text-white text-[10px] font-medium tracking-widest py-1 px-4 rounded-full shadow-sm">YOUR PLAN</span>
                                </div>
                            )}
                            {!isCurrentPlan && tier.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-emerald-600/90 text-white text-[10px] font-medium tracking-widest py-1 px-4 rounded-full shadow-sm">MOST POPULAR</span>
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-6 border-b border-stone-100 dark:border-stone-700 pb-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Icon size={18} className={`text-${tier.theme}-600 dark:text-${tier.theme}-400`} />
                                        <p className={`text-xs font-semibold uppercase tracking-wider text-${tier.theme}-600 dark:text-${tier.theme}-400`}>{tier.name}</p>
                                    </div>
                                    <h3 className="text-xl font-medium text-stone-900 dark:text-stone-100 leading-tight">{tier.subtitle}</h3>
                                </div>
                            </div>
                            
                            <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 min-h-[48px] font-light leading-relaxed">{tier.desc}</p>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-light text-stone-900 dark:text-stone-100 tracking-tight">{formatPrice(tier.price)}</span>
                                    <span className="text-stone-500 dark:text-stone-400 text-sm">/ {tier.duration}</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <div className={`mt-1 mr-3 rounded-full p-0.5 ${tier.id === 'free' ? 'bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'}`}>
                                            <Check size={12} strokeWidth={2} />
                                        </div>
                                        <p className="text-stone-700 dark:text-stone-300 text-sm font-light">{feature}</p>
                                    </div>
                                ))}
                            </div>

                            {isCurrentPlan ? (
                                <button disabled className="w-full py-3 px-4 rounded-xl font-medium bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-600 cursor-not-allowed transition-colors">
                                    Current Plan
                                </button>
                            ) : (
                                tier.id === 'free' ? (
                                    <button disabled className="w-full py-3 px-4 rounded-xl font-medium bg-stone-50 dark:bg-stone-800 text-stone-400 border border-stone-200 dark:border-stone-700 cursor-not-allowed">
                                        Downgrade Disabled
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => handleUpgrade(tier.id)}
                                        disabled={isLoading}
                                        className={`w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-all text-sm
                                        ${tier.popular 
                                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm' 
                                            : tier.id === 'platinum' 
                                                ? 'bg-teal-700 hover:bg-teal-800 text-white shadow-sm' 
                                                : 'bg-white border hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-800 text-stone-800 dark:text-stone-200'}`}
                                    >
                                        {isLoading ? 'Processing...' : 'Choose Growth'}
                                        {!isLoading && <ArrowRight size={16} className="ml-2" />}
                                    </button>
                                )
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MembershipTiers;

