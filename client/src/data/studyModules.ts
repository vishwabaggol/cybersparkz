export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
}

export interface StoryboardItem {
    image: string;
    text: string;
}

export interface StudyModuleType {
    id: number;
    title: string;
    level: 'Beginner' | 'Intermediate' | 'Graduate';
    duration: string;
    videoUrl?: string;
    storyboard?: StoryboardItem[];
    caseStudy: {
        title: string;
        scenario: string;
    };
    quiz: Question[];
}

const studyModulesEn: StudyModuleType[] = [
    {
        id: 1,
        title: 'The Digital Footprint',
        level: 'Beginner',
        duration: '1 hour',
        videoUrl: 'https://www.youtube.com/embed/uRLVpMca_zM',
        storyboard: [
            { image: 'module1_scene1.jpg', text: "Finally! My first day at college. Let the world know!" },
            { image: 'module1_scene2.jpg', text: "Wait, Arjun! Look at that ID card. Your full name, roll number, and even your address are visible." },
            { image: 'module1_scene3.jpg', text: "Every photo, link, or comment you post creates a 'Digital Footprint'. It never truly disappears. Hackers use these to build a profile." },
            { image: 'module1_scene4.jpg', text: "Before you post, Stop and Think. Is this information private? If yes, keep it offline." }
        ],
        caseStudy: {
            title: "Navigating the Digital World",
            scenario: "Arjun is excited about his first day at college and posts a photo of his ID card. Cyber-Sia explains that even small details like IDs contribute to a permanent Digital Footprint that hackers can exploit."
        },
        quiz: [
            { id: 1, text: "What is a 'Digital Footprint'?", options: ["A file size", "A permanent record of your online activity", "A type of sneaker", "Software for tracing computers"], correctAnswer: 1 },
            { id: 2, text: "Why is sharing an ID card photo dangerous?", options: ["Bad lighting", "It reveals private data like roll numbers and addresses", "It's illegal to take photos of IDs", "The file size is too big"], correctAnswer: 1 },
            { id: 3, text: "Can a digital footprint be completely erased?", options: ["Yes, after 10 years", "No, it is nearly impossible to remove everything", "Only by the government", "Yes, by deleting your account"], correctAnswer: 1 },
            { id: 4, text: "Who can potentially see your digital footprint?", options: ["Only your friends", "Only your family", "Employers, hackers, and strangers", "Nobody but you"], correctAnswer: 2 },
            { id: 5, text: "What is 'social media scrubbing'?", options: ["Deleting your entire profile", "Cleaning up old or inappropriate posts", "Searching for others' secrets", "Posting more frequently"], correctAnswer: 1 },
            { id: 6, text: "How can your digital footprint affect your career?", options: ["It has no effect", "Employers may check your online presence", "It only helps if you are an artist", "It only affects actors"], correctAnswer: 1 },
            { id: 7, text: "Is liking a post part of your digital footprint?", options: ["No, only what you write", "Yes, every interaction counts", "Only if you share it", "Only if you comment"], correctAnswer: 1 },
            { id: 8, text: "What is 'metadata' in a shared photo?", options: ["The filter used", "The person in the photo", "Embedded data like location and time", "The caption"], correctAnswer: 2 },
            { id: 9, text: "Why check privacy settings regularly?", options: ["To change your password", "To see who blocked you", "Platforms often update their data policies", "To get more followers"], correctAnswer: 2 },
            { id: 10, text: "What are 'ghost' accounts?", options: ["Scary accounts", "Inactive accounts that still contain your data", "Verified accounts", "Secret accounts"], correctAnswer: 1 },
            { id: 11, text: "How do cookies affect your digital footprint?", options: ["They improve computer speed", "They track your browsing history across sites", "They are only for login", "They protect against viruses"], correctAnswer: 1 },
            { id: 12, text: "What is an 'Active' digital footprint?", options: ["Data collected without your knowledge", "Data you intentionally share like posts", "Your daily step count", "Your internet speed"], correctAnswer: 1 },
            { id: 13, text: "What is a 'Passive' digital footprint?", options: ["Data you share on purpose", "Data collected without your direct action (like IP addresses)", "Deleting old emails", "Not using social media"], correctAnswer: 1 },
            { id: 14, text: "Why is 'over-sharing' a security risk?", options: ["It takes too much time", "It provides info for social engineering attacks", "It fills up storage", "It's annoying to friends"], correctAnswer: 1 },
            { id: 15, text: "What is the best first step to manage your footprint?", options: ["Deleting all apps", "Searching for yourself on a search engine", "Changing your phone", "Using a fake name"], correctAnswer: 1 }
        ]
    },
    {
        id: 2,
        title: 'Social Engineering De-coded',
        level: 'Beginner',
        duration: '1 hour',
        videoUrl: 'https://www.youtube.com/embed/GfQMAruZzB8',
        storyboard: [
            { image: 'module2_scene1.jpg', text: "Oh no! The bank says someone is trying to steal my money. I need to act fast!" },
            { image: 'module2_scene2.jpg', text: "He's asking for a 'verification code'? Arjun, that's an OTP! Stop!" },
            { image: 'module2_scene3.jpg', text: "Scammers use 'Fear' and 'Urgency' to make you panic. Real banks will never ask for your OTP over a call." },
            { image: 'module2_scene4.jpg', text: "If someone creates a sense of panic, it's likely a scam. Hang up and call your bank's official number." }
        ],
        caseStudy: {
            title: "The Urgent Phone Call",
            scenario: "Arjun receives a call from 'Bank Support' claiming fraud. They ask for an OTP to 'stop' the transaction. Cyber-Sia intervenes, explaining how scammers use urgency to steal credentials."
        },
        quiz: [
            { id: 1, text: "What do scammers use to make people panic?", options: ["Loud music", "Fear and Urgency", "Technical jargon", "Free gifts"], correctAnswer: 1 },
            { id: 2, text: "Should you share an OTP over a phone call if they claim to be from a bank?", options: ["Yes, to save money", "Only if they sound polite", "Never", "Only if it's for 'verification'"], correctAnswer: 2 },
            { id: 3, text: "What is 'social engineering'?", options: ["Building computers", "Psychologically manipulating people into revealing info", "Coding social media apps", "Improving social skills"], correctAnswer: 1 },
            { id: 4, text: "What is 'phishing'?", options: ["A sport", "Fraudulent emails/texts to steal data", "Updating software", "Fixing a slow internet connection"], correctAnswer: 1 },
            { id: 5, text: "What is 'vishing'?", options: ["Video editing", "Voice phishing or phone scams", "Virtual fishing", "Vision testing"], correctAnswer: 1 },
            { id: 6, text: "What is 'smishing'?", options: ["Small phishing", "SMS phishing (text messages)", "Smart phishing", "Social media phishing"], correctAnswer: 1 },
            { id: 7, text: "If you get a suspicious call from 'the bank', what should you do?", options: ["Give them what they want quickly", "Hang up and call the official number from the back of your card", "Wait for them to call back", "Transfer money to a 'safe' account they provide"], correctAnswer: 1 },
            { id: 8, text: "Why do scammers use 'urgency'?", options: ["To save time", "To stop you from thinking clearly and logically", "Because they are in a hurry", "To show they are professional"], correctAnswer: 1 },
            { id: 9, text: "Which of these is a common red flag in a phishing email?", options: ["The company's logo", "A generic greeting like 'Dear Customer' and a sense of panic", "The date", "A link to the home page"], correctAnswer: 1 },
            { id: 10, text: "Is it safe to click a link in a text message about a 'blocked account'?", options: ["Yes, to fix it fast", "No, always use the official app or website instead", "Only if it looks official", "Yes, if they know your name"], correctAnswer: 1 },
            { id: 11, text: "What is 'pretexting'?", options: ["Testing a printer", "Creating a false scenario or identity to gain trust", "Sending a text message", "Reading a book"], correctAnswer: 1 },
            { id: 12, text: "What is 'baiting' in social engineering?", options: ["Fishing for compliments", "Offering something free (like a USB or download) to install malware", "Playing a game", "Setting a timer"], correctAnswer: 1 },
            { id: 13, text: "What is 'quid pro quo' in social engineering?", options: ["A Latin phrase for 'it is what it is'", "Offering a service or benefit in exchange for information", "A type of firewall", "A secure password"], correctAnswer: 1 },
            { id: 14, text: "How can you truly verify a caller's identity?", options: ["Asking for their name", "Checking their Caller ID (which can be faked)", "Calling the company's verified number yourself", "Asking them to prove it"], correctAnswer: 2 },
            { id: 15, text: "What is the first thing to do if you realize you shared an OTP accidentally?", options: ["Change your phone number", "Contact your bank immediately to block the account", "Delete the message", "Wait for the next statement"], correctAnswer: 1 }
        ]
    },
    {
        id: 3,
        title: 'The Mobile Fortress',
        level: 'Beginner',
        duration: '1.5 hours',
        videoUrl: 'https://www.youtube.com/embed/0H8_97Lq7_k',
        storyboard: [
            { image: 'module3_scene1.jpg', text: "This game costs ₹500 on the Play Store, but it's free here! I'm downloading it now." },
            { image: 'module3_scene2.jpg', text: "Wait! Why does a simple game need access to your SMS and Microphone? This is a 'Trojan'." },
            { image: 'module3_scene3.jpg', text: "Always download apps from official stores. They scan for viruses. Third-party APKs are risky." },
            { image: 'module3_scene4.jpg', text: "Keep your mobile a fortress. Check permissions and stick to trusted sources." }
        ],
        caseStudy: {
            title: "The 'Free' APK Trap",
            scenario: "Arjun tries to save money by downloading a pro game from a random site. Cyber-Sia shows how the app asks for excessive permissions, acting as a Trojan to spy on the device."
        },
        quiz: [
            { id: 1, text: "What is a 'Trojan' in mobile apps?", options: ["A fast download speed", "A malicious app disguised as something legitimate", "A game about history", "A type of battery saver"], correctAnswer: 1 },
            { id: 2, text: "Where is the safest place to download apps?", options: ["Random websites", "WhatsApp groups", "Official stores like Play Store/App Store", "File sharing sites"], correctAnswer: 2 },
            { id: 3, text: "Why should you check app permissions?", options: ["To see the file size", "Because apps might request access to data they don't need", "To change the app's icon", "To speed up the app"], correctAnswer: 1 },
            { id: 4, text: "What is 'sideloading'?", options: ["Loading a phone from the side", "Installing apps from sources other than official stores", "Using two apps at once", "Transferring photos"], correctAnswer: 1 },
            { id: 5, text: "What is 'rooting' or 'jailbreaking'?", options: ["Fixing a broken screen", "Removing manufacturer restrictions, which lowers security", "Updating the OS", "Charging the battery faster"], correctAnswer: 1 },
            { id: 6, text: "How can a malicious app use your SMS permissions?", options: ["To send free texts", "To read your OTP codes or send spam messages", "To improve signal strength", "To back up your contacts"], correctAnswer: 1 },
            { id: 7, text: "What is 'ransomware' on a mobile device?", options: ["A paid app", "Malware that locks your screen or data until you pay", "A type of battery", "A fast charger"], correctAnswer: 1 },
            { id: 8, text: "Why is a screen lock important?", options: ["To make the phone look better", "To prevent unauthorized access if the phone is lost or stolen", "To save battery", "To stop the screen from getting dirty"], correctAnswer: 1 },
            { id: 9, text: "What is 'remote wipe'?", options: ["Cleaning the phone with a cloth", "A feature to delete all data from a lost or stolen phone", "A type of car wiper", "Deleting individual photos"], correctAnswer: 1 },
            { id: 10, text: "Is it safe to do banking on public Wi-Fi?", options: ["Yes, it's convenient", "No, unless you use a VPN or mobile data", "Only in hotels", "Only for small amounts"], correctAnswer: 1 },
            { id: 11, text: "What is two-factor authentication (2FA)?", options: ["Logging in twice", "Adding a second layer of security like a code or fingerprint", "Using two different phones", "Changing your password twice"], correctAnswer: 1 },
            { id: 12, text: "Why are software updates critical for security?", options: ["They add more emojis", "They patch security vulnerabilities that hackers exploit", "They make the phone heavier", "They delete old photos"], correctAnswer: 1 },
            { id: 13, text: "What is 'encryption' on a mobile phone?", options: ["Adding more memory", "Making data unreadable to anyone without the key", "Changing the language", "Deleting cookies"], correctAnswer: 1 },
            { id: 14, text: "Which of these is a potential sign of mobile malware?", options: ["New wallpaper", "Unusually fast battery drain and overheating", "Clearer voice calls", "Stronger Wi-Fi signal"], correctAnswer: 1 },
            { id: 15, text: "What is a 'cloned app'?", options: ["An app for twins", "A duplicate app often used to steal login data", "A type of backup", "A mirror app"], correctAnswer: 1 }
        ]
    },
    {
        id: 4,
        title: 'Internet Laws in India',
        level: 'Beginner',
        duration: '1.5 hours',
        videoUrl: 'https://www.youtube.com/embed/S7l_kI2sV0M',
        storyboard: [
            { image: 'module4_scene1.jpg', text: "Is this even a crime? Can the police help with just an online profile?" },
            { image: 'module4_scene2.jpg', text: "Yes! Under the IT Act 2000, Section 66C and 66E cover Identity Theft and Privacy Violation." },
            { image: 'module4_scene3.jpg', text: "Don't be afraid to report. Use the national helpline 1930 or visit cybercrime.gov.in." },
            { image: 'module4_scene4.jpg', text: "The law protects you in the digital world. Stay informed and stay safe." }
        ],
        caseStudy: {
            title: "Neha's Fake Profile",
            scenario: "Neha's identity is stolen via a fake profile. Cyber-Sia explains the IT Act 2000 and how to report such crimes using the 1930 helpline."
        },
        quiz: [
            { id: 1, text: "Which law in India handles cybercrimes?", options: ["Motor Vehicles Act", "Information Technology Act, 2000", "Contract Act", "Digital Media Act"], correctAnswer: 1 },
            { id: 2, text: "What is the national cybercrime helpline number?", options: ["100", "1930", "911", "1098"], correctAnswer: 1 },
            { id: 3, text: "What does Section 66C of the IT Act cover?", options: ["Hacking a website", "Identity Theft", "Sending spam emails", "Buying old computers"], correctAnswer: 1 },
            { id: 4, text: "What does Section 66E of the IT Act cover?", options: ["Tax evasion", "Privacy violations of a person's physical body/identity", "Copyright", "Speeding on the internet"], correctAnswer: 1 },
            { id: 5, text: "Under Section 66D, 'cheating by personation' means:", options: ["Cheating in an exam", "Using computer resources to pretend to be someone else to cheat", "Changing your name legally", "Playing a prank"], correctAnswer: 1 },
            { id: 6, text: "What is the official website for reporting cybercrimes in India?", options: ["india.gov.in", "cybercrime.gov.in", "police.in", "safety.gov.in"], correctAnswer: 1 },
            { id: 7, text: "Is sharing someone's private photos without consent a crime in India?", options: ["Only if you make money from it", "Yes, under IT Act Section 66E", "No, it's just a civil case", "Only if the person is famous"], correctAnswer: 1 },
            { id: 8, text: "If your social media account is hacked, can you file a police complaint?", options: ["No, it's a private company issue", "Yes, it is a crime under the IT Act", "Only if you lost money", "Only if you are under 18"], correctAnswer: 1 },
            { id: 9, text: "What should you do immediately after a financial cyber fraud?", options: ["Delete your banking app", "Call 1930 within the 'Golden Hour'", "Go to the bank next week", "Post about it on social media"], correctAnswer: 1 },
            { id: 10, text: "Is 'cyberstalking' a punishable offense in India?", options: ["No, it's just following", "Yes, under Section 354D of IPC and IT Act", "Only if you meet them in person", "Only if they block you"], correctAnswer: 1 },
            { id: 11, text: "What is the 'Golden Hour' in cybercrime reporting?", options: ["The hour before you sleep", "The first 1-2 hours after the fraud to freeze funds", "The time it takes to reset a password", "When the police are available"], correctAnswer: 1 },
            { id: 12, text: "Can you report a cybercrime anonymously on the national portal?", options: ["No, you must reveal your identity", "Yes, for specific crimes against women or children", "Only if you are a witness", "Only if you use a VPN"], correctAnswer: 1 },
            { id: 13, text: "What is 'cyber terrorism' under Section 66F?", options: ["Playing violent video games", "Acts intended to threaten the unity or security of India", "Deleting your own files", "Spreading fake news about celebrities"], correctAnswer: 1 },
            { id: 14, text: "Is creating a fake profile of another person a crime?", options: ["No, it's a joke", "Yes, Section 66C - Identity Theft", "Only if they find out", "Only if you use their real photo"], correctAnswer: 1 },
            { id: 15, text: "Which agency is primarily responsible for cybersecurity in India?", options: ["CBI", "CERT-In", "RBI", "ISRO"], correctAnswer: 1 }
        ]
    },
    {
        id: 5,
        title: 'Network Forensics',
        level: 'Intermediate',
        duration: '2 hours',
        videoUrl: 'https://www.youtube.com/embed/Xv6H1f8_G_k',
        storyboard: [
            { image: 'module5_scene1.jpg', text: "Cyber-Sia, the server is sending high volume encrypted traffic to an unknown IP. Is this a breach?" },
            { image: 'module5_scene2.jpg', text: "We analyze 'PCAPs' or packet captures to trace the source. Every packet tells a story." },
            { image: 'module5_scene3.jpg', text: "This is a 'C2 Beacon'. The malware is 'calling home'. We can isolate the machine." },
            { image: 'module5_scene4.jpg', text: "Network forensics is about visibility. Monitoring traffic is your first line of defense." }
        ],
        caseStudy: {
            title: "The Data Exfiltration Leak",
            scenario: "In a SOC environment, Arjun detects an anomaly. He learns how Network Forensics uses packet analysis to identify Command and Control (C2) beacons and stop data theft."
        },
        quiz: [
            { id: 1, text: "What is a 'PCAP'?", options: ["A fast computer", "A packet capture file for network analysis", "A type of firewall", "A encryption key"], correctAnswer: 1 },
            { id: 2, text: "What does 'C2 Beacon' stand for?", options: ["Command and Control", "Cryptic Capture", "Cable Connection", "Cloud Computing"], correctAnswer: 0 },
            { id: 3, text: "What is 'Packet Analysis'?", options: ["Breaking a computer", "Examining the structure and content of data packets", "Sending mail", "Fixing a router"], correctAnswer: 1 },
            { id: 4, text: "Which tool is standard for analyzing network traffic?", options: ["Photoshop", "Wireshark", "Excel", "Spotify"], correctAnswer: 1 },
            { id: 5, text: "What is 'promiscuous mode' on a network adapter?", options: ["A mode to save energy", "A mode that allows seeing all traffic on a segment", "A mode for faster gaming", "A mode to hide the IP"], correctAnswer: 1 },
            { id: 6, text: "What is a 'DDoS attack'?", options: ["Distributed Denial of Service", "Digital Data over Servers", "Double Data on System", "Direct Download of Software"], correctAnswer: 0 },
            { id: 7, text: "What is 'IP Spoofing'?", options: ["Cleaning an IP address", "Creating IP packets with a fake source address", "Buying a new IP", "Hiding the SSID"], correctAnswer: 1 },
            { id: 8, text: "What happens in a 'Man-in-the-Middle' (MITM) attack?", options: ["A person stands in the middle of a room", "An attacker intercepts and potentially alters communication", "A computer freezes", "The internet becomes faster"], correctAnswer: 1 },
            { id: 9, text: "What is a 'port scan'?", options: ["Scanning a boat", "Probing a server for open communication ports", "Updating the OS", "Checking external drives"], correctAnswer: 1 },
            { id: 10, text: "What is 'bandwidth throttling'?", options: ["Speeding up the internet", "Intentionally slowing down internet speed", "Replacing a cable", "A type of malware"], correctAnswer: 1 },
            { id: 11, text: "What is 'dark web' monitoring?", options: ["Using a dark theme", "Checking if stolen data is being sold online", "Scanning for viruses at night", "Blocking social media"], correctAnswer: 1 },
            { id: 12, text: "What is an 'Intrusion Detection System' (IDS)?", options: ["A type of camera", "Software that monitors a network for malicious activity", "A fingerprint scanner", "A password manager"], correctAnswer: 1 },
            { id: 13, text: "What is the primary difference between TCP and UDP?", options: ["TCP is faster", "TCP is connection-oriented; UDP is connectionless", "UDP is more secure", "There is no difference"], correctAnswer: 1 },
            { id: 14, text: "What is 'NetFlow' monitoring?", options: ["Monitoring water flow", "Collecting and analyzing IP traffic flow data", "A type of battery saver", "A cloud storage service"], correctAnswer: 1 },
            { id: 15, text: "Why monitor 'Outbound' traffic?", options: ["To see YouTube videos", "To detect if malware is 'calling home' to a C2 server", "To increase download speed", "To save mobile data"], correctAnswer: 1 }
        ]
    },
    {
        id: 6,
        title: 'Digital Evidence 101',
        level: 'Intermediate',
        duration: '2 hours',
        videoUrl: 'https://www.youtube.com/embed/4I1_77q_T8k',
        storyboard: [
            { image: 'module6_scene1.jpg', text: "A database was stolen. Suspect laptop is here. I'll turn it on and check the files." },
            { image: 'module6_scene2.jpg', text: "Wait! Forensics rule: Never work on original evidence. Use a 'Write-Blocker' for imaging." },
            { image: 'module6_scene3.jpg', text: "How to prove the copy is identical? We use 'Hashing' like SHA-256. It's a digital fingerprint." },
            { image: 'module6_scene4.jpg', text: "Without matching hashes and a 'Chain of Custody', evidence is thrown out of court." }
        ],
        caseStudy: {
            title: "Database Theft Investigation",
            scenario: "Arjun learns the golden rules of digital evidence: use write-blockers to prevent changes, use hashing for integrity, and maintain a strict chain of custody."
        },
        quiz: [
            { id: 1, text: "Why is a 'Write-Blocker' used?", options: ["To speed up imaging", "To prevent any changes to the original evidence", "To encrypt the drive", "To fix broken files"], correctAnswer: 1 },
            { id: 2, text: "What proves that a copy of a drive is identical to the original?", options: ["A photo", "A matching Hash value (MD5/SHA)", "A matching Hash value (MD5/SHA)", "The folder count"], correctAnswer: 1 },
            { id: 3, text: "What is 'Imaging' in digital forensics?", options: ["Taking pictures of the computer", "Creating a bit-by-bit copy of a storage device", "Editing a video", "Scanning for fingerprints"], correctAnswer: 1 },
            { id: 4, text: "What is 'Live Forensics'?", options: ["Watching a crime live", "Analyzing a system while it is still powered on", "Using AI", "Recovering files from a trash bin"], correctAnswer: 1 },
            { id: 5, text: "What is 'Dead Forensics'?", options: ["Analyzing a broken computer", "Analyzing a system that is powered off", "Analyzing a very old case", "Searching for lost files"], correctAnswer: 1 },
            { id: 6, text: "What is a 'Hash Function'?", options: ["A type of breakfast", "An algorithm that maps data to a unique fixed-size string", "A sorting method", "A way to delete files"], correctAnswer: 1 },
            { id: 7, text: "What is the 'Chain of Custody'?", options: ["A metal chain", "A document showing who handled evidence from collection to court", "A sequence of passwords", "A team of investigators"], correctAnswer: 1 },
            { id: 8, text: "Why is hashing used specifically AFTER imaging?", options: ["To make the files smaller", "To verify that the copy has not changed since creation", "To encrypt the copy", "To name the files"], correctAnswer: 1 },
            { id: 9, text: "What is 'Slack Space'?", options: ["Space for gaming", "The space between the end of a file and the end of the cluster", "Room to add more RAM", "A slow part of the disk"], correctAnswer: 1 },
            { id: 10, text: "What is a 'Bit-Stream' copy?", options: ["Watching a live stream", "A sector-by-sector clone of the entire drive including deleted files", "A fast copy of photos", "A cloud backup"], correctAnswer: 1 },
            { id: 11, text: "Is it okay to investigate on the suspect's original device?", options: ["Yes, to save time", "No, always work on a verified forensic copy", "Only if the suspect allows it", "Only if you are a senior officer"], correctAnswer: 1 },
            { id: 12, text: "What is 'Metadata' in a forensic context?", options: ["A type of virus", "Data about data (timestamps, ownership, location)", "The file's size only", "The person's bio"], correctAnswer: 1 },
            { id: 13, text: "What is 'File Recovery'?", options: ["Buying new files", "Restoring deleted files from the disk's unallocated space", "Fixing a corrupted Excel sheet", "Downloading from a cloud"], correctAnswer: 1 },
            { id: 14, text: "What is 'Steganography'?", options: ["Studying dinosaurs", "Hiding information within another file (like an image)", "A type of coding", "Blocking a network"], correctAnswer: 1 },
            { id: 15, text: "What is an 'Exhibit Number'?", options: ["A prize number", "A unique identifier for each piece of evidence collected", "The suspect's phone number", "The date of the crime"], correctAnswer: 1 }
        ]
    },
    {
        id: 7,
        title: 'Memory Forensics',
        level: 'Intermediate',
        duration: '2.5 hours',
        videoUrl: 'https://www.youtube.com/embed/H0z9R5R2X9k',
        storyboard: [
            { image: 'module7_scene1.jpg', text: "Antivirus says disk is clean, but the machine is still attacking. Where is the malware?" },
            { image: 'module7_scene2.jpg', text: "It's in the RAM! This is 'Fileless Malware'. RAM is 'Volatile Data'—it disappears if powered off." },
            { image: 'module7_scene3.jpg', text: "By analyzing the memory dump, we find hidden processes and decrypted passwords." },
            { image: 'module7_scene4.jpg', text: "Non-volatile data stays; volatile data flies. Capture the memory first!" }
        ],
        caseStudy: {
            title: "Tracking Fileless Malware",
            scenario: "Arjun encounters malware that leaves no trace on the disk. Cyber-Sia teaches him how to analyze RAM (volatile data) to find injected code and hidden processes."
        },
        quiz: [
            { id: 1, text: "What is 'Volatile Data'?", options: ["Data that explodes", "Data that disappears when power is lost", "Encrypted data", "Big data"], correctAnswer: 1 },
            { id: 2, text: "Why is RAM analysis important?", options: ["To clear the cache", "To find fileless malware and live processes", "To speed up the computer", "To fix a blue screen"], correctAnswer: 1 },
            { id: 3, text: "What is a 'Memory Dump'?", options: ["Deleting the RAM", "A snapshot of the RAM contents at a specific moment", "A slow computer", "A type of database"], correctAnswer: 1 },
            { id: 4, text: "What is 'Fileless Malware'?", options: ["Malware that only lives in RAM to avoid disk detection", "Malware that has no name", "Malware on a USB drive", "Malware that hides in the cloud"], correctAnswer: 0 },
            { id: 5, text: "Why should you NOT turn off a computer before capturing RAM?", options: ["It might break the power button", "The contents of RAM will be lost forever", "The OS will update", "It takes too long to restart"], correctAnswer: 1 },
            { id: 6, text: "What is 'Injected Code' in memory?", options: ["Code used for vaccines", "Malicious code inserted into a legitimate process's space", "A new software update", "Code that changes the font"], correctAnswer: 1 },
            { id: 7, text: "What is 'Dynamic Analysis'?", options: ["Analyzing a program while it is running in memory", "Analyzing the external hardware", "Analyzing the computer's price", "Analyzing the user's name"], correctAnswer: 0 },
            { id: 8, text: "What is the Windows 'Registry'?", options: ["A list of people who bought the PC", "A database that stores configuration settings", "A guest book", "A list of installed games"], correctAnswer: 1 },
            { id: 9, text: "What is 'Process Hollowing'?", options: ["Deleting a process", "Malware replacing the code of a legitimate process with its own", "Creating a new process", "Speeding up a process"], correctAnswer: 1 },
            { id: 10, text: "What is a 'Rootkit'?", options: ["A toolkit for plants", "Malware designed to hide itself and other malware from the OS", "A type of admin password", "A network cable"], correctAnswer: 1 },
            { id: 11, text: "Which tool is standard for memory forensics?", options: ["Excel", "Volatility", "Chrome", "Notepad"], correctAnswer: 1 },
            { id: 12, text: "What can be found in RAM besides malware?", options: ["Only images", "Decrypted passwords, open tabs, and chat history", "Only the OS name", "The CPU temperature"], correctAnswer: 1 },
            { id: 13, text: "What is 'Pagefile.sys'?", options: ["An ebook file", "A disk file used as an extension of the system's RAM", "A type of system log", "A file for printing"], correctAnswer: 1 },
            { id: 14, text: "What is 'Hiberfil.sys'?", options: ["A file for hibernation settings", "A file containing a RAM snapshot from when the PC hibernated", "A type of encryption", "A backup of documents"], correctAnswer: 1 },
            { id: 15, text: "What is the 'Order of Volatility'?", options: ["Alphabetical order of files", "The sequence to collect data based on how fast it disappears", "The list of most dangerous viruses", "The order of crimes in court"], correctAnswer: 1 }
        ]
    },
    {
        id: 8,
        title: 'Incident Response',
        level: 'Intermediate',
        duration: '2 hours',
        videoUrl: 'https://www.youtube.com/embed/bMne5_Iq_q8',
        storyboard: [
            { image: 'module8_scene1.jpg', text: "Everything is locked! Should we pay the ransom to get our data back?" },
            { image: 'module8_scene2.jpg', text: "Never pay! We follow the PICERL cycle: Contain, Eradicate, and Recover." },
            { image: 'module8_scene3.jpg', text: "Forensics is about protecting justice. Whether in school or college, start learning today." },
            { image: 'module8_scene4.jpg', text: "You are now a CyberSpark. Lead the way to a safer internet." }
        ],
        caseStudy: {
            title: "The Ransomware Crisis",
            scenario: "A company is hit by ransomware. Arjun learns the PICERL cycle and the importance of forensic readiness in incident response."
        },
        quiz: [
            { id: 1, text: "What is 'Incident Response'?", options: ["Fixing a broken monitor", "A structured approach to managing a security breach", "Answering phone calls", "Buying new insurance"], correctAnswer: 1 },
            { id: 2, text: "What is the first step in the PICERL cycle?", options: ["Containment", "Preparation", "Eradication", "Recovery"], correctAnswer: 1 },
            { id: 3, text: "What does 'Containment' involve?", options: ["Deleting all files", "Stopping the threat from spreading further", "Buying new hardware", "Arresting the suspect"], correctAnswer: 1 },
            { id: 4, text: "What is 'Eradication' in the PICERL cycle?", options: ["Reporting to the news", "Completely removing the threat from the environment", "Restarting the computer", "Hiring new staff"], correctAnswer: 1 },
            { id: 5, text: "What is the 'Recovery' phase?", options: ["Paying the ransom", "Restoring systems and data from clean backups", "Going on vacation", "Starting a new company"], correctAnswer: 1 },
            { id: 6, text: "Why is 'Lessons Learned' considered a critical step?", options: ["To blame employees", "To improve security and prevent future incidents", "To write a long report", "To save money"], correctAnswer: 1 },
            { id: 7, text: "What is 'Forensic Readiness'?", options: ["Being ready to fight", "Being prepared to collect digital evidence if a breach occurs", "Having a fast internet", "Using the latest antivirus"], correctAnswer: 1 },
            { id: 8, text: "What is an 'Indicator of Compromise' (IOC)?", options: ["A fast computer", "A sign that a system has been breached (like a malicious IP)", "A new software feature", "A positive user review"], correctAnswer: 1 },
            { id: 9, text: "Why should you generally NOT pay a ransom?", options: ["It's too expensive", "It doesn't guarantee data recovery and funds more crime", "It's a slow process", "The bank might block the transfer"], correctAnswer: 1 },
            { id: 10, text: "What is a 'Playbook' in Incident Response?", options: ["A book of games", "A documented set of steps for a specific type of incident", "A list of employee names", "A marketing strategy"], correctAnswer: 1 },
            { id: 11, text: "What is the primary role of a CSIRT?", options: ["Sales and marketing", "Specialized group that handles security events", "Cleaning the office", "Human resources"], correctAnswer: 1 },
            { id: 12, text: "What is a 'Hot Site' in disaster recovery?", options: ["A site with high temperature", "A fully functional backup site ready to take over immediately", "A data center in the desert", "A popular website"], correctAnswer: 1 },
            { id: 13, text: "What is 'Data Exfiltration'?", options: ["Deleting old data", "The unauthorized transfer of data out of a system", "Backing up your photos", "Cleaning a database"], correctAnswer: 1 },
            { id: 14, text: "Why is it important to limit communication during a breach?", options: ["To save on phone bills", "To prevent the attacker from knowing your response steps", "To avoid scaring the staff", "To keep it a secret from the news"], correctAnswer: 1 },
            { id: 15, text: "What is the goal of the 'Identification' phase?", options: ["Identifying new employees", "Determining if an event is actually a security incident", "Buying new software", "Naming the computers"], correctAnswer: 1 }
        ]
    },
    {
        id: 9,
        title: 'Ethical Hacking & Pentesting',
        level: 'Graduate',
        duration: '4 hours',
        videoUrl: 'https://www.youtube.com/embed/dz7Ntp7KQGA',
        caseStudy: {
            title: "Advanced Vulnerability Assessment",
            scenario: "A large enterprise network requires a comprehensive penetration test. You must identify web vulnerabilities (OWASP Top 10) and network misconfigurations to secure the infrastructure."
        },
        quiz: [
            { id: 1, text: "What is the primary goal of Penetration Testing?", options: ["To steal data", "To identify and exploit vulnerabilities to improve security", "To slow down the network", "To monitor employees"], correctAnswer: 1 },
            { id: 2, text: "What does 'SQL Injection' target?", options: ["The operating system", "The database layer of an application", "The user's web browser", "The physical hardware"], correctAnswer: 1 }
        ]
    },
    {
        id: 10,
        title: 'Malware Analysis & Reverse Engineering',
        level: 'Graduate',
        duration: '5 hours',
        videoUrl: 'https://www.youtube.com/embed/b3M_00fIuV4',
        caseStudy: {
            title: "Analyzing a Sophisticated Trojan",
            scenario: "An unknown binary is found on a sensitive server. Using static and dynamic analysis, you determine its behavior, communication protocols, and potential origin."
        },
        quiz: [
            { id: 1, text: "What is 'Static Analysis' in malware research?", options: ["Running the malware in a sandbox", "Examining the code without executing it", "Analyzing the physical computer", "Deleting the file immediately"], correctAnswer: 1 },
            { id: 2, text: "What is a 'Sandbox'?", options: ["A playground for viruses", "An isolated environment to safely execute suspicious files", "A type of encryption", "A backup storage"], correctAnswer: 1 }
        ]
    },
    {
        id: 11,
        title: 'Cloud Security Architecture',
        level: 'Graduate',
        duration: '4.5 hours',
        videoUrl: 'https://www.youtube.com/embed/3_V7N1_j-kQ',
        caseStudy: {
            title: "Securing Multi-Cloud Environments",
            scenario: "Architecting a secure infrastructure across AWS, Azure, and Google Cloud, ensuring Identity and Access Management (IAM) and data encryption are consistently applied."
        },
        quiz: [
            { id: 1, text: "What is the Shared Responsibility Model?", options: ["AWS handles all security", "The provider secures the infrastructure; the user secures the data", "Security is optional", "Only the user is responsible"], correctAnswer: 1 },
            { id: 2, text: "What is IAM?", options: ["Internet Access Manager", "Identity and Access Management", "Integrated Application Monitoring", "Internal Asset Mapping"], correctAnswer: 1 }
        ]
    },
    {
        id: 12,
        title: 'AI & Machine Learning in Cybersecurity',
        level: 'Graduate',
        duration: '3 hours',
        videoUrl: 'https://www.youtube.com/embed/3M_E-N7d69A',
        caseStudy: {
            title: "AI-Driven Threat Detection",
            scenario: "Implementation of machine learning models to detect zero-day exploits and anomalous behavior in real-time, reducing false positives in SOC operations."
        },
        quiz: [
            { id: 1, text: "How does AI help in threat detection?", options: ["By replacing all human experts", "By identifying patterns and anomalies at scale", "By banning all internet users", "By increasing network latency"], correctAnswer: 1 },
            { id: 2, text: "What is a 'False Positive'?", options: ["A correct identification of a threat", "An alert that incorrectly flags legitimate activity as malicious", "A missed attack", "A successful login"], correctAnswer: 1 }
        ]
    }
];

const studyModulesHi: StudyModuleType[] = [
    {
        id: 1,
        title: 'डिजिटल फुटप्रिंट (The Digital Footprint)',
        level: 'Beginner',
        duration: '1 घंटा',
        videoUrl: 'https://www.youtube.com/embed/B6M_YtLz3oI',
        storyboard: [
            { image: 'module1_scene1.jpg', text: "आखिरकार! कॉलेज का मेरा पहला दिन। पूरी दुनिया को पता चलने दो!" },
            { image: 'module1_scene2.jpg', text: "रुको, अर्जुन! उस आईडी कार्ड को देखो। तुम्हारा पूरा नाम, रोल नंबर और तुम्हारा पता भी दिख रहा है।" },
            { image: 'module1_scene3.jpg', text: "हर फोटो, लिंक या कमेंट जो तुम पोस्ट करते हो, एक 'डिजिटल फुटप्रिंट' बनाता है। यह कभी पूरी तरह से गायब नहीं होता। हैकर्स इन जानकारियों का इस्तेमाल तुम्हारी प्रोफाइल बनाने के लिए करते हैं।" },
            { image: 'module1_scene4.jpg', text: "पोस्ट करने से पहले, रुकें और सोचें। क्या यह जानकारी निजी है? यदि हाँ, तो इसे ऑफलाइन ही रखें।" }
        ],
        caseStudy: {
            title: "डिजिटल दुनिया में नेविगेट करना",
            scenario: "अर्जुन कॉलेज के पहले दिन अपनी आईडी की फोटो पोस्ट करता है। साइबर-सिया समझाती है कि आईडी जैसे छोटे विवरण भी एक स्थायी 'डिजिटल फुटप्रिंट' में योगदान देते हैं, जिसका हैकर्स फायदा उठा सकते हैं।"
        },
        quiz: [
            { id: 1, text: "'डिजिटल फुटप्रिंट' क्या है?", options: ["एक फाइल साइज", "आपकी ऑनलाइन गतिविधि का एक स्थायी रिकॉर्ड", "एक प्रकार का जूता", "कंप्यूटर ट्रेस करने के लिए सॉफ्टवेयर"], correctAnswer: 1 },
            { id: 2, text: "आईडी कार्ड की फोटो साझा करना खतरनाक क्यों है?", options: ["खराब लाइटिंग", "यह रोल नंबर और पते जैसे निजी डेटा को उजागर करता है", "आईडी की फोटो लेना अवैध है", "फाइल साइज बहुत बड़ा है"], correctAnswer: 1 },
            { id: 3, text: "क्या डिजिटल फुटप्रिंट को पूरी तरह से मिटाया जा सकता है?", options: ["हाँ, 10 साल बाद", "नहीं, सब कुछ हटाना लगभग असंभव है", "केवल सरकार द्वारा", "हाँ, अपना अकाउंट डिलीट करके"], correctAnswer: 1 },
            { id: 4, text: "आपका डिजिटल फुटप्रिंट कौन देख सकता है?", options: ["केवल आपके मित्र", "केवल आपका परिवार", "नियोक्ता (Employers), हैकर्स और अजनबी", "आपके अलावा कोई नहीं"], correctAnswer: 2 },
            { id: 5, text: "'सोशल मीडिया स्क्रबिंग' क्या है?", options: ["अपना पूरा प्रोफाइल डिलीट करना", "पुराने या अनुचित पोस्ट को हटाना", "दूसरों के रहस्यों को खोजना", "अधिक बार पोस्ट करना"], correctAnswer: 1 },
            { id: 6, text: "आपका डिजिटल फुटप्रिंट आपके करियर को कैसे प्रभावित कर सकता है?", options: ["इसका कोई प्रभाव नहीं पड़ता", "नियोक्ता आपकी ऑनलाइन उपस्थिति की जांच कर सकते हैं", "यह केवल तभी मदद करता है जब आप एक कलाकार हों", "यह केवल अभिनेताओं को प्रभावित करता है"], correctAnswer: 1 },
            { id: 7, text: "क्या किसी पोस्ट को लाइक करना आपके डिजिटल फुटप्रिंट का हिस्सा है?", options: ["नहीं, केवल वही जो आप लिखते हैं", "हाँ, हर गतिविधि मायने रखती है", "केवल तभी जब आप इसे शेयर करते हैं", "केवल तभी जब आप कमेंट करते हैं"], correctAnswer: 1 },
            { id: 8, text: "साझा की गई फोटो में 'मेटाडेटा' (metadata) क्या है?", options: ["इस्तेमाल किया गया फिल्टर", "फोटो में मौजूद व्यक्ति", "स्थान और समय जैसा एम्बेडेड डेटा", "कैप्शन"], correctAnswer: 2 },
            { id: 9, text: "गोपनीयता सेटिंग्स को नियमित रूप से क्यों जांचना चाहिए?", options: ["अपना पासवर्ड बदलने के लिए", "यह देखने के लिए कि किसने आपको ब्लॉक किया", "प्लेटफॉर्म अक्सर अपनी डेटा नीतियां अपडेट करते हैं", "अधिक फॉलोअर्स पाने के लिए"], correctAnswer: 2 },
            { id: 10, text: "'घोस्ट' (ghost) अकाउंट क्या हैं?", options: ["डरावने अकाउंट", "निष्क्रिय अकाउंट जिनमें अभी भी आपका डेटा होता है", "वेरिफाइड अकाउंट", "सीक्रेट अकाउंट"], correctAnswer: 1 },
            { id: 11, text: "कुकीज़ (cookies) आपके डिजिटल फुटप्रिंट को कैसे प्रभावित करती हैं?", options: ["वे कंप्यूटर की गति बढ़ाते हैं", "वे विभिन्न साइटों पर आपके ब्राउज़िंग इतिहास को ट्रैक करती हैं", "वे केवल लॉगिन के लिए हैं", "वे वायरस से बचाती हैं"], correctAnswer: 1 },
            { id: 12, text: "'एक्टिव' (Active) डिजिटल फुटप्रिंट क्या है?", options: ["आपकी जानकारी के बिना एकत्र किया गया डेटा", "वह डेटा जिसे आप जानबूझकर साझा करते हैं जैसे पोस्ट", "आपके दैनिक कदमों की संख्या", "आपकी इंटरनेट गति"], correctAnswer: 1 },
            { id: 13, text: "'पैसिव' (Passive) डिजिटल फुटप्रिंट क्या है?", options: ["वह डेटा जिसे आप उद्देश्य के लिए साझा करते हैं", "बिना आपकी सीधी कार्रवाई के एकत्र किया गया डेटा (जैसे IP एड्रेस)", "पुरानी ईमेल डिलीट करना", "सोशल मीडिया का उपयोग न करना"], correctAnswer: 1 },
            { id: 14, text: "'ओवर-शेयरिंग' एक सुरक्षा जोखिम क्यों है?", options: ["इसमें बहुत समय लगता है", "यह सोशल इंजीनियरिंग हमलों के लिए जानकारी प्रदान करता है", "यह स्टोरेज भर देता है", "यह दोस्तों के लिए कष्टप्रद है"], correctAnswer: 1 },
            { id: 15, text: "अपने फुटप्रिंट को प्रबंधित करने का सबसे अच्छा पहला कदम क्या है?", options: ["सभी ऐप्स डिलीट करना", "सर्च इंजन पर खुद को खोजना", "अपना फोन बदलना", "नकली नाम का उपयोग करना"], correctAnswer: 1 }
        ]
    },
    {
        id: 2,
        title: 'सोशल इंजीनियरिंग (Social Engineering De-coded)',
        level: 'Beginner',
        duration: '1 घंटा',
        videoUrl: 'https://www.youtube.com/embed/9pExL1kF5X4',
        storyboard: [
            { image: 'module2_scene1.jpg', text: "ओह नहीं! बैंक कह रहा है कि कोई मेरे पैसे चुराने की कोशिश कर रहा है। मुझे जल्दी कुछ करना होगा!" },
            { image: 'module2_scene2.jpg', text: "वह 'वेरिफिकेशन कोड' मांग रहा है? अर्जुन, वह ओटोपी (OTP) है! रुको!" },
            { image: 'module2_scene3.jpg', text: "स्कैमर्स तुम्हें डराने और जल्दबाजी दिखाने के लिए 'डर' और 'जल्दबाजी' का इस्तेमाल करते हैं। असली बैंक कभी भी कॉल पर तुम्हारा ओटीपी या पिन नहीं मांगेंगे।" },
            { image: 'module2_scene4.jpg', text: "अगर कोई घबराहट पैदा करने की कोशिश करे, तो तो वह स्कैम हो सकता है। फोन काटें और अपने बैंक के आधिकारिक नंबर पर कॉल करें।" }
        ],
        caseStudy: {
            title: "दबाव वाली फोन कॉल",
            scenario: "अर्जुन को 'बैंक सपोर्ट' से धोखाधड़ी का दावा करने वाली कॉल आती है। वे लेनदेन को 'रोकने' के लिए ओटीपी मांगते हैं। साइबर-सिया हस्तक्षेप करती है और बताती है कि कैसे स्कैमर्स क्रेडेंशियल चुराने के लिए जल्दबाजी का उपयोग करते हैं।"
        },
        quiz: [
            { id: 1, text: "स्कैमर्स लोगों को घबराने के लिए क्या इस्तेमाल करते हैं?", options: ["तेज़ संगीत", "डर और जल्दबाजी (Fear and Urgency)", "तकनीकी शब्द", "मुफ्त उपहार"], correctAnswer: 1 },
            { id: 2, text: "क्या आपको फोन कॉल पर ओटीपी साझा करना चाहिए यदि वे बैंक से होने का दावा करते हैं?", options: ["हाँ, पैसे बचाने के लिए", "केवल तभी जब वे विनम्र लगें", "कभी नहीं", "केवल तभी जब यह 'वेरिफिकेशन' के लिए हो"], correctAnswer: 2 },
            { id: 3, text: "'सोशल इंजीनियरिंग' क्या है?", options: ["कंप्यूटर बनाना", "जानकारी उगलवाने के लिए लोगों को मनोवैज्ञानिक रूप से हेरफेर करना", "सोशल मीडिया ऐप कोड करना", "सामाजिक कौशल में सुधार करना"], correctAnswer: 1 },
            { id: 4, text: "'फ़िशिंग' (Phishing) क्या है?", options: ["एक खेल", "डेटा चुराने के लिए धोखाधड़ी वाले ईमेल/टेक्स्ट", "सॉफ्टवेयर अपडेट करना", "धीमे इंटरनेट कनेक्शन को ठीक करना"], correctAnswer: 1 },
            { id: 5, text: "'विशिंग' (Vishing) क्या है?", options: ["वीडियो एडिटिंग", "वॉयस फ़िशिंग या फोन स्कैम", "वर्चुअल फिशिंग", "दृष्टि परीक्षण"], correctAnswer: 1 },
            { id: 6, text: "'स्मिशिंग' (Smishing) क्या है?", options: ["छोटी फ़िशिंग", "एसएमएस (SMS) फ़िशिंग", "स्मार्ट फ़िशिंग", "सोशल मीडिया फ़िशिंग"], correctAnswer: 1 },
            { id: 7, text: "यदि आपको 'बैंक' से कोई संदिग्ध कॉल आती है, तो आपको क्या करना चाहिए?", options: ["उन्हें जल्दी से वह दें जो वे चाहते हैं", "फोन काट दें और अपने कार्ड के पीछे दिए गए आधिकारिक नंबर पर कॉल करें", "उनके दोबारा कॉल करने का इंतज़ार करें", "उनके द्वारा दिए गए 'सुरक्षित' अकाउंट में पैसे ट्रांसफर करें"], correctAnswer: 1 },
            { id: 8, text: "स्कैमर्स 'जल्दबाजी' (urgency) का उपयोग क्यों करते हैं?", options: ["समय बचाने के लिए", "ताकि आप स्पष्ट और तार्किक रूप से न सोच सकें", "क्योंकि वे जल्दी में हैं", "यह दिखाने के लिए कि वे पेशेवर हैं"], correctAnswer: 1 },
            { id: 9, text: "फ़िशिंग ईमेल में एक सामान्य चेतावनी संकेत क्या है?", options: ["कंपनी का लोगो", "'प्रिय ग्राहक' जैसा सामान्य अभिवादन और घबराहट पैदा करना", "तारीख", "होम पेज का लिंक"], correctAnswer: 1 },
            { id: 10, text: "क्या 'ब्लॉक किए गए अकाउंट' के बारे में टेक्स्ट मैसेज के लिंक पर क्लिक करना सुरक्षित है?", options: ["हाँ, इसे जल्दी ठीक करने के लिए", "नहीं, हमेशा आधिकारिक ऐप या वेबसाइट का ही उपयोग करें", "केवल तभी जब यह आधिकारिक लगे", "हाँ, यदि वे आपका नाम जानते हैं"], correctAnswer: 1 },
            { id: 11, text: "'प्रीटेक्सटिंग' (Pretexting) क्या है?", options: ["प्रिंटर का परीक्षण", "विश्वास हासिल करने के लिए एक झूठा परिदृश्य या पहचान बनाना", "टेक्स्ट मैसेज भेजना", "किताब पढ़ना"], correctAnswer: 1 },
            { id: 12, text: "सोशल इंजीनियरिंग में 'बेटिंग' (Baiting) क्या है?", options: ["तारीफ पाना", "मालवेयर इंस्टॉल करने के लिए कुछ मुफ्त (जैसे USB या डाउनलोड) देना", "खेल खेलना", "टाइमर सेट करना"], correctAnswer: 1 },
            { id: 13, text: "सोशल इंजीनियरिंग में 'क्विड प्रो क्वो' (Quid pro quo) क्या है?", options: ["एक लैटिन मुहावरा", "जानकारी के बदले में सेवा या लाभ की पेशकश करना", "एक प्रकार का फायरवॉल", "एक सुरक्षित पासवर्ड"], correctAnswer: 1 },
            { id: 14, text: "आप कॉल करने वाले की पहचान वास्तव में कैसे सत्यापित कर सकते हैं?", options: ["उनका नाम पूछकर", "उनके कॉलर आईडी की जांच करके (जिसे बदला जा सकता है)", "स्वयं कंपनी के सत्यापित नंबर पर कॉल करके", "उनसे इसे साबित करने के लिए कहकर"], correctAnswer: 2 },
            { id: 15, text: "यदि आपको पता चलता है कि आपने गलती से ओटीपी साझा कर दिया है, तो सबसे पहले क्या करें?", options: ["अपना फोन नंबर बदलें", "अकाउंट ब्लॉक करने के लिए तुरंत अपने बैंक से संपर्क करें", "मैसेज डिलीट करें", "अगले स्टेटमेंट का इंतज़ार करें"], correctAnswer: 1 }
        ]
    },
    {
        id: 3,
        title: 'मोबाइल सुरक्षा (The Mobile Fortress)',
        level: 'Beginner',
        duration: '1.5 घंटे',
        videoUrl: 'https://www.youtube.com/embed/j0-Qo-nN7W0',
        storyboard: [
            { image: 'module3_scene1.jpg', text: "यह गेम प्ले स्टोर पर ₹500 का है, लेकिन यहाँ यह मुफ्त है! मैं इसे अभी डाउनलोड कर रहा हूँ।" },
            { image: 'module3_scene2.jpg', text: "रुको, अर्जुन! एक साधारण गेम को तुम्हारे मैसेज (SMS) और माइक्रोफ़ोन की ज़रूरत क्यों है? यह एक 'ट्रोजन' है।" },
            { image: 'module3_scene3.jpg', text: "हमेशा आधिकारिक स्टोर से ही ऐप डाउनलोड करें। वे वायरस की जांच करते हैं। थर्ड-पार्टी एपीके (APKs) मोबाइल हैक होने का सबसे बड़ा कारण हैं।" },
            { image: 'module3_scene4.jpg', text: "अपने मोबाइल को एक किला बनायें। ऐप की अनुमति (Permissions) की जांच करें और भरोसेमंद स्रोतों का ही उपयोग करें।" }
        ],
        caseStudy: {
            title: "'फ्री' एपीके का जाल",
            scenario: "अर्जुन एक रैंडम साइट से प्रो गेम डाउनलोड करके पैसे बचाने की कोशिश करता है। साइबर-सिया दिखाती है कि कैसे ऐप अत्यधिक अनुमति मांगता है, जो डिवाइस की जासूसी करने के लिए ट्रोजन के रूप में काम करता है।"
        },
        quiz: [
            { id: 1, text: "मोबाइल ऐप्स में 'ट्रोजन' (Trojan) क्या है?", options: ["एक तेज़ डाउनलोड गति", "एक दुर्भावनापूर्ण ऐप जो वैध होने का नाटक करता है", "इतिहास के बारे में एक खेल", "एक प्रकार का बैटरी सेवर"], correctAnswer: 1 },
            { id: 2, text: "ऐप्स डाउनलोड करने के लिए सबसे सुरक्षित जगह कौन सी है?", options: ["रैंडम वेबसाइटें", "व्हाट्सएप ग्रुप", "आधिकारिक स्टोर जैसे Play Store/App Store", "फाइल शेयरिंग साइटें"], correctAnswer: 2 },
            { id: 3, text: "आपको ऐप अनुमतियों (app permissions) की जांच क्यों करनी चाहिए?", options: ["फाइल साइज देखने के लिए", "क्योंकि ऐप्स उस डेटा तक पहुंच मांग सकते हैं जिसकी उन्हें ज़रूरत नहीं है", "ऐप का आइकन बदलने के लिए", "ऐप को तेज़ करने के लिए"], correctAnswer: 1 },
            { id: 4, text: "'साइडलोडिंग' (Sideloading) क्या है?", options: ["फोन को साइड से लोड करना", "आधिकारिक स्टोर के अलावा अन्य स्रोतों से ऐप इंस्टॉल करना", "एक साथ दो ऐप इस्तेमाल करना", "फोटो ट्रांसफर करना"], correctAnswer: 1 },
            { id: 5, text: "'रूटिंग' (Rooting) या 'जेलब्रेकिंग' (Jailbreaking) क्या है?", options: ["टूटी हुई स्क्रीन को ठीक करना", "निर्माता के प्रतिबंधों को हटाना, जिससे सुरक्षा कम हो जाती है", "ओएस को अपडेट करना", "बैटरी को तेज़ चार्ज करना"], correctAnswer: 1 },
            { id: 6, text: "एक दुर्भावनापूर्ण ऐप आपकी एसएमएस अनुमतियों का उपयोग कैसे कर सकता है?", options: ["मुफ्त टेक्स्ट भेजने के लिए", "आपके ओटीपी कोड पढ़ने या स्पैम संदेश भेजने के लिए", "सिग्नल की ताकत सुधारने के लिए", "आपके संपर्कों का बैकअप लेने के लिए"], correctAnswer: 1 },
            { id: 7, text: "मोबाइल डिवाइस पर 'रैंसमवेयर' (Ransomware) क्या है?", options: ["एक पेड ऐप", "मालवेयर जो आपके पैसे देने तक आपकी स्क्रीन या डेटा को लॉक कर देता है", "एक प्रकार की बैटरी", "एक तेज़ चार्जर"], correctAnswer: 1 },
            { id: 8, text: "स्क्रीन लॉक क्यों महत्वपूर्ण है?", options: ["फोन को बेहतर दिखाने के लिए", "फोन खो जाने या चोरी होने पर अनधिकृत पहुंच को रोकने के लिए", "बैटरी बचाने के लिए", "स्क्रीन को गंदा होने से रोकने के लिए"], correctAnswer: 1 },
            { id: 9, text: "'रिमोट वाइप' (Remote wipe) क्या है?", options: ["कपड़े से फोन साफ करना", "खोए या चोरी हुए फोन से सारा डेटा डिलीट करने की सुविधा", "एक प्रकार का कार वाइपर", "अलग-अलग फोटो डिलीट करना"], correctAnswer: 1 },
            { id: 10, text: "क्या सार्वजनिक वाई-फाई पर बैंकिंग करना सुरक्षित है?", options: ["हाँ, यह सुविधाजनक है", "नहीं, जब तक आप वीपीएन या मोबाइल डेटा का उपयोग न करें", "केवल होटलों में", "केवल छोटी मात्रा के लिए"], correctAnswer: 1 },
            { id: 11, text: "टू-फैक्टर ऑथेंटिकेशन (2FA) क्या है?", options: ["दो बार लॉगिन करना", "सुरक्षा की दूसरी परत जोड़ना जैसे कोड या फिंगरप्रिंट", "दो अलग-अलग फोन का उपयोग करना", "अपना पासवर्ड दो बार बदलना"], correctAnswer: 1 },
            { id: 12, text: "सुरक्षा के लिए सॉफ्टवेयर अपडेट क्यों महत्वपूर्ण हैं?", options: ["वे अधिक इमोजी जोड़ते हैं", "वे सुरक्षा खामियों को ठीक करते हैं जिनका हैकर्स फायदा उठाते हैं", "वे फोन को भारी बनाते हैं", "वे पुरानी फोटो डिलीट करते हैं"], correctAnswer: 1 },
            { id: 13, text: "मोबाइल फोन पर 'एन्क्रिप्शन' (Encryption) क्या है?", options: ["अधिक मेमोरी जोड़ना", "डेटा को बिना की (key) के किसी के लिए अपठनीय बनाना", "भाषा बदलना", "कुकीज़ डिलीट करना"], correctAnswer: 1 },
            { id: 14, text: "मोबाइल मालवेयर का संभावित संकेत इनमें से कौन सा है?", options: ["नया वॉलपेपर", "असामान्य रूप से तेज़ बैटरी खत्म होना और ओवरहीटिंग", "साफ वॉयस कॉल", "मजबूत वाई-फाई सिग्नल"], correctAnswer: 1 },
            { id: 15, text: "'क्लोन किया गया ऐप' (Cloned app) क्या है?", options: ["जुड़वा बच्चों के लिए एक ऐप", "एक डुप्लिकेट ऐप जिसका उपयोग अक्सर लॉगिन डेटा चुराने के लिए किया जाता है", "एक प्रकार का बैकअप", "एक मिरर ऐप"], correctAnswer: 1 }
        ]
    },
    {
        id: 4,
        title: 'भारत में इंटरनेट कानून (Internet Laws in India)',
        level: 'Beginner',
        duration: '1.5 घंटे',
        videoUrl: 'https://www.youtube.com/embed/g9nN8_1O5S0',
        storyboard: [
            { image: 'module4_scene1.jpg', text: "क्या यह कोई अपराध है? क्या पुलिस सिर्फ एक ऑनलाइन प्रोफ़ाइल के लिए मदद कर सकती है?" },
            { image: 'module4_scene2.jpg', text: "हाँ! आईटी एक्ट 2000 के तहत, सेक्शन 66C पहचान की चोरी (Identity Theft) और सेक्शन 66E गोपनीयता के उल्लंघन (Privacy Violation) के लिए है।" },
            { image: 'module4_scene3.jpg', text: "रिपोर्ट करने से न डरें। नेशनल हेल्पलाइन 1930 का उपयोग करें या आधिकारिक पोर्टल पर जाएं।" },
            { image: 'module4_scene4.jpg', text: "कानून आपकी डिजिटल दुनिया में भी उतनी ही रक्षा करता है जितनी कि भौतिक दुनिया में। जागरूक रहें और सुरक्षित रहें।" }
        ],
        caseStudy: {
            title: "नेहा की फर्जी प्रोफाइल",
            scenario: "नेहा की पहचान एक फर्जी प्रोफाइल के माध्यम से चुरा ली जाती है। साइबर-सिया आईटी एक्ट 2000 और 1930 हेल्पलाइन का उपयोग करके ऐसे अपराधों की रिपोर्ट करने के तरीके समझाती है।"
        },
        quiz: [
            { id: 1, text: "भारत में कौन सा कानून साइबर अपराधों को संभालता है?", options: ["मोटर वाहन अधिनियम", "सूचना प्रौद्योगिकी अधिनियम (IT Act), 2000", "अनुबंध अधिनियम", "डिजिटल मीडिया अधिनियम"], correctAnswer: 1 },
            { id: 2, text: "राष्ट्रीय साइबर अपराध हेल्पलाइन नंबर क्या है?", options: ["100", "1930", "911", "1098"], correctAnswer: 1 },
            { id: 3, text: "आईटी एक्ट की धारा 66C क्या कवर करती है?", options: ["एक वेबसाइट हैक करना", "पहचान की चोरी (Identity Theft)", "स्पैम ईमेल भेजना", "पुराने कंप्यूटर खरीदना"], correctAnswer: 1 },
            { id: 4, text: "आईटी एक्ट की धारा 66E क्या कवर करती है?", options: ["कर चोरी", "किसी व्यक्ति की शारीरिक गोपनीयता का उल्लंघन", "कॉपीराइट", "इंटरनेट पर तेज गति"], correctAnswer: 1 },
            { id: 5, text: "धारा 66D के तहत, 'छल द्वारा प्रतिरूपण' (cheating by personation) का क्या अर्थ है?", options: ["परीक्षा में नकल करना", "धोखा देने के लिए किसी और के होने का नाटक करने के लिए कंप्यूटर संसाधनों का उपयोग करना", "कानूनी रूप से अपना नाम बदलना", "मजाक करना"], correctAnswer: 1 },
            { id: 6, text: "भारत में साइबर अपराधों की रिपोर्ट करने के लिए आधिकारिक वेबसाइट कौन सी है?", options: ["india.gov.in", "cybercrime.gov.in", "police.in", "safety.gov.in"], correctAnswer: 1 },
            { id: 7, text: "क्या भारत में सहमति के बिना किसी की निजी फोटो साझा करना अपराध है?", options: ["केवल तभी जब आप इससे पैसे कमाते हैं", "हाँ, आईटी एक्ट की धारा 66E के तहत", "नहीं, यह सिर्फ एक नागरिक मामला है", "केवल तभी जब व्यक्ति प्रसिद्ध हो"], correctAnswer: 1 },
            { id: 8, text: "यदि आपका सोशल मीडिया अकाउंट हैक हो जाता है, तो क्या आप पुलिस में शिकायत दर्ज करा सकते हैं?", options: ["नहीं, यह एक निजी कंपनी का मुद्दा है", "हाँ, यह आईटी एक्ट के तहत एक अपराध है", "केवल तभी जब आपने पैसे खोए हों", "केवल तभी जब आपकी उम्र 18 वर्ष से कम हो"], correctAnswer: 1 },
            { id: 9, text: "वित्तीय साइबर धोखाधड़ी के तुरंत बाद आपको क्या करना चाहिए?", options: ["अपना बैंकिंग ऐप डिलीट करें", "'गोल्डन आवर' के भीतर 1930 पर कॉल करें", "अगले हफ्ते बैंक जाएं", "इसके बारे में सोशल मीडिया पर पोस्ट करें"], correctAnswer: 1 },
            { id: 10, text: "क्या भारत में 'साइबर स्टॉकिंग' (cyberstalking) एक दंडनीय अपराध है?", options: ["नहीं, यह केवल पीछा करना है", "हाँ, आईपीसी की धारा 354D और आईटी एक्ट के तहत", "केवल तभी जब आप उनसे व्यक्तिगत रूप से मिलें", "केवल तभी जब वे आपको ब्लॉक कर दें"], correctAnswer: 1 },
            { id: 11, text: "साइबर क्राइम रिपोर्टिंग में 'गोल्डन आवर' (Golden Hour) क्या है?", options: ["सोने से पहले का घंटा", "धनराशि को फ्रीज करने के लिए धोखाधड़ी के बाद के पहले 1-2 घंटे", "पासवर्ड रीसेट करने में लगने वाला समय", "जब पुलिस उपलब्ध हो"], correctAnswer: 1 },
            { id: 12, text: "क्या आप राष्ट्रीय पोर्टल पर गुमनाम रूप से साइबर अपराध की रिपोर्ट कर सकते हैं?", options: ["नहीं, आपको अपनी पहचान बतानी होगी", "हाँ, महिलाओं या बच्चों के खिलाफ विशिष्ट अपराधों के लिए", "केवल तभी जब आप गवाह हों", "केवल तभी जब आप वीपीएन का उपयोग करें"], correctAnswer: 1 },
            { id: 13, text: "धारा 66F के तहत 'साइबर आतंकवाद' (cyber terrorism) क्या है?", options: ["हिंसक वीडियो गेम खेलना", "भारत की एकता या सुरक्षा को खतरा पैदा करने वाले कार्य", "अपनी खुद की फाइलें डिलीट करना", "सेलेब्रिटी के बारे में फर्जी खबरें फैलाना"], correctAnswer: 1 },
            { id: 14, text: "क्या किसी अन्य व्यक्ति का नकली प्रोफाइल बनाना अपराध है?", options: ["नहीं, यह एक मजाक है", "हाँ, धारा 66C - पहचान की चोरी", "केवल तभी जब उन्हें पता चले", "केवल तभी जब आप उनकी असली फोटो का उपयोग करें"], correctAnswer: 1 },
            { id: 15, text: "भारत में मुख्य रूप से साइबर सुरक्षा के लिए कौन सी एजेंसी जिम्मेदार है?", options: ["CBI", "CERT-In", "RBI", "ISRO"], correctAnswer: 1 }
        ]
    },
    {
        id: 5,
        title: 'नेटवर्क फॉरेंसिक (Network Forensics)',
        level: 'Intermediate',
        duration: '2 घंटे',
        videoUrl: 'https://www.youtube.com/embed/Xv6H1f8_G_k',
        storyboard: [
            { image: 'module5_scene1.jpg', text: "साइबर-सिया, सबनेट 10.0.5.x का सर्वर एक अज्ञात बाहरी आईपी (IP) को भारी मात्रा में ट्रैफिक भेज रहा है। क्या यह डेटा लीक है?" },
            { image: 'module5_scene2.jpg', text: "नेटवर्क फॉरेंसिक में, हम सिर्फ 'क्या' नहीं देखते, हम 'कैसे' देखते हैं। हम लीक के स्रोत का पता लगाने के लिए 'PCAPs' का विश्लेषण करते हैं।" },
            { image: 'module5_scene3.jpg', text: "यह एक 'C2 बीकन' है। सर्वर के अंदर का मैलवेयर निर्देशों के लिए 'कॉल होम' कर रहा है। हम संक्रमित मशीन को अलग कर सकते हैं।" },
            { image: 'module5_scene4.jpg', text: "नेटवर्क फॉरेंसिक विजिबिलिटी (visibility) के बारे में है। ट्रैफिक की निगरानी करना सुरक्षा की पहली कड़ी है।" }
        ],
        caseStudy: {
            title: "डेटा एक्सफिल्ट्रेशन लीकेज",
            scenario: "एक SOC वातावरण में, अर्जुन एक विसंगति का पता लगाता है। वह सीखता है कि कैसे नेटवर्क फॉरेंसिक कमांड और कंट्रोल (C2) बीकन की पहचान करने के लिए पैकेट विश्लेषण का उपयोग करती है।"
        },
        quiz: [
            { id: 1, text: "'PCAP' क्या है?", options: ["एक तेज़ कंप्यूटर", "नेटवर्क विश्लेषण के लिए एक पैकेट कैप्चर फ़ाइल", "एक प्रकार का फ़ायरवॉल", "एक एन्क्रिप्शन की (key)"], correctAnswer: 1 },
            { id: 2, text: "'C2 Beacon' का क्या अर्थ है?", options: ["कमांड एंड कंट्रोल (Command and Control)", "क्रिप्टिक कैप्चर", "केबल कनेक्शन", "क्लाउड कंप्यूटिंग"], correctAnswer: 0 },
            { id: 3, text: "'पैकेट विश्लेषण' (Packet Analysis) क्या है?", options: ["कंप्यूटर तोड़ना", "डेटा पैकेट की संरचना और सामग्री की जांच करना", "मेल भेजना", "राउटर ठीक करना"], correctAnswer: 1 },
            { id: 4, text: "नेटवर्क ट्रैफ़िक का विश्लेषण करने के लिए कौन सा टूल मानक है?", options: ["फोटोशॉप", "वायरशार्क (Wireshark)", "एक्सेल", "स्पॉटिफाई"], correctAnswer: 1 },
            { id: 5, text: "नेटवर्क एडॉप्टर पर 'प्रॉमिसक्यूअस मोड' (promiscuous mode) क्या है?", options: ["ऊर्जा बचाने के लिए एक मोड", "एक मोड जो सेगमेंट पर सभी ट्रैफ़िक को देखने की अनुमति देता है", "तेज़ गेमिंग के लिए एक मोड", "आईपी छुपाने के लिए एक मोड"], correctAnswer: 1 },
            { id: 6, text: "'DDoS हमला' क्या है?", options: ["डिस्ट्रिब्यूटेड डिनायल ऑफ सर्विस", "डिजिटल डेटा ओवर सर्वर", "डबल डेटा ऑन सिस्टम", "सॉफ्टवेयर का सीधा डाउनलोड"], correctAnswer: 0 },
            { id: 7, text: "'आईपी स्पूफिंग' (IP Spoofing) क्या है?", options: ["आईपी एड्रेस साफ करना", "नकली सोर्स एड्रेस के साथ आईपी पैकेट बनाना", "नया आईपी खरीदना", "SSID छुपाना"], correctAnswer: 1 },
            { id: 8, text: "'मैन-इन-द-मिडल' (MITM) हमले में क्या होता है?", options: ["एक व्यक्ति कमरे के बीच में खड़ा होता है", "एक हमलावर संचार को रोकता है और उसमें बदलाव कर सकता है", "कंप्यूटर फ्रीज हो जाता है", "इंटरनेट तेज़ हो जाता है"], correctAnswer: 1 },
            { id: 9, text: "'पोर्ट स्कैन' (port scan) क्या है?", options: ["नाव को स्कैन करना", "खुले संचार पोर्ट के लिए सर्वर की जांच करना", "ओएस अपडेट करना", "एक्सटर्नल ड्राइव की जांच करना"], correctAnswer: 1 },
            { id: 10, text: "'बैंडविड्थ थ्रॉटलिंग' (bandwidth throttling) क्या है?", options: ["इंटरनेट की गति बढ़ाना", "जानबूझकर इंटरनेट की गति धीमी करना", "केबल बदलना", "एक प्रकार का मालवेयर"], correctAnswer: 1 },
            { id: 11, text: "'डार्क वेब' (dark web) मॉनिटरिंग क्या है?", options: ["डार्क थीम का उपयोग करना", "यह जांचना कि क्या चोरी हुआ डेटा ऑनलाइन बेचा जा रहा है", "रात में वायरस स्कैन करना", "सोशल मीडिया ब्लॉक करना"], correctAnswer: 1 },
            { id: 12, text: "'इंट्र्यूजन डिटेक्शन सिस्टम' (IDS) क्या है?", options: ["एक प्रकार का कैमरा", "सॉफ्टवेयर जो दुर्भावनापूर्ण गतिविधि के लिए नेटवर्क की निगरानी करता है", "एक फिंगरप्रिंट स्कैनर", "एक पासवर्ड मैनेजर"], correctAnswer: 1 },
            { id: 13, text: "टीसीपी (TCP) और यूडीपी (UDP) के बीच मुख्य अंतर क्या है?", options: ["टीसीपी तेज़ है", "टीसीपी कनेक्शन-ओरिएंटेड है; यूडीपी कनेक्शनलेस है", "यूडीपी अधिक सुरक्षित है", "कोई अंतर नहीं है"], correctAnswer: 1 },
            { id: 14, text: "'नेटफ्लो' (NetFlow) मॉनिटरिंग क्या है?", options: ["पानी के बहाव की निगरानी", "आईपी ट्रैफ़िक फ्लो डेटा एकत्र करना और उसका विश्लेषण करना", "एक प्रकार का बैटरी सेवर", "एक क्लाउड स्टोरेज सेवा"], correctAnswer: 1 },
            { id: 15, text: "'आउटबाउंड' (Outbound) ट्रैफ़िक की निगरानी क्यों करें?", options: ["यूट्यूब वीडियो देखने के लिए", "यह पता लगाने के लिए कि क्या मालवेयर सी2 सर्वर को कॉल कर रहा है", "डाउनलोड गति बढ़ाने के लिए", "मोबाइल डेटा बचाने के लिए"], correctAnswer: 1 }
        ]
    },
    {
        id: 6,
        title: 'डिजिटल साक्ष्य 101 (Digital Evidence 101)',
        level: 'Intermediate',
        duration: '2 घंटे',
        videoUrl: 'https://www.youtube.com/embed/j9N8_N8y_S0',
        storyboard: [
            { image: 'module6_scene1.jpg', text: "एक कंपनी का डेटाबेस चोरी हो गया है, और यह लैपटॉप मुख्य संदिग्ध है। मैं इसे चालू करने की तैयारी करता हूँ।" },
            { image: 'module6_scene2.jpg', text: "रुको! फॉरेंसिक का पहला नियम है: कभी भी मूल सबूत पर काम न करें। हम पहले इमेज बनाने के लिए 'राइट-ब्लॉकर' का उपयोग करते हैं।" },
            { image: 'module6_scene3.jpg', text: "हम यह कैसे साबित करेंगे कि कॉपी बिल्कुल वैसी ही है? हम SHA-256 जैसे 'हैशिंग' का उपयोग करते हैं। यह एक डिजिटल फिंगरप्रिंट है।" },
            { image: 'module6_scene4.jpg', text: "बिना मैचिंग हैश और 'चेन ऑफ कस्टडी' के, सबूत अदालत से बाहर कर दिए जाएंगे।" }
        ],
        caseStudy: {
            title: "डेटाबेस चोरी की जांच",
            scenario: "अर्जुन डिजिटल साक्ष्य के सुनहरे नियम सीखता है: परिवर्तनों को रोकने के लिए राइट-ब्लॉकर का उपयोग करें, अखंडता के लिए हैशिंग का उपयोग करें, और सख्त चेन ऑफ कस्टडी बनाए रखें।"
        },
        quiz: [
            { id: 1, text: "'Write-Blocker' का उपयोग क्यों किया जाता है?", options: ["इमेजिंग को तेज़ करने के लिए", "मूल साक्ष्य (original evidence) में किसी भी बदलाव को रोकने के लिए", "ड्राइव को एन्क्रिप्ट करने के लिए", "टूटी हुई फाइलों को ठीक करने के लिए"], correctAnswer: 1 },
            { id: 2, text: "क्या साबित करता है कि ड्राइव की कॉपी मूल के समान है?", options: ["एक फोटो", "एक मैचिंग हैश वैल्यू (Hash value - MD5/SHA)", "फ़ोल्डर की संख्या", "फाइल का नाम"], correctAnswer: 1 },
            { id: 3, text: "डिजिटल फॉरेंसिक में 'इमेजिंग' (Imaging) क्या है?", options: ["कंप्यूटर की फोटो लेना", "स्टोरेज डिवाइस की बिट-दर-बिट कॉपी बनाना", "वीडियो एडिट करना", "फिंगरप्रिंट स्कैन करना"], correctAnswer: 1 },
            { id: 4, text: "'लाइव फॉरेंसिक' (Live Forensics) क्या है?", options: ["अपराध को लाइव देखना", "सिस्टम के चालू होने पर उसका विश्लेषण करना", "एआई का उपयोग करना", "कचरे के डिब्बे से फाइलें रिकवर करना"], correctAnswer: 1 },
            { id: 5, text: "'डेड फॉरेंसिक' (Dead Forensics) क्या है?", options: ["टूटे हुए कंप्यूटर का विश्लेषण", "सिस्टम के बंद होने पर उसका विश्लेषण करना", "पुराने केस का विश्लेषण", "खोई हुई फाइलों की खोज"], correctAnswer: 1 },
            { id: 6, text: "'हैश फ़ंक्शन' (Hash Function) क्या है?", options: ["एक प्रकार का नाश्ता", "एक एल्गोरिदम जो डेटा को एक अद्वितीय निश्चित आकार के स्ट्रिंग में बदलता है", "एक छँटाई विधि", "फाइलें डिलीट करने का तरीका"], correctAnswer: 1 },
            { id: 7, text: "'चेन ऑफ कस्टडी' (Chain of Custody) क्या है?", options: ["एक लोहे की जंजीर", "एक दस्तावेज जो दिखाता है कि संग्रह से लेकर अदालत तक साक्ष्य को किसने संभाला", "पासवर्ड का एक क्रम", "जांचकर्ताओं की एक टीम"], correctAnswer: 1 },
            { id: 8, text: "इमेजिंग के बाद विशेष रूप से हैशिंग का उपयोग क्यों किया जाता है?", options: ["फाइलों को छोटा करने के लिए", "यह सत्यापित करने के लिए कि कॉपी बनने के बाद से बदली नहीं है", "कॉपी को एन्क्रिप्ट करने के लिए", "फाइलों को नाम देने के लिए"], correctAnswer: 1 },
            { id: 9, text: "'स्लैक स्पेस' (Slack Space) क्या है?", options: ["गेमिंग के लिए जगह", "फाइल के अंत और क्लस्टर के अंत के बीच की खाली जगह", "रैम जोड़ने के लिए जगह", "डिस्क का धीमा हिस्सा"], correctAnswer: 1 },
            { id: 10, text: "'बिट-स्ट्रीम' (Bit-Stream) कॉपी क्या है?", options: ["लाइव स्ट्रीम देखना", "हटाए गए फाइलों सहित पूरे ड्राइव का सेक्टर-दर-सेक्टर क्लोन", "फोटो की तेज़ कॉपी", "क्लाउड बैकअप"], correctAnswer: 1 },
            { id: 11, text: "क्या संदिग्ध के असली डिवाइस पर जांच करना ठीक है?", options: ["हाँ, समय बचाने के लिए", "नहीं, हमेशा एक सत्यापित फॉरेंसिक कॉपी पर ही काम करें", "केवल तभी जब संदिग्ध अनुमति दे", "केवल तभी जब आप एक वरिष्ठ अधिकारी हों"], correctAnswer: 1 },
            { id: 12, text: "फॉरेंसिक संदर्भ में 'मेटाडेटा' (Metadata) क्या है?", options: ["एक प्रकार का वायरस", "डेटा के बारे में डेटा (टाइमस्टैम्प, स्वामित्व, स्थान)", "सिर्फ फाइल का साइज", "व्यक्ति की जीवनी"], correctAnswer: 1 },
            { id: 13, text: "'फाइल रिकवरी' (File Recovery) क्या है?", options: ["नई फाइलें खरीदना", "डिस्क के 'unallocated' स्पेस से हटाई गई फाइलों को बहाल करना", "एक दूषित एक्सेल शीट को ठीक करना", "क्लाउड से डाउनलोड करना"], correctAnswer: 1 },
            { id: 14, text: "'स्टेग्नोग्राफी' (Steganography) क्या है?", options: ["डायनासोर का अध्ययन", "किसी अन्य फाइल (जैसे इमेज) के भीतर जानकारी छिपाना", "कोडिंग का एक प्रकार", "नेटवर्क को ब्लॉक करना"], correctAnswer: 1 },
            { id: 15, text: "'एग्जीबिट नंबर' (Exhibit Number) क्या है?", options: ["एक ईनाम नंबर", "एकत्र किए गए साक्ष्य के प्रत्येक टुकड़े के लिए एक अद्वितीय पहचानकर्ता", "संदिग्ध का फोन नंबर", "अपराध की तारीख"], correctAnswer: 1 }
        ]
    },
    {
        id: 7,
        title: 'मेमोरी फॉरेंसिक (Memory Forensics)',
        level: 'Intermediate',
        duration: '2.5 घंटे',
        videoUrl: 'https://www.youtube.com/embed/H0z9R5R2X9k',
        storyboard: [
            { image: 'module7_scene1.jpg', text: "एंटीवायरस कहता है कि डिस्क साफ़ है, लेकिन मशीन अभी भी दूसरों पर हमला कर रही है। मैलवेयर कहाँ छिपा है?" },
            { image: 'module7_scene2.jpg', text: "यह रैम (RAM) में है! यह 'फाइललेस मैलवेयर' है। रैम 'वोलाटाइल डेटा' है—पावर बंद होने पर यह गायब हो जाता है।" },
            { image: 'module7_scene3.jpg', text: "मेमोरी डंप का विश्लेषण करके, हम छिपी हुई प्रक्रियाओं और डिक्रिप्टेड पासवर्ड का पता लगा सकते हैं।" },
            { image: 'module7_scene4.jpg', text: "नॉन-वोलाटाइल डेटा रहता है; वोलाटाइल डेटा उड़ जाता है। पहले मेमोरी कैप्चर करें!" }
        ],
        caseStudy: {
            title: "फाइललेस मैलवेयर की ट्रैकिंग",
            scenario: "अर्जुन को ऐसे मैलवेयर का सामना करना पड़ता है जो डिस्क पर कोई निशान नहीं छोड़ता है। साइबर-सिया उसे रैम (वोलाटाइल डेटा) का विश्लेषण करना सिखाती है।"
        },
        quiz: [
            { id: 1, text: "'वोलैटाइल डेटा' (Volatile Data) क्या है?", options: ["डेटा जो फट जाता है", "डेटा जो पावर जाने पर गायब हो जाता है", "एन्क्रिप्टेड डेटा", "बिग डेटा"], correctAnswer: 1 },
            { id: 2, text: "रैम का विश्लेषण क्यों महत्वपूर्ण है?", options: ["कैश साफ़ करने के लिए", "फाइललेस मैलवेयर और लाइव प्रक्रियाओं को खोजने के लिए", "कंप्यूटर तेज करने के लिए", "ब्लू स्क्रीन ठीक करने के लिए"], correctAnswer: 1 },
            { id: 3, text: "'मेमोरी डंप' (Memory Dump) क्या है?", options: ["रैम को डिलीट करना", "एक विशिष्ट समय पर रैम की सामग्री का स्नैपशॉट", "एक धीमा कंप्यूटर", "एक प्रकार का डेटाबेस"], correctAnswer: 1 },
            { id: 4, text: "'फाइललेस मालवेयर' (Fileless Malware) क्या है?", options: ["मालवेयर जो डिस्क डिटेक्शन से बचने के लिए केवल रैम में रहता है", "मालवेयर जिसका कोई नाम नहीं है", "यूएसबी ड्राइव पर मालवेयर", "मालवेयर जो क्लाउड में छिपता है"], correctAnswer: 0 },
            { id: 5, text: "रैम कैप्चर करने से पहले आपको कंप्यूटर को बंद क्यों नहीं करना चाहिए?", options: ["यह पावर बटन को तोड़ सकता है", "रैम की सामग्री हमेशा के लिए खो जाएगी", "ओएस अपडेट हो जाएगा", "इसे फिर से शुरू करने में बहुत समय लगता है"], correctAnswer: 1 },
            { id: 6, text: "मेमोरी में 'इंजेक्टेड कोड' (Injected Code) क्या है?", options: ["टीकाकरण के लिए उपयोग किया जाने वाला कोड", "एक वैध प्रक्रिया के स्पेस में डाला गया दुर्भावनापूर्ण कोड", "एक नया सॉफ्टवेयर अपडेट", "कोड जो फ़ॉन्ट बदलता है"], correctAnswer: 1 },
            { id: 7, text: "'डायनेमिक विश्लेषण' (Dynamic Analysis) क्या है?", options: ["मेमोरी में चलते समय प्रोग्राम का विश्लेषण करना", "बाहरी हार्डवेयर का विश्लेषण करना", "कंप्यूटर की कीमत का विश्लेषण करना", "उपयोगकर्ता के नाम का विश्लेषण करना"], correctAnswer: 0 },
            { id: 8, text: "विंडोज 'रजिस्ट्री' (Registry) क्या है?", options: ["उन लोगों की सूची जिन्होंने पीसी खरीदा", "एक डेटाबेस जो कॉन्फ़िगरेशन सेटिंग्स को स्टोर करता है", "एक अतिथि पुस्तक", "संस्थापित गेम की सूची"], correctAnswer: 1 },
            { id: 9, text: "'प्रोसेस होलोइंग' (Process Hollowing) क्या है?", options: ["एक प्रक्रिया को हटाना", "मालवेयर द्वारा एक वैध प्रक्रिया के कोड को अपने कोड से बदलना", "एक नई प्रक्रिया बनाना", "एक प्रक्रिया को तेज़ करना"], correctAnswer: 1 },
            { id: 10, text: "'रूटकिट' (Rootkit) क्या है?", options: ["पौधों के लिए एक टूलकिट", "मालवेयर जिसे खुद को और अन्य मालवेयर को ओएस से छिपाने के लिए डिज़ाइन किया गया है", "एक प्रकार का एडमिन पासवर्ड", "एक नेटवर्क केबल"], correctAnswer: 1 },
            { id: 11, text: "मेमोरी फॉरेंसिक के लिए कौन सा टूल मानक है?", options: ["एक्सेल", "वोलैटिलिटी (Volatility)", "क्रोम", "नोटपैड"], correctAnswer: 1 },
            { id: 12, text: "रैम में मालवेयर के अलावा और क्या पाया जा सकता है?", options: ["केवल इमेज", "डिक्रिप्टेड पासवर्ड, खुले टैब और चैट इतिहास", "केवल ओएस का नाम", "सीपीयू का तापमान"], correctAnswer: 1 },
            { id: 13, text: "'Pagefile.sys' क्या है?", options: ["एक ईबुक फाइल", "सिस्टम की रैम के विस्तार के रूप में उपयोग की जाने वाली डिस्क फाइल", "एक प्रकार का सिस्टम लॉग", "प्रिंटिंग के लिए एक फाइल"], correctAnswer: 1 },
            { id: 14, text: "'Hiberfil.sys' क्या है?", options: ["हाइबरनेशन सेटिंग्स के लिए एक फाइल", "कंप्यूटर के हाइबरनेट होने पर रैम स्नैपशॉट वाली फाइल", "एक प्रकार का एन्क्रिप्शन", "दस्तावेजों का बैकअप"], correctAnswer: 1 },
            { id: 15, text: "'वोलैटिलिटी का क्रम' (Order of Volatility) क्या है?", options: ["फाइलों का वर्णमाला क्रम", "डेटा कितनी जल्दी गायब हो जाता है, इसके आधार पर संग्रह का क्रम", "सबसे खतरनाक वायरस की सूची", "अदालत में अपराधों का क्रम"], correctAnswer: 1 }
        ]
    },
    {
        id: 8,
        title: 'इंसिडेंट रिस्पॉन्स (Incident Response)',
        level: 'Intermediate',
        duration: '2 घंटे',
        videoUrl: 'https://www.youtube.com/embed/bMne5_Iq_q8',
        storyboard: [
            { image: 'module8_scene1.jpg', text: "सब कुछ लॉक है! क्या हमें अपना डेटा वापस पाने के लिए फिरौती (ransom) देनी चाहिए?" },
            { image: 'module8_scene2.jpg', text: "कभी भुगतान न करें! हम PICERL चक्र का पालन करते हैं: तैयारी, पहचान, रोकथाम, उन्मूलन, रिकवरी।" },
            { image: 'module8_scene3.jpg', text: "फॉरेंसिक न्याय की रक्षा के बारे में है। चाहे आप स्कूल में हों या कॉलेज में, आज ही सीखना शुरू करें।" },
            { image: 'module8_scene4.jpg', text: "अब आप एक 'साइबर स्पार्क' हैं। एक सुरक्षित इंटरनेट की राह दिखाएं।" }
        ],
        caseStudy: {
            title: "रैनसमवेयर संकट",
            scenario: "एक कंपनी रैनसमवेयर की चपेट में आ जाती है। अर्जुन इंसिडेंट रिस्पॉन्स में PICERL चक्र और फॉरेंसिक तैयारी के महत्व को सीखता है।"
        },
        quiz: [
            { id: 1, text: "इंसिडेंट रिस्पॉन्स में 'PICERL' का क्या अर्थ है?", options: ["बचाव और देखभाल", "Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned", "व्यक्तिगत पहचान की जांच", "पैकेट पहचान चक्र"], correctAnswer: 1 },
            { id: 2, text: "रैनसमवेयर होने पर क्या आपको फिरौती देनी चाहिए?", options: ["हाँ, तुरंत", "नहीं, यह अपराध को बढ़ावा देता है और कोई गारंटी नहीं देता", "केवल अगर यह सस्ता है", "केवल अगर आपके पास बैकअप नहीं है"], correctAnswer: 1 },
            { id: 3, text: "'Containment' (रोकथाम) में क्या शामिल है?", options: ["सभी फाइलें डिलीट करना", "खतरे को आगे फैलने से रोकना", "नया हार्डवेयर खरीदना", "संदिग्ध को गिरफ्तार करना"], correctAnswer: 1 },
            { id: 4, text: "PICERL चक्र में 'Eradication' (उन्मूलन) क्या है?", options: ["खबरों में रिपोर्ट करना", "पर्यावरण से खतरे को पूरी तरह से हटाना", "कंप्यूटर को रीस्टार्ट करना", "नए कर्मचारी रखना"], correctAnswer: 1 },
            { id: 5, text: "'Recovery' (रिकवरी) चरण क्या है?", options: ["फिरौती देना", "स्वच्छ बैकअप से सिस्टम और डेटा को बहाल करना", "छुट्टी पर जाना", "एक नई कंपनी शुरू करना"], correctAnswer: 1 },
            { id: 6, text: "'Lessons Learned' (सीखे गए पाठ) को एक महत्वपूर्ण कदम क्यों माना जाता है?", options: ["कर्मचारियों को दोष देने के लिए", "सुरक्षा में सुधार करने और भविष्य की घटनाओं को रोकने के लिए", "एक लंबी रिपोर्ट लिखने के लिए", "पैसे बचाने के लिए"], correctAnswer: 1 },
            { id: 7, text: "'फॉरेंसिक तैयारी' (Forensic Readiness) क्या है?", options: ["लड़ने के लिए तैयार रहना", "उल्लंघन होने पर डिजिटल साक्ष्य एकत्र करने के लिए तैयार रहना", "तेज़ इंटरनेट होना", "नवीनतम एंटीवायरस का उपयोग करना"], correctAnswer: 1 },
            { id: 8, text: "'इंडिकेटर ऑफ कॉम्प्रोमाइज' (IOC) क्या है?", options: ["एक तेज़ कंप्यूटर", "एक संकेत कि सिस्टम में सेंध लगाई गई है (जैसे दुर्भावनापूर्ण आईपी)", "एक नया सॉफ्टवेयर फीचर", "एक सकारात्मक उपयोगकर्ता समीक्षा"], correctAnswer: 1 },
            { id: 9, text: "आपको आम तौर पर फिरौती क्यों नहीं देनी चाहिए?", options: ["यह बहुत महंगा है", "यह डेटा रिकवरी की गारंटी नहीं देता और अधिक अपराध को बढ़ावा देता है", "यह एक धीमी प्रक्रिया है", "बैंक ट्रांसफर को ब्लॉक कर सकता है"], correctAnswer: 1 },
            { id: 10, text: "इंसिडेंट रिस्पॉन्स में 'प्लेबुक' (Playbook) क्या है?", options: ["खेलों की एक किताब", "एक विशिष्ट प्रकार की घटना के लिए कदमों का एक दस्तावेज सेट", "कर्मचारियों के नामों की सूची", "एक मार्केटिंग रणनीति"], correctAnswer: 1 },
            { id: 11, text: "CSIRT की प्राथमिक भूमिका क्या है?", options: ["बिक्री और विपणन", "सुरक्षा घटनाओं को संभालने वाला विशेषज्ञ समूह", "कार्यालय की सफाई", "मानव संसाधन"], correctAnswer: 1 },
            { id: 12, text: "डिजास्टर रिकवरी में 'हॉट साइट' (Hot Site) क्या है?", options: ["उच्च तापमान वाला स्थान", "तुरंत कार्यभार संभालने के लिए तैयार पूर्ण कार्यात्मक बैकअप साइट", "रेगिस्तान में एक डेटा सेंटर", "एक लोकप्रिय वेबसाइट"], correctAnswer: 1 },
            { id: 13, text: "'डेटा एक्सफिल्ट्रेशन' (Data Exfiltration) क्या है?", options: ["पुराने डेटा को डिलीट करना", "सिस्टम से डेटा का अनधिकृत स्थानांतरण", "अपनी फोटो का बैकअप लेना", "डेटाबेस की सफाई"], correctAnswer: 1 },
            { id: 14, text: "उल्लंघन के दौरान संचार को सीमित करना क्यों महत्वपूर्ण है?", options: ["फोन बिल बचाने के लिए", "हमलावर को आपके रिस्पॉन्स स्टेप्स जानने से रोकने के लिए", "कर्मचारियों को डराने से बचने के लिए", "इसे खबरों से गुप्त रखने के लिए"], correctAnswer: 1 },
            { id: 15, text: "'पहचान' (Identification) चरण का लक्ष्य क्या है?", options: ["नए कर्मचारियों की पहचान करना", "यह निर्धारित करना कि क्या कोई घटना वास्तव में एक सुरक्षा घटना है", "नया सॉफ्टवेयर खरीदना", "कंप्यूटर को नाम देना"], correctAnswer: 1 }
        ]
    },
    {
        id: 9,
        title: 'एथिकल हैकिंग और पेनटेस्टिंग (Ethical Hacking & Pentesting)',
        level: 'Graduate',
        duration: '4 घंटे',
        videoUrl: 'https://www.youtube.com/embed/dz7Ntp7KQGA',
        caseStudy: {
            title: "एडवांस्ड भेद्यता मूल्यांकन",
            scenario: "एक बड़े नेटवर्क के लिए पेनिट्रेशन टेस्टिंग की आवश्यकता है। आपको इंफ्रास्ट्रक्चर को सुरक्षित करने के लिए वेब कमजोरियों और नेटवर्क गलत कॉन्फ़िगरेशन की पहचान करनी होगी।"
        },
        quiz: [
            { id: 1, text: "पेनिट्रेशन टेस्टिंग का प्राथमिक लक्ष्य क्या है?", options: ["डेटा चुराना", "सुरक्षा सुधारने के लिए कमजोरियों की पहचान करना", "नेटवर्क को धीमा करना", "कर्मचारियों की निगरानी करना"], correctAnswer: 1 },
            { id: 2, text: "'SQL इंजेक्शन' किसे निशाना बनाता है?", options: ["ऑपरेटिंग सिस्टम", "एप्लिकेशन की डेटाबेस लेयर", "यूजर का वेब ब्राउज़र", "फिजिकल हार्डवेयर"], correctAnswer: 1 }
        ]
    },
    {
        id: 10,
        title: 'मालवेयर विश्लेषण और रिवर्स इंजीनियरिंग (Malware Analysis & Reverse Engineering)',
        level: 'Graduate',
        duration: '5 घंटे',
        videoUrl: 'https://www.youtube.com/embed/b3M_00fIuV4',
        caseStudy: {
            title: "एक परिष्कृत ट्रोजन का विश्लेषण",
            scenario: "एक संवेदनशील सर्वर पर एक अज्ञात बाइनरी पाई जाती है। स्टेटिक और डायनेमिक विश्लेषण का उपयोग करके, आप उसके व्यवहार और मूल का निर्धारण करते हैं।"
        },
        quiz: [
            { id: 1, text: "मालवेयर शोध में 'स्टेटिक विश्लेषण' क्या है?", options: ["सैंडबॉक्स में मालवेयर चलाना", "कोड को बिना क्रियान्वित किए जांचना", "फिजिकल कंप्यूटर का विश्लेषण", "फ़ाइल को तुरंत हटाना"], correctAnswer: 1 },
            { id: 2, text: "'सैंडबॉक्स' क्या है?", options: ["वायरस के लिए खेल का मैदान", "संदिग्ध फाइलों को सुरक्षित रूप से चलाने के लिए एक विलगित वातावरण", "एक प्रकार का एन्क्रिप्शन", "बैकअप स्टोरेज"], correctAnswer: 1 }
        ]
    },
    {
        id: 11,
        title: 'क्लाउड सुरक्षा आर्किटेक्चर (Cloud Security Architecture)',
        level: 'Graduate',
        duration: '4.5 घंटे',
        videoUrl: 'https://www.youtube.com/embed/3_V7N1_j-kQ',
        caseStudy: {
            title: "मल्टी-क्लाउड वातावरण को सुरक्षित करना",
            scenario: "AWS, Azure और Google Cloud में एक सुरक्षित इंफ्रास्ट्रक्चर का निर्माण करना, IAM और डेटा एन्क्रिप्शन सुनिश्चित करना।"
        },
        quiz: [
            { id: 1, text: "साझा जिम्मेदारी मॉडल क्या है?", options: ["AWS सभी सुरक्षा संभालता है", "प्रदाता इंफ्रास्ट्रक्चर सुरक्षित करता है; यूजर डेटा सुरक्षित करता है", "सुरक्षा वैकल्पिक है", "केवल यूजर जिम्मेदार है"], correctAnswer: 1 },
            { id: 2, text: "IAM क्या है?", options: ["इंटरनेट एक्सेस मैनेजर", "आइडेंटिटी एंड एक्सेस मैनेजमेंट", "एकीकृत एप्लिकेशन निगरानी", "आंतरिक संपत्ति मैपिंग"], correctAnswer: 1 }
        ]
    },
    {
        id: 12,
        title: 'साइबर सुरक्षा में एआई और मशीन लर्निंग (AI & Machine Learning in Cybersecurity)',
        level: 'Graduate',
        duration: '3 घंटे',
        videoUrl: 'https://www.youtube.com/embed/3M_E-N7d69A',
        caseStudy: {
            title: "AI-संचालित खतरे का पता लगाना",
            scenario: "रीयल-टाइम में विषम व्यवहार का पता लगाने के लिए मशीन लर्निंग मॉडल का कार्यान्वयन।"
        },
        quiz: [
            { id: 1, text: "AI खतरे का पता लगाने में कैसे मदद करता है?", options: ["विशेषज्ञों को बदलकर", "बड़े पैमाने पर पैटर्न और विसंगतियों की पहचान करके", "सभी इंटरनेट उपयोगकर्ताओं को प्रतिबंधित करके", "नेटवर्क विलंबता बढ़ाकर"], correctAnswer: 1 },
            { id: 2, text: "'फॉल्स पॉजिटिव' क्या है?", options: ["खतरे की सही पहचान", "एक अलर्ट जो वैध गतिविधि को गलत तरीके से दुर्भावनापूर्ण बताता है", "एक छूटा हुआ हमला", "एक सफल लॉगिन"], correctAnswer: 1 }
        ]
    }
];


const studyModulesKn: StudyModuleType[] = [
    {
        id: 1,
        title: 'ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್ (The Digital Footprint)',
        level: 'Beginner',
        duration: '1 ಗಂಟೆ',
        videoUrl: 'https://www.youtube.com/embed/4lWv9_o7WCc',
        storyboard: [
            { image: 'module1_scene1.jpg', text: "ಕೊನೆಗೂ! ಕಾಲೇಜಿನ ಮೊದಲ ದಿನ. ಜಗತ್ತಿಗೆ ತಿಳಿಯಲಿ!" },
            { image: 'module1_scene2.jpg', text: "ನಿಲ್ಲು, ಅರ್ಜುನ್! ಆ ಐಡಿ ಕಾರ್ಡ್ ನೋಡು. ನಿನ್ನ ಪೂರ್ತಿ ಹೆಸರು, ರೋಲ್ ನಂಬರ್ ಮತ್ತು ನಿನ್ನ ವಿಳಾಸವೂ ಕಾಣಿಸುತ್ತಿದೆ." },
            { image: 'module1_scene3.jpg', text: "ನೀವು ಪೋಸ್ಟ್ ಮಾಡುವ ಪ್ರತಿಯೊಂದು ಫೋಟೋ, ಲಿಂಕ್ ಅಥವಾ ಕಮೆಂಟ್ ಒಂದು 'ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್' ಅನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ. ಇದು ಎಂದಿಗೂ ಸಂಪೂರ್ಣವಾಗಿ ಮಾಯವಾಗುವುದಿಲ್ಲ. ಹ್ಯಾಕರ್‌ಗಳು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ತಯಾರಿಸಲು ಈ ವಿವರಗಳನ್ನು ಬಳಸುತ್ತಾರೆ." },
            { image: 'module1_scene4.jpg', text: "ಪೋಸ್ಟ್ ಮಾಡುವ ಮೊದಲು, ನಿಲ್ಲಿಸಿ ಮತ್ತು ಯೋಚಿಸಿ. ಈ ಮಾಹಿತಿ ವೈಯಕ್ತಿಕವಾಗಿದೆಯೇ? ಹಾಗಿದ್ದರೆ, ಅದನ್ನು ಆಫ್‌ಲೈನ್‌ನಲ್ಲೇ ಇಡಿ." }
        ],
        caseStudy: {
            title: "ಡಿಜಿಟಲ್ ಪ್ರಪಂಚದ ಬಳಕೆ",
            scenario: "ರಾಹುಲ್ ಕಾಲೇಜಿನ ಮೊದಲ ದಿನ ತನ್ನ ಐಡಿ ಫೋಟೋ ಪೋಸ್ಟ್ ಮಾಡುತ್ತಾನೆ. ಸೈಬರ್-ಸಿಯಾ ಸಣ್ಣ ವಿಷಯಗಳೂ ಹೇಗೆ ಶಾಶ್ವತ ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್ ಸೃಷ್ಟಿಸುತ್ತವೆ ಎಂದು ವಿವರಿಸುತ್ತಾಳೆ."
        },
        quiz: [
            { id: 1, text: "'ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್' ಎಂದರೇನು?", options: ["ಫೈಲ್ ಗಾತ್ರ", "ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ಚಟುವಟಿಕೆಯ ಶಾಶ್ವತ ದಾಖಲೆ", "ಒಂದು ರೀತಿಯ ಸ್ನೀಕರ್", "ಕಂಪ್ಯೂಟರ್‌ಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುವ ಸಾಫ್ಟ್‌ವೇರ್"], correctAnswer: 1 },
            { id: 2, text: "ಐಡಿ ಕಾರ್ಡ್ ಫೋಟೋ ಹಂಚಿಕೊಳ್ಳುವುದು ಅಪಾಯಕಾರಿ ಏಕೆ?", options: ["ಕಡಿಮೆ ಬೆಳಕು", "ಇದು ರೋಲ್ ನಂಬರ್ ಮತ್ತು ವಿಳಾಸದಂತಹ ಖಾಸಗಿ ಡೇಟಾವನ್ನು ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ", "ಐಡಿಗಳ ಫೋಟೋ ತೆಗೆಯುವುದು ಕಾನೂನುಬಾಹಿರ", "ಫೈಲ್ ಗಾತ್ರ ತುಂಬಾ ದೊಡ್ಡದಾಗಿದೆ"], correctAnswer: 1 },
            { id: 3, text: "ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್ ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅಳಿಸಬಹುದೇ?", options: ["ಹೌದು, 10 ವರ್ಷಗಳ ನಂತರ", "ಇಲ್ಲ, ಎಲ್ಲವನ್ನೂ ತೆಗೆದುಹಾಕುವುದು ಅಸಾಧ್ಯ", "ಸರ್ಕಾರದಿಂದ ಮಾತ್ರ ಸಾಧ್ಯ", "ಹೌದು, ನಿಮ್ಮ ಅಕೌಂಟ್ ಡಿಲೀಟ್ ಮಾಡಿದರೆ"], correctAnswer: 1 },
            { id: 4, text: "ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್ ಅನ್ನು ಯಾರು ನೋಡಬಹುದು?", options: ["ನಿಮ್ಮ ಸ್ನೇಹಿತರು ಮಾತ್ರ", "ನಿಮ್ಮ ಕುಟುಂಬ ಮಾತ್ರ", "ಉದ್ಯೋಗದಾತರು, ಹ್ಯಾಕರ್‌ಗಳು ಮತ್ತು ಅಪರಿಚಿತರು", "ನಿಮ್ಮ ಹೊರತು ಯಾರೂ ಇಲ್ಲ"], correctAnswer: 2 },
            { id: 5, text: "'ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಸ್ಕ್ರಬ್ಬಿಂಗ್' ಎಂದರೇನು?", options: ["ನಿಮ್ಮ ಪೂರ್ತಿ ಪ್ರೊಫೈಲ್ ಡಿಲೀಟ್ ಮಾಡುವುದು", "ಹಳೆಯ ಅಥವಾ ಅನುಚಿತ ಪೋಸ್ಟ್‌ಗಳನ್ನು ತೆಗೆದುಹಾಕುವುದು", "ಇತರರ ರಹಸ್ಯಗಳನ್ನು ಹುಡುಕುವುದು", "ಹೆಚ್ಚು ಬಾರಿ ಪೋಸ್ಟ್ ಮಾಡುವುದು"], correctAnswer: 1 },
            { id: 6, text: "ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನದ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರಬಹುದು?", options: ["ಯಾವುದೇ ಪರಿಣಾಮ ಬೀರಲ್ಲ", "ಉದ್ಯೋಗದಾತರು ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ಉಪಸ್ಥಿತಿಯನ್ನು ಪರೀಕ್ಷಿಸಬಹುದು", "ನೀವು ಕಲಾವಿದರಾಗಿದ್ದರೆ ಮಾತ್ರ ಸಹಾಯ ಮಾಡುತ್ತದೆ", "ಕೇವಲ ನಟರ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ"], correctAnswer: 1 },
            { id: 7, text: "ಪೋಸ್ಟ್ ಅನ್ನು ಲೈಕ್ ಮಾಡುವುದು ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್‌ನ ಭಾಗವೇ?", options: ["ಇಲ್ಲ, ನೀವು ಬರೆಯುವುದು ಮಾತ್ರ", "ಹೌದು, ಪ್ರತಿ ಚಟುವಟಿಕೆಯೂ ಮುಖ್ಯ", "ನೀವು ಅದನ್ನು ಶೇರ್ ಮಾಡಿದರೆ ಮಾತ್ರ", "ನೀವು ಕಾಮೆಂಟ್ ಮಾಡಿದರೆ ಮಾತ್ರ"], correctAnswer: 1 },
            { id: 8, text: "ಹಂಚಿಕೊಂಡ ಫೋಟೋದಲ್ಲಿ 'ಮೆಟಾಡೇಟಾ' (metadata) ಎಂದರೇನು?", options: ["ಬಳಸಿದ ಫಿಲ್ಟರ್", "ಫೋಟೋದಲ್ಲಿರುವ ವ್ಯಕ್ತಿ", "ಸ್ಥಳ ಮತ್ತು ಸಮಯದಂತಹ ಎಂಬೆಡೆಡ್ ಡೇಟಾ", "ಕ್ಯಾಪ್ಶನ್"], correctAnswer: 2 },
            { id: 9, text: "ಗೌಪ್ಯತೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಏಕೆ ಪರಿಶೀಲಿಸಬೇಕು?", options: ["ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಬದಲಾಯಿಸಲು", "ಯಾರು ನಿಮ್ಮನ್ನು ಬ್ಲಾಕ್ ಮಾಡಿದ್ದಾರೆ ಎಂದು ನೋಡಲು", "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು ತಮ್ಮ ಡೇಟಾ ನೀತಿಗಳನ್ನು ಆಗಾಗ್ಗೆ ಅಪ್‌ಡೇಟ್ ಮಾಡುತ್ತವೆ", "ಹೆಚ್ಚು ಫಾಲೋವರ್ಸ್ ಪಡೆಯಲು"], correctAnswer: 2 },
            { id: 10, text: "'ಘೋಸ್ಟ್' (ghost) ಅಕೌಂಟ್‌ಗಳು ಎಂದರೇನು?", options: ["ಹೆದರಿಸುವ ಅಕೌಂಟ್‌ಗಳು", "ನಿಮ್ಮ ಡೇಟಾ ಹೊಂದಿರುವ ನಿಷ್ಕ್ರಿಯ ಅಕೌಂಟ್‌ಗಳು", "ವೆರಿಫೈಡ್ ಅಕೌಂಟ್‌ಗಳು", "ಸೀಕ್ರೆಟ್ ಅಕೌಂಟ್‌ಗಳು"], correctAnswer: 1 },
            { id: 11, text: "ಕುಕೀಸ್‌ಗಳು ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ?", options: ["ಅವು ಕಂಪ್ಯೂಟರ್ ವೇಗ ಹೆಚ್ಚಿಸುತ್ತವೆ", "ಅವು ವಿವಿಧ ಸೈಟ್‌ಗಳಲ್ಲಿ ನಿಮ್ಮ ಬ್ರೌಸಿಂಗ್ ಇತಿಹಾಸವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತವೆ", "ಅವು ಕೇವಲ ಲಾಗಿನ್‌ಗಾಗಿ ಇವೆ", "ಅವು ವೈರಸ್‌ನಿಂದ ರಕ್ಷಿಸುತ್ತವೆ"], correctAnswer: 1 },
            { id: 12, text: "'ಆಕ್ಟಿವ್' (Active) ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್ ಎಂದರೇನು?", options: ["ನಿಮ್ಮ ಅರಿವಿಲ್ಲದೆ ಸಂಗ್ರಹಿಸಿದ ಡೇಟಾ", "ನೀವು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಹಂಚಿಕೊಳ್ಳುವ ಡೇಟಾ (ಉದಾ: ಪೋಸ್ಟ್)", "ನಿಮ್ಮ ದೈನಂದಿನ ಹೆಜ್ಜೆಗಳ ಸಂಖ್ಯೆ", "ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ವೇಗ"], correctAnswer: 1 },
            { id: 13, text: "'ಪ್ಯಾಸಿವ್' (Passive) ಡಿಜಿಟಲ್ ಫುಟ್‌ಪ್ರಿಂಟ್ ಎಂದರೇನು?", options: ["ನೀವು ಉದ್ದೇಶಕ್ಕಾಗಿ ಹಂಚಿಕೊಳ್ಳುವ ಡೇಟಾ", "ನಿಮ್ಮ ನೇರ ಕ್ರಮವಿಲ್ಲದೆ ಸಂಗ್ರಹಿಸಿದ ಡೇಟಾ (ಉದಾ: IP ಅಡ್ರೆಸ್)", "ಹಳೆಯ ಇಮೇಲ್ ಡಿಲೀಟ್ ಮಾಡುವುದು", "ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಬಳಸದಿರುವುದು"], correctAnswer: 1 },
            { id: 14, text: "'ಓವರ್-ಶೇರಿಂಗ್' ಒಂದು ಭದ್ರತಾ ಅಪಾಯ ಏಕೆ?", options: ["ಇದಕ್ಕೆ ಬಹಳ ಸಮಯ ಬೇಕು", "ಇದು ಸೋಷಿಯಲ್ ಇಂಜಿನಿಯರಿಂಗ್ ದಾಳಿಗಳಿಗೆ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ", "ಇದು ಸ್ಟೋರೇಜ್ ತುಂಬಿಸುತ್ತದೆ", "ಇದು ಸ್ನೇಹಿತರಿಗೆ ಕಿರಿಕಿರಿ ಉಂಟುಮಾಡುತ್ತದೆ"], correctAnswer: 1 },
            { id: 15, text: "ನಿಮ್ಮ ಫುಟ್‌ಪ್ರಿಂಟ್ ನಿರ್ವಹಿಸಲು ಉತ್ತಮ ಮೊದಲ ಹೆಜ್ಜೆ ಯಾವುದು?", options: ["ಎಲ್ಲಾ ಆಪ್‌ಗಳನ್ನು ಡಿಲೀಟ್ ಮಾಡುವುದು", "ಸರ್ಚ್ ಇಂಜಿನ್‌ನಲ್ಲಿ ನಿಮ್ಮನ್ನು ನೀವೇ ಹುಡುಕುವುದು", "ನಿಮ್ಮ ಫೋನ್ ಬದಲಾಯಿಸುವುದು", "ನಕಲಿ ಹೆಸರನ್ನು ಬಳಸುವುದು"], correctAnswer: 1 }
        ]
    },
    {
        id: 2,
        title: 'ಸೋಷಿಯಲ್ ಎಂಜಿನಿಯರಿಂಗ್ (Social Engineering De-coded)',
        level: 'Beginner',
        duration: '1 ಗಂಟೆ',
        videoUrl: 'https://www.youtube.com/embed/1E-UoYwM9Zk',
        storyboard: [
            { image: 'module2_scene1.jpg', text: "ಅಯ್ಯೋ! ಯಾರೋ ನನ್ನ ಹಣ ಕದಿಯಲು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದಾರೆ ಎಂದು ಬ್ಯಾಂಕ್ ಹೇಳುತ್ತಿದೆ. ನಾನು ಬೇಗ ಏನಾದರೂ ಮಾಡಬೇಕು!" },
            { image: 'module2_scene2.jpg', text: "ಅವನು 'ವೆರಿಫಿಕೇಶನ್ ಕೋಡ್' ಕೇಳುತ್ತಿದ್ದಾನೆಯೇ? ಅರ್ಜುನ್, ಅದು ಓಟಿಪಿ (OTP)! ನಿಲ್ಲಿಸು!" },
            { image: 'module2_scene3.jpg', text: "ಸ್ಕ್ಯಾಮರ್‌ಗಳು ನಿಮ ನ್ನನ್ನು ಹೆದರಿಸಲು 'ಭಯ' ಮತ್ತು 'ತುರ್ತು' ಸನ್ನಿವೇಶಗಳನ್ನು ಬಳಸುತ್ತಾರೆ. ನಿಜವಾದ ಬ್ಯಾಂಕ್‌ಗಳು ಎಂದಿಗೂ ಫೋನ್‌ನಲ್ಲಿ ಓಟಿಪಿ ಕೇಳುವುದಿಲ್ಲ." },
            { image: 'module2_scene4.jpg', text: "ಯಾರಾದರೂ ಆತಂಕ ಪಡುವಂತೆ ಮಾಡುತ್ತಿದ್ದಾರೆ ಎಂದರೆ, ಅದು ಸ್ಕ್ಯಾಮ್ ಇರಬಹುದು. ಫೋನ್ ಕಟ್ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಬ್ಯಾಂಕಿನ ಅಧಿಕೃತ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ." }
        ],
        caseStudy: {
            title: "ತುರ್ತು ಫೋನ್ ಕರೆ",
            scenario: "ಅರ್ಜುನ್‌ಗೆ 'ಬ್ಯಾಂಕ್ ಸಪೋರ್ಟ್' ಹೆಸರಿನಲ್ಲಿ ಫೋನ್ ಕರೆ ಬರುತ್ತದೆ. ಹಣದ ವಹಿವಾಟು ತಡೆಯಲು ಓಟಿಪಿ ಕೇಳುತ್ತಾರೆ. ಸ್ಕ್ಯಾಮರ್‌ಗಳು ಹೇಗೆ ಜನರನ್ನು ವಂಚಿಸುತ್ತಾರೆ ಎಂದು ಸೈಬರ್-ಸಿಯಾ ತಿಳಿಸುತ್ತಾಳೆ."
        },
        quiz: [
            { id: 1, text: "ಸ್ಕ್ಯಾಮರ್‌ಗಳು ಜನರನ್ನು ಗಾಬರಿಗೊಳಿಸಲು ಏನನ್ನು ಬಳಸುತ್ತಾರೆ?", options: ["ಜೋರಾದ ಸಂಗೀತ", "ಭಯ ಮತ್ತು ತುರ್ತು (Fear and Urgency)", "ತಾಂತ್ರಿಕ ಪದಗಳು", "ಉಚಿತ ಉಡುಗೊರೆಗಳು"], correctAnswer: 1 },
            { id: 2, text: "ಫೋನ್ ಕರೆಯಲ್ಲಿ ಬ್ಯಾಂಕ್‌ನವರು ಎಂದು ಹೇಳಿಕೊಂಡರೆ ನೀವು ಒಟಿಪಿ ಹಂಚಿಕೊಳ್ಳಬೇಕೇ?", options: ["ಹೌದು, ಹಣ ಉಳಿಸಲು", "ಅವರು ವಿನಯಶೀಲರಾಗಿದ್ದರೆ ಮಾತ್ರ", "ಯಾವತ್ತೂ ಇಲ್ಲ", "ಕೇವಲ 'ವೆರಿಫಿಕೇಶನ್'ಗಾಗಿ ಇದ್ದರೆ ಮಾತ್ರ"], correctAnswer: 2 },
            { id: 3, text: "'ಸೋಷಿಯಲ್ ಇಂಜಿನಿಯರಿಂಗ್' ಎಂದರೇನು?", options: ["ಕಂಪ್ಯೂಟರ್ ತಯಾರಿಸುವುದು", "ಮಾಹಿತಿ ಪಡೆಯಲು ಜನರನ್ನು ಮಾನಸಿಕವಾಗಿ ಕುಶಲತೆಯಿಂದ ನಿರ್ವಹಿಸುವುದು", "ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಆಪ್ ಕೋಡ್ ಮಾಡುವುದು", "ಸಾಮಾಜಿಕ ಕೌಶಲಗಳನ್ನು ಸುಧಾರಿಸುವುದು"], correctAnswer: 1 },
            { id: 4, text: "'ಫಿಶಿಂಗ್' (Phishing) ಎಂದರೇನು?", options: ["ಒಂದು ಆಟ", "ಡೇಟಾ ಕದಿಯಲು ವಂಚನೆಯ ಇಮೇಲ್/ಪಠ್ಯಗಳು", "ಸಾಫ್ಟ್‌ವೇರ್ ಅಪ್‌ಡೇಟ್ ಮಾಡುವುದು", "ನಿಧಾನ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಸರಿಪಡಿಸುವುದು"], correctAnswer: 1 },
            { id: 5, text: "'ವಿಶಿಂಗ್' (Vishing) ಎಂದರೇನು?", options: ["ವಿಡಿಯೋ ಎಡಿಟಿಂಗ್", "ವಾಯ್ಸ್ ಫಿಶಿಂಗ್ ಅಥವಾ ಫೋನ್ ಹಗರಣ", "ವರ್ಚುವಲ್ ಫಿಶಿಂಗ್", "ದೃಷ್ಟಿ ಪರೀಕ್ಷೆ"], correctAnswer: 1 },
            { id: 6, text: "'ಸ್ಮಿಶಿಂಗ್' (Smishing) ಎಂದರೇನು?", options: ["ಸಣ್ಣ ಫಿಶಿಂಗ್", "ಎಸ್‌ಎಂಎಸ್ (SMS) ಫಿಶಿಂಗ್", "ಸ್ಮಾರ್ಟ್ ಫಿಶಿಂಗ್", "ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಫಿಶಿಂಗ್"], correctAnswer: 1 },
            { id: 7, text: "ನಿಮಗೆ 'ಬ್ಯಾಂಕ್'ನಿಂದ ಅನುಮಾನಾಸ್ಪದ ಕರೆ ಬಂದರೆ ನೀವು ಏನು ಮಾಡಬೇಕು?", options: ["ಅವರಿಗೆ ಬೇಕಾದುದನ್ನು ಬೇಗನೆ ನೀಡಿ", "ಫೋನ್ ಕಟ್ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಕಾರ್ಡ್‌ನ ಹಿಂದೆ ಇರುವ ಅಧಿಕೃತ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ", "ಅವರು ಮತ್ತೆ ಕರೆ ಮಾಡುವುದನ್ನು ಕಾಯಿರಿ", "ಅವರು ನೀಡಿದ 'ಸುರಕ್ಷಿತ' ಅಕೌಂಟ್‌ಗೆ ಹಣ ವರ್ಗಾಯಿಸಿ"], correctAnswer: 1 },
            { id: 8, text: "ಸ್ಕ್ಯಾಮರ್‌ಗಳು 'ತುರ್ತು' (urgency) ಅನ್ನು ಏಕೆ ಬಳಸುತ್ತಾರೆ?", options: ["ಸಮಯ ಉಳಿಸಲು", "ನೀವು ಸ್ಪಷ್ಟವಾಗಿ ಮತ್ತು ತಾರ್ಕಿಕವಾಗಿ ಯೋಚಿಸಲು ಸಾಧ್ಯವಾಗದಿರಲಿ ಎಂದು", "ಏಕೆಂದರೆ ಅವರು ಅವಸರದಲ್ಲಿದ್ದಾರೆ", "ಅವರು ವೃತ್ತಿಪರರು ಎಂದು ತೋರಿಸಲು"], correctAnswer: 1 },
            { id: 9, text: "ಫಿಶಿಂಗ್ ಇಮೇಲ್‌ನಲ್ಲಿ ಸಾಮಾನ್ಯ ಎಚ್ಚರಿಕೆ ಚಿಹ್ನೆ ಯಾವುದು?", options: ["ಕಂಪನಿಯ ಲೋಗೋ", "'ಆತ್ಮೀಯ ಗ್ರಾಹಕರೇ' ಎಂಬ ಸಾಮಾನ್ಯ ಶುಭಾಶಯ ಮತ್ತು ಗಾಬರಿ ಸೃಷ್ಟಿಸುವುದು", "ದಿನಾಂಕ", "ಹೋಮ್ ಪೇಜ್‌ನ ಲಿಂಕ್"], correctAnswer: 1 },
            { id: 10, text: "'ಬ್ಲಾಕ್ ಮಾಡಲಾದ ಅಕೌಂಟ್' ಬಗ್ಗೆ ಬಂದ ಪಠ್ಯ ಸಂದೇಶದ ಲಿಂಕ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡುವುದು ಸುರಕ್ಷಿತವೇ?", options: ["ಹೌದು, ಅದನ್ನು ಬೇಗ ಸರಿಪಡಿಸಲು", "ಇಲ್ಲ, ಯಾವಾಗಲೂ ಅಧಿಕೃತ ಆಪ್ ಅಥವಾ ವೆಬ್‌ಸೈಟ್ ಮಾತ್ರ ಬಳಸಿ", "ಅದು ಅಧಿಕೃತವಾಗಿ ಕಂಡರೆ ಮಾತ್ರ", "ಹೌದು, ಅವರಿಗೆ ನಿಮ್ಮ ಹೆಸರು ತಿಳಿದಿದ್ದರೆ"], correctAnswer: 1 },
            { id: 11, text: "'ಪ್ರಿಟೆಕ್ಸ್ಟಿಂಗ್' (Pretexting) ಎಂದರೇನು?", options: ["ಪ್ರಿಂಟರ್ ಪರೀಕ್ಷಿಸುವುದು", "ನಂಬಿಕೆ ಗಳಿಸಲು ಒಂದು ಸುಳ್ಳು ಸನ್ನಿವೇಶ ಅಥವಾ ಗುರುತನ್ನು ಸೃಷ್ಟಿಸುವುದು", "ಪಠ್ಯ ಸಂದೇಶ ಕಳುಹಿಸುವುದು", "ಪುಸ್ತಕ ಓದುವುದು"], correctAnswer: 1 },
            { id: 12, text: "ಸೋಷಿಯಲ್ ಇಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ 'ಬೈಟಿಂಗ್' (Baiting) ಎಂದರೇನು?", options: ["ಪ್ರಶಂಸೆ ಪಡೆಯುವುದು", "ಮಾಲ್‌ವೇರ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಲು ಏನನ್ನಾದರೂ ಉಚಿತವಾಗಿ (ಉದಾ: USB ಅಥವಾ ಡೌನ್‌ಲೋಡ್) ನೀಡುವುದು", "ಆಟ ಆಡುವುದು", "ಟೈಮರ್ ಸೆಟ್ ಮಾಡುವುದು"], correctAnswer: 1 },
            { id: 13, text: "ಸೋಷಿಯಲ್ ಇಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ 'ಕ್ವಿಡ್ ಪ್ರೊ ಕ್ವೋ' (Quid pro quo) ಎಂದರೇನು?", options: ["ಒಂದು ಲ್ಯಾಟಿನ್ ನುಡಿಗಟ್ಟು", "ಮಾಹಿತಿಗೆ ಬದಲಾಗಿ ಸೇವೆ ಅಥವಾ ಲಾಭವನ್ನು ನೀಡುವುದು", "ಒಂದು ರೀತಿಯ ಫೈರ್‌ವಾಲ್", "ಒಂದು ಸುರಕ್ಷಿತ ಪಾಸ್‌ವರ್ಡ್"], correctAnswer: 1 },
            { id: 14, text: "ಕರೆ ಮಾಡುವವರ ಗುರುತನ್ನು ನೀವು ನಿಜವಾಗಿಯೂ ಹೇಗೆ ಪರಿಶೀಲಿಸಬಹುದು?", options: ["ಅವರ ಹೆಸರು ಕೇಳಿ", "ಅವರ ಕಾಲರ್ ಐಡಿ ಪರೀಕ್ಷಿಸಿ (ಅದನ್ನು ಬದಲಾಯಿಸಬಹುದು)", "ಸ್ವತಃ ಕಂಪನಿಯ ಅಧಿಕೃತ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡುವ ಮೂಲಕ", "ಅದನ್ನು ಸಾಬೀತುಪಡಿಸಲು ಅವರಿಗೆ ಹೇಳುವ ಮೂಲಕ"], correctAnswer: 2 },
            { id: 15, text: "ನೀವು ಆಕಸ್ಮಿಕವಾಗಿ ಒಟಿಪಿ ಹಂಚಿಕೊಂಡಿದ್ದೀರಿ ಎಂದು ತಿಳಿದರೆ ಮೊದಲು ಏನು ಮಾಡಬೇಕು?", options: ["ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆ ಬದಲಾಯಿಸಿ", "ಅಕೌಂಟ್ ಬ್ಲಾಕ್ ಮಾಡಲು ತಕ್ಷಣ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ", "ಸಂದೇಶ ಡಿಲೀಟ್ ಮಾಡಿ", "ಮುಂದಿನ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಾಗಿ ಕಾಯಿರಿ"], correctAnswer: 1 }
        ]
    },
    {
        id: 3,
        title: 'ಮೊಬೈಲ್ ಭದ್ರತೆ (The Mobile Fortress)',
        level: 'Beginner',
        duration: '1.5 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/8G-U6vN7W9k',
        storyboard: [
            { image: 'module3_scene1.jpg', text: "ಈ ಗೇಮ್ ಪ್ಲೇ ಸ್ಟೋರ್‌ನಲ್ಲಿ ₹500 ಇದೆ, ಆದರೆ ಇಲ್ಲಿ ಉಚಿತವಾಗಿ ಸಿಗುತ್ತಿದೆ! ನಾನು ಇದನ್ನು ಈಗಲೇ ಡೌನ್‌ಲೋಡ್ ಮಾಡುತ್ತಿದ್ದೇನೆ." },
            { image: 'module3_scene2.jpg', text: "ನಿಲ್ಲು, ಅರ್ಜುನ್! ಒಂದು ಸಾಮಾನ್ಯ ಗೇಮ್‌ಗೆ ನಿನ್ನ ಮೆಸೇಜ್ (SMS) ಮತ್ತು ಮೈಕ್ರೋಫೋನ್ ಪ್ರವೇಶವೇಕೆ ಬೇಕು? ಇದು ಒಂದು 'ಟ್ರೋಜನ್'." },
            { image: 'module3_scene3.jpg', text: "ಯಾವಾಗಲೂ ಅಧಿಕೃತ ಸ್ಟೋರ್‌ಗಳಿಂದಲೇ ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ. ಅವು ವೈರಸ್‌ಗಳ ಬಗ್ಗೆ ಪರೀಕ್ಷೆ ಮಾಡುತ್ತವೆ. ಥರ್ಡ್ ಪಾರ್ಟಿ ಎಪಿಕೆಗಳು ಮೊಬೈಲ್ ಹ್ಯಾಕ್ ಆಗಲು ಪ್ರಮುಖ ಕಾರಣ." },
            { image: 'module3_scene4.jpg', text: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಅನ್ನು ಒಂದು ಕೋಟೆಯಂತೆ ಭದ್ರವಾಗಿಡಿ. ಪರ್ಮಿಷನ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಂಬಲರ್ಹ ಮೂಲಗಳನ್ನೇ ಬಳಸಿ." }
        ],
        caseStudy: {
            title: "'ಉಚಿತ' ಎಪಿಕೆ ಬಲೆ",
            scenario: "ಅರ್ಜುನ್ ಉಚಿತವಾಗಿ ಗೇಮ್ ಪಡೆಯಲು ಬೇರೆಯದೇ ಸೈಟ್‌ನಿಂದ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಪ್ರಯತ್ನಿಸುತ್ತಾನೆ. ಆ ಆಪ್ ಹೇಗೆ ಫೋನ್‌ನ ಮಾಹಿತಿಯನ್ನು ಕದಿಯುತ್ತದೆ ಎಂಬುದನ್ನು ಸೈಬರ್-ಸಿಯಾ ತೋರಿಸುತ್ತಾಳೆ."
        },
        quiz: [
            { id: 1, text: "ಮೊಬೈಲ್ ಆಪ್‌ಗಳಲ್ಲಿ 'ಟ್ರೋಜನ್' (Trojan) ಎಂದರೇನು?", options: ["ಅತಿ ವೇಗದ ಡೌನ್‌ಲೋಡ್ ವೇಗ", "ಅಧಿಕೃತ ಎಂದು ನಟಿಸುವ ದುರುದ್ದೇಶಪೂರಿತ ಆಪ್", "ಇತಿಹಾಸದ ಬಗ್ಗೆ ಒಂದು ಆಟ", "ಒಂದು ರೀತಿಯ ಬ್ಯಾಟರಿ ಸೇವರ್"], correctAnswer: 1 },
            { id: 2, text: "ಆಪ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಸ್ಥಳ ಯಾವುದು?", options: ["ಯಾವುದಾದರೊಂದು ವೆಬ್‌ಸೈಟ್‌ಗಳು", "ವಾಟ್ಸಾಪ್ ಗ್ರೂಪ್‌ಗಳು", "ಅಧಿಕೃತ ಸ್ಟೋರ್‌ಗಳಾದ ಪ್ಲೇ ಸ್ಟೋರ್/ಆಪ್ ಸ್ಟೋರ್", "ಫೈಲ್ ಶೇರಿಂಗ್ ಸೈಟ್‌ಗಳು"], correctAnswer: 2 },
            { id: 3, text: "ಆಪ್ ಅನುಮತಿಗಳನ್ನು (app permissions) ನೀವು ಏಕೆ ಪರಿಶೀಲಿಸಬೇಕು?", options: ["ಫೈಲ್ ಸೈಜ್ ನೋಡಲು", "ಏಕೆಂದರೆ ಆಪ್‌ಗಳು ಅಗತ್ಯವಿಲ್ಲದ ಡೇಟಾಗೆ ಪ್ರವೇಶ ಕೇಳಬಹುದು", "ಆಪ್ ಐಕಾನ್ ಬದಲಾಯಿಸಲು", "ಆಪ್ ವೇಗ ಹೆಚ್ಚಿಸಲು"], correctAnswer: 1 },
            { id: 4, text: "'ಸೈಡ್‌ಲೋಡಿಂಗ್' (Sideloading) ಎಂದರೇನು?", options: ["ಫೋನ್ ಅನ್ನು ಸೈಡ್‌ನಿಂದ ಲೋಡ್ ಮಾಡುವುದು", "ಅಧಿಕೃತ ಸ್ಟೋರ್ ಹೊರತುಪಡಿಸಿ ಬೇರೆ ಮೂಲಗಳಿಂದ ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು", "ಒಂದೇ ಬಾರಿಗೆ ಎರಡು ಆಪ್ ಬಳಸುವುದು", "ಫೋಟೋ ವರ್ಗಾಯಿಸುವುದು"], correctAnswer: 1 },
            { id: 5, text: "'ರೂಟಿಂಗ್' (Rooting) ಅಥವಾ 'ಜೈಲ್ ಬ್ರೇಕಿಂಗ್' (Jailbreaking) ಎಂದರೇನು?", options: ["ಒಡೆದ ಸ್ಕ್ರೀನ್ ಸರಿಪಡಿಸುವುದು", "ತಯಾರಕರ ನಿರ್ಬಂಧಗಳನ್ನು ತೆಗೆದುಹಾಕುವುದು, ಇದು ಭದ್ರತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ", "ಓಎಸ್ ಅಪ್‌ಡೇಟ್ ಮಾಡುವುದು", "ಬ್ಯಾಟರಿ ವೇಗವಾಗಿ ಚಾರ್ಜ್ ಮಾಡುವುದು"], correctAnswer: 1 },
            { id: 6, text: "ದುರುದ್ದೇಶಪೂರಿತ ಆಪ್ ನಿಮ್ಮ ಎಸ್‌ಎಂಎಸ್ ಅನುಮತಿಗಳನ್ನು ಹೇಗೆ ಬಳಸಬಹುದು?", options: ["ಉಚಿತ ಮೆಸೇಜ್ ಕಳುಹಿಸಲು", "ನಿಮ್ಮ ಒಟಿಪಿ ಕೋಡ್‌ಗಳನ್ನು ಓದಲು ಅಥವಾ ಸ್ಪ್ಯಾಮ್ ಮೆಸೇಜ್ ಕಳುಹಿಸಲು", "ಸಿಗ್ನಲ್ ಬಲಪಡಿಸಲು", "ನಿಮ್ಮ ಕಾಂಟ್ಯಾಕ್ಟ್ಸ್ ಬ್ಯಾಕಪ್ ಮಾಡಲು"], correctAnswer: 1 },
            { id: 7, text: "ಮೊಬೈಲ್ ಸಾಧನದಲ್ಲಿ 'ರ‍್ಯಾನ್ಸಂವೇರ್' (Ransomware) ಎಂದರೇನು?", options: ["ಒಂದು ಪೇಯ್ಡ್ ಆಪ್", "ಹಣ ನೀಡುವವರೆಗೆ ನಿಮ್ಮ ಸ್ಕ್ರೀನ್ ಅಥವಾ ಡೇಟಾವನ್ನು ಲಾಕ್ ಮಾಡುವ ಮಾಲ್‌ವೇರ್", "ಒಂದು ರೀತಿಯ ಬ್ಯಾಟರಿ", "ಒಂದು ವೇಗದ ಚಾರ್ಜರ್"], correctAnswer: 1 },
            { id: 8, text: "ಸ್ಕ್ರೀನ್ ಲಾಕ್ ಏಕೆ ಮುಖ್ಯ?", options: ["ಫೋನ್ ಚೆಂದ ಕಾಣಲು", "ಫೋನ್ ಕಳೆದುಹೋದರೆ ಅಥವಾ ಕಳುವಾದರೆ ಅನಧಿಕೃತ ಪ್ರವೇಶ ತಡೆಯಲು", "ಬ್ಯಾಟರಿ ಉಳಿಸಲು", "ಸ್ಕ್ರೀನ್ ಕೊಳೆಯಾಗದಂತೆ ನೋಡಿಕೊಳ್ಳಲು"], correctAnswer: 1 },
            { id: 9, text: "'ರಿಮೋಟ್ ವೈಪ್' (Remote wipe) ಎಂದರೇನು?", options: ["ಬಟ್ಟೆಯಿಂದ ಫೋನ್ ಸ್ವಚ್ಛಗೊಳಿಸುವುದು", "ಕಳೆದುಹೋದ ಫೋನ್‌ನಿಂದ ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಅಳಿಸುವ ಸೌಲಭ್ಯ", "ಒಂದು ರೀತಿಯ ಕಾರ್ ವೈಪರ್", "ಫೋಟೋಗಳನ್ನು ಒಂದೊಂದಾಗಿ ಅಳಿಸುವುದು"], correctAnswer: 1 },
            { id: 10, text: "ಸಾರ್ವಜನಿಕ ವೈ-ಫೈ (Wi-Fi) ನಲ್ಲಿ ಬ್ಯಾಂಕಿಂಗ್ ಮಾಡುವುದು ಸುರಕ್ಷಿತವೇ?", options: ["ಹೌದು, ಇದು ಅನುಕೂಲಕರ", "ಇಲ್ಲ, ವಿಪಿಎನ್ ಅಥವಾ ಮೊಬೈಲ್ ಡೇಟಾ ಬಳಸದ ಹೊರತು ಸುರಕ್ಷಿತವಲ್ಲ", "ಕೇವಲ ಹೋಟೆಲ್‌ಗಳಲ್ಲಿ ಮಾತ್ರ", "ಕಡಿಮೆ ಹಣ ಇದ್ದರೆ ಮಾತ್ರ"], correctAnswer: 1 },
            { id: 11, text: "ಟೂ-ಫ್ಯಾಕ್ಟರ್ ಅಥೆಂಟಿಕೇಶನ್ (2FA) ಎಂದರೇನು?", options: ["ಎರಡು ಬಾರಿ ಲಾಗಿನ್ ಮಾಡುವುದು", "ಕೋಡ್ ಅಥವಾ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್‌ನಂತಹ ಎರಡನೇ ಹಂತದ ಭದ್ರತೆ ಸೇರಿಸುವುದು", "ಎರಡು ಬೇರೆ ಬೇರೆ ಫೋನ್ ಬಳಸುವುದು", "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಎರಡು ಬಾರಿ ಬದಲಾಯಿಸುವುದು"], correctAnswer: 1 },
            { id: 12, text: "ಭದ್ರತೆಗಾಗಿ ಸಾಫ್ಟ್‌ವೇರ್ ಅಪ್‌ಡೇಟ್‌ಗಳು ಏಕೆ ಮುಖ್ಯ?", options: ["ಅವು ಹೆಚ್ಚು ಎಮೋಜಿ ಸೇರಿಸುತ್ತವೆ", "ಅವು ಹ್ಯಾಕರ್‌ಗಳು ಬಳಸಬಹುದಾದ ಭದ್ರತಾ ದೋಷಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತವೆ", "ಅವು ಫೋನ್ ಅನ್ನು ಭಾರವಾಗಿಸುತ್ತವೆ", "ಅವು ಹಳೆಯ ಫೋಟೋಗಳನ್ನು ಅಳಿಸುತ್ತವೆ"], correctAnswer: 1 },
            { id: 13, text: "ಮೊಬೈಲ್ ಫೋನ್‌ನಲ್ಲಿ 'ಎನ್‌ಕ್ರಿಪ್ಶನ್' (Encryption) ಎಂದರೇನು?", options: ["ಹೆಚ್ಚು ಮೆಮೊರಿ ಸೇರಿಸುವುದು", "ಡೇಟಾವನ್ನು ಕೀ ಇಲ್ಲದೆ ಓದಲು ಸಾಧ್ಯವಾಗದಂತೆ ಮಾಡುವುದು", "ಭಾಷೆ ಬದಲಾಯಿಸುವುದು", "ಕುಕೀಸ್‌ಗಳನ್ನು ಅಳಿಸುವುದು"], correctAnswer: 1 },
            { id: 14, text: "ಮೊಬೈಲ್ ಮಾಲ್‌ವೇರ್‌ನ ಸಂಭವನೀಯ ಸೂಚನೆ ಯಾವುದು?", options: ["ಹೊಸ ವಾಲ್‌ಪೇಪರ್", "ಬ್ಯಾಟರಿ ಅತಿ ಬೇಗ ಖಾಲಿಯಾಗುವುದು ಮತ್ತು ಫೋನ್ ಬಿಸಿಯಾಗುವುದು", "ಸ್ಪಷ್ಟವಾದ ವಾಯ್ಸ್ ಕಾಲ್", "ಬಲವಾದ ವೈ-ಫೈ ಸಿಗ್ನಲ್"], correctAnswer: 1 },
            { id: 15, text: "'ಕ್ಲೋನ್ ಮಾಡಿದ ಆಪ್' (Cloned app) ಎಂದರೇನು?", options: ["ಅವಳಿ ಮಕ್ಕಳಿಗಾಗಿ ಒಂದು ಆಪ್", "ಲಾಗಿನ್ ಡೇಟಾ ಕದಿಯಲು ಬಳಸುವ ನಕಲಿ ಆಪ್", "ಒಂದು ರೀತಿಯ ಬ್ಯಾಕಪ್", "ಒಂದು ಮಿರರ್ ಆಪ್"], correctAnswer: 1 }
        ]
    },
    {
        id: 4,
        title: 'ಭಾರತದಲ್ಲಿ ಇಂಟರ್ನೆಟ್ ಕಾನೂನು (Internet Laws in India)',
        level: 'Beginner',
        duration: '1.5 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/V1y8z6_6w_k',
        storyboard: [
            { image: 'module4_scene1.jpg', text: "ಇದು ಕೂಡ ಅಪರಾಧವೇ? ಕೇವಲ ಒಂದು ಆನ್‌ಲೈನ್ ಪ್ರೊಫೈಲ್‌ಗಾಗಿ ಪೊಲೀಸರು ಸಹಾಯ ಮಾಡಲು ಸಾಧ್ಯವೇ?" },
            { image: 'module4_scene2.jpg', text: "ಹೌದು! ಐಟಿ ಆಕ್ಟ್ 2000 ಅಡಿಯಲ್ಲಿ, ಸೆಕ್ಷನ್ 66C ಗುರುತಿನ ಕಳ್ಳತನ ಮತ್ತು ಸೆಕ್ಷನ್ 66E ಗೌಪ್ಯತೆಯ ಉಲ್ಲಂಘನೆಗೆ ಸಂಬಂಧಿಸಿದೆ." },
            { image: 'module4_scene3.jpg', text: "ವರದಿ ಮಾಡಲು ಭಯಪಡಬೇಡಿ. ನ್ಯಾಷನಲ್ ಹೆಲ್ಪ್‌ಲೈನ್ 1930 ಬಳಸಿ ಅಥವಾ ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ." },
            { image: 'module4_scene4.jpg', text: "ಕಾನೂನು ಭೌತಿಕ ಪ್ರಪಂಚದಂತೆಯೇ ಡಿಜಿಟಲ್ ಪ್ರಪಂಚದಲ್ಲೂ ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸುತ್ತದೆ. ಮಾಹಿತಿಯನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿರಿ." }
        ],
        caseStudy: {
            title: "ನೇಹಾಳ ನಕಲಿ ಪ್ರೊಫೈಲ್",
            scenario: "ನೇಹಾಳ ಹೆಸರಲ್ಲಿ ಯಾರೋ ನಕಲಿ ಪ್ರೊಫೈಲ್ ಸೃಷ್ಟಿಸುತ್ತಾರೆ. ಐಟಿ ಆಕ್ಟ್ 2000 ಅಡಿಯಲ್ಲಿ ಇದಕ್ಕೆ ಹೇಗೆ ಶಿಕ್ಷೆ ಇರುತ್ತದೆ ಮತ್ತು 1930 ಸಂಖ್ಯೆಗೆ ದೂರು ನೀಡುವುದು ಹೇಗೆ ಎಂದು ಸೈಬರ್-ಸಿಯಾ ತಿಳಿಸುತ್ತಾಳೆ."
        },
        quiz: [
            { id: 1, text: "ಭಾರತದ ಪರ್ಸನಲ್ ಡೇಟಾ ಪ್ರೊಟೆಕ್ಷನ್ ಬಿಲ್ (2023) ಮುಖ್ಯ ಉದ್ದೇಶವೇನು?", options: ["ಕಂಪ್ಯೂಟರ್ ಬೆಲೆ ಕಡಿಮೆ ಮಾಡುವುದು", "ಜನರ ಡೇಟಾ ಗೌಪ್ಯತೆ ಮತ್ತು ಭದ್ರತೆಯನ್ನು ಖಚಿತಪಡಿಸುವುದು", "ಹೆಚ್ಚು ಸಾಫ್ಟ್‌ವೇರ್ ತಯಾರಿಸುವುದು", "ಇಂಟರ್ನೆಟ್ ವೇಗ ಹೆಚ್ಚಿಸುವುದು"], correctAnswer: 1 },
            { id: 2, text: "ಸೈಬರ್ ಅಪರಾಧಗಳನ್ನು ವರದಿ ಮಾಡಲು ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಯಾವುದು?", options: ["socialmedia.com", "cybercrime.gov.in", "google.co.in", "police.com"], correctAnswer: 1 },
            { id: 3, text: "ಭಾರತದ ಪ್ರಮುಖ ಸೈಬರ್ ಕಾನೂನು ಯಾವುದು?", options: ["ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಕಾಯ್ದೆ 2000 (IT Act 2000)", "ಭಾರತೀಯ ಮೋಟಾರ್ ವಾಹನ ಕಾಯ್ದೆ", "ಪರಿಸರ ಸಂರಕ್ಷಣಾ ಕಾಯ್ದೆ", "ಶಿಕ್ಷಣ ಹಕ್ಕು ಕಾಯ್ದೆ"], correctAnswer: 0 },
            { id: 4, text: "'ಐಟಿ ಕಾಯ್ದೆ' (IT Act) ಯ ಉದ್ದೇಶವೇನು?", options: ["ಕಂಪ್ಯೂಟರ್ ತರಬೇತಿ ನೀಡುವುದು", "ಸೈಬರ್ ಅಪರಾಧಗಳಿಗೆ ಕಾನೂನು ಚೌಕಟ್ಟು ಮತ್ತು ಶಿಕ್ಷೆ ಒದಗಿಸುವುದು", "ಹೊಸ ಲ್ಯಾಪ್‌ಟಾಪ್ ಮಾರಾಟ ಮಾಡುವುದು", "ಗೇಮಿಂಗ್ ಸೈಟ್‌ಗಳನ್ನು ನಿಯಂತ್ರಿಸುವುದು"], correctAnswer: 1 },
            { id: 5, text: "ಹ್ಯಾಕಿಂಗ್‌ಗೆ ಶಿಕ್ಷೆಯನ್ನು ಯಾವ ವಿಭಾಗದ ಅಡಿಯಲ್ಲಿ ನೀಡಲಾಗುತ್ತದೆ?", options: ["ವಿಭಾಗ 10", "ವಿಭಾಗ 66", "ವಿಭಾಗ 1", "ವಿಭಾಗ 100"], correctAnswer: 1 },
            { id: 6, text: "ಬೇರೆಯವರ ಪಾಸ್‌ವರ್ಡ್ ಬಳಸಿ ಲಾಗಿನ್ ಆಗುವುದು ಸೈಬರ್ ಅಪರಾಧವೇ?", options: ["ಹೌದು, ಇದು ಗುರುತಿನ ಕಳ್ಳತನ ಮತ್ತು ಅಪರಾಧ", "ಇಲ್ಲ, ಅವರು ನಿಮ್ಮ ಸ್ನೇಹಿತರಾಗಿದ್ದರೆ ಪರವಾಗಿಲ್ಲ", "ಕೇವಲ ನೀವು ಏನನ್ನೂ ಬದಲಾಯಿಸದಿದ್ದರೆ", "ಇಲ್ಲ, ಅದು ಕೇವಲ ಒಂದು ತಮಾಷೆ"], correctAnswer: 0 },
            { id: 7, text: "'ಸೈಬರ್ ಭಯೋತ್ಪಾದನೆ'ಗೆ (Cyber Terrorism) ಶಿಕ್ಷೆಯ ಅವಧಿ ಎಷ್ಟು?", options: ["1 ವರ್ಷ", "ಜೀವಾವಧಿ ಶಿಕ್ಷೆ", "ಕೇವಲ ದಂಡ", "6 ತಿಂಗಳು"], correctAnswer: 1 },
            { id: 8, text: "ನಿಮ್ಮ ಮೇಲೆ ಸೈಬರ್ ದಾಳಿಯಾದರೆ ನೀವು ಎಲ್ಲಿ ದೂರು ನೀಡಬೇಕು?", options: ["ನಿಮ್ಮ ಶಾಲೆಯಲ್ಲಿ ಮಾತ್ರ", "ಸ್ಥಳೀಯ ಸೈಬರ್ ಕ್ರೈಮ್ ಪೊಲೀಸ್ ಸ್ಟೇಷನ್ ಅಥವಾ ರಾಷ್ಟ್ರೀಯ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ", "ಸೋಷಿಯಲ್ ಮೀಡಿಯಾದಲ್ಲಿ ಪೋಸ್ಟ್ ಮಾಡಿ", "ಸುಮ್ಮನಿದ್ದು ಮರೆತುಬಿಡಿ"], correctAnswer: 1 },
            { id: 9, text: "ಸೈಬರ್ ಅಪರಾಧಗಳನ್ನು ವರದಿ ಮಾಡಲು ಅಧಿಕೃತ ರಾಷ್ಟ್ರೀಯ ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆ ಯಾವುದು?", options: ["100", "1930", "101", "108"], correctAnswer: 1 },
            { id: 10, text: "'ಡೇಟಾ ಪ್ರೈವಸಿ' (Data Privacy) ಕಾನೂನು ಎಂದರೇನು?", options: ["ಒಳ್ಳೆಯ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳುವ ಕಾನೂನು", "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಯಾರಿಗೆ ಶೇರ್ ಮಾಡಬೇಕೆಂದು ನಿರ್ಧರಿಸುವ ಹಕ್ಕು", "ಹೆಚ್ಚು ಮೆಮೊರಿ ಬಳಸುವ ಹಕ್ಕು", "ಒಂದೇ ಬಾರಿಗೆ ಎರಡು ಫೋನ್ ಬಳಸುವ ಹಕ್ಕು"], correctAnswer: 1 },
            { id: 11, text: "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅಶ್ಲೀಲ ವಿಷಯವನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದು ಸೈಬರ್ ಕಾನೂನಿನ ಅಡಿಯಲ್ಲಿ ಅಪರಾಧವೇ?", options: ["ಇಲ್ಲ, ಇದು ಅಭಿವ್ಯಕ್ತಿ ಸ್ವಾತಂತ್ರ್ಯ", "ಹೌದು, ವಿಭಾಗ 67 ರ ಅಡಿಯಲ್ಲಿ ಇದು ದೊಡ್ಡ ಅಪರಾಧ", "ಕೇವಲ ಅದು ಫೋಟೋ ಆಗಿದ್ದರೆ ಮಾತ್ರ", "ಇಲ್ಲ, ಅದು ಕೇವಲ ಟೈಮ್ ಪಾಸ್"], correctAnswer: 1 },
            { id: 12, text: "'ಪರಿಹಾರ' (Compensation) ಎಂದರೇನು?", options: ["ಉಚಿತ ಉಡುಗೊರೆ", "ದಾಳಿಯಿಂದ ಉಂಟಾದ ನಷ್ಟಕ್ಕೆ ನೀಡಲಾಗುವ ಹಣಕಾಸಿನ ಮೊತ್ತ", "ಒಂದು ರೀತಿಯ ಅವಾರ್ಡ್", "ಒಂದು ಆಪ್"], correctAnswer: 1 },
            { id: 13, text: "ಸೈಬರ್ ಕಾನೂನಿನಲ್ಲಿ 'ಒಪ್ಪಿಗೆ' (Consent) ಎಂದರೆ ಏನು?", options: ["ಡೇಟಾ ಬಳಸಲು ನೀಡಿದ ಸ್ಪಷ್ಟ ಅನುಮತಿ", "ಯಾರನ್ನಾದರೂ ಬ್ಲಾಕ್ ಮಾಡುವುದು", "ಪಾಸ್‌ವರ್ಡ್ ಹಂಚಿಕೊಳ್ಳುವುದು", "ಫೋಟೋ ಲೈಕ್ ಮಾಡುವುದು"], correctAnswer: 0 },
            { id: 14, text: "ಚಿಕ್ಕ ಮಕ್ಕಳು ಮಾಡುವ ಸೈಬರ್ ಅಪರಾಧಗಳನ್ನು ಹೇಗೆ ಎದುರಿಸಲಾಗುತ್ತದೆ?", options: ["ಸಾಮಾನ್ಯ ಹಿರಿಯರ ಜೈಲಿಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ", "ಜುಪಿಟಲ್ ಜಸ್ಟೀಸ್ (Juvenile Justice) ಕಾಯ್ದೆಯ ಅಡಿಯಲ್ಲಿ", "ಅವರನ್ನು ಶಾಲೆ ಬಿಡಿಸಲಾಗುತ್ತದೆ", "ಯಾವುದೇ ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ"], correctAnswer: 1 },
            { id: 15, text: "'ಡೀಪ್‌ಫೇಕ್' (Deepfake) ಬಳಸಿ ವಂಚನೆ ಮಾಡುವುದು ಕಾನೂನುಬಾಹಿರವೇ?", options: ["ಹೌದು, ಅದು ತಂತ್ರಜ್ಞಾನದ ದುರ್ಬಳಕೆ ಮತ್ತು ಶಿಕ್ಷಾರ್ಹ ಅಪರಾಧ", "ಇಲ್ಲ, ಅದು ಕೇವಲ ಎಡಿಟಿಂಗ್", "ಕೇವಲ ರಾಜಕಾರಣಿಗಳ ಮೇಲೆ ಮಾಡಿದರೆ ಮಾತ್ರ", "ಇಲ್ಲ, ಅದು ಕಲೆ"], correctAnswer: 0 }
        ]
    },
    {
        id: 5,
        title: 'ನೆಟ್‌ವರ್ಕ್ ಫಾರೆನ್ಸಿಕ್ (Network Forensics)',
        level: 'Intermediate',
        duration: '2 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/Xv6H1f8_G_k',
        storyboard: [
            { image: 'module5_scene1.jpg', text: "ಸೈಬರ್-ಸಿಯಾ, ಸಬ್ನೆಟ್ 10.0.5.x ನ ಸರ್ವರ್ ಒಂದು ಅನಾಮಧೇಯ ಹೊರಗಿನ ಐಪಿ (IP) ಗೆ ಭಾರಿ ಪ್ರಮಾಣದ ಟ್ರಾಫಿಕ್ ಕಳುಹಿಸುತ್ತಿದೆ. ಇದು ಡೇಟಾ ಸೋರಿಕೆಯೇ?" },
            { image: 'module5_scene2.jpg', text: "ನೆಟ್‌ವರ್ಕ್ ಫಾರೆನ್ಸಿಕ್ಸ್‌ನಲ್ಲಿ, ನಾವು ಕೇವಲ 'ಏನು' ಎಂದು ನೋಡುವುದಿಲ್ಲ, 'ಹೇಗೆ' ಎಂದು ನೋಡುತ್ತೇವೆ. ನಾವು ಸೋರಿಕೆಯ ಮೂಲ ಹುಡುಕಲು 'PCAPs' ವಿಶ್ಲೇಷಿಸುತ್ತೇವೆ." },
            { image: 'module5_scene3.jpg', text: "ಇದು ಒಂದು 'C2 ಬೀಕನ್'. ಸರ್ವರ್ ಒಳಗಿರುವ ಮಾಲ್ವೇರ್ ಸೂಚನೆಗಳಿಗಾಗಿ 'ಕಾಲ್ ಹೋಮ್' ಮಾಡುತ್ತಿದೆ. ನಾವು ಸೋಂಕಿತ ಯಂತ್ರವನ್ನು ಬೇರ್ಪಡಿಸಬಹುದು." },
            { image: 'module5_scene4.jpg', text: "ನೆಟ್‌ವರ್ಕ್ ಫಾರೆನ್ಸಿಕ್ಸ್ ವಿಜಿಬಿಲಿಟಿ ಬಗ್ಗೆಯಾಗಿದೆ. ಟ್ರಾಫಿಕ್ ಮೇಲೆ ನಿಗಾ ಇಡುವುದು ಸುರಕ್ಷತೆಯ ಮೊದಲ ಕೊಂಡಿ." }
        ],
        caseStudy: {
            title: "ಡೇಟಾ ಎಕ್ಸ್‌ಫಿಲ್ಟ್ರೇಶನ್ ಸೋರಿಕೆ",
            scenario: "ಒಂದು SOC ಪರಿಸರದಲ್ಲಿ, ಅರ್ಜುನ್ ಒಂದು ವಿಚಲನವನ್ನು ಪತ್ತೆಹಚ್ಚುತ್ತಾನೆ. ನೆಟ್‌ವರ್ಕ್ ಫಾರೆನ್ಸಿಕ್ಸ್ ಹೇಗೆ ಪ್ಯಾಕೆಟ್ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಬಳಸಿ ಕಮಾಂಡ್ ಅಂಡ್ ಕಂಟ್ರೋಲ್ (C2) ಬೀಕನ್‌ಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ ಎಂದು ಅವನು ಕಲಿಯುತ್ತಾನೆ."
        },
        quiz: [
            { id: 1, text: "'PCAP' ಎಂದರೇನು?", options: ["ವೇಗದ ಕಂಪ್ಯೂಟರ್", "ನೆಟ್‌ವರ್ಕ್ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಪ್ಯಾಕೆಟ್ ಕ್ಯಾಪ್ಚರ್ ಫೈಲ್", "ಒಂದು ರೀತಿಯ ಫೈರ್‌ವಾಲ್", "ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಕೀ"], correctAnswer: 1 },
            { id: 2, text: "'C2 Beacon' ಎಂದರೆ ಏನು?", options: ["ಕಮಾಂಡ್ ಅಂಡ್ ಕಂಟ್ರೋಲ್ (Command and Control)", "ಕ್ರಿಪ್ಟಿಕ್ ಕ್ಯಾಪ್ಚರ್", "ಕೇಬಲ್ ಸಂಪರ್ಕ", "ಕ್ಲೌಡ್ ಕಂಪ್ಯೂಟಿಂಗ್"], correctAnswer: 0 },
            { id: 3, text: "'ಪ್ಯಾಕೆಟ್ ಅನಾಲಿಸಿಸ್' (Packet Analysis) ಎಂದರೇನು?", options: ["ಕಂಪ್ಯೂಟರ್ ಒಡೆಯುವುದು", "ಡೇಟಾ ಪ್ಯಾಕೆಟ್‌ಗಳ ರಚನೆ ಮತ್ತು ವಿಷಯವನ್ನು ಪರೀಕ್ಷಿಸುವುದು", "ಮೈಲ್ ಕಳುಹಿಸುವುದು", "ರೂಟರ್ ಸರಿಪಡಿಸುವುದು"], correctAnswer: 1 },
            { id: 4, text: "ನೆಟ್‌ವರ್ಕ್ ಟ್ರಾಫಿಕ್ ವಿಶ್ಲೇಷಿಸಲು ಯಾವ ಟೂಲ್ ಮಾನದಂಡವಾಗಿದೆ?", options: ["ಫೋಟೋಶಾಪ್", "ವೈರ್‌ಶಾರ್ಕ್ (Wireshark)", "ಎಕ್ಸೆಲ್", "ಸ್ಪಾಟಿಫೈ"], correctAnswer: 1 },
            { id: 5, text: "ನೆಟ್‌ವರ್ಕ್ ಅಡಾಪ್ಟರ್‌ನಲ್ಲಿ 'ಪ್ರೋಮಿಸ್ಕುವಸ್ ಮೋಡ್' (promiscuous mode) ಎಂದರೇನು?", options: ["ಶಕ್ತಿ ಉಳಿಸಲು ಒಂದು ಮೋಡ್", "ಸೆಗ್ಮೆಂಟ್‌ನಲ್ಲಿರುವ ಎಲ್ಲಾ ಟ್ರಾಫಿಕ್ ಅನ್ನು ನೋಡಲು ಅನುಮತಿಸುವ ಮೋಡ್", "ವೇಗದ ಗೇಮಿಂಗ್‌ಗಾಗಿ ಒಂದು ಮೋಡ್", "IP ಮರೆಮಾಡಲು ಒಂದು ಮೋಡ್"], correctAnswer: 1 },
            { id: 6, text: "'DDoS ದಾಳಿ' ಎಂದರೇನು?", options: ["ಡಿಸ್ಟ್ರಿಬ್ಯೂಟೆಡ್ ಡಿನಯಲ್ ಆಫ್ ಸರ್ವಿಸ್", "ಡಿಜಿಟಲ್ ಡೇಟಾ ಓವರ್ ಸರ್ವರ್", "ಡಬಲ್ ಡೇಟಾ ಆನ್ ಸಿಸ್ಟಮ್", "ಸಾಫ್ಟ್‌ವೇರ್ ನೇರ ಡೌನ್‌ಲೋಡ್"], correctAnswer: 0 },
            { id: 7, text: "'ಐಪಿ ಸ್ಪೂಫಿಂಗ್' (IP Spoofing) ಎಂದರೇನು?", options: ["IP ಅಡ್ರೆಸ್ ಸ್ವಚ್ಛಗೊಳಿಸುವುದು", "ನಕಲಿ ಸೋರ್ಸ್ ಅಡ್ರೆಸ್‌ನೊಂದಿಗೆ IP ಪ್ಯಾಕೆಟ್‌ಗಳನ್ನು ರಚಿಸುವುದು", "ಹೊಸ IP ಖರೀದಿಸುವುದು", "SSID ಮರೆಮಾಡುವುದು"], correctAnswer: 1 },
            { id: 8, text: "'ಮ್ಯಾನ್-ಇನ್-ದಿ-ಮಿಡಲ್' (MITM) ದಾಳಿಯಲ್ಲಿ ಏನಾಗುತ್ತದೆ?", options: ["ಒಬ್ಬ ವ್ಯಕ್ತಿ ಮಧ್ಯದಲ್ಲಿ ನಿಂತಿರುತ್ತಾರೆ", "ಆಕ್ರಮಣಕಾರನು ಸಂವಹನವನ್ನು ತಡೆದು ಬದಲಾಯಿಸಬಹುದು", "ಕಂಪ್ಯೂಟರ್ ಹ್ಯಾಂಗ್ ಆಗುತ್ತದೆ", "ಇಂಟರ್ನೆಟ್ ವೇಗವಾಗುತ್ತದೆ"], correctAnswer: 1 },
            { id: 9, text: "'ಪೋರ್ಟ್ ಸ್ಕ್ಯಾನ್' (port scan) ಎಂದರೇನು?", options: ["ಹಡಗನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದು", "ತೆರೆದ ಸಂವಹನ ಪೋರ್ಟ್‌ಗಳಿಗಾಗಿ ಸರ್ವರ್ ಅನ್ನು ಪರೀಕ್ಷಿಸುವುದು", "ಓಎಸ್ ಅಪ್‌ಡೇಟ್ ಮಾಡುವುದು", "ಎಕ್ಸ್‌ಟರ್ನಲ್ ಡ್ರೈವ್ ಪರೀಕ್ಷಿಸುವುದು"], correctAnswer: 1 },
            { id: 10, text: "'ಬ್ಯಾಂಡ್‌ವಿಡ್ತ್ ಥ್ರೋಟ್ಲಿಂಗ್' (bandwidth throttling) ಎಂದರೇನು?", options: ["ಇಂಟರ್ನೆಟ್ ವೇಗ ಹೆಚ್ಚಿಸುವುದು", "ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಇಂಟರ್ನೆಟ್ ವೇಗವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು", "ಕೇಬಲ್ ಬದಲಾಯಿಸುವುದು", "ಒಂದು ರೀತಿಯ ಮಾಲ್‌ವೇರ್"], correctAnswer: 1 },
            { id: 11, text: "'ಡಾರ್ಕ್ ವೆಬ್' (dark web) ಮಾನಿಟರಿಂಗ್ ಎಂದರೇನು?", options: ["ಡಾರ್ಕ್ ಥೀಮ್ ಬಳಸುವುದು", "ಕದ್ದ ಡೇಟಾ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಮಾರಾಟವಾಗುತ್ತಿದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸುವುದು", "ರಾತ್ರಿ ವೈರಸ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದು", "ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಬ್ಲಾಕ್ ಮಾಡುವುದು"], correctAnswer: 1 },
            { id: 12, text: "'ಇಂಟ್ರೂಷನ್ ಡಿಟೆಕ್ಷನ್ ಸಿಸ್ಟಮ್' (IDS) ಎಂದರೇನು?", options: ["ಒಂದು ರೀತಿಯ ಕ್ಯಾಮೆರಾ", "ದುರುದ್ದೇಶಪೂರಿತ ಚಟುವಟಿಕೆಗಾಗಿ ನೆಟ್‌ವರ್ಕ್ ಗಮನಿಸುವ ಸಾಫ್ಟ್‌ವೇರ್", "ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಸ್ಕ್ಯಾನರ್", "ಪಾಸ್‌ವರ್ಡ್ ಮ್ಯಾನೇಜರ್"], correctAnswer: 1 },
            { id: 13, text: "TCP ಮತ್ತು UDP ನಡುವಿನ ಪ್ರಮುಖ ವ್ಯತ್ಯಾಸವೇನು?", options: ["TCP ವೇಗವಾಗಿದೆ", "TCP ಕನೆಕ್ಷನ್-ಓರಿಯಂಟೆಡ್ ಆಗಿದೆ; UDP ಕನೆಕ್ಷನ್‌ಲೆಸ್ ಆಗಿದೆ", "UDP ಹೆಚ್ಚು ಸುರಕ್ಷಿತವಾಗಿದೆ", "ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ"], correctAnswer: 1 },
            { id: 14, text: "'ನೆಟ್‌ಫ್ಲೋ' (NetFlow) ಮಾನಿಟರಿಂಗ್ ಎಂದರೇನು?", options: ["ನೀರಿನ ಹರಿವಿನ ಮೇಲೆ ನಿಗಾ", "IP ಟ್ರಾಫಿಕ್ ಹರಿವಿನ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸಿ ವಿಶ್ಲೇಷಿಸುವುದು", "ಒಂದು ರೀತಿಯ ಬ್ಯಾಟರಿ ಸೇವರ್", "ಕ್ಲೌಡ್ ಸ್ಟೋರೇಜ್ ಸೇವೆ"], correctAnswer: 1 },
            { id: 15, text: "'ಔಟ್‌ಬೌಂಡ್' (Outbound) ಟ್ರಾಫಿಕ್ ಅನ್ನು ಏಕೆ ಗಮನಿಸಬೇಕು?", options: ["ವಿಡಿಯೋ ನೋಡಲು", "ಮಾಲ್‌ವೇರ್ C2 ಸರ್ವರ್‌ಗೆ ಕರೆ ಮಾಡುತ್ತಿದೆಯೇ ಎಂದು ಪತ್ತೆಹಚ್ಚಲು", "ಡೌನ್‌ಲೋಡ್ ವೇಗ ಹೆಚ್ಚಿಸಲು", "ಮೊಬೈಲ್ ಡೇಟಾ ಉಳಿಸಲು"], correctAnswer: 1 }
        ]
    },
    {
        id: 6,
        title: 'ಡಿಜಿಟಲ್ ಪುರಾವೆ 101 (Digital Evidence 101)',
        level: 'Intermediate',
        duration: '2 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/R9N_u51tTj8',
        storyboard: [
            { image: 'module6_scene1.jpg', text: "ಒಂದು ಕಂಪನಿಯ ಡೇಟಾಬೇಸ್ ಕಳುವಾಗಿದೆ, ಮತ್ತು ಈ ಲ್ಯಾಪ್‌ಟಾಪ್ ಪ್ರಮುಖ ಶಂಕಿತವಾಗಿದೆ. ನಾನು ಇದನ್ನು ಆನ್ ಮಾಡಲು ತಯಾರಾಗುತ್ತೇನೆ." },
            { image: 'module6_scene2.jpg', text: "ನಿಲ್ಲು! ಫಾರೆನ್ಸಿಕ್ಸ್‌ನ ಮೊದಲ ನಿಯಮ: ಎಂದಿಗೂ ಮೂಲ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ಕೆಲಸ ಮಾಡಬೇಡಿ. ನಾವು ಮೊದಲು ಇಮೇಜ್ ಮಾಡಲು 'ರೈಟ್-ಬ್ಲಾಕರ್' ಬಳಸುತ್ತೇವೆ." },
            { image: 'module6_scene3.jpg', text: "ಕಾಪಿ ಮಾಡಿದ್ದು ಮೂಲದ್ದೇ ತರಹ ಇದೆ ಎಂದು ಸಾಬೀತುಪಡಿಸುವುದು ಹೇಗೆ? ನಾವು SHA-256 ನಂತಹ 'ಹ್ಯಾಶಿಂಗ್' ಬಳಸುತ್ತೇವೆ. ಇದು ಡಿಜಿಟಲ್ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್." },
            { image: 'module6_scene4.jpg', text: "ಹೊಂದಾಣಿಕೆಯಾಗುವ ಹ್ಯಾಶ್ ಮತ್ತು 'ಚೈನ್ ಆಫ್ ಕಸ್ಟಡಿ' ಇಲ್ಲದಿದ್ದರೆ, ಸಾಕ್ಷ್ಯಗಳನ್ನು ನ್ಯಾಯಾಲಯದಿಂದ ಹೊರಹಾಕಲಾಗುತ್ತದೆ." }
        ],
        caseStudy: {
            title: "ಡೇಟಾಬೇಸ್ ಕಳ್ಳತನದ ತನಿಖೆ",
            scenario: "ಅರ್ಜುನ್ ಡಿಜಿಟಲ್ ಸಾಕ್ಷ್ಯದ ಸುವರ್ಣ ನಿಯಮಗಳನ್ನು ಕಲಿಯುತ್ತಾನೆ: ಬದಲಾವಣೆ ತಡೆಯಲು ರೈಟ್-ಬ್ಲಾಕರ್ ಬಳಸುವುದು, ಸಮಗ್ರತೆಗಾಗಿ ಹ್ಯಾಶಿಂಗ್ ಬಳಸುವುದು ಮತ್ತು ಕಟ್ಟುನಿಟ್ಟಾದ ಚೈನ್ ಆಫ್ ಕಸ್ಟಡಿ ನಿರ್ವಹಿಸುವುದು।"
        },
        quiz: [
            { id: 1, text: "'Write-Blocker' ಅನ್ನು ಏಕೆ ಬಳಸಲಾಗುತ್ತದೆ?", options: ["ಇಮೇಜಿಂಗ್ ವೇಗಗೊಳಿಸಲು", "ಅಸಲಿ ಸಾಕ್ಷ್ಯದಲ್ಲಿ (original evidence) ಯಾವುದೇ ಬದಲಾವಣೆಯನ್ನು ತಡೆಯಲು", "ಡ್ರೈವ್ ಅನ್ನು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲು", "ಒಡೆದ ಫೈಲ್‌ಗಳನ್ನು ಸರಿಪಡಿಸಲು"], correctAnswer: 1 },
            { id: 2, text: "ಡ್ರೈವ್‌ನ ನಕಲು ಅಸಲಿಗೆ ಸಮಾನವಾಗಿದೆ ಎಂದು ಯಾವುದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ?", options: ["ಒಂದು ಫೋಟೋ", "ಮ್ಯಾಚಿಂಗ್ ಹ್ಯಾಶ್ ಮೌಲ್ಯ (Hash value - MD5/SHA)", "ಫೋಲ್ಡರ್‌ಗಳ ಸಂಖ್ಯೆ", "ಫೈಲ್ ಹೆಸರು"], correctAnswer: 1 },
            { id: 3, text: "ಡಿಜಿಟಲ್ ಫೋರೆನ್ಸಿಕ್‌ನಲ್ಲಿ 'ಇಮೇಜಿಂಗ್' (Imaging) ಎಂದರೇನು?", options: ["ಕಂಪ್ಯೂಟರ್ ಫೋಟೋ ತೆಗೆಯುವುದು", "ಸ್ಟೋರೇಜ್ ಸಾಧನದ ಬಿಟ್-ದರ್-ಬಿಟ್ ನಕಲು ಮಾಡುವುದು", "ವಿಡಿಯೋ ಎಡಿಟ್ ಮಾಡುವುದು", "ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದು"], correctAnswer: 1 },
            { id: 4, text: "'ಲೈವ್ ಫೋರೆನ್ಸಿಕ್' (Live Forensics) ಎಂದರೇನು?", options: ["ಅಪರಾಧವನ್ನು ನೇರವಾಗಿ ನೋಡುವುದು", "ಸಿಸ್ಟಮ್ ಚಾಲನೆಯಲ್ಲಿರುವಾಗ ಅದರ ವಿಶ್ಲೇಷಣೆ ಮಾಡುವುದು", "ಎಐ ಬಳಸುವುದು", "ಕಸದ ಬುಟ್ಟಿಯಿಂದ ಫೈಲ್ ಮರುಪಡೆಯುವುದು"], correctAnswer: 1 },
            { id: 5, text: "'ಡೆಡ್ ಫೋರೆನ್ಸಿಕ್' (Dead Forensics) ಎಂದರೇನು?", options: ["ಒಡೆದ ಕಂಪ್ಯೂಟರ್ ವಿಶ್ಲೇಷಣೆ", "ಸಿಸ್ಟಮ್ ಆಫ್ ಆಗಿರುವಾಗ ಅದರ ವಿಶ್ಲೇಷಣೆ ಮಾಡುವುದು", "ಹಳೆಯ ಕೇಸ್ ವಿಶ್ಲೇಷಣೆ", "ಕಳೆದುಹೋದ ಫೈಲ್‌ಗಳ ಹುಡುಕಾಟ"], correctAnswer: 1 },
            { id: 6, text: "'ಹ್ಯಾಶ್ ಫಂಕ್ಷನ್' (Hash Function) ಎಂದರೇನು?", options: ["ಒಂದು ರೀತಿಯ ಉಪಹಾರ", "ಡೇಟಾವನ್ನು ಒಂದು ವಿಶಿಷ್ಟ ಸ್ಥಿರ ಗಾತ್ರದ ಸ್ಟ್ರಿಂಗ್ ಆಗಿ ಬದಲಾಯಿಸುವ ಅಲ್ಗಾರಿದಮ್", "ಒಂದು ವಿಂಗಡಿಸುವ ವಿಧಾನ", "ಫೈಲ್‌ಗಳನ್ನು ಅಳಿಸುವ ಮಾರ್ಗ"], correctAnswer: 1 },
            { id: 7, text: "'ಚೈನ್ ಆಫ್ ಕಸ್ಟಡಿ' (Chain of Custody) ಎಂದರೇನು?", options: ["ಒಂದು ಕಬ್ಬಿಣದ ಸರಪಳಿ", "ಸಂಗ್ರಹಣೆಯಿಂದ ನ್ಯಾಯಾಲಯದವರೆಗೆ ಸಾಕ್ಷ್ಯವನ್ನು ಯಾರು ನಿರ್ವಹಿಸಿದ್ದಾರೆ ಎಂದು ತೋರಿಸುವ ದಾಖಲೆ", "ಪಾಸ್‌ವರ್ಡ್‌ಗಳ ಒಂದು ಕ್ರಮ", "ತನಿಖಾಧಿಕಾರಿಗಳ ಒಂದು ತಂಡ"], correctAnswer: 1 },
            { id: 8, text: "ಇಮೇಜಿಂಗ್ ನಂತರ ವಿಶೇಷವಾಗಿ ಹ್ಯಾಶಿಂಗ್ ಅನ್ನು ಏಕೆ ಬಳಸಲಾಗುತ್ತದೆ?", options: ["ಫೈಲ್‌ಗಳನ್ನು ಚಿಕ್ಕದಾಗಿಸಲು", "ನಕಲು ಮಾಡಿದ ನಂತರ ಅದು ಬದಲಾಗಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸಲು", "ನಕಲನ್ನು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲು", "ಫೈಲ್‌ಗಳಿಗೆ ಹೆಸರಿಡಲು"], correctAnswer: 1 },
            { id: 9, text: "'ಸ್ಲ್ಯಾಕ್ ಸ್ಪೇಸ್' (Slack Space) ಎಂದರೇನು?", options: ["ಗೇಮಿಂಗ್‌ಗಾಗಿ ಜಾಗ", "ಫೈಲ್ ಅಂತ್ಯ ಮತ್ತು ಕ್ಲಸ್ಟರ್ ಅಂತ್ಯದ ನಡುವಿನ ಖಾಲಿ ಜಾಗ", "ರ‍್ಯಾಮ್ ಸೇರಿಸಲು ಜಾಗ", "ಡಿಸ್ಕ್‌ನ ನಿಧಾನ ಭಾಗ"], correctAnswer: 1 },
            { id: 10, text: "'ಬಿಟ್-ಸ್ಟ್ರೀಮ್' (Bit-Stream) ಕಾಪಿ ಎಂದರೇನು?", options: ["ಲೈವ್ ಸ್ಟ್ರೀಮ್ ನೋಡುವುದು", "ಅಳಿಸಲಾದ ಫೈಲ್‌ಗಳು ಸೇರಿದಂತೆ ಇಡೀ ಡ್ರೈವ್‌ನ ಸೆಕ್ಟರ್-ದರ್-ಸೆಕ್ಟರ್ ಕ್ಲೋನ್", "ಫೋಟೋದ ವೇಗದ ನಕಲು", "ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್"], correctAnswer: 1 },
            { id: 11, text: "ಶಂಕಿತರ ಅಸಲಿ ಸಾಧನದಲ್ಲಿ ತನಿಖೆ ಮಾಡುವುದು ಸರಿಯೇ?", options: ["ಹೌದು, ಸಮಯ ಉಳಿಸಲು", "ಇಲ್ಲ, ಯಾವಾಗಲೂ ಪರಿಶೀಲಿಸಿದ ಫೋರೆನ್ಸಿಕ್ ನಕಲಿನಲ್ಲಿ ಮಾತ್ರ ಕೆಲಸ ಮಾಡಿ", "ಶಂಕಿತರು ಅನುಮತಿ ನೀಡಿದಾಗ ಮಾತ್ರ", "ನೀವು ಹಿರಿಯ ಅಧಿಕಾರಿಯಾಗಿದ್ದಾಗ ಮಾತ್ರ"], correctAnswer: 1 },
            { id: 12, text: "ಫೋರೆನ್ಸಿಕ್ ಸಂದರ್ಭದಲ್ಲಿ 'ಮೆಟಾಡೇಟಾ' (Metadata) ಎಂದರೇನು?", options: ["ಒಂದು ರೀತಿಯ ವೈರಸ್", "ಡೇಟಾ ಬಗ್ಗೆ ಡೇಟಾ (ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್, ಮಾಲೀಕತ್ವ, ಸ್ಥಳ)", "ಕೇವಲ ಫೈಲ್ ಗಾತ್ರ", "ವ್ಯಕ್ತಿಯ ಜೀವನಚರಿತ್ರೆ"], correctAnswer: 1 },
            { id: 13, text: "'ಫೈಲ್ ರಿಕವರಿ' (File Recovery) ಎಂದರೇನು?", options: ["ಹೊಸ ಫೈಲ್‌ಗಳನ್ನು ಖರೀದಿಸುವುದು", "ಡಿಸ್ಕ್‌ನ 'unallocated' ಜಾಗದಿಂದ ಅಳಿಸಲಾದ ಫೈಲ್‌ಗಳನ್ನು ಮರುಸ್ಥಾಪಿಸುವುದು", "ಒಂದು ಹಾಳಾದ ಎಕ್ಸೆಲ್ ಶೀಟ್ ಸರಿಪಡಿಸುವುದು", "ಕ್ಲೌಡ್‌ನಿಂದ ಡೌನ್‌ಲೋಡ್ ಮಾಡುವುದು"], correctAnswer: 1 },
            { id: 14, text: "'ಸ್ಟೆಗನೋಗ್ರಫಿ' (Steganography) ಎಂದರೇನು?", options: ["ಡೈನೋಸಾರ್‌ಗಳ ಅಧ್ಯಯನ", "ಮತ್ತೊಂದು ಫೈಲ್‌ನೊಳಗೆ (ಉದಾಹರಣೆಗೆ ಚಿತ್ರ) ಮಾಹಿತಿಯನ್ನು ಮರೆಮಾಡುವುದು", "ಕೋಡಿಂಗ್‌ನ ಒಂದು ವಿಧ", "ನೆಟ್‌ವರ್ಕ್ ಬ್ಲಾಕ್ ಮಾಡುವುದು"], correctAnswer: 1 },
            { id: 15, text: "'ಎಕ್ಸಿಬಿಟ್ ನಂಬರ್' (Exhibit Number) ಎಂದರೇನು?", options: ["ಒಂದು ಇನಾಮು ಸಂಖ್ಯೆ", "ಸಂಗ್ರಹಿಸಿದ ಪ್ರತಿಯೊಂದು ಸಾಕ್ಷ್ಯಕ್ಕೂ ನೀಡಲಾಗುವ ಒಂದು ವಿಶಿಷ್ಟ ಗುರುತು", "ಶಂಕಿತರ ಫೋನ್ ಸಂಖ್ಯೆ", "ಅಪರಾಧ ನಡೆದ ದಿನಾಂಕ"], correctAnswer: 1 }
        ]
    },
    {
        id: 7,
        title: 'ಮೆಮೊರಿ ಫಾರೆನ್ಸಿಕ್ (Memory Forensics)',
        level: 'Intermediate',
        duration: '2.5 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/H0z9R5R2X9k',
        storyboard: [
            { image: 'module7_scene1.jpg', text: "ಆಂಟಿವೈರಸ್ ಡಿಸ್ಕ್ ಕ್ಲೀನ್ ಆಗಿದೆ ಎನ್ನುತ್ತಿದೆ, ಆದರೆ ಯಂತ್ರ ಇನ್ನೂ ಇತರರ ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತಿದೆ. ಮಾಲ್ವೇರ್ ಎಲ್ಲಿದೆ?" },
            { image: 'module7_scene2.jpg', text: "ಅದು ರಾಮ್ (RAM) ನಲ್ಲಿದೆ! ಇದು 'ಫೈಲ್‌ಲೆಸ್ ಮಾಲ್ವೇರ್'. ರಾಮ್ 'ವೊಲಟೈಲ್ ಡೇಟಾ' - ಪವರ್ ಹೋದರೆ ಇದು ಮಾಯವಾಗುತ್ತದೆ." },
            { image: 'module7_scene3.jpg', text: "ಮೆಮೊರಿ ಡಂಪ್ ವಿಶ್ಲೇಷಿಸುವ ಮೂಲಕ, ನಾವು ಅಡಗಿರುವ ಪ್ರಕ್ರಿಯೆಗಳು ಮತ್ತು ಡಿಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಕಂಡುಹಿಡಿಯಬಹುದು." },
            { image: 'module7_scene4.jpg', text: "ನಾನ್-ವೊಲಟೈಲ್ ಡೇಟಾ ಉಳಿಯುತ್ತದೆ; ವೊಲಟೈಲ್ ಡೇಟಾ ಹಾರಿಹೋಗುತ್ತದೆ. ಮೊದಲು ಮೆಮೊರಿ ಕ್ಯಾಪ್ಚರ್ ಮಾಡಿ!" }
        ],
        caseStudy: {
            title: "ಫೈಲ್‌ಲೆಸ್ ಮಾಲ್ವೇರ್ ಟ್ರ್ಯಾಕಿಂಗ್",
            scenario: "ಅರ್ಜುನ್ ಡಿಸ್ಕ್ ಮೇಲೆ ಯಾವುದೇ ಗುರುತು ಬಿಡದ ಮಾಲ್ವೇರ್ ಅನ್ನು ಎದುರಿಸುತ್ತಾನೆ. ಸೈಬರ್-ಸಿಯಾ ಅವನಿಗೆ ರಾಮ್ (ವೊಲಟೈಲ್ ಡೇಟಾ) ವಿಶ್ಲೇಷಿಸುವುದು ಹೇಗೆ ಎಂದು ಕಲಿಸುತ್ತಾಳೆ."
        },
        quiz: [
            { id: 1, text: "'ವೊಲಟೈಲ್ ಡೇಟಾ' (Volatile Data) ಎಂದರೇನು?", options: ["ಸ್ಫೋಟಗೊಳ್ಳುವ ಡೇಟಾ", "ಪವರ್ ಹೋದಾಗ ಮಾಯವಾಗುವ ಡೇಟಾ", "ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಡೇಟಾ", "ಬಿಗ್ ಡೇಟಾ"], correctAnswer: 1 },
            { id: 2, text: "ರಾಮ್ ವಿಶ್ಲೇಷಣೆ ಏಕೆ ಮುಖ್ಯ?", options: ["ಕ್ಯಾಶ್ ಕ್ಲೀನ್ ಮಾಡಲು", "ಫೈಲ್‌ಲೆಸ್ ಮಾಲ್ವೇರ್ ಮತ್ತು ಲೈವ್ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಹುಡುಕಲು", "ಕಂಪ್ಯೂಟರ್ ವೇಗಗೊಳಿಸಲು", "ಬ್ಲೂ ಸ್ಕ್ರೀನ್ ಸರಿಪಡಿಸಲು"], correctAnswer: 1 },
            { id: 3, text: "'ಮೆಮೊರಿ ಡಂಪ್' (Memory Dump) ಎಂದರೇನು?", options: ["ರಾಮ್ ಅಳಿಸುವುದು", "ಒಂದು ವಿಶಿಷ್ಟ ಸಮಯದಲ್ಲಿ ರಾಮ್‌ನ ವಿಷಯಗಳ ಸ್ನ್ಯಾಪ್‌ಶಾಟ್", "ಒಂದು ನಿಧಾನ ಕಂಪ್ಯೂಟರ್", "ಒಂದು ರೀತಿಯ ಡೇಟಾಬೇಸ್"], correctAnswer: 1 },
            { id: 4, text: "'ಫೈಲ್‌ಲೆಸ್ ಮಾಲ್‌ವೇರ್' (Fileless Malware) ಎಂದರೇನು?", options: ["ಡಿಸ್ಕ್ ಪತ್ತೆಯಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಕೇವಲ ರಾಮ್‌ನಲ್ಲಿ ವಾಸಿಸುವ ಮಾಲ್‌ವೇರ್", "ಹೆಸರಿಲ್ಲದ ಮಾಲ್‌ವೇರ್", "ಯುಎಸ್‌ಬಿ ಡ್ರೈವ್‌ನಲ್ಲಿರುವ ಮಾಲ್‌ವೇರ್", "ಕ್ಲೌಡ್‌ನಲ್ಲಿ ಅಡಗಿರುವ ಮಾಲ್‌ವೇರ್"], correctAnswer: 0 },
            { id: 5, text: "ರ‍್ಯಾಮ್ ಕ್ಯಾಪ್ಚರ್ ಮಾಡುವ ಮೊದಲು ನೀವು ಕಂಪ್ಯೂಟರ್ ಆಫ್ ಮಾಡಬಾರದು ಏಕೆ?", options: ["ಇದು ಪವರ್ ಬಟನ್ ಅನ್ನು ಮುರಿಯಬಹುದು", "ರಾಮ್‌ನ ವಿಷಯಗಳು ಶಾಶ್ವತವಾಗಿ ಕಳೆದುಹೋಗುತ್ತವೆ", "ಓಎಸ್ ಅಪ್‌ಡೇಟ್ ಆಗುತ್ತದೆ", "ಅದನ್ನು ಮರುಪ್ರಾರಂಭಿಸಲು ಬಹಳ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ"], correctAnswer: 1 },
            { id: 6, text: "ಮೆಮೊರಿಯಲ್ಲಿ 'ಇಂಜೆಕ್ಟೆಡ್ ಕೋಡ್' (Injected Code) ಎಂದರೇನು?", options: ["ಲಸಿಕೆಗಾಗಿ ಬಳಸುವ ಕೋಡ್", "ವೈಧ ಪ್ರಕ್ರಿಯೆಯ ಸ್ಥಳದಲ್ಲಿ ಸೇರಿಸಲಾದ ದುರುದ್ದೇಶಪೂರಿತ ಕೋಡ್", "ಒಂದು ಹೊಸ ಸಾಫ್ಟ್‌ವೇರ್ ಅಪ್‌ಡೇಟ್", "ಫಾಂಟ್ ಬದಲಾಯಿಸುವ ಕೋಡ್"], correctAnswer: 1 },
            { id: 7, text: "'ಡೈನಾಮಿಕ್ ಅನಾಲಿಸಿಸ್' (Dynamic Analysis) ಎಂದರೇನು?", options: ["ಮೆಮೊರಿಯಲ್ಲಿ ಚಾಲನೆಯಲ್ಲಿರುವಾಗ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ವಿಶ್ಲೇಷಿಸುವುದು", "ಬಾಹ್ಯ ಹಾರ್ಡ್‌ವೇರ್ ವಿಶ್ಲೇಷಿಸುವುದು", "ಕಂಪ್ಯೂಟರ್ ಬೆಲೆ ವಿಶ್ಲೇಷಿಸುವುದು", "ಬಳಕೆದಾರರ ಹೆಸರನ್ನು ವಿಶ್ಲೇಷಿಸುವುದು"], correctAnswer: 0 },
            { id: 8, text: "ವಿಂಡೋಸ್ 'ರೆಜಿಸ್ಟ್ರಿ' (Registry) ಎಂದರೇನು?", options: ["ಪಿಸಿ ಖರೀದಿಸಿದವರ ಪಟ್ಟಿ", "ಕಾನ್ಫಿಗರೇಶನ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಸಂಗ್ರಹಿಸುವ ಡೇಟಾಬೇಸ್", "ಒಂದು ಅತಿಥಿ ಪುಸ್ತಕ", "ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದ ಗೇಮ್‌ಗಳ ಪಟ್ಟಿ"], correctAnswer: 1 },
            { id: 9, text: "'ಪ್ರೊಸೆಸ್ ಹೊಲೊಯಿಂಗ್' (Process Hollowing) ಎಂದರೇನು?", options: ["ಒಂದು ಪ್ರಕ್ರಿಯೆಯನ್ನು ಅಳಿಸುವುದು", "ಮಾಲ್‌ವೇರ್ ವೈಧ ಪ್ರಕ್ರಿಯೆಯ ಕೋಡ್ ಅನ್ನು ತನ್ನದೇ ಕೋಡ್‌ನಿಂದ ಬದಲಾಯಿಸುವುದು", "ಹೊಸ ಪ್ರಕ್ರಿಯೆಯನ್ನು ರಚಿಸುವುದು", "ಒಂದು ಪ್ರಕ್ರಿಯೆಯನ್ನು ವೇಗಗೊಳಿಸುವುದು"], correctAnswer: 1 },
            { id: 10, text: "'ರೂಟ್‌ಕಿಟ್' (Rootkit) ಎಂದರೇನು?", options: ["ಗಿಡಗಳಿಗಾಗಿ ಒಂದು ಟೂಲ್‌ಕಿಟ್", "ತನ್ನನ್ನು ಮತ್ತು ಇತರ ಮಾಲ್‌ವೇರ್‌ಗಳನ್ನು ಓಎಸ್‌ನಿಂದ ಮರೆಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಮಾಲ್‌ವೇರ್", "ಒಂದು ರೀತಿಯ ಅಡ್ಮಿನ್ ಪಾಸ್‌ವರ್ಡ್", "ಒಂದು ನೆಟ್‌ವರ್ಕ್ ಕೇಬಲ್"], correctAnswer: 1 },
            { id: 11, text: "ಮೆಮೊರಿ ಫೋರೆನ್ಸಿಕ್‌ಗಾಗಿ ಯಾವ ಟೂಲ್ ಮಾನದಂಡವಾಗಿದೆ?", options: ["ಎಕ್ಸೆಲ್", "ವೋಲಟಿಲಿಟಿ (Volatility)", "ಕ್ರೋಮ್", "ನೋಟ್‌ಪ್ಯಾಡ್"], correctAnswer: 1 },
            { id: 12, text: "ರ‍್ಯಾಮ್‌ನಲ್ಲಿ ಮಾಲ್‌ವೇರ್ ಹೊರತುಪಡಿಸಿ ಇನ್ನೇನು ಕಂಡುಬರಬಹುದು?", options: ["ಕೇವಲ ಚಿತ್ರಗಳು", "ಡಿಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಪಾಸ್‌ವರ್ಡ್‌ಗಳು, ತೆರೆದ ಟ್ಯಾಬ್‌ಗಳು ಮತ್ತು ಚಾಟ್ ಇತಿಹಾಸ", "ಕೇವಲ ಓಎಸ್ ಹೆಸರು", "ಸಿಪಿಯು ತಾಪಮಾನ"], correctAnswer: 1 },
            { id: 13, text: "'Pagefile.sys' ಎಂದರೇನು?", options: ["ಒಂದು ಇ-ಬುಕ್ ಫೈಲ್", "ಸಿಸ್ಟಮ್‌ನ ರಾಮ್‌ನ ವಿಸ್ತರಣೆಯಾಗಿ ಬಳಸಲಾಗುವ ಡಿಸ್ಕ್ ಫೈಲ್", "ಒಂದು ರೀತಿಯ ಸಿಸ್ಟಮ್ ಲಾಗ್", "ಪ್ರಿಂಟಿಂಗ್ ಫೈಲ್"], correctAnswer: 1 },
            { id: 14, text: "'Hiberfil.sys' ಎಂದರೇನು?", options: ["ಹೈಬರ್ನೇಷನ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಫೈಲ್", "ಕಂಪ್ಯೂಟರ್ ಹೈಬರ್ನೇಟ್ ಆದಾಗ ರಾಮ್ ಸ್ನ್ಯಾಪ್‌ಶಾಟ್ ಹೊಂದಿರುವ ಫೈಲ್", "ಒಂದು ರೀತಿಯ ಎನ್‌ಕ್ರಿಪ್ಶನ್", "ದಾಖಲೆಗಳ ಬ್ಯಾಕಪ್"], correctAnswer: 1 },
            { id: 15, text: "'ವೋಲಟಿಲಿಟಿ ಕ್ರಮ' (Order of Volatility) ಎಂದರೇನು?", options: ["ಫೈಲ್‌ಗಳ ವರ್ಣಮಾಲೆಯ ಕ್ರಮ", "ಡೇಟಾ ಎಷ್ಟು ಬೇಗನೆ ಮರೆಯಾಗುತ್ತದೆ ಎಂಬುದರ ಆಧಾರದ ಮೇಲೆ ಸಂಗ್ರಹಣೆಯ ಕ್ರಮ", "ಅಪಾಯಕಾರಿ ವೈರಸ್‌ಗಳ ಪಟ್ಟಿ", "ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಅಪರಾಧಗಳ ಕ್ರಮ"], correctAnswer: 1 }
        ]
    },
    {
        id: 8,
        title: 'ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್ (Incident Response)',
        level: 'Intermediate',
        duration: '2 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/bMne5_Iq_q8',
        storyboard: [
            { image: 'module8_scene1.jpg', text: "ಎಲ್ಲವೂ ಲಾಕ್ ಆಗಿದೆ! ನಮ್ಮ ಡೇಟಾ ಮರಳಿ ಪಡೆಯಲು ನಾವು ಬಿಡುಗಡೆ ಹಣ (ransom) ನೀಡಬೇಕೇ?" },
            { image: 'module8_scene2.jpg', text: "ಎಂದಿಗೂ ಹಣ ನೀಡಬೇಡಿ! ನಾವು PICERL ಚಕ್ರವನ್ನು ಅನುಸರಿಸುತ್ತೇವೆ: ತಯಾರಿ, ಗುರುತಿಸುವಿಕೆ, ನಿಯಂತ್ರಣ, ನಿರ್ಮೂಲನೆ, ಚೇತರಿಕೆ." },
            { image: 'module8_scene3.jpg', text: "ಫಾರೆನ್ಸಿಕ್ಸ್ ನ್ಯಾಯವನ್ನು ರಕ್ಷಿಸುವ ಬಗ್ಗೆಯಾಗಿದೆ. ನೀವು ಶಾಲೆಯಲ್ಲಲಿ ಅಥವಾ ಕಾಲೇಜಿನಲ್ಲಲಿ, ಇಂದೇ ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ." },
            { image: 'module8_scene4.jpg', text: "ಈಗ ನೀವು ಒಬ್ಬ 'ಸೈಬರ್ ಸ್ಪಾರ್ಕ್'. ಸುರಕ್ಷಿತ ಇಂಟರ್ನೆಟ್‌ನತ್ತ ದಾರಿ ತೋರಿಸಿ." }
        ],
        caseStudy: {
            title: "ರ್ಯಾನ್ಸಮ್‌ವೇರ್ ಬಿಕ್ಕಟ್ಟು",
            scenario: "ಒಂದು ಕಂಪನಿ ರ್ಯಾನ್ಸಮ್‌ವೇರ್ ದಾಳಿಗೆ ಒಳಗಾಗುತ್ತದೆ. ಅರ್ಜುನ್ ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್‌ನಲ್ಲಿ PICERL ಚಕ್ರ ಮತ್ತು ಫಾರೆನ್ಸಿಕ್ ಸನ್ನದ್ಧತೆಯ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಕಲಿಯುತ್ತಾನೆ."
        },
        quiz: [
            { id: 1, text: "ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್‌ನಲ್ಲಿ 'PICERL' ಎಂದರೆ ಏನು?", options: ["ರಕ್ಷಣೆ ಮತ್ತು ಆರೈಕೆ", "Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned", "ವೈಯಕ್ತಿಕ ಗುರುತಿನ ಪರೀಕ್ಷೆ", "ಪ್ಯಾಕೆಟ್ ಗುರುತಿನ ಚಕ್ರ"], correctAnswer: 1 },
            { id: 2, text: "ರ್ಯಾನ್ಸಮ್‌ವೇರ್ ದಾಳಿಯಾದಾಗ ನೀವು ಹಣ ನೀಡಬೇಕೇ?", options: ["ಹೌದು, ತಕ್ಷಣ", "ಇಲ್ಲ, ಇದು ಅಪರಾಧವನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ ಮತ್ತು ಯಾವುದೇ ಗ್ಯಾರಂಟಿ ಇರುವುದಿಲ್ಲ", "ಅಗ್ಗವಾಗಿದ್ದರೆ ಮಾತ್ರ", "ಬ್ಯಾಕಪ್ ಇಲ್ಲದಿದ್ದರೆ ಮಾತ್ರ"], correctAnswer: 1 },
            { id: 3, text: "'Containment' (ನಿಯಂತ್ರಣ) ಹಂತದಲ್ಲಿ ಏನನ್ನು ಮಾಡಲಾಗುತ್ತದೆ?", options: ["ಎಲ್ಲಾ ಫೈಲ್‌ಗಳನ್ನು ಅಳಿಸುವುದು", "ಬೆದರಿಕೆಯು ಮುಂದೆ ಹರಡುವುದನ್ನು ತಡೆಯುವುದು", "ಹೊಸ ಹಾರ್ಡ್‌ವೇರ್ ಖರೀದಿಸುವುದು", "ಶಂಕಿತನನ್ನು ಬಂಧಿಸುವುದು"], correctAnswer: 1 },
            { id: 4, text: "PICERL ಚಕ್ರದಲ್ಲಿ 'Eradication' (ನಿರ್ಮೂಲನೆ) ಎಂದರೇನು?", options: ["ಸುದ್ದಿಯಲ್ಲಿ ವರದಿ ಮಾಡುವುದು", "ಪರಿಸರದಿಂದ ಬೆದರಿಕೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುವುದು", "ಕಂಪ್ಯೂಟರ್ ಮರುಪ್ರಾರಂಭಿಸುವುದು", "ಹೊಸ ಉದ್ಯೋಗಿಗಳನ್ನು ನೇಮಿಸಿಕೊಳ್ಳುವುದು"], correctAnswer: 1 },
            { id: 5, text: "'Recovery' (ಪುನಶ್ಚೇತನ) ಹಂತದ ಗುರಿಯೇನು?", options: ["ಬಿಡುಗಡೆ ಹಣ ನೀಡುವುದು", "ಕ್ಲೀನ್ ಬ್ಯಾಕಪ್‌ನಿಂದ ಸಿಸ್ಟಮ್ ಮತ್ತು ಡೇಟಾವನ್ನು ಮರುಸ್ಥಾಪಿಸುವುದು", "ರಜೆಗೆ ಹೋಗುವುದು", "ಹೊಸ ಕಂಪನಿ ಪ್ರಾರಂಭಿಸುವುದು"], correctAnswer: 1 },
            { id: 6, text: "'ಕಲಿತ ಪಾಠಗಳು' (Lessons Learned) ಏಕೆ ಮುಖ್ಯ?", options: ["ಉದ್ಯೋಗಿಗಳನ್ನು ದೂಷಿಸಲು", "ಸುರಕ್ಷತೆಯನ್ನು ಸುಧಾರಿಸಲು ಮತ್ತು ಭವಿಷ್ಯದ ಘಟನೆಗಳನ್ನು ತಡೆಯಲು", "ದೊಡ್ಡ ರಿಪೋರ್ಟ್ ಬರೆಯಲು", "ಹಣ ಉಳಿಸಲು"], correctAnswer: 1 },
            { id: 7, text: "'ಫೋರೆನ್ಸಿಕ್ ಸನ್ನದ್ಧತೆ' (Forensic Readiness) ಎಂದರೇನು?", options: ["ಹೋರಾಡಲು ಸಿದ್ಧವಾಗಿರುವುದು", "ಉಲ್ಲಂಘನೆಯಾದಾಗ ಡಿಜಿಟಲ್ ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಿಸಲು ಸಿದ್ಧವಾಗಿರುವುದು", "ವೇಗದ ಇಂಟರ್ನೆಟ್ ಹೊಂದಿರುವುದು", "ಹೊಸ ಆಂಟಿವೈರಸ್ ಬಳಸುವುದು"], correctAnswer: 1 },
            { id: 8, text: "'ಇಂಡಿಕೇಟರ್ ಆಫ್ ಕಾಂಪ್ರಮೈಸ್' (IOC) ಎಂದರೇನು?", options: ["ವೇಗದ ಕಂಪ್ಯೂಟರ್", "ಸಿಸ್ಟಮ್ ಉಲ್ಲಂಘನೆಯಾಗಿದೆ ಎನ್ನುವ ಸೂಚನೆ (ಉದಾ: ದುರುದ್ದೇಶಪೂರಿತ IP)", "ಹೊಸ ಸಾಫ್ಟ್‌ವೇರ್ ಫೀಚರ್", "ವಳಕೆದಾರರ ಉತ್ತಮ ವಿಮರ್ಶೆ"], correctAnswer: 1 },
            { id: 9, text: "ನೀವು ಹಣವನ್ನು ಗ್ಯಾಂಗ್‌ಗಳಿಗೆ ಏಕೆ ನೀಡಬಾರದು?", options: ["ಅದು ತುಂಬಾ ದುಬಾರಿ", "ಇದು ಡೇಟಾ ರಿಕವರಿ ಗ್ಯಾರಂಟಿ ನೀಡುವುದಿಲ್ಲ ಮತ್ತು ಹೆಚ್ಚಿನ ಅಪರಾಧಕ್ಕೆ ಪ್ರೋತ್ಸಾಹ ನೀಡುತ್ತದೆ", "ಇದು ನಿಧಾನ ಪ್ರಕ್ರಿಯೆ", "ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಬ್ಲಾಕ್ ಆಗಬಹುದು"], correctAnswer: 1 },
            { id: 10, text: "ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್‌ನಲ್ಲಿ 'ಪ್ಲೇಬುಕ್' (Playbook) ಎಂದರೇನು?", options: ["ಆಟಗಳ ಪುಸ್ತಕ", "ನಿರ್ದಿಷ್ಟ ಘಟನೆಗಾಗಿ ತೆಗೆದುಕೊಳ್ಳಬೇಕಾದ ಕ್ರಮಗಳ ದಾಖಲೆ", "ಉದ್ಯೋಗಿಗಳ ಹೆಸರಿನ ಪಟ್ಟಿ", "ಮಾರ್ಕೆಟಿಂಗ್ ತಂತ್ರ"], correctAnswer: 1 },
            { id: 11, text: "CSIRT ನ ಪೂರ್ಣ ರೂಪವೇನು?", options: ["ಮಾರಾಟ ಮತ್ತು ಮಾರುಕಟ್ಟೆ", "Computer Security Incident Response Team (ತಜ್ಞರ ತಂಡ)", "ಕಚೇರಿ ಸ್ವಚ್ಛತೆ", "ಮಾನವ ಸಂಪನ್ಮೂಲ"], correctAnswer: 1 },
            { id: 12, text: "'ಹಾಟ ಸೈಟ್' (Hot Site) ಎಂದರೇನು?", options: ["ಹೆಚ್ಚು ತಾಪಮಾನದ ಸ್ಥಳ", "ತಕ್ಷಣ ಕೆಲಸ ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧವಿರುವ ಪೂರ್ಣ ಪ್ರಮಾಣದ ಬ್ಯಾಕಪ್ ಸೈಟ್", "ಮರುಭೂಮಿಯಲ್ಲಿರುವ ಡೇಟಾ ಸೆಂಟರ್", "ಜನಪ್ರಿಯ ವೆಬ್‌ಸೈಟ್"], correctAnswer: 1 },
            { id: 13, text: "'ಡೇಟಾ ಎಕ್ಸ್‌ಫಿಲ್ಟ್ರೇಶನ್' (Data Exfiltration) ಎಂದರೇನು?", options: ["ಹಳೆಯ ಡೇಟಾ ಅಳಿಸುವುದು", "ಸಿಸ್ಟಮ್‌ನಿಂದ ಡೇಟಾವನ್ನು ಅನಧಿಕೃತವಾಗಿ ಹೊರಹೊಯ್ಯುವುದು", "ನಿಮ್ಮ ಫೋಟೋ ಬ್ಯಾಕಪ್ ಮಾಡುವುದು", "ಡೇಟಾಬೇಸ್ ಸ್ವಚ್ಛಗೊಳಿಸುವುದು"], correctAnswer: 1 },
            { id: 14, text: "ದಾಳಿಯ ಸಮಯದಲ್ಲಿ ಸಂವಹನವನ್ನು ಏಕೆ ಸೀಮಿತಗೊಳಿಸಬೇಕು?", options: ["ಫೋನ್ ಬಿಲ್ ಉಳಿಸಲು", "ದಾಳಿಕೋರನಿಗೆ ನಿಮ್ಮ ಮುಂದಿನ ಕ್ರಮಗಳು ತಿಳಿಯದಂತೆ ಮಾಡಲು", "ಉದ್ಯೋಗಿಗಳು ಗಾಬರಿಯಾಗುವುದನ್ನು ತಡೆಯಲು", "ಸುದ್ದಿಯಿಂದ ಗೌಪ್ಯವಾಗಿ ಇಡಲು"], correctAnswer: 1 },
            { id: 15, text: "'ಐಡೆಂಟಿಫಿಕೇಶನ್' (Identification) ಹಂತದ ಗುರಿಯೇನು?", options: ["ಹೊಸ ಉದ್ಯೋಗಿಗಳನ್ನು ಗುರುತಿಸುವುದು", "ಒಂದು ಘಟನೆಯು ನಿಜವಾಗಿಯೂ ಭದ್ರತಾ ಘಟನೆಯೇ ಎಂದು ನಿರ್ಧರಿಸುವುದು", "ಹೊಸ ಸಾಫ್ಟ್‌ವೇರ್ ಖರೀದಿಸುವುದು", "ಕಂಪ್ಯೂಟರ್‌ಗೆ ಹೆಸರಿಡುವುದು"], correctAnswer: 1 }
        ]
    },
    {
        id: 9,
        title: 'ಎಥಿಕಲ್ ಹ್ಯಾಕಿಂಗ್ ಮತ್ತು ಪೆನ್‌ಟೆಸ್ಟಿಂಗ್ (Ethical Hacking & Pentesting)',
        level: 'Graduate',
        duration: '4 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/dz7Ntp7KQGA',
        caseStudy: {
            title: "ಸುಧಾರಿತ ದೋಷ ಮೌಲ್ಯಮಾಪನ",
            scenario: "ಒಂದು ದೊಡ್ಡ ನೆಟ್‌ವರ್ಕ್‌ಗಾಗಿ ಪೆನಿಟ್ರೇಷನ್ ಟೆಸ್ಟಿಂಗ್ ಅಗತ್ಯವಿದೆ. ನೀವು ವೆಬ್ ದೋಷಗಳು ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ಕಾನ್ಫಿಗರೇಶನ್ ತಪ್ಪುಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಬೇಕು."
        },
        quiz: [
            { id: 1, text: "ಪೆನಿಟ್ರೇಷನ್ ಟೆಸ್ಟಿಂಗ್‌ನ ಪ್ರಾಮುಖ್ಯತೆ ಏನು?", options: ["ಡೇಟಾ ಕದಿಯಲು", "ಸುರಕ್ಷತೆ ಸುಧಾರಿಸಲು ದೋಷಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು", "ನೆಟ್‌ವರ್ಕ್ ನಿಧಾನಗೊಳಿಸಲು", "ಉದ್ಯೋಗಿಗಳ ಮೇಲೆ ನಿಗಾ ಇಡಲು"], correctAnswer: 1 },
            { id: 2, text: "'SQL ಇಂಜೆಕ್ಷನ್' ಯಾವುದನ್ನು ಗುರಿಯಾಗಿಸುತ್ತದೆ?", options: ["ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್", "ಅಪ್ಲಿಕೇಶನ್‌ನ ಡೇಟಾಬೇಸ್ ಲೇಯರ್", "ಬಳಕೆದಾರರ ಬ್ರೌಸರ್", "ಫಿಸಿಕಲ್ ಹಾರ್ಡ್‌ವೇರ್"], correctAnswer: 1 }
        ]
    },
    {
        id: 10,
        title: 'ಮಾಲ್‌ವೇರ್ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ರಿವರ್ಸ್ ಎಂಜಿನಿಯರಿಂಗ್ (Malware Analysis & Reverse Engineering)',
        level: 'Graduate',
        duration: '5 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/b3M_00fIuV4',
        caseStudy: {
            title: "ಟ್ರೋಜನ್ ವಿಶ್ಲೇಷಣೆ",
            scenario: "ಒಂದು ಸಂವೇದನಾಶೀಲ ಸರ್ವರ್‌ನಲ್ಲಿ ಅಪರಿಚಿತ ಫೈಲ್ ಕಂಡುಬಂದಿದೆ. ಸ್ಟ್ಯಾಟಿಕ್ ಮತ್ತು ಡೈನಾಮಿಕ್ ವಿಶ್ಲೇಷಣೆ ಬಳಸಿ ಅದರ ನಡವಳಿಕೆಯನ್ನು ತಿಳಿಯಿರಿ."
        },
        quiz: [
            { id: 1, text: "ಮಾಲ್‌ವೇರ್ ಸಂಶೋಧನೆಯಲ್ಲಿ 'ಸ್ಟ್ಯಾಟಿಕ್ ವಿಶ್ಲೇಷಣೆ' ಎಂದರೇನು?", options: ["ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಚಾಲನೆ ಮಾಡುವುದು", "ಕೋಡ್ ಅನ್ನು ರನ್ ಮಾಡದೆಯೇ ಪರೀಕ್ಷಿಸುವುದು", "ಕಂಪ್ಯೂಟರ್ ಬೆಲೆ ವಿಶ್ಲೇಷಿಸುವುದು", "ಫೈಲ್ ಡಿಲೀಟ್ ಮಾಡುವುದು"], correctAnswer: 1 },
            { id: 2, text: "'ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್' ಎಂದರೇನು?", options: ["ಆಟದ ಮೈದಾನ", "ಅಪರಿಚಿತ ಫೈಲ್‌ಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ರನ್ ಮಾಡಲು ಒಂದು ಪ್ರತ್ಯೇಕ ಪರಿಸರ", "ಒಂದು ರೀತಿಯ ಎನ್‌ಕ್ರಿಪ್ಶನ್", "ಬ್ಯಾಕಪ್ ಸ್ಟೋರೇಜ್"], correctAnswer: 1 }
        ]
    },
    {
        id: 11,
        title: 'ಕ್ಲೌಡ್ ಸೆಕ್ಯುರಿಟಿ ಆರ್ಕಿಟೆಕ್ಚರ್ (Cloud Security Architecture)',
        level: 'Graduate',
        duration: '4.5 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/3_V7N1_j-kQ',
        caseStudy: {
            title: "ಮಲ್ಟಿ-ಕ್ಲೌಡ್ ಪರಿಸರ ಸುರಕ್ಷತೆ",
            scenario: "AWS, Azure och Google Cloud ನಲ್ಲಿ ಸುರಕ್ಷಿತ ಮೂಲಸೌಕರ್ಯ ನಿರ್ಮಾಣ ಮಾಡುವುದು."
        },
        quiz: [
            { id: 1, text: "ಹಂಚಿಕೆಯ ಜವಾಬ್ದಾರಿ ಮಾದರಿ ಎಂದರೇನು?", options: ["AWS ಎಲ್ಲವನ್ನೂ ನೋಡಿಕೊಳ್ಳುತ್ತದೆ", "ಸೇವಾ ಪೂರೈಕೆದಾರರು ಮೂಲಸೌಕರ್ಯವನ್ನು ಮತ್ತು ಬಳಕೆದಾರರು ಡೇಟಾವನ್ನು ಸುರಕ್ಷಿತವಾಗಿರಿಸಬೇಕು", "ಸುರಕ್ಷತೆ ಐಚ್ಛಿಕ", "ಕೇವಲ ಬಳಕೆದಾರರು ಜವಾಬ್ದಾರರು"], correctAnswer: 1 },
            { id: 2, text: "IAM ಎಂದರೇನು?", options: ["ಇಂಟರ್ನೆಟ್ ಆಕ್ಸೆಸ್ ಮ್ಯಾನೇಜರ್", "ಐಡೆಂಟಿಟಿ ಅಂಡ್ ಆಕ್ಸೆಸ್ ಮ್ಯಾನೇಜ್ಮೆಂಟ್", "ಅಪ್ಲಿಕೇಶನ್ ಮಾನಿಟರಿಂಗ್", "ಇಂಟರ್ನಲ್ ಮ್ಯಾಪಿಂಗ್"], correctAnswer: 1 }
        ]
    },
    {
        id: 12,
        title: 'ಸೈಬರ್ ಭದ್ರತೆಯಲ್ಲಿ ಎಐ ಮತ್ತು ಮೆಷಿನ್ ಲರ್ನಿಂಗ್ (AI & Machine Learning in Cybersecurity)',
        level: 'Graduate',
        duration: '3 ಗಂಟೆಗಳು',
        videoUrl: 'https://www.youtube.com/embed/3M_E-N7d69A',
        caseStudy: {
            title: "AI-ಚಾಲಿತ ಬೆದರಿಕೆ ಪತ್ತೆ",
            scenario: "ನೈಜ ಸಮಯದಲ್ಲಿ ಅಸಹಜ ನಡವಳಿಕೆಯನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಮೆಷಿನ್ ಲರ್ನಿಂಗ್ ಮಾಡೆಲ್‌ಗಳ ಬಳಕೆ."
        },
        quiz: [
            { id: 1, text: "ಬೆದರಿಕೆ ಪತ್ತೆಹಚ್ಚುವಲ್ಲಿ AI ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ?", options: ["ತಜ್ಞರನ್ನು ಬದಲಿಸುವ ಮೂಲಕ", "ದೊಡ್ಡ ಮಟ್ಟದಲ್ಲಿ ಮಾದರಿಗಳು ಮತ್ತು ಅಸಹಜತೆಗಳನ್ನು ಗುರುತಿಸುವ ಮೂಲಕ", "ಇಂಟರ್ನೆಟ್ ಬಳಕೆದಾರರನ್ನು ನಿಷೇಧಿಸುವ ಮೂಲಕ", "ನೆಟ್‌ವರ್ಕ್ ವಿಳಂಬ ಹೆಚ್ಚಿಸುವ ಮೂಲಕ"], correctAnswer: 1 },
            { id: 2, text: "'ಫಾಲ್ಸ್ ಪಾಸಿಟಿವ್' ಎಂದರೇನು?", options: ["ಬೆದರಿಕೆಯ ಸರಿಯಾದ ಗುರುತಿಸುವಿಕೆ", "ಸಾಮಾನ್ಯ ಚಟುವಟಿಕೆಯನ್ನು ತಪ್ಪಾಗಿ ಬೆದರಿಕೆ ಎಂದು ಕರೆಯುವುದು", "ತಪ್ಪಿಹೋದ ದಾಳಿ", "ಯಶಸ್ವಿ ಲಾಗಿನ್"], correctAnswer: 1 }
        ]
    }
];

export const getStudyModules = (language: string): StudyModuleType[] => {
    // Normalize language string to handle cases like "English (India)" vs "Hindi"
    const lang = language.split(' ')[0];

    switch (lang) {
        case 'Hindi':
        case 'हिंदी':
            return studyModulesHi;
        case 'Kannada':
        case 'ಕನ್ನಡ':
            return studyModulesKn;
        default:
            return studyModulesEn;
    }
};

export const studyModules = studyModulesEn; // Default export for backwards compatibility if needed
