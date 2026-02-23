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
        videoUrl: 'https://www.youtube.com/embed/dmQGq_FNBpE',
        storyboard: [
            { image: 'module1_scene1.jpg', text: "Finally! My first day at college. Let the world know!" },
            { image: 'module1_scene2.jpg', text: "Wait, Arjun! Look at that ID card. Your full name, roll number, and even your address are visible." },
            { image: 'module1_scene3.jpg', text: "Every photo, link, or comment you post creates a 'Digital Footprint'. It never truly disappears. Hackers use these to build a profile." },
            { image: 'module1_scene4.jpg', text: "Before you post, Stop and Think. Is this information private? If yes, keep it offline." }
        ],
        caseStudy: {
            title: "Navigating the Digital World",
            scenario: "Arjun's excitement about his first day at college was palpable. Like many of his peers, his immediate instinct was to share this significant milestone with his social network. He hastily snapped a proud picture of his newly issued student ID card and posted it online, completely oblivious to the wealth of Personally Identifiable Information (PII) he had just broadcasted to the world. The ID card prominently displayed not only his full legal name and photograph but also his date of birth, permanent address, and unique student identification number. The psychological thrill of accumulating 'likes' and congratulatory comments temporarily blinded him to the severe security implications of his actions.\nEnter Cyber-Sia, his digitally savvy mentor, who intercepted the post just in time. She sat Arjun down for a critical lesson on the concept of the 'Digital Footprint'. She explained that the internet is inherently permanent; every photo uploaded, every comment typed, and every website visited contributes to an indelible trail of data. She vividly described how malicious actors—often referred to as 'threat intelligence' gatherers in the cyber underworld—actively deploy automated bots and scraping tools to harvest exactly this kind of carelessly discarded information from public and semi-public social media profiles.\nCyber-Sia detailed the anatomy of an identity theft attack. With the information Arjun provided on a silver platter, an attacker could easily bypass basic security questions ('What is your date of birth?', 'What is your zip code?') to compromise his email or financial accounts.Furthermore, they could use his student ID number to impersonate him when contacting the university's administrative offices, potentially gaining access to his academic records or even redirecting his financial aid. She emphasized that a digital footprint is not just active data (like the photo he posted) but also passive data, such as IP logs and background location tracking that apps silently collect.\nTo mitigate the immediate risk, Cyber-Sia guided Arjun through the process of taking down the post, though she cautioned that the image might have already been downloaded or cached on external servers. This incident served as a powerful catalyst for Arjun's digital awakening. They systematically reviewed his privacy settings across all social platforms, locking down his profiles so that only verified, trusted friends could view his content. They also conducted a thorough 'scrubbing' of his historical posts, removing anything that could be weaponized against him.\nUltimately, the lesson Arjun learned was profoundly simple yet universally critical: the internet does not forget. A moment of careless oversharing can lead to years of devastating consequences, ranging from financial ruin to severe reputational damage. From that day forward, Arjun adopted a philosophy of 'Stop and Think' before clicking 'Share,' treating his personal data as the most valuable currency he possessed in the digital age."
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
        videoUrl: 'https://www.youtube.com/embed/lc7scxvKQOo',
        storyboard: [
            { image: 'module2_scene1.jpg', text: "Oh no! The bank says someone is trying to steal my money. I need to act fast!" },
            { image: 'module2_scene2.jpg', text: "He's asking for a 'verification code'? Arjun, that's an OTP! Stop!" },
            { image: 'module2_scene3.jpg', text: "Scammers use 'Fear' and 'Urgency' to make you panic. Real banks will never ask for your OTP over a call." },
            { image: 'module2_scene4.jpg', text: "If someone creates a sense of panic, it's likely a scam. Hang up and call your bank's official number." }
        ],
        caseStudy: {
            title: "The Urgent Phone Call",
            scenario: "It was a typical Tuesday evening when Arjun received a phone call from an unknown, official-sounding number. The caller, speaking with a polished, urgent tone, identified himself as a senior security officer from Arjun's primary bank. The caller immediately launched into a terrifying narrative: suspicious, high-value transactions were currently being attempted on Arjun's account, supposedly originating from a foreign country. To halt these unauthorized transfers and secure his life's savings, the caller insisted that Arjun must immediately verify his identity by reading back the One-Time Password (OTP) that had just been sent to his mobile device.\nArjun's heart raced. The sheer panic induced by the thought of losing his money triggered a primal 'fight or flight' response, completely bypassing his logical reasoning. He fumbled with his phone, desperately trying to open his messages app to retrieve the code, fully intending to comply with the 'bank officer's' instructions to save himself from financial disaster.\nFortunately, Cyber-Sia recognized the classic signs of cognitive manipulation and intervened just as Arjun was about to read the six-digit code aloud. She decisively grabbed the phone, terminated the call, and immediately began to deconstruct the anatomy of the attack they had just witnessed. She explained that this was a textbook example of 'Vishing' (Voice Phishing), a highly sophisticated form of Social Engineering.\nCyber-Sia detailed how scammers meticulously craft these scenarios to exploit the vulnerabilities of human psychology rather than software flaws.\n\nBy injecting intense 'Fear' and 'Urgency' into the situation, the attacker forcibly hijacked Arjun's critical thinking processes. The goal was to force a hasty, irrational decision—the surrender of the OTP—before Arjun had the time to logically question the legitimacy of the request. She emphasized a cardinal rule of modern banking: a legitimate financial institution will never, under any circumstances, call a customer and demand an OTP, PIN, or full password.\nThe incident highlighted the extreme danger of blind trust in the digital era. Cyber-Sia explained that caller ID can be easily 'spoofed' using Voice over IP (VoIP) technologies, making it appear as though the call is genuinely originating from the bank. The only foolproof defense against such manipulation is a profound sense of skepticism. She taught Arjun the 'Verify Before Trust' protocol: if contacted regarding an urgent financial matter, immediately hang up the phone. Do not call back the number that contacted you. Instead, locate the official customer service number printed on the back of the debit card or listed securely on the bank's official website, and initiate a new call to verify the claim's authenticity.\nThis chilling encounter transformed Arjun's perspective on security. He realized that the human element is invariably the weakest link in any security chain. No amount of encryption or advanced firewall technology can protect an individual who willingly hands over the keys to their digital fortress when manipulated by a skilled social engineer."
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
        title: 'Secure Passwords & Authentication',
        level: 'Beginner',
        duration: '1.5 hours',
        videoUrl: 'https://www.youtube.com/embed/BoyeFozmAXk',
        storyboard: [
            { image: 'module3_scene1.jpg', text: "I'll just use 'password123' for my new email. It's easy to remember!" },
            { image: 'module3_scene2.jpg', text: "Wait! Hackers can crack weak passwords in seconds using 'Brute Force' attacks." },
            { image: 'module3_scene3.jpg', text: "Use a Password Manager and enable Two-Factor Authentication (2FA) for an extra layer of security." },
            { image: 'module3_scene4.jpg', text: "A strong password is like a sturdy lock. Combine it with 2FA to truly secure your accounts." }
        ],
        caseStudy: {
            title: "The Weak Password Trap",
            scenario: "Arjun's digital life was expanding, and so was his need to secure it. Like millions of users, he suffered from 'Password Fatigue.' Forced to create complex, unique passwords for dozens of online services ranging from email and banking to social media and streaming platforms, he had resorted to the most dangerous, yet common, practice: password reuse. He relied on a single, easily guessable password—a variation of 'password123'—for nearly every account he owned. He rationalized this risky behavior by convincing himself that he wasn’t a high-value target and that remembering complex strings of characters was simply too inconvenient.\nHis complacency was shattered on a Friday morning when he found himself completely locked out of his primary email account. Panic set in as he realized that this email was the central hub for his entire digital existence. It was linked to his bank accounts, his university portal, and all his social media profiles. Shortly after, his friends began frantically messaging him on a different platform, asking why he was sending them suspicious links claiming they had won a lottery. His account had been compromised, and the attacker was currently leveraging his trusted identity to launch phishing attacks against his entire contact list.\nCyber-Sia, stepping in as the incident responder, helped Arjun initiate the arduous account recovery process. Once control was regained, she initiated a deep dive into the mechanics of password compromise. She explained that hackers rarely sit at a keyboard guessing passwords manually. Instead, they deploy automated scripts and utilize massive databases of billions of previously leaked credentials—a technique known as 'Credential Stuffing.' Because Arjun had reused his weak password across multiple sites, a breach at a low-security forum years ago had effectively handed the attackers the master key to his entire digital life.\nTo remediate this massive vulnerability, Cyber-Sia introduced a complete overhaul of his authentication strategy.\n\nThe first pillar of this defense was the adoption of a reputable Password Manager. She demonstrated how this crucial tool operates as an encrypted vault, automatically generating incredibly complex, mathematically crack-resistant passwords (e.g., 'X$7qP9z!L2wM#5vK') for every single service, while requiring Arjun to remember only one exceptionally strong 'Master Passphrase.' By removing the burden of memorization, the Password Manager eliminated the temptation of password reuse entirely.\nHowever, Cyber-Sia stressed that passwords alone, no matter how complex, are no longer sufficient in the modern threat landscape. The second, non-negotiable pillar of their defensive strategy was the immediate implementation of Two-Factor Authentication (2FA) across all critical accounts. She explained the concept of 'Defense in Depth.' Even if an attacker managed to bypass the password (Something You Know), they would still be halted by the 2FA requirement (Something You Have—such as a time-based code generated by an Authenticator app on his physical mobile device). She specifically advised against relying on SMS-based 2FA due to the rising prevalence of SIM-swapping attacks.\nBy the end of the session, Arjun's digital fortress was significantly fortified. He understood that convenience is the enemy of security. While setting up a Password Manager and authenticator apps required an initial investment of time and effort, the resulting layered defense mechanism provided exponential protection against the automated, relentless attacks that characterize the contemporary cyber landscape."
        },
        quiz: [
            { id: 1, text: "What is the most vulnerable type of password?", options: ["A 16-character alphanumeric password", "Common words like 'password123' or 'admin'", "A passphrase containing 4 unrelated words", "A randomly generated string"], correctAnswer: 1 },
            { id: 2, text: "What does 2FA stand for?", options: ["Two-File Access", "Two-Factor Authentication", "Two-Folder Authorization", "Time-Framed Automation"], correctAnswer: 1 },
            { id: 3, text: "What is a 'Brute Force' attack?", options: ["A physical attack on a server", "An automated program guessing passwords rapidly", "A virus that deletes files", "A social engineering tactic"], correctAnswer: 1 },
            { id: 4, text: "What is a major benefit of using a Password Manager?", options: ["It makes your computer run faster", "It generates, stores, and autofills complex unique passwords", "It acts as an antivirus", "It blocks pop-up ads"], correctAnswer: 1 },
            { id: 5, text: "Which of the following is a form of biometrics?", options: ["An SMS code", "A fingerprint or facial recognition scan", "A secret question", "A smart card"], correctAnswer: 1 },
            { id: 6, text: "What happens in a 'Credential Stuffing' attack?", options: ["Hackers stuff a hard drive with useless data", "Attackers use leaked passwords from one breach to try logging into other websites", "A user writes too many passwords on a sticky note", "A password manager gets overloaded"], correctAnswer: 1 },
            { id: 7, text: "Why is receiving an SMS OTP considered less secure than using an Authenticator app?", options: ["SMS takes up more phone storage", "Hackers can intercept SMS via SIM swapping attacks", "Apps are always free", "SMS doesn't work internationally"], correctAnswer: 1 },
            { id: 8, text: "What is exactly 'One-Time' about a One-Time Password (OTP)?", options: ["You can only use it once before it expires", "You only get it once per year", "It only has one number", "It is for one website only forever"], correctAnswer: 0 },
            { id: 9, text: "What is 'Password Fatigue'?", options: ["When a password gets too old", "The frustration of having to remember too many complex passwords", "When a computer slows down", "When a hacker gives up"], correctAnswer: 1 },
            { id: 10, text: "What is 'SSO' in terms of authentication?", options: ["Secure System Override", "Single Sign-On, which allows using one set of credentials to access multiple applications", "Simple Security Operations", "Stand-alone System Optimization"], correctAnswer: 1 },
            { id: 11, text: "What makes a 'Passphrase' effective?", options: ["It uses only numbers", "It is usually longer (e.g., 'CorrectHorseBatteryStaple') making it mathematically harder to crack", "It is the name of your pet", "It expires every day"], correctAnswer: 1 },
            { id: 12, text: "Why should you never reuse passwords across different sites?", options: ["It takes too much time to type the same thing", "If one site is breached, hackers can access all your other accounts using that same password", "The websites will block you", "Password managers won't allow it"], correctAnswer: 1 },
            { id: 13, text: "What is 'Multi-Factor Authentication' (MFA)?", options: ["Using three different usernames", "Requiring at least two pieces of evidence (factors) from different categories to log in", "A type of firewall", "Having multiple email accounts"], correctAnswer: 1 },
            { id: 14, text: "Which of these is 'Something you know' in authentication terms?", options: ["A fingerprint", "A smart card", "A password or PIN", "A mobile phone"], correctAnswer: 2 },
            { id: 15, text: "What should you do if a website warns you that your password was found in a data breach?", options: ["Ignore it if it hasn't affected you yet", "Immediately change that password and any other accounts where you reused it", "Buy a new computer", "Delete the email"], correctAnswer: 1 }
        ]
    },
    {
        id: 4,
        title: 'Internet Laws in India',
        level: 'Beginner',
        duration: '1.5 hours',
        videoUrl: 'https://www.youtube.com/embed/C4GGNxAlVU0',
        storyboard: [
            { image: 'module4_scene1.jpg', text: "Is this even a crime? Can the police help with just an online profile?" },
            { image: 'module4_scene2.jpg', text: "Yes! Under the IT Act 2000, Section 66C and 66E cover Identity Theft and Privacy Violation." },
            { image: 'module4_scene3.jpg', text: "Don't be afraid to report. Use the national helpline 1930 or visit cybercrime.gov.in." },
            { image: 'module4_scene4.jpg', text: "The law protects you in the digital world. Stay informed and stay safe." }
        ],
        caseStudy: {
            title: "Neha's Fake Profile",
            scenario: "Neha, a talented and vibrant college student, woke up to a nightmare that is increasingly common in the era of hyper-connected social networks. Friends and acquaintances began forwarding her screenshots of a deeply disturbing social media profile. The profile bore her exact name, utilized a slightly modified version of her actual profile picture, and was populated with highly inappropriate, defamatory content. Worse still, the impersonator operating this fake account was actively sending harassing messages and solicitation requests to Neha's extended social circle, successfully masquerading as her. The emotional toll was instantaneous and devastating; Neha felt violated, helpless, and terrified of the reputational damage that was spiraling out of her control.\nDesperate for guidance, Neha sought the expertise of Cyber-Sia, who immediately recognized the dual nature of the crisis: it was both a technical security issue and a severe violation of the law. Cyber-Sia patiently explained that while the digital world often feels like the 'Wild West' without rules or consequences, India possesses robust legal frameworks designed specifically to combat these exact scenarios. She introduced Neha to the Information Technology (IT) Act, 2000, framing it as her digital shield and sword.\nCyber-Sia meticulously broke down the legal terminology to empower Neha with knowledge. She explained that the impersonator's actions constituted a clear case of 'Identity Theft,' an offense explicitly detailed and penalized under Section 66C of the IT Act. Furthermore, because the fake profile was utilizing her personal images in a defamatory context, it heavily bordered on the violation of privacy outlined in Section 66E.\n\nCyber-Sia emphasized that cybercrime is not a victimless or 'virtual' crime; the psychological distress and reputational harm are profoundly real, and the law recognizes this by mandating severe penalties, including imprisonment and substantial fines, for the perpetrators.\nMoving from education to actionable response, Cyber-Sia guided Neha through the crucial process of forensic evidence collection. They carefully documented everything, taking exhaustive screenshots of the fake profile, the explicit URLs, the timestamps, and the specific harassing messages, ensuring they captured the raw data before the attacker could potentially delete the account. Cyber-Sia stressed the importance of preserving the 'Digital Trail,' as this evidence would be the bedrock of the police investigation.\nWith the evidence securely compiled, Cyber-Sia assisted Neha in navigating the reporting mechanisms. They bypassed local precinct confusion by utilizing the streamlined National Cyber Crime Reporting Portal (cybercrime.gov.in) and engaging with the dedicated 1930 national helpline. The prompt and structured legal response not only initiated the process of shutting down the fraudulent account but also restored Neha's sense of agency. This difficult ordeal served as a powerful testament to the necessity of understanding one's digital rights and the critical importance of swift, legally informed action when those rights are violated."
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
        videoUrl: 'https://www.youtube.com/embed/nkkcQcl4vPU',
        storyboard: [
            { image: 'module5_scene1.jpg', text: "Cyber-Sia, the server is sending high volume encrypted traffic to an unknown IP. Is this a breach?" },
            { image: 'module5_scene2.jpg', text: "We analyze 'PCAPs' or packet captures to trace the source. Every packet tells a story." },
            { image: 'module5_scene3.jpg', text: "This is a 'C2 Beacon'. The malware is 'calling home'. We can isolate the machine." },
            { image: 'module5_scene4.jpg', text: "Network forensics is about visibility. Monitoring traffic is your first line of defense." }
        ],
        caseStudy: {
            title: "The Data Exfiltration Leak",
            scenario: "The atmosphere inside the enterprise Security Operations Center (SOC) was typically frantic, but during a routine late-night monitoring shift, junior analyst Arjun spotted an anomaly that made his blood run cold. Deep within the visual noise of the network traffic monitoring dashboard, he noticed a subtle, rhythmic pulse of data. A seemingly dormant, non-critical internal HR server was establishing consistent, encrypted outbound connections to a completely unknown IP address registered in a high-risk foreign jurisdiction. The connections were small, occurring precisely every four hours, and strictly utilizing port 443 to blend in with normal secure web traffic.\nUnsure of the severity, Arjun escalated the alert to his senior mentor, Cyber-Sia. She immediately recognized the behavioral signature and declared a severe security incident. What Arjun had detected was not a glitch; it was a 'Beacon'—the digital heartbeat of a Command and Control (C2) infrastructure. She explained that advanced malware rarely orchestrates a massive, noisy smash-and-grab operation. Instead, it subtly infiltrates the network, establishes a foothold, and \\\"calls home\\\" to the attacker's server, awaiting instructions or stealthily exfiltrating small, encrypted chunks of sensitive corporate data over long periods to evade alarming threshold-based intrusion detection systems.\nMoving swiftly, Cyber-Sia instructed Arjun to initiate a full-scale Network Forensics investigation rather than simply pulling the plug on the server, which would destroy vital volatile evidence in RAM. They deployed advanced network taps to perform full Packet Captures (PCAPs) of all traffic flowing into and out of the compromised subnet.\n\nUsing powerful protocol analyzers like Wireshark, they began the arduous task of 'dissecting' the packets. While the payload of the C2 traffic was heavily encrypted, the metadata—the source, destination, timing, and session sizes—painted a damning picture of a sophisticated Advanced Persistent Threat (APT) actor operating within their environment.\nThe forensic analysis revealed that the initial vector was a highly targeted spear-phishing email containing a weaponized document that had bypassed the perimeter email gateway weeks ago. The malware had been moving laterally, mapping the internal network, and was currently attempting to exfiltrate a massive, encrypted archive containing the company's proprietary source code and customer databases. Armed with the precise Indicators of Compromise (IoCs) extracted from the network traffic—specifically the malicious IP addresses and the custom user-agent strings utilized by the malware—the SOC team was able to rapidly implement targeted firewall blocking rules across the entire global enterprise.\nThe incident was a masterclass for Arjun in the true value of network visibility. He learned that the perimeter will inevitably fail; attackers will get inside. The ultimate defense relies on pervasive internal monitoring and the forensic capability to detect the subtle, malicious whispers amidst the roaring legitimate traffic of the corporate network. Network Forensics transformed from an abstract concept into the critical, frontline weapon that prevented a multi-million-dollar data breach."
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
        videoUrl: 'https://www.youtube.com/embed/-qF7uFTxlhI',
        storyboard: [
            { image: 'module6_scene1.jpg', text: "A database was stolen. Suspect laptop is here. I'll turn it on and check the files." },
            { image: 'module6_scene2.jpg', text: "Wait! Forensics rule: Never work on original evidence. Use a 'Write-Blocker' for imaging." },
            { image: 'module6_scene3.jpg', text: "How to prove the copy is identical? We use 'Hashing' like SHA-256. It's a digital fingerprint." },
            { image: 'module6_scene4.jpg', text: "Without matching hashes and a 'Chain of Custody', evidence is thrown out of court." }
        ],
        caseStudy: {
            title: "Database Theft Investigation",
            scenario: "The boardroom was tense. The company's crown jewel—a highly proprietary design database—had been illicitly copied, and internal telemetry strongly pointed toward a recently terminated senior engineer. Law enforcement had secured the suspect's personal laptop, and it currently sat on the lab bench, a silent repository of potential guilt. Eager to solve the case and find the smoking gun, Arjun, a newly minted investigator, aggressively reached for the laptop's power button, fully intending to boot it up, log in, and manually search the hard drive for the stolen files.\nBefore his finger could depress the switch, Cyber-Sia intercepted his hand with surprising force. 'Stop!' she commanded. She explained that his well-intentioned enthusiasm was about to commit the cardinal sin of Digital Forensics: altering the original evidence. She detailed how the simple act of the operating system booting up instantly modifies thousands of files, overwriting crucial timestamps, altering registry keys, and potentially destroying the very 'last accessed' metadata they needed to prove the suspect had opened the stolen files. If he had proceeded, a defense attorney would effortlessly have the entire laptop's contents thrown out of court due to forensic contamination.\nCyber-Sia initiated a rigorous, legally sound forensic process. She introduced Arjun to the hardware 'Write-Blocker,' a specialized triage device that sits between the suspect's hard drive and the investigator's workstation.\n\nShe explained its singular, critical function: it allows the forensic software to read every single bit of data on the suspect drive but physically intercepts and blocks any write commands from reaching the disk, guaranteeing the absolute, pristine integrity of the original evidence.\nWith the write-blocker engaged, they performed a 'Bit-Stream Image'—creating an exact, microscopic clone of the drive, capturing not only active files but also the hidden 'unallocated space' where deleted files and fragments might reside. To mathematically prove to a judge that the forensic image was an utterly perfect, unadulterated replica of the original drive, Cyber-Sia executed a cryptographic Hash Function (specifically SHA-256) on both the physical drive and the digital image file. When the two impossibly long, complex strings of alphanumeric characters matched perfectly, it provided irrefutable mathematical proof of integrity.\nSimultaneously, Cyber-Sia emphasized the meticulous administration of the 'Chain of Custody' document. Every action taken, every tool utilized, and the names of every individual who had physical possession of the evidence from the moment of seizure to the lab analysis was exhaustively documented. Arjun learned that in the realm of Digital Forensics, discovering the truth is only half the battle; the far more demanding task is preserving that truth meticulously enough to withstand the grueling, adversarial scrutiny of modern legal proceedings."
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
        videoUrl: 'https://www.youtube.com/embed/Uk3DEgY5Ue8',
        storyboard: [
            { image: 'module7_scene1.jpg', text: "Antivirus says disk is clean, but the machine is still attacking. Where is the malware?" },
            { image: 'module7_scene2.jpg', text: "It's in the RAM! This is 'Fileless Malware'. RAM is 'Volatile Data'—it disappears if powered off." },
            { image: 'module7_scene3.jpg', text: "By analyzing the memory dump, we find hidden processes and decrypted passwords." },
            { image: 'module7_scene4.jpg', text: "Non-volatile data stays; volatile data flies. Capture the memory first!" }
        ],
        caseStudy: {
            title: "Tracking Fileless Malware",
            scenario: "The IT department was in a state of absolute bewilderment. A mission-critical database server was exhibiting textbook symptoms of a severe malware infection: CPU utilization was inexplicably maxed out, erratic and unauthorized network connections were being established to known bad IP addresses, and the system was experiencing unpredictable micro-crashes. Yet, despite deploying three different top-tier, enterprise-grade antivirus and Endpoint Detection and Response (EDR) agents to perform deep, exhaustive scans of the server's hard drives, the results repeatedly came back completely clean. There was zero trace of malicious executable files anywhere on the disk.\nThe administrative team was contemplating pulling the power cord to wipe and reimage the server. Cyber-Sia urgently intervened, identifying this rash action as a catastrophic mistake. She explained that they were dealing with a highly sophisticated adversary utilizing 'Fileless Malware.' Unlike traditional viruses that drop physical '.exe' files onto the hard drive, this advanced threat injects its malicious payload directly into the server's Random Access Memory (RAM). It operates entirely within the volatile memory space, effectively rendering it invisible to traditional, disk-centric security scanners.\nCyber-Sia emphasized that pulling the plug would instantly erase the RAM, thereby destroying the only evidence of the attack and leaving the team completely blind as to how they were compromised. Instead, she initiated a live Memory Forensics operation. Utilizing a specialized kernel-level tool designed perfectly for the specific operating system architecture, she carefully extracted a complete 'Memory Dump'—a flawless digital snapshot capturing the state of all 64 gigabytes of the server's volatile RAM at that exact millisecond in time.\nTransporting the memory dump to a secure analysis workstation, Cyber-Sia and Arjun utilized the Volatility framework, the industry standard for memory analysis.\n\nThrough meticulous parsing of the memory structures, they bypassed the operating system's lies. They uncovered a classic 'Process Hollowing' technique, where the attacker had launched a legitimate, trusted system process (like svchost.exe), hollowed out its memory space, and injected their malicious code directly into that trusted husk. From the perspective of the operating system, it looked like a normal Windows process, but the memory dump revealed the hidden, malicious intent.\nFurthermore, the profound depth of the memory forensics analysis yielded a treasure trove of critically sensitive data that the attacker believed was ephemeral. Within the scattered bytes of the RAM snapshot, they recovered the cleartext, unencrypted commands the attacker had typed into their hidden command shell, the decrypted registry keys used for persistence, and most shockingly, the plaintext passwords of the highly privileged service accounts the attacker had scraped from memory to facilitate lateral movement. This harrowing incident cemented Arjun's understanding of the 'Order of Volatility'—the critical forensic principle commanding that the most fleeting, fragile data must always be captured first."
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
        videoUrl: 'https://www.youtube.com/embed/aZRhzea_nas',
        storyboard: [
            { image: 'module8_scene1.jpg', text: "Everything is locked! Should we pay the ransom to get our data back?" },
            { image: 'module8_scene2.jpg', text: "Never pay! We follow the PICERL cycle: Contain, Eradicate, and Recover." },
            { image: 'module8_scene3.jpg', text: "Forensics is about protecting justice. Whether in school or college, start learning today." },
            { image: 'module8_scene4.jpg', text: "You are now a CyberSpark. Lead the way to a safer internet." }
        ],
        caseStudy: {
            title: "The Ransomware Crisis",
            scenario: "The Monday morning started with a visceral shock that paralyzed the entire corporate headquarters. As hundreds of employees attempted to log into their workstations, they were uniformly greeted by a menacing, blood-red skull glaring from their monitors, accompanied by a text file completely taking over their screens. It was a ransom note. The organization had fallen victim to a catastrophic Ransomware attack. Every critical file—from customer databases to decades of proprietary intellectual property and financial records—had been forcefully encrypted using military-grade algorithms. The perpetrators were demanding a multi-million-dollar payment in untraceable Bitcoin, with a countdown timer threatening permanent deletion if the deadline was missed.\nAbsolute panic swept through the executive suite. The CEO, facing the prospect of total operational collapse and catastrophic brand damage, seriously considered capitulating and authorizing the massive extortion payment to quickly recover the lifeblood data. Arjun, deeply trained in incident management, stepped into the chaotic war room and strongly advised against paying the ransom. He argued clearly that paying does not legally guarantee the return of the decryption keys, completely funds international criminal syndicates, and aggressively paints a target on the company for future, repeated attacks.\nUnder Arjun's guidance, the organization pivoted from panic to executing the structured PICERL Incident Response framework. The immediate priority was brutal 'Containment'. The security team physically severed the connections of the infected segments from the broader internal network and the internet, halting the lateral spread of the encryption worm before it could reach the isolated, off-site backup servers.\n\nHaving secured the perimeter, they transitioned to 'Eradication', systematically hunting down and completely nuking the malicious executables, the compromised user accounts used for access, and the hidden backdoors the attackers had planted within the infrastructure.\nThe arduous 'Recovery' phase commenced. Because the organization had maintained strong, segregated offline backups, they were incredibly fortunate to avoid paying the ransom. Over a grueling 72-hour period, IT staff meticulously restored terabytes of systems and data from known-clean states, heavily monitoring the freshly restored environment for any signs of reinfection. The company slowly limped back to operational status, battered but not defeated.\nHowever, Arjun insisted that the most critical phase was yet to come: the 'Lessons Learned' post-mortem. In the emotionally difficult aftermath, the team conducted a brutally honest analysis of the failure. They discovered that the initial compromise occurred due to an employee failing to recognize a sophisticated phishing email, combined with a severe lack of Multi-Factor Authentication (MFA) on the external VPN portal. This painful incident resulted in total architectural security overhauls, mandatory, rigorous security awareness training for all staff, and a newfound, profound respect for the necessity of proactive Incident Response planning in an increasingly hostile digital landscape."
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
            scenario: "The stakes were incredibly high. A massive, multinational financial institution was weeks away from launching their highly anticipated, next-generation online banking portal. The platform was designed to handle millions of daily transactions, manage immensely sensitive personal wealth portfolios, and interface directly with legacy mainframe systems. Recognizing that a post-launch breach would constitute an existential threat to the company, the board of directors commissioned an exhaustive, highly aggressive penetration test, simulating a determined, elite hacking syndicate attempting to breach their defenses.\nArjun, operating as the lead ethical hacker on the 'Red Team,' was tasked with systematically tearing down the application's security posture before real threat actors could find the flaws. His objective was not merely to run automated vulnerability scanners, but to adopt the mindset of an attacker, thinking creatively to chain together multiple, minor flaws into a catastrophic compromise. He began his assault by focusing intensely on the OWASP Top 10—the universally recognized consensus on the most critical web application security risks.\nHis initial reconnaissance revealed a seemingly innocuous input field designed for customer feedback on a secondary, overlooked page of the application. However, manual fuzzing and manipulation of this specific field revealed a severe lack of input sanitization interacting with the backend database. By meticulously crafting complex, malicious SQL queries and injecting them directly into the feedback box, Arjun successfully executed a textbook 'SQL Injection' (SQLi) attack.\n\nThis allowed him to completely bypass the authentication mechanisms, drop the application's underlying database tables, and theoretically exfiltrate the entirety of the simulated customer PII and financial records.\nBut Arjun didn't stop at the application layer. He pivoted his attack to focus on the underlying network infrastructure hosting the portal. He deployed advanced port scanning and service enumeration techniques against the production environment. Shockingly, he discovered a severe misconfiguration in the perimeter firewall: a completely unauthenticated, legacy administrative interface for a critical load balancer had been accidentally exposed directly to the public internet, protected by nothing more than the manufacturer's default, easily guessable credentials.\nThe detailed, heavily documented final report Arjun delivered to the executive team was sobering. He mapped out exactly how the SQL injection could lead to mass data theft and how the exposed load balancer could allow an attacker to completely hijack or disable the entire banking platform. By identifying these critical architectural and coding failures in a controlled, preemptive environment, Arjun provided the development team with the exact remediation steps needed to secure the infrastructure. His ethical hacking engagement transformed potential catastrophic ruin into a robust, hardened platform ready for safe deployment."
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
        videoUrl: 'https://www.youtube.com/embed/qA0YcYMRWyI',
        caseStudy: {
            title: "Analyzing a Sophisticated Trojan",
            scenario: "The tension inside the government cybersecurity agency was palpable. A highly classified, air-gapped server—a machine entirely disconnected from the internet to ensure maximum security—had mysteriously failed a routine integrity check. Deep within a heavily restricted directory, security analysts discovered an absolutely terrifying anomaly: a small, unnamed, and completely undocumented executable binary file. Because the server was air-gapped, the mere presence of this file indicated a significant, likely insider-assisted, physical breach. Given the incredibly sensitive nature of the intelligence data housed on the server, executing the file to see what it did was out of the question; it could trigger a catastrophic data wiping payload or attempt to beacon out classified information using exotic methods.\nThe malicious artifact was carefully transported via a secure, encrypted drive to the Advanced Malware Analysis laboratory. The lead reverse engineer approached the unknown weapon with extreme caution. The first phase of the investigation relied entirely on 'Static Analysis'. Without ever running the executable, the engineer utilized disassemblers like IDA Pro and Ghidra to tear apart the compiled machine code, translating it back into human-readable assembly language. This painstaking, line-by-line analysis revealed that the file was heavily obfuscated, utilizing complex packers and anti-analysis techniques designed specifically to confuse researchers and hide its true intent from automated antivirus scanners.\nDespite the obfuscation, the static analysis yielded crucial clues. The engineer discovered hardcoded, encrypted strings within the binary that looked suspiciously like IP addresses, and identified imported API calls that heavily suggested the capability to log keystrokes and manipulate the Windows registry for persistence.\n\nHowever, to truly understand the malware's full capabilities and how it communicated, they needed to see it in action. They carefully transferred the binary into a 'Sandbox'—a heavily fortified, completely isolated, and meticulously monitored virtual environment built explicitly to safely detonate malicious code without any risk to the broader network.\nAs the malware executed within the secure confines of the sandbox, the 'Dynamic Analysis' phase began. The monitoring tools immediately flared to life, capturing every single action the program took. They watched in real-time as the malware aggressively injected its malicious code into a seemingly legitimate Windows process, attempting to hide its presence. More importantly, the network sniffers captured the malware's desperate attempts to 'call home.' It was trying to establish an encrypted connection to a specific Command and Control (C2) server located overseas. By synthesizing the deep structural understanding from the static analysis with the explosive behavioral evidence from the dynamic detonation, the engineering team successfully unmasked the sophisticated Trojan. They categorized its capabilities, identified the likely nation-state actor responsible based on the coding style, and developed precise, actionable signatures to ensure the threat could be instantly identified and eradicated if it ever appeared on their networks again."
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
        videoUrl: 'https://www.youtube.com/embed/jI8IKpjiCSM',
        caseStudy: {
            title: "Securing Multi-Cloud Environments",
            scenario: "A rapidly evolving multinational corporation, desperate to accelerate their digital transformation and support a newly remote global workforce, executed an aggressive strategy to migrate their entire on-premises infrastructure to the cloud. In their scramble for agility, they adopted a 'Multi-Cloud' approach, indiscriminately spinning up hundreds of servers, databases, and storage buckets across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). However, this rapid, decentralized expansion quickly mutated into an unmanageable security nightmare. Different departments configured their environments using completely different standards, resulting in a fragmented, highly porous security perimeter that essentially left the corporate front door wide open.\nThe situation reached a crisis point when an external security researcher publicly disclosed that several of the company's AWS S3 storage buckets—containing gigabytes of incredibly sensitive, unencrypted customer financial data and proprietary source code—had been left completely exposed to the public internet due to a simple configuration error by a junior developer. Realizing they lacked control over their own infrastructure, the executive board brought in a Lead Cloud Security Architect to completely overhaul and secure their chaotic multi-cloud ecosystem.\nThe architect began by relentlessly educating the leadership team on the critical concept of the 'Shared Responsibility Model.' They dismantled the dangerous myth that migrating to 'the cloud' magically absolves a company of security obligations.\n\nThey emphasized that while AWS or Azure is responsible for securing the physical data centers, the hardware, and the underlying hypervisors (Security OF the Cloud), the company remains completely, legally, and financially responsible for securing everything they put INTO the cloud—their data, their applications, their firewall configurations, and their access policies.\nTo regain control over the sprawling infrastructure, the architect mandated the immediate implementation of a centralized, Draconian Identity and Access Management (IAM) framework. They eradicated the dangerous practice of sharing administrative credentials and implemented strict 'Principle of Least Privilege' (PoLP) policies across all three cloud providers. Going forward, developers and applications were granted only the absolute minimum permissions necessary to perform their specific tasks, and access was heavily gated behind mandatory Multi-Factor Authentication (MFA). Furthermore, to neutralize the immense risk of future data exposures, the architect engineered automated policies that enforced mandatory, unbreakable Encryption-at-Rest for every single database and storage bucket, regardless of which cloud platform it resided on. By establishing a unified, zero-trust architecture, they successfully transformed a massive, bleeding liability into a scalable, highly secure foundation for the company's future."
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
        videoUrl: 'https://www.youtube.com/embed/4QzBdeUQ0Dc',
        caseStudy: {
            title: "AI-Driven Threat Detection",
            scenario: "The physical scale of the Security Operations Center (SOC) at the global telecommunications giant was awe-inspiring, a massive, darkened room dominated by sprawling walls of high-resolution monitors continuously flashing with global threat intelligence feeds. Yet, despite the immense resources, the atmosphere was one of profound exhaustion. The human security analysts were catastrophically overwhelmed by a massive, endless deluge of daily security alerts generated by their traditional, signature-based Intrusion Detection Systems (IDS) and firewalls. They were trapped in a state of severe 'Alert Fatigue,' wasting thousands of valuable man-hours meticulously investigating 'False Positives'—benign anomalies like slightly unusual login times or sudden influxes of legitimate customer traffic that the inflexible security tools had incorrectly flagged as malicious attacks.\nThis overwhelming volume of noise was incredibly dangerous; it guaranteed that subtle, highly sophisticated, and genuinely destructive attacks—the 'needle in the haystack'—were going to be missed. To combat this paralysis, the organization made a strategic decision to heavily invest in integrating Artificial Intelligence (AI) and Machine Learning (ML) directly into their core threat hunting operations. They sought to leverage the sheer computational power of AI to process data at a scale and speed that is biologically impossible for a human analyst.\nThey deployed advanced, unsupervised machine learning models designed explicitly for behavioral analysis.\n\nUnlike legacy systems that lazily look for known bad signatures (like a specific virus definition), these neural networks spent weeks silently observing the massive flow of network traffic, meticulously learning the complex, incredibly nuanced baseline of what constituted 'normal' behavior for every single user, device, and application within the massive enterprise environment. By understanding the normal rhythm of the network down to the microsecond, the AI had the contextual intelligence to spot the abnormal.\nThe results were transformative. The AI dramatically reduced the crushing burden of false positives by instantly recognizing that an executive logging in from Tokyo at 3 AM was actually a normal behavioral pattern for that specific individual, an insight a rigid rule-based system would fail to grasp. More critically, the AI platform began autonomously detecting 'Zero-Day' exploits—brand new, never-before-seen cyber attacks that completely lacked any known signatures. When a compromised internal workstation suddenly displayed a minuscule deviation in its behavioral pattern, slightly altering its data transfer rate and attempting to communicate with an unrecognized domain using an unusual protocol, the AI instantly flagged the anomaly. It isolated the heavily obfuscated, incredibly stealthy threat in real-time, empowering the human analysts to rapidly neutralize a sophisticated attack that would have easily bypassed every traditional security measure they possessed."
        },
        quiz: [
            { id: 1, text: "How does AI help in threat detection?", options: ["By replacing all human experts", "By identifying patterns and anomalies at scale", "By banning all internet users", "By increasing network latency"], correctAnswer: 1 },
            { id: 2, text: "What is a 'False Positive'?", options: ["A correct identification of a threat", "An alert that incorrectly flags legitimate activity as malicious", "A missed attack", "A successful login"], correctAnswer: 1 }
        ]
    }
];



export const studyModulesKn: StudyModuleType[] = [
    {
        "id": 1,
        "title": "ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತು",
        "level": "Beginner",
        "duration": "1 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/5H-K3XFof9k",
        "storyboard": [
            {
                "image": "module1_scene1.jpg",
                "text": "ಅರ್ಜುನ್ ಕೇವಲ ಬಬಲ್-ಚಹಾದ ಮೇಲಿನ ಪ್ರೀತಿಗಾಗಿ ತನ್ನ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ಕೆಫೆಯಲ್ಲಿ ಹಂಚಿಕೊಂಡನು. ಇದು ಅಪಾಯಕಾರಿಯೇ?"
            },
            {
                "image": "module1_scene2.jpg",
                "text": "ಪ್ರತಿಯೊಂದು ಕ್ಲಿಕ್, ಇಷ್ಟ, ಮತ್ತು ನೀವು ಪೋಸ್ಟ್ ಮಾಡುವ ಪ್ರತಿಯೊಂದು ಫೋಟೋ ನಿಮ್ಮ 'ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತು' (Digital Footprint) ಅನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ."
            },
            {
                "image": "module1_scene3.jpg",
                "text": "ಸೈಬರ್-ಸಿಯಾ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತಾಳೆ: 'ಸಾಮಾಜಿಕ ಎಂಜಿನಿಯರ್‌ಗಳು ನಿಮ್ಮ ವಿರುದ್ಧ ದಾಳಿಗಳನ್ನು ರಚಿಸಲು ಆ ಸಣ್ಣ ವಿವರಗಳನ್ನು ಬಳಸುತ್ತಾರೆ.'"
            },
            {
                "image": "module1_scene4.jpg",
                "text": "ನೀವು ಹಂಚಿಕೊಳ್ಳುವ ಮೊದಲು ಯೋಚಿಸಿ. ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ಉಪಸ್ಥಿತಿಯನ್ನು ನಿಯಮಿತವಾಗಿ ಸ್ವಚ್ಛಗೊಳಿಸಿ."
            }
        ],
        "caseStudy": {
            "title": "ಶಾಶ್ವತ ಪೋಸ್ಟ್",
            "scenario": "ಕಾಲೇಜಿನ ಮೊದಲ ದಿನದ ಬಗ್ಗೆ ಅರ್ಜುನ್ ಉತ್ಸಾಹ ತುಂಬಿದ್ದನು. ಅವನ ಸ್ನೇಹಿತರಂತೆ, ಈ ಪ್ರಮುಖ ಸಾಧನೆಯನ್ನು ತನ್ನ ಸಾಮಾಜಿಕ ನೆಟ್ ವರ್ಕ್ ನೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುವ ಬಯಕೆ அவನಲ್ಲಿತ್ತು. ತಕ್ಷಣ ಅವನು ತನ್ನ ಹೊಸ ವಿದ್ಯಾರ್ಥಿ ಗುರುತಿನ ಚೀಟಿಯ ಹೆಮ್ಮೆಯ ಫೋಟೋ ತೆಗೆದು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಪೋಸ್ಟ್ ಮಾಡಿದನು. ಆದರೆ ಅವನು ತಾನು ಎಷ್ಟು ವೈಯಕ್ತಿಕವಾಗಿ ಗುರುತಿಸಬಹುದಾದ ಮಾಹಿತಿಯನ್ನು (PII) ಜಗತ್ತಿಗೆ ಪ್ರಸಾರ ಮಾಡಿದ್ದೇನೆ ಎಂದು ಸಂಪೂರ್ಣವಾಗಿ ಮರೆತಿದ್ದನು. ಆ ಗುರುತಿನ ಚೀಟಿಯಲ್ಲಿ ಅವನ ಪೂರ್ಣ ಹೆಸರು ಮತ್ತು ಫೋಟೋ ಮಾತ್ರವಲ್ಲದೆ, ಅವನ ಜನ್ಮ ದಿನಾಂಕ, ಖಾಯಂ ವಿಳಾಸ ಮತ್ತು ಅನನ್ಯ ವಿದ್ಯಾರ್ಥಿ ಗುರುತಿನ ಸಂಖ್ಯೆ ಇತ್ತು. 'ಲೈಕ್ಸ್' ಮತ್ತು ಶುಭಾಶಯಗಳ ಕಾಮೆಂಟ್‌ಗಳನ್ನು ಸಂಗ್ರಹಿಸುವ ಮಾನಸಿಕ ರೋಮಾಂಚನವು ಅವನ ಕ್ರಿಯೆಗಳ ಗಂಭೀರ ಭದ್ರತಾ ಪರಿಣಾಮಗಳನ್ನು ತಾತ್ಕಾಲಿಕವಾಗಿ ಕುರುಡಾಗಿಸಿತ್ತು.\\\\n\\\\nಅವನ ಡಿಜಿಟಲ್ ಮಾರ್ಗದರ್ಶಕಿಯಾದ ಸೈಬರ್-ಸಿಯಾ, ಪೋಸ್ಟ್ ಅನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ನೋಡಿದ ತಕ್ಷಣ ಪ್ರವೇಶಿಸುತ್ತಾಳೆ. ಅವಳು ಅರ್ಜುನ್‌ನನ್ನು ಕೂರಿಸಿಕೊಂಡು 'ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತು' ಎಂಬ ಪರಿಕಲ್ಪನೆಯ ಬಗ್ಗೆ ನಿರ್ಣಾಯಕ ಪಾಠವನ್ನು ಕಲಿಸುತ್ತಾಳೆ. ಇಂಟರ್ನೆಟ್ ಶಾಶ್ವತವಾಗಿದೆ ಎಂದು ಅವಳು ವಿವರಿಸಿದಳು; ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಪ್ರತಿಯೊಂದು ಫೋಟೋ, ಟೈಪ್ ಮಾಡಿದ ಪ್ರತಿಯೊಂದು ಕಾಮೆಂಟ್ ಮತ್ತು ಭೇಟಿ ನೀಡಿದ ಪ್ರತಿಯೊಂದು ವೆಬ್‌ಸೈಟ್ ಡೇಟಾದ ಅಳಿಸಲಾಗದ ಹಾದಿಗೆ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ. ಸೈಬರ್ ಜಗತ್ತಿನಲ್ಲಿ 'ಥ್ರೆಟ್ ಇಂಟೆಲಿಜೆನ್ಸ್' ಸಂಗ್ರಹಿಸುವವರು ಎಂದು ಕರೆಯಲ್ಪಡುವ ದುರುದ್ದೇಶಪೂರಿತ ವ್ಯಕ್ತಿಗಳು ಸಾರ್ವಜನಿಕ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಪ್ರೊಫೈಲ್‌ಗಳಿಂದ ಇಂತಹ ಅಜಾಗರೂಕತೆಯಿಂದ ಬಿಸಾಡಿದ ಮಾಹಿತಿಯನ್ನು ಕೊಯ್ಲು ಮಾಡಲು ಸ್ವಯಂಚಾಲಿತ ಬಾಟ್‌ಗಳು ಮತ್ತು ಸ್ಕ್ರ್ಯಾಪಿಂಗ್ ಪರಿಕರಗಳನ್ನು ಹೇಗೆ ಸಕ್ರಿಯವಾಗಿ ಬಳಸುತ್ತಾರೆ ಎಂಬುದನ್ನು ಅವಳು ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಿದಳು. ಅವಳು ಗುರುತಿನ ಕಳ್ಳತನದ ದಾಳಿಯ ಅಂಗರಚನಾಶಾಸ್ತ್ರವನ್ನು (anatomy of an identity theft attack) ವಿವರಿಸಿದಳು. ಅರ್ಜುನ್ ಒದಗಿಸಿದ ಮಾಹಿತಿಯೊಂದಿಗೆ, ದಾಳಿಕೋರನು ಅವನ ಇಮೇಲ್ ಅಥವಾ ಬ್ಯಾಂಕ್ ಖಾತೆಗಳನ್ನು ರಾಜಿ ಮಾಡಲು ಮೂಲಭೂತ ಭದ್ರತಾ ಪ್ರಶ್ನೆಗಳನ್ನು ('ನಿಮ್ಮ ಜನ್ಮ ದಿನಾಂಕವೇನು?', 'ನಿಮ್ಮ ಪಿನ್ ಕೋಡ್ ಏನು?') ಸುಲಭವಾಗಿ ಬೈಪಾಸ್ ಮಾಡಬಹುದು. ತಕ್ಷಣದ ಅಪಾಯವನ್ನು ತಗ್ಗಿಸಲು, ಪೋಸ್ಟ್ ಅನ್ನು ಕೆಳಗಿಳಿಸುವ ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ಸೈಬರ್-ಸಿಯಾ ಅರ್ಜುನ್ ಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದಳು, ಆದರೆ ಚಿತ್ರವನ್ನು ಈಗಾಗಲೇ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿರಬಹುದು ಅಥವಾ ಬಾಹ್ಯ ಸರ್ವರ್‌ಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಿರಬಹುದು ಎಂದು ಎಚ್ಚರಿಸಿದಳು. ಅಂದಿನಿಂದ, ಅರ್ಜುನ್ 'ಹಂಚಿಕೊಳ್ಳಿ' (Share) ಬಟನ್ ಒತ್ತುವ ಮೊದಲು 'ನಿಲ್ಲಿಸಿ ಮತ್ತು ಯೋಚಿಸಿ' ಎಂಬ ತತ್ವವನ್ನು ಅಳವಡಿಸಿಕೊಂಡನು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "'ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತು' (Digital Footprint) ಎಂದರೇನು?",
                "options": [
                    "ಒಂದು ರೀತಿಯ ಶೂ",
                    "ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ಚಟುವಟಿಕೆಯ ದೊಡ್ಡ ಡೇಟಾ ದಾಖಲೆ",
                    "ಕಂಪ್ಯೂಟರ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವ ಸಾಫ್ಟ್‌ವೇರ್",
                    "ಕೆಳಗಿನ ಕತ್ತಲ ಜಗತ್ತು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "ಐಡಿ ಕಾರ್ಡ್‌ನ ಫೋಟೋವನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದು ಏಕೆ ಅಪಾಯಕಾರಿ?",
                "options": [
                    "ಇದು ಕಾನೂನುಬಾಹಿರ ಕಾರ್ಯ",
                    "ಇದು ಸೂಕ್ಷ್ಮ ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ (PII)",
                    "ಫೈಲ್ ಗಾತ್ರ ದೊಡ್ಡದಾಗಿದೆ",
                    "ಕ್ಯಾಮೆರಾ ಹಾಳಾಗುತ್ತದೆ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 3,
                "text": "ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅಳಿಸಬಹುದೇ?",
                "options": [
                    "ಹೌದು, 10 ವರ್ಷಗಳ ನಂತರ",
                    "ಕೇವಲ ಸರ್ಕಾರ ಮಾತ್ರ ಅಳಿಸಬಹುದು",
                    "ಇಲ್ಲ, ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಂಡಿರುವುದು প্রায়ಶः ಶಾಶ್ವತವಾಗಿರುತ್ತದೆ",
                    "ಹೌದು, ಖಾತೆ ಡಿಲೀಟ್ ಮಾಡಿದರೆ ಸಾಕು"
                ],
                "correctAnswer": 2
            },
            {
                "id": 4,
                "text": "ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತನ್ನು ಯಾರು ಬಳಸಬಹುದು?",
                "options": [
                    "ಕೇವಲ ನಿಮ್ಮ ಸ್ನೇಹಿತರು",
                    "ಸ್ನೇಹಿತರು, ಹ್ಯಾಕರ್‌ಗಳು, ಉದ್ಯೋಗದಾತರು ಮತ್ತು ಅಪರಿಚಿತರು",
                    "ಕೇವಲ ಯಂತ್ರಗಳು",
                    "ನಿಮ್ಮನ್ನು ಹೊರತುಪಡಿಸಿ ಯಾರು ಇಲ್ಲ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 5,
                "text": "'ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಸ್ಕ್ರಬ್ಬಿಂಗ್' (Social Media Scrubbing) ಅಂದರೆ ಏನು?",
                "options": [
                    "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಅಳಿಸುವುದು",
                    "ಹಳೆಯ ಅಥವಾ ಸೂಕ್ತವಲ್ಲದ ಪೋಸ್ಟ್‌ಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸುವುದು",
                    "ದಿನವೂ ಹೆಚ್ಚು ಪೋಸ್ಟ್ ಮಾಡುವುದು",
                    "ರಹಸ್ಯ ಖಾತೆ ತೆರೆಯುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 6,
                "text": "ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತು ವೃತ್ತಿಜೀವನದ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ?",
                "options": [
                    "ಯಾವ ಪರಿಣಾಮವೂ ಇಲ್ಲ",
                    "ಉದ್ಯೋಗದಾತರು ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ನಡವಳಿಕೆಯನ್ನು ಪರಿಶೀಲಿಸಬಹುದು",
                    "ಸಿನಿಮಾ ನಟರ ಮೇಲೆ ಮಾತ್ರ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ",
                    "ವೇತನವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 7,
                "text": "ಒಂದು ಪೋಸ್ಟ್ ಗೆ 'ಲೈಕ್' (Like) ಮಾಡುವುದು ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತೇ?",
                "options": [
                    "ಇಲ್ಲ, ಕೇವಲ ಬರೆಯುವುದು ಮಾತ್ರ",
                    "ಹೌದು, ಇದು ನಿಮ್ಮ ಆಸಕ್ತಿಗಳನ್ನು ತಿಳಿಸುತ್ತದೆ",
                    "ಶೇರ್ ಮಾಡಿದರೆ ಮಾತ್ರ",
                    "ಕಾಮೆಂಟ್ ಮಾಡಿದರೆ ಮಾತ್ರ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 8,
                "text": "ಶೇರ್ ಮಾಡಿದ ಫೋಟೋದಲ್ಲಿ 'ಮೆಟಾಡೇಟಾ' (Metadata) ಅಂದರೆ ಏನು?",
                "options": [
                    "ಬಳಸಿದ ಫಿಲ್ಟರ್ (Filter)",
                    "ಫೋಟೋದಲ್ಲಿರುವ ವ್ಯಕ್ತಿ",
                    "ಸ್ಥಳ ಮತ್ತು ಸಮಯದಂತಹ ಗುಪ್ತ ಮಾಹಿತಿಗಳು",
                    "ಫೋಟೋದ ಬಣ್ಣ"
                ],
                "correctAnswer": 2
            },
            {
                "id": 9,
                "text": "ಗೌಪ್ಯತೆ ಸೆಟ್ಟಿಂಗ್ (Privacy Settings) ಆಗಾಗ ಪರಿಶೀಲಿಸುವುದು ಏಕೆ ಮುಖ್ಯ?",
                "options": [
                    "ಪಾಸ್‌ವರ್ಡ್ ಬದಲಿಸಲು",
                    "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು ಆಗಾಗ್ಗೆ ತಮ್ಮ ಡೇಟಾ ನೀತಿಗಳನ್ನು ಬದಲಾಯಿಸುತ್ತವೆ",
                    "ಫಾಲೋವರ್ಸ್ ಅನ್ನು ಹೆಚ್ಚಿಸಲು",
                    "ಕಂಪ್ಯೂಟರ್ ವೇಗ ಹೆಚ್ಚಿಸಲು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 10,
                "text": "ಆನ್‌ಲೈನ್ ಹೆಜ್ಜೆಗುರುತನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಲು ಮೊದಲ ಹೆಜ್ಜೆ ಯಾವುದು?",
                "options": [
                    "ಸರ್ಚ್ ಇಂಜಿನ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರನ್ನು ಹುಡುಕಿ ಪರಿಶೀಲಿಸುವುದು",
                    "ಫೋನ್ ಬದಲಿಸುವುದು",
                    "ನಕಲಿ ಹೆಸರು ಬಳಸುವುದು",
                    "ಯಾವುದೇ ಹೊಸ ಅಪ್ಲಿಕೇಶನ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡದಿರುವುದು"
                ],
                "correctAnswer": 0
            }
        ]
    },
    {
        "id": 2,
        "title": "ಸಾಮಾಜಿಕ ಎಂಜಿನಿಯರಿಂಗ್ (Social Engineering)",
        "level": "Beginner",
        "duration": "1 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/jZ1S0K08h6M",
        "storyboard": [
            {
                "image": "module2_scene1.jpg",
                "text": "ಅರ್ಜುನ್ ಗೆ ಒಂದು ಅಧಿಕೃತ ಕರೆ ಬರುತ್ತದೆ. 'ನಿಮ್ಮ ಖಾತೆ ಹ್ಯಾಕ್ ಆಗಿದೆ! ದಯವಿಟ್ಟು OTP ಹಂಚಿಕೊಳ್ಳಿ.'"
            },
            {
                "image": "module2_scene2.jpg",
                "text": "ಗಬರಿಯಲ್ಲಿ, ಅರ್ಜುನ್ ಕೋಡ್ ಅನ್ನು ಓದಲು ಪ್ರಾರಂಭಿಸುತ್ತಾನೆ..."
            },
            {
                "image": "module2_scene3.jpg",
                "text": "ಸೈಬರ್-ಸಿಯಾ ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸುತ್ತಾಳೆ. 'ಇದು ವಿಷಿಂಗ್ (Vishing). ಬ್ಯಾಂಕ್ ಎಂದಿಗೂ OTP ಅನ್ನು ಕೇಳುವುದಿಲ್ಲ.'"
            },
            {
                "image": "module2_scene4.jpg",
                "text": "ಹಾರ್ಡ್‌ವೇರ್‌ಗಿಂತ ಹೆಚ್ಚಾಗಿ ಮನುಷ್ಯರನ್ನು ಗುರಿಯಾಗಿಸುವ ದಾಳಿಯೇ ಸಾಮಾಜಿಕ ಎಂಜಿನಿಯರಿಂಗ್."
            }
        ],
        "caseStudy": {
            "title": "ಪ್ಯಾನಿಕ್ ಕಾಲ್",
            "scenario": "ಮಂಗಳವಾರ ಸಂಜೆ, ಅರ್ಜುನ್ ಗೆ ಅಪರಿಚಿತ ಅಧಿಕೃತ ಸಂಖ್ಯೆಯಿಂದ ಫೋನ್ ಕರೆ ಬಂತು. ಕರೆ ಮಾಡಿದ ವ್ಯಕ್ತಿ ಬಹು ಮೃದುವಾಗಿ ಮತ್ತು ತುರ್ತಾಗಿ ಮಾತನಾಡುತ್ತಾ, ತಾನು ಅರ್ಜುನ್‌ನ ಪ್ರಾಥಮಿಕ ಬ್ಯಾಂಕ್‌ನ ಹಿರಿಯ ಭದ್ರತಾ ಅಧಿಕಾರಿ ಎಂದು ಪರಿಚಯಿಸಿಕೊಂಡನು. ಆ ಕರೆ ಮಾಡಿದ ವ್ಯಕ್ತಿ ತಕ್ಷಣವೇ ಭಯಾನಕ ಕಥೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿದನು: ಅರ್ಜುನ್ ನ ಖಾತೆಯಲ್ಲಿ ಅನುಮಾನಾಸ್ಪದ, ಹೆಚ್ಚಿನ ಮೌಲ್ಯದ ವಹಿವಾಟುಗಳು ಪ್ರಸ್ತುತ ಪ್ರಯತ್ನಿಸಲ್ಪಡುತ್ತಿವೆ. ಈ ಅನಧಿಕೃತ ವರ್ಗಾವಣೆಗಳನ್ನು ನಿಲ್ಲಿಸಲು ಮತ್ತು ಅವನ ಉಳಿತಾಯವನ್ನು ಭದ್ರಪಡಿಸಲು, ಅರ್ಜುನ್‌ನ ಮೊಬೈಲ್ ಸಾಧನಕ್ಕೆ ಕಳುಹಿಸಲಾದ ಒನ್-ಟೈಮ್ ಪಾಸ್‌ವರ್ಡ್ (OTP) ಅನ್ನು ತಕ್ಷಣವೇ ಓದುವ ಮೂಲಕ ತನ್ನ ಗುರುತನ್ನು ಪರಿಶೀಲಿಸಬೇಕು ಎಂದು ಆ ವ್ಯಕ್ತಿ ಒತ್ತಾಯಿಸಿದನು. ಹಣ ಕಳೆದುಕೊಳ್ಳುವ ಆಲೋಚನೆಯಿಂದ ಪ್ರೇರಿತವಾದ ತೀವ್ರ ಭೀತಿಯು ಅವನ ತಾರ್ಕಿಕ ಚಿಂತನೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಬೈಪಾಸ್ ಮಾಡಿತು. ಆರ್ಥಿಕ ವಿಪತ್ತಿನಿಂದ ತನ್ನನ್ನು ತಾನು ರಕ್ಷಿಸಿಕೊಳ್ಳಲು ಆ 'ಬ್ಯಾಂಕ್ ಅಧಿಕಾರಿಯ' ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸುವ ಉದ್ದೇಶದಿಂದ ಅರ್ಜುನ್ ಕೋಡ್ ಅನ್ನು ಹಿಂಪಡೆಯಲು ತಡಬಡಿಸಿದನು.\\\\n\\\\nಅದೃಷ್ಟವಶಾತ್, ಸೈಬರ್-ಸಿಯಾ ಅರಿವಿನ ಕುಶಲತೆಯ (cognitive manipulation) ಶ್ರೇಷ್ಠ ಚಿಹ್ನೆಗಳನ್ನು ಗುರುತಿಸಿದಳು ಮತ್ತು ಅರ್ಜುನ್ ಆರು-ಅಂಕಿಯ ಕೋಡ್ ಅನ್ನು ಓದಲು ಪ್ರಾರಂಭಿಸುವ ಮುನ್ನವೇ ಮಧ್ಯಪ್ರವೇಶಿಸಿದಳು. ಅವಳು ಫೋನ್ ಅನ್ನು ಕಸಿದುಕೊಂಡು, ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿದಳು ಮತ್ತು ಅವರು ಈಗಷ್ಟೇ ನೋಡಿದ ದಾಳಿಯ ಅಂಗರಚನಾಶಾಸ್ತ್ರವನ್ನು ವಿಮರ್ಶಿಸಲು ಪ್ರಾರಂಭಿಸಿದಳು. ಇದು 'ವಿಷಿಂಗ್' (ವಾಯ್ಸ್ ಫಿಶಿಂಗ್) ನ ಪಠ್ಯಪುಸ್ತಕ ಉದಾಹರಣೆಯಾಗಿದೆ, ಇದು ಸಾಮಾಜಿಕ ಎಂಜಿನಿಯರಿಂಗ್‌ನ ಅತ್ಯಾಧುನಿಕ ರೂಪವಾಗಿದೆ ಎಂದು ಅವಳು ವಿವರಿಸಿದಳು. ಹಗರಣಕಾರರು ಸಾಫ್ಟ್‌ವೇರ್ ದೋಷಗಳಿಗಿಂತ ಹೆಚ್ಚಾಗಿ ಮಾನವ ಮನೋವಿಜ್ಞಾನದ ದುರ್ಬಲತೆಗಳನ್ನು ಬಳಸಿಕೊಳ್ಳಲು ಈ ಸನ್ನಿವೇಶಗಳನ್ನು ಹೇಗೆ ನಿಖರವಾಗಿ ರಚಿಸುತ್ತಾರೆಂದು ಸೈಬರ್-ಸಿಯಾ ವಿವರಿಸಿದಳು. ಆ ಭೀತಿಯಿಂದ, OTP ಯನ್ನು ಪಡೆಯುವುದು ದಾಳಿಕೋರನ ಉದ್ದೇಶವಾಗಿತ್ತು. ನಿಜವಾದ ಬ್ಯಾಂಕ್ ಎಂದಿಗೂ OTP, PIN ಅಥವಾ ಗುಪ್ತಪದವನ್ನು ಕೇಳುವುದಿಲ್ಲ ಎಂಬ ಸತ್ಯವನ್ನು ಅರ್ಜುನ್ ಅರಿತುಕೊಂಡನು. ಈ ಭಯಾನಕ ಘಟನೆಯು ಭದ್ರತೆಯ ಕುರಿತು ಅರ್ಜುನ್‌ನ ದೃಷ್ಟಿಕೋನವನ್ನು ಬದಲಾಯಿಸಿತು; ಭದ್ರತಾ ಸರಪಳಿಯಲ್ಲಿ ಮಾನವ ಅಂಶವೇ ಯಾವಾಗಲೂ ಅತ್ಯಂತ ದುರ್ಬಲ ಕೊಂಡಿ ಎಂಬುದು ಅವನಿಗೆ ಅರ್ಥವಾಯಿತು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ಸಾಮಾಜಿಕ ಎಂಜಿನಿಯರಿಂಗ್ (Social Engineering) ನ ಮುಖ್ಯ ಗುರಿ ಯಾರು?",
                "options": [
                    "ಫೈರ್ ವಾಲ್ ಗಳು",
                    "ಯಂತ್ರಾಂಶ (Hardware)",
                    "ಮನುಷ್ಯರ ಮನೋವಿಜ್ಞಾನ",
                    "ಆಂಟಿ-ವೈರಸ್"
                ],
                "correctAnswer": 2
            },
            {
                "id": 2,
                "text": "'ವಿಷಿಂಗ್' (Vishing) ಎಂದರೇನು?",
                "options": [
                    "ಇಮೇಲ್ ಫಿಶಿಂಗ್",
                    "ವಾಯ್ಸ್ (Voice) ಫಿಶಿಂಗ್ ಕರೆಗಳು",
                    "ವೈರಸ್ ಡೌನ್ಲೋಡ್",
                    "ವೀಡಿಯೊ ಹ್ಯಾಕಿಂಗ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 3,
                "text": "ಬ್ಯಾಂಕ್ ಅಧಿಕಾರಿ ಎಂದಾದರೂ ನಿಮ್ಮ OTP ಅನ್ನು ಕೇಳುತ್ತಾರೆಯೇ?",
                "options": [
                    "ಹೌದು, ಭದ್ರತೆಗಾಗಿ",
                    "ಕೇವಲ ದೊಡ್ಡ ಮೊತ್ತವಿದ್ದರೆ",
                    "ಇಲ್ಲ, ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ",
                    "ಖಾತೆ ಬ್ಲಾಕ್ ಆದರೆ ಮಾತ್ರ"
                ],
                "correctAnswer": 2
            },
            {
                "id": 4,
                "text": "ದಾಳಿಕೋರರು ದಾಳಿ ವೇಳೆ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವ ಎರಡು ಭಾವನೆಗಳನ್ನು ಪ್ರಚೋದಿಸುತ್ತಾರೆ?",
                "options": [
                    "ಕೋಪ ಮತ್ತು ದುಃಖ",
                    "ಭಯ ಮತ್ತು ತುರ್ತು",
                    "ಖುಷಿ ಮತ್ತು ಉತ್ಸಾಹ",
                    "ಶಾಂತಿ ಮತ್ತು ಪ್ರೀತಿ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 5,
                "text": "ನಿಮಗೆ ಅನುಮಾನಾಸ್ಪದ ಬ್ಯಾಂಕ್ ಕರೆ ಬಂದರೆ, ತಕ್ಷಣ ಮಾಡಬೇಕಾದ ಕೆಲಸವೇನು?",
                "options": [
                    "OTP ನೀಡುವುದು",
                    "ಸಿಟ್ ಆಗಿ ಬೈಯ್ಯುವುದು",
                    "ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿ, ಅಧಿಕೃತ ಬ್ಯಾಂಕ್ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡುವುದು",
                    "ಆನ್ಲೈನ್ ಖಾತೆಯನ್ನು ಡಿಲೀಟ್ ಮಾಡುವುದು"
                ],
                "correctAnswer": 2
            },
            {
                "id": 6,
                "text": "ಕಾಲರ್ ID (Caller ID) ನಲ್ಲಿ ಬ್ಯಾಂಕ್ ಹೆಸರು ಕಂಡರೆ ಅದು ಖಂಡಿತವಾಗಿಯೂ ಬ್ಯಾಂಕ್ ನಿಂದ ಬಂದ ಕರೆಯೇ?",
                "options": [
                    "ಹೌದು, ಕಾಲರ್ IDಯನ್ನು ನಕಲಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ",
                    "ಇಲ್ಲ, ಕಾಲರ್ IDಯನ್ನು (VoIP) ಮೂಲಕ ಸುಲಭವಾಗಿ ನಕಲಿಸಬಹುದು",
                    "ಹೌದು, ಟ್ರೂಕಾಲರ್ ಸುರಕ್ಷಿತವಾಗಿದೆ",
                    "ಪೊಲೀಸರು ಮಾತ್ರ ಕಾಲರ್ ID ಬಳಸಬಹುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 7,
                "text": "ಭದ್ರತಾ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಅತಿ ದೊಡ್ಡ ದೌರ್ಬಲ್ಯ (Weakest Link) ಯಾವುದು?",
                "options": [
                    "ಹಳೆಯ ಸಾಫ್ಟ್‌ವೇರ್",
                    "ದುರ್ಬಲ ಪಾಸ್‌ವರ್ಡ್",
                    "ಮನುಷ್ಯರು",
                    "ವೈ-ಫೈ"
                ],
                "correctAnswer": 2
            },
            {
                "id": 8,
                "text": "'ನಂಬುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ' (Verify Before Trust) ನಿಯಮದ ಉದ್ದೇಶವೇನು?",
                "options": [
                    "ಕರೆ ಮಾಡಿದವರನ್ನು ಪ್ರಶ್ನಿಸದೆ ಒಪ್ಪಿಕೊಳ್ಳುವುದು",
                    "ಮಾಹಿತಿಯನ್ನು ನೀಡುವ ಮೊದಲು ಮೂಲವನ್ನು ದೃಢಪಡಿಸುವುದು",
                    "ಪ್ರತಿ ಕರೆಯನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡುವುದು",
                    "ಎಲ್ಲರಿಗೂ ಸುಳ್ಳು ಹೇಳುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 9,
                "text": "ಯಾವ ತಂತ್ರಜ್ಞಾನ ಬಳಸಿ ಹ್ಯಾಕರ್‌ಗಳು ತಮ್ಮ ನಿಜವಾದ ಸಂಖ್ಯೆಯನ್ನು ಮರೆಮಾಚುತ್ತಾರೆ?",
                "options": [
                    "VoIP (Voice over IP) ಸ್ಪೂಫಿಂಗ್",
                    "ಬ್ಲೂಟೂತ್",
                    "ರೌಟರ್",
                    "ಮೆಸೇಜಿಂಗ್ ಆ್ಯಪ್"
                ],
                "correctAnswer": 0
            },
            {
                "id": 10,
                "text": "ದಾಳಿಕೋರನು ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ OTP ಯನ್ನು ಕೇಳಿದಾಗ ನೀವು ಏನು ಮಾಡಬೇಕು?",
                "options": [
                    "ಅದನ್ನು ನೀಡಬೇಕು",
                    "ಬೇರೊಂದು ಪಾಸ್‌ವರ್ಡ್ ಹೇಳಬೇಕು",
                    "ಎಂದಿಗೂ ನೀಡಬಾರದು ಮತ್ತು ರಿಪೋರ್ಟ್ ಮಾಡಬೇಕು",
                    "ಸ್ನೇಹಿತರಿಗೆ ಕೇಳಿ ನೀಡಬೇಕು"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": 3,
        "title": "ಸುರಕ್ಷಿತ ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಮತ್ತು ದೃಢೀಕರಣ (Authentication)",
        "level": "Beginner",
        "duration": "1 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/BoyeFozmAXk",
        "storyboard": [
            {
                "image": "module3_scene1.jpg",
                "text": "ಅರ್ಜುನ್ 'password123' ಎಂಬ ಒಂದೇ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಎಲ್ಲದಕ್ಕೂ ಬಳಸುತ್ತಿದ್ದನು. ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಅವನ ಎಲ್ಲಾ ಖಾತೆಗಳು ಹ್ಯಾಕ್ ಆಗುತ್ತವೆ!"
            },
            {
                "image": "module3_scene2.jpg",
                "text": "ಒಂದು ಕಡೆ ಡೇಟಾ ಸೋರಿಕೆಯಾದರೆ, ಅದೇ ಪಾಸ್‌ವರ್ಡ್ ಹೊಂದಿರುವ ಇತರ ಎಲ್ಲಾ ಖಾತೆಗಳು ಅಪಾಯಕ್ಕೆ ಸಿಲುಕುತ್ತವೆ."
            },
            {
                "image": "module3_scene3.jpg",
                "text": "ಸೈಬರ್-ಸಿಯಾ ಟಿಪ್ಸ್: 'ಪಾಸ್‌ವರ್ಡ್ ಮ್ಯಾನೇಜರ್ वापरा. ಅದು ಬಲಿಷ್ಠ ಪಾಸ್‌ವರ್ಡ್ ಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ ಮತ್ತು ನೆನಪಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ.'"
            },
            {
                "image": "module3_scene4.jpg",
                "text": "ಯಾವಾಗಲೂ 2FA (ಎರಡು-ಹಂತದ ದೃಢೀಕರಣ) ಆನ್ ಮಾಡಿ. ಪಾಸ್‌ವರ್ಡ್‌ಗಿಂತ ಇದು ಹೆಚ್ಚು ಸುರಕ್ಷಿತ!"
            }
        ],
        "caseStudy": {
            "title": "ಕ್ರೆಡೆನ್ಷಿಯಲ್ ಸ್ಟಫಿಂಗ್ ದಾಳಿ",
            "scenario": "ಅರ್ಜುನ್‌ನ ಡಿಜಿಟಲ್ ಜೀವನವು ವಿಸ್ತರಿಸುತ್ತಿತ್ತು, ಮತ್ತು ಅದನ್ನು ಭದ್ರಪಡಿಸುವ ಅವನ ಅಗತ್ಯವೂ ಹೆಚ್ಚಾಗಿತ್ತು. ಲಕ್ಷಾಂತರ ಬಳಕೆದಾರರಂತೆ, ಅವನು 'ಪಾಸ್‌ವರ್ಡ್ ಆಯಾಸ'ದಿಂದ (Password Fatigue) ಬಳಲುತ್ತಿದ್ದನು. ಇಮೇಲ್, ಬ್ಯಾಂಕಿಂಗ್, ಆನ್‌ಲೈನ್ ಶಾಪಿಂಗ್ ಮತ್ತು ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮಗಳಿಗಾಗಿ ಹತ್ತಾರು ಸಂಕೀರ್ಣ, ವಿಶಿಷ್ಟ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ರಚಿಸಲು ಒತ್ತಾಯಿಸಲ್ಪಟ್ಟ ಅವನು, ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ಅಭ್ಯಾಸವನ್ನು ಅಳವಡಿಸಿಕೊಂಡ: ಒಂದೇ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಎಲ್ಲದಕ್ಕೂ ಮರುಬಳಕೆ ಮಾಡುವುದು. ಅವನು 'password123' ನ ಬದಲಾವಣೆಯೊಂದನ್ನು ತಾನು ಹೊಂದಿರುವ ಪ್ರತಿಯೊಂದು ಖಾತೆಗೂ ಕೇವಲ ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವ ಅನುಕೂಲಕ್ಕಾಗಿ ಬಳಸುತ್ತಿದ್ದನು.\\\\n\\\\nಶುಕ್ರವಾರ ಬೆಳಿಗ್ಗೆ, ಅವನ ಪ್ರಾಥಮಿಕ ಇಮೇಲ್ ಖಾತೆಯು ಲಾಕ್ ಆದಾಗ ಅವನ ಈ ಅಜಾಗರೂಕತೆಯು ಭಗ್ನವಾಯಿತು. ಈ ಇಮೇಲ್ ಅವನ ಇಡೀ ಡಿಜಿಟಲ್ ಅಸ್ತಿತ್ವಕ್ಕೆ ಕೇಂದ್ರವಾಗಿತ್ತಾದ್ದರಿಂದ ಭಯ ಶುರುವಾಯಿತು. ಇದು ಅವನ ಬ್ಯಾಂಕ್ ಖಾತೆಗಳು, ವಿಶ್ವವಿದ್ಯಾನಿಲಯದ ಪೋರ್ಟಲ್ ಮತ್ತು ಅವನ ಎಲ್ಲಾ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಪ್ರೊಫೈಲ್‌ಗಳಿಗೆ ಲಿಂಕ್ ಆಗಿತ್ತು. ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ, ಲಾಟರಿ ಗೆದ್ದಿದ್ದೀರಿ ಎಂದು ಹೇಳುವ ಅನುಮಾನಾಸ್ಪದ ಲಿಂಕ್‌ಗಳನ್ನು ಅವನು ಏಕೆ ಕಳುಹಿಸುತ್ತಿದ್ದಾನೆ ಎಂದು ಅವನ ರಕ್ತಸಂಬಂಧಿ ಮತ್ತು ಸ್ನೇಹಿತರು ಅವನಿಗೆ ಸಂದೇಶ ಕಳುಹಿಸಲು ಪ್ರಾರಂಭಿಸಿದರು. ಅವನ ಇಡೀ ಸಂಪರ್ಕ ಪಟ್ಟಿಯ ವಿರುದ್ಧ ಫಿಶಿಂಗ್ (Phishing) ದಾಳಿಗಳನ್ನು ಪ್ರಾರಂಭಿಸಲು ದಾಳಿಕೋರ ಅವನ ವಿಶ್ವಾಸಾರ್ಹ ಗುರುತನ್ನು ಬಳಸುತ್ತಿದ್ದನು. ಸೈಬರ್-ಸಿಯಾ, ಈ ಘಟನೆಯ ತನಿಖೆಗಾರಳಾಗಿ, ಅರ್ಜುನ್‌ಗೆ ಖಾತೆ ಮರುಪಡೆಯುವಿಕೆ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಹಾಯ ಮಾಡಿದಳು. ಹ್ಯಾಕರ್‌ಗಳು ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಕೈಯಾರೆ ಊಹಿಸಲು ಕೀಬೋರ್ಡ್ ಮುಂದೆ ಕುಳಿತುಕೊಳ್ಳುವುದಿಲ್ಲ ಎಂದು ಅವಳು ವಿವರಿಸಿದಳು. ಬದಲಾಗಿ, ಅವರು ಸ್ವಯಂಚಾಲಿತ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳನ್ನು ನಿಯೋಜಿಸುತ್ತಾರೆ ಮತ್ತು ಲಕ್ಷಗಟ್ಟಲೆ ಸೋರಿಕೆಯಾದ ಬಳಕೆದಾರರ ಡೇಟಾವನ್ನು ಬಳಸಿಕೊಂಡು 'ಕ್ರೆಡೆನ್ಷಿಯಲ್ ಸ್ಟಫಿಂಗ್' (Credential Stuffing) ಎಂಬ ತಂತ್ರವನ್ನು ಬಳಸುತ್ತಾರೆ. ಅರ್ಜುನ್ ತನ್ನ ದುರ್ಬಲ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಬಹು ಸೈಟ್‌ಗಳಲ್ಲಿ ಮರುಬಳಕೆ ಮಾಡಿದ್ದರಿಂದ, ವರ್ಷಗಳ ಹಿಂದೆ ಒಂದು ಸಣ್ಣ ವೇದಿಕೆಯಲ್ಲಿ ಆದ ಉಲ್ಲಂಘನೆಯು, ದಾಳಿಕೋರರಿಗೆ ಅವನ ಸಂಪೂರ್ಣ ಡಿಜಿಟಲ್ ಜೀವನದ ಮಾಸ್ಟರ್ ಕೀಯನ್ನು (Master Key) ನೀಡಿತು. ಈ ಪ್ರಮಾದವನ್ನು ತಪ್ಪಿಸಲು, ಸೈಬರ್-ಸಿಯಾ ಅರ್ಜುನ್ ಗೆ 'ಪಾಸ್ವರ್ಡ್ ಮ್ಯಾನೇಜರ್' (Password Manager) ಮತ್ತು 'ಎರಡು-ಹಂತದ ದೃಢೀಕರಣ' (2FA) ನ ಬಳಕೆಯನ್ನು ಕಡ್ಡಾಯಗೊಳಿಸಿದಳು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "'ಪಾಸ್‌ವರ್ಡ್ ಆಯಾಸ' (Password Fatigue) ಎಂದರೆ ಏನು?",
                "options": [
                    "ಪಾಸ್‌ವರ್ಡ್ ನೆನಪಿಟ್ಟುಕೊಳ್ಳಲು ತುಂಬಾ ಸುಲಭವಾಗಿರುವುದು",
                    "ಹಲವಾರು ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವ ಆಯಾಸ ಮತ್ತು ನಿರಾಶೆ",
                    "ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಪದೇ ಪದೇ ಹೇಳುವುದು",
                    "ಡಿಜಿಟಲ್ ಕೀಲಿಗಳನ್ನು ಮರೆಯುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "ಪಾಸ್‌ವರ್ಡ್ ಗಳನ್ನು ಮರುಬಳಕೆ (Reuse) ಮಾಡುವುದು ಏಕೆ ಅಪಾಯಕಾರಿ?",
                "options": [
                    "ಒಂದು ವೆಬ್ಸೈಟ್ ಹ್ಯಾಕ್ ಆದರೂ ನಿಮ್ಮ ಎಲ್ಲಾ ಖಾತೆಗಳು ಹ್ಯಾಕ್ ಆಗುತ್ತವೆ",
                    "ಪಾಸ್ವರ್ಡ್ ಎಕ್ಸ್ಪೈರ್ ಆಗುತ್ತದೆ",
                    "ಡೇಟಾ ಬೇಸ್ ಕ್ರಾಶ್ ಆಗುತ್ತದೆ",
                    "ಇದು ಕಾನೂನುಬಾಹಿರ"
                ],
                "correctAnswer": 0
            },
            {
                "id": 3,
                "text": "'ಕ್ರೆಡೆನ್ಷಿಯಲ್ ಸ್ಟಫಿಂಗ್' (Credential Stuffing) ಅಂದರೆ ಏನು?",
                "options": [
                    "ಆಟೋಮೆಟಿಕ್ ಲಾಗಿನ್ ವೈಶಿಷ್ಟ್ಯ",
                    "ಒಂದು ವೆಬ್‌ಸೈಟ್‌ನ ಕದ್ದ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಇತರ ವೆಬ್‌ಸೈಟ್‌ಗಳಲ್ಲಿ ಬಳಸುವ ಹ್ಯಾಕಿಂಗ್ ತಂತ್ರ",
                    "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದು",
                    "ಲಾಗಿನ್ ವಿವರಗಳನ್ನು ಮರೆಮಾಡುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 4,
                "text": "ಪಾಸ್‌ವರ್ಡ್ ಮ್ಯಾನೇಜರ್ (Password Manager) ನ ಮುಖ್ಯ ಉಪಯೋಗವೇನು?",
                "options": [
                    "ವೈರಸ್‌ಗಳನ್ನು ತೆಗೆಯುವುದು",
                    "ನಿಮ್ಮ ಎಲ್ಲಾ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ರಚಿಸುತ್ತದೆ ಮತ್ತು ನೆನಪಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ",
                    "ಪಾಸ್ವರ್ಡ್ ಇಲ್ಲದೆ ಲಾಗಿನ್ ಮಾಡುವುದು",
                    "ಕಂಪ್ಯೂಟರ್ ವೇಗ ಹೆಚ್ಚಿಸುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 5,
                "text": "ಎರಡು-ಹಂತದ ದೃಢೀಕರಣ (2FA) ಎಂದರೇನು?",
                "options": [
                    "ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು 2 ಬಾರಿ ಟೈಪ್ ಮಾಡುವುದು",
                    "2 ಬೇರೆ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಹೊಂದುವುದು",
                    "ಪಾಸ್‌ವರ್ಡ್ ಮತ್ತು ಹೆಚ್ಚುವರಿ ಭದ್ರತಾ ಕೋಡ್ (OTP) ಬಳಸುವುದು",
                    "ನಿಮ್ಮ ಫೋನ್ ಅನ್ನು 2 ಬಾರಿ ಅನ್‌ಲಾಕ್ ಮಾಡುವುದು"
                ],
                "correctAnswer": 2
            },
            {
                "id": 6,
                "text": "SMS ಆಧಾರಿತ 2FA ಗಿಂತ ಯಾವುದು ಹೆಚ್ಚು ಸುರಕ್ಷಿತ?",
                "options": [
                    "ದಿನಾಂಕದ ಪಾಸ್‌ವರ್ಡ್",
                    "ಆಥೆಂಟಿಕೇಟರ್ (Authenticator) ಅಪ್ಲಿಕೇಶನ್",
                    "ಮೊಬೈಲ್ ನಂಬರ್ ಬರೆಯುವುದು",
                    "ಇಮೇಲ್ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು SMS ಮಾಡುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 7,
                "text": "'ಸಿಮ್ ಸ್ವಾಪಿಂಗ್' (SIM Swapping) ದಾಳಿಯು ಯಾವ ಭದ್ರತಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಅಪಾಯಕ್ಕೆ ಸಿಲುಕಿಸುತ್ತದೆ?",
                "options": [
                    "ಬಯೋಮೆಟ್ರಿಕ್ಸ್",
                    "SMS ಆಧಾರಿತ OTP ಅಥವಾ 2FA",
                    "ಪಾಸ್‌ವರ್ಡ್ ಮ್ಯಾನೇಜರ್",
                    "ವೈ-ಫೈ ರೌಟರ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 8,
                "text": "ನಿಮ್ಮ ಮಾಸ್ಟರ್ ಪಾಸ್ಫ್ರೇಸ್ (Master Passphrase) ಹೇಗಿರಬೇಕು?",
                "options": [
                    "ನಿಮ್ಮ ಹೆಸರು",
                    "ಬಹಳ ಸಂಕೀರ್ಣವಾದ ಆದರೆ ನಿಮಗೆ ನೆನಪಿಟ್ಟುಕೊಳ್ಳಬಹುದಾದ ಸುದೀರ್ಘ ವಾಕ್ಯ",
                    "123456",
                    "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 9,
                "text": "ಒಂದು ಬಲವಾದ (Strong) ಪಾಸ್‌ವರ್ಡ್‌ಗೆ ಉದಾಹರಣೆ ಯಾವುದು?",
                "options": [
                    "password123",
                    "Arjun@2024",
                    "X$7qP9z!L2wM#5vK",
                    "iloveindia"
                ],
                "correctAnswer": 2
            },
            {
                "id": 10,
                "text": "ಭದ್ರತೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ದೈನಂದಿನ ಜೀವನದ ಮೂಲಭೂತ ನಿಯಮವೇನು?",
                "options": [
                    "ಅನುಕೂಲವು ಯಾವಾಗಲೂ ಭದ್ರತೆಯ ಶತ್ರು",
                    "ಯಾರ ನಂಬರ್ ಅನ್ನು ಹಂಚಿಕೊಳ್ಳಬಹುದು",
                    "ವೈ-ಫೈ ಅನ್ನು ಯಾವಾಗಲೂ ಆನ್ ಇಡುವುದು",
                    "ಎಲ್ಲರಿಗೂ ಪಾಸ್ವರ್ಡ್ ನೀಡುವುದು"
                ],
                "correctAnswer": 0
            },
            {
                "id": 11,
                "text": "ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಯಾವ ಭದ್ರತಾ ವಿಧಾನ ಅತಿ ಮುಖ್ಯ?",
                "options": [
                    "ಕೇವಲ ಬ್ಯಾಂಕ್ ಮ್ಯಾನೇಜರ್ ನಂಬರ್",
                    "ಪಾಸ್‌ವರ್ಡ್ + ಆಥೆಂಟಿಕೇಟರ್ ಅಪ್ಲಿಕೇಶನ್ ಬಳಕೆಯ 2FA",
                    "ಪಾಸ್ಬುಕ್ ನಂಬರ್",
                    "ಪಾಸ್‌ವರ್ಡ್ ಮರುಬಳಕೆ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 12,
                "text": "ಹ್ಯಾಕರ್‌ಗಳು ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಹೇಗೆ ಬೇಧಿಸುತ್ತಾರೆ?",
                "options": [
                    "ಕೈಯಾರೆ ಊಹಿಸುತ್ತಾರೆ",
                    "ಸ್ವಯಂಚಾಲಿತ ಸ್ಕ್ರಿಪ್ಟ್ ಮತ್ತು ಬ್ರೂಟ್ ಫೋರ್ಸ್ ಆಟ್ಯಾಕ್ ಮೂಲಕ",
                    "ಬ್ಯಾಂಕ್ ಮ್ಯಾನೇಜರ್ ಬಳಿ ಕೇಳುತ್ತಾರೆ",
                    "ಪೆನ್‌ನಲ್ಲಿ ಬರುತ್ತಾರೆ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 13,
                "text": "'ಡಿಫೆನ್ಸ್ ಇನ್ ಡೆಪ್ತ್' (Defense in Depth) ಎಂದರೇನು?",
                "options": [
                    "ನೀರಿನ ಅಡಿಯಲ್ಲಿ ಭದ್ರತೆ",
                    "ಒಂದು ಭದ್ರತಾ ವ್ಯವಸ್ಥೆ ವಿಫಲವಾದರೆ ಮತ್ತೊಂದು ರಕ್ಷಣೆ ನೀಡುವ ಬಹು-ಪದರದ ಭದ್ರತೆ",
                    "ದೊಡ್ಡ ಪಾಸ್‌ವರ್ಡ್ ಇಡುವುದು",
                    "ಆಂಟಿ-ವೈರಸ್ ಸಾಫ್ಟ್‌ವೇರ್ ವೀಕ್ಷಿಸುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 14,
                "text": "ನಿಮ್ಮ ಗುರುತನ್ನು ದೃಢೀಕರಿಸಲು 2FA ನಲ್ಲಿ 'Something You Have' ಎಂದರೆ ಏನು?",
                "options": [
                    "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್",
                    "ನಿಮ್ಮ ಫಿಂಗರ್ ಪ್ರಿಂಟ್",
                    "ನಿಮ್ಮ ಭೌತಿಕ ಮೊಬೈಲ್ ಸಾಧನದಲ್ಲಿರುವ ಆಥೆಂಟಿಕೇಟರ್ ಅಪ್ಲಿಕೇಶನ್",
                    "ನಿಮ್ಮ ಸ್ನೇಹಿತನ ಮೊಬೈಲ್"
                ],
                "correctAnswer": 2
            },
            {
                "id": 15,
                "text": "ಭದ್ರತೆಯ ಉದ್ದೇಶಕ್ಕಾಗಿ ಯಾವ ಪಾಸ್ವರ್ಡ್ ಪದ್ಧತಿಯನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ತ್ಯಜಿಸಬೇಕು?",
                "options": [
                    "ಉದ್ದವಾದ ಪಾಸ್‌ವರ್ಡ್‌",
                    "ವಿಶಿಷ್ಟ ಅಕ್ಷರಗಳ ಬಳಕೆ",
                    "ಎಲ್ಲಾ ಖಾತೆಗಳಿಗೂ ಒಂದೇ ಪಾಸ್‌ವರ್ಡ್ ಬಳಸುವುದು (ಮರುಬಳಕೆ)",
                    "ಆಗಾಗ್ಗೆ ಪಾಸ್‌ವರ್ಡ್ ಬದಲಾಯಿಸುವುದು"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": 4,
        "title": "ಸೈಬರ್ ಕಾನೂನು ಮತ್ತು ಸೈಬರ್ ಬೆದರಿಕೆ",
        "level": "Beginner",
        "duration": "1 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/gT_Xy9j889k",
        "storyboard": [
            {
                "image": "module4_scene1.jpg",
                "text": "ನೇಹಾಳ ಸ್ನೇಹಿತರು ಅವಳಿಗೆ ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್‌ನಲ್ಲಿ ಅವಳಂತೆಯೇ ಕಾಣುವ ನಕಲಿ ಖಾತೆಯನ್ನು ತೋರಿಸಿದರು."
            },
            {
                "image": "module4_scene2.jpg",
                "text": "ಆ ನಕಲಿ ಖಾತೆಯ ಮೂಲಕ ಅಶ್ಲೀಲ ಸಂದೇಶಗಳನ್ನು ಕಳುಹಿಸಲಾಗುತ್ತಿತ್ತು. ಅವಳು ಡಿಜಿಟಲ್ ನಿಂದನೆಗೆ (Cyberbullying) ಗುರಿಯಾದಳು."
            },
            {
                "image": "module4_scene3.jpg",
                "text": "ಸೈಬರ್-ಸಿಯಾ 'ಐಟಿ ಆಕ್ಟ್ 2000' (IT Act 2000) ಬಗ್ಗೆ ವಿವರಿಸುತ್ತಾಳೆ ಮತ್ತು ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಹೇಳುತ್ತಾಳೆ."
            },
            {
                "image": "module4_scene4.jpg",
                "text": "cybercrime.gov.in ಮೂಲಕ ಅವರು ಸುಲಭವಾಗಿ ವರದಿ ಮಾಡುತ್ತಾರೆ. ಸೈಬರ್ ಕ್ರೈಮ್ ಎಂದಿಗೂ ವಾಸ್ತವ ಪ್ರಪಂಚದ ಅಪರಾಧವೇ."
            }
        ],
        "caseStudy": {
            "title": "ನಕಲಿ ಪ್ರೊಫೈಲ್ ಹಗರಣ",
            "scenario": "ಪ್ರತಿಭಾವಂತ ಮತ್ತು ಹುರುಪಿನ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿನಿ ನೇಹಾ, ಹೈಪರ್-ಕನೆಕ್ಟೆಡ್ ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳ ಯುಗದಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಬಿಡುತ್ತಿರುವ ದುಃಸ್ವಪ್ನವೊಂದಕ್ಕೆ ಎಚ್ಚರಗೊಂಡಳು. ಸ್ನೇಹಿತರು ಮತ್ತು ಪರಿಚಯಸ್ಥರು ಅವಳದೇ ಆದ ತೀರಾ ಆತಂಕಕಾರಿ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಪ್ರೊಫೈಲ್‌ನ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ರವಾನಿಸಲು ಪ್ರಾರಂಭಿಸಿದರು. ಆ ಪ್ರೊಫೈಲ್ ಅವಳ ನಿಖರವಾದ ಹೆಸರನ್ನು ಹೊಂದಿತ್ತು, ಅವಳ ನಿಜವಾದ ಪ್ರೊಫೈಲ್ ಚಿತ್ರದ ಮಾರ್ಪಡಿಸಿದ ಆವೃತ್ತಿಯನ್ನು ಬಳಸಲಾಗಿತ್ತು, ಮತ್ತು ಅತ್ಯಂತ ಅನುಚಿತವಾದ, ಮಾನಹಾನಿಕರ ವಿಷಯಗಳಿಂದ ತುಂಬಿತ್ತು. ಅದಕ್ಕಿಂತ ಕೆಟ್ಟದಾಗಿ, ಈ ನಕಲಿ ಖಾತೆಯನ್ನು ನಿರ್ವಹಿಸುತ್ತಿರುವ ವಂಚಕ, ನೇಹಾಳ ವೇಷವನ್ನು ಧರಿಸಿ ಅವಳ ಸ್ನೇಹಿತರಿಗೆ ಕಿರುಕುಳ ನೀಡುವ ಸಂದೇಶಗಳು ಮತ್ತು ಬೇಡಿಕೆಗಳನ್ನು ಸಕ್ರಿಯವಾಗಿ ಕಳುಹಿಸುತ್ತಿದ್ದನು. ಈ ಆಘಾತ ತಕ್ಷಣದ ಮತ್ತು ವಿನಾಶಕಾರಿಯಾಗಿತ್ತು; ನೇಹಾ ತಾನೇ ಈ ಮಾನನಷ್ಟ ಪರಿಸ್ಥಿತಿಯ ನಿಯಂತ್ರಣದಲ್ಲಿ ಇಲ್ಲ ಎಂದು ಅಸಹಾಯಕತೆ ಮತ್ತು ಭಯವನ್ನು ಅನುಭವಿಸಿದಳು.\\\\n\\\\nಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಹತಾಶಳಾಗಿದ್ದ ನೇಹಾ, ಸೈಬರ್-ಸಿಯಾಳ ಪರಿಣತಿಯನ್ನು ಕೋರಿದಳು. ಸೈಬರ್-ಸಿಯಾ ಈ ಬಿಕ್ಕಟ್ಟಿನ ಸ್ವರೂಪವನ್ನು ತಕ್ಷಣವೇ ಗುರುತಿಸಿದಳು: ಇದು ತಾಂತ್ರಿಕ ಭದ್ರತಾ ಸಮಸ್ಯೆ ಮಾತ್ರವಲ್ಲದೆ, ಕಾನೂನಿನ ತೀವ್ರ ಉಲ್ಲಂಘನೆಯಾಗಿದೆ. ಡಿಜಿಟಲ್ ಪ್ರಪಂಚವು ನಿಯಮಗಳು ಅಥವಾ ಪರಿಣಾಮಗಳಿಲ್ಲದ 'ವೈಲ್ಡ್ ವೆಸ್ಟ್' ನಂತೆ ಭಾಸವಾದರೂ, ಈ ನಿಖರವಾದ ಸನ್ನಿವೇಶಗಳನ್ನು ಎದುರಿಸಲು ಭಾರತವು ನಿರ್ದಿಷ್ಟವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಗಟ್ಟಿಮುಟ್ಟಾದ ಕಾನೂನು ಚೌಕಟ್ಟುಗಳನ್ನು ಹೊಂದಿದೆ ಎಂದು ಸೈಬರ್-ಸಿಯಾ ತಾಳ್ಮೆಯಿಂದ ವಿವರಿಸಿದಳು. ನೇಹಾಳಿಗೆ 'ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಕಾಯಿದೆ 2000' (IT Act 2000) ಅನ್ನು ಡಿಜಿಟಲ್ ಗುರಾಣಿಯಾಗಿ ಅವಳು ಪರಿಚಯಿಸಿದಳು. ವಂಚಕನ ಕ್ರಿಯೆಗಳು 'ಗುರುತಿನ ಕಳ್ಳತನ' (Identity Theft) ಎಂಬ ಸ್ಪಷ್ಟ ಪ್ರಕರಣವಾಗಿದೆ ಎಂದು ಅವಳು ವಿವರಿಸಿದಳು, ಇದು ಐಟಿ ಕಾಯಿದೆಯ ಸೆಕ್ಷನ್ 66C ಅಡಿಯಲ್ಲಿ ಶಿಕ್ಷಾರ್ಹ ಅಪರಾಧವಾಗಿದೆ. ಜೊತೆಗೆ, ನಕಲಿ ಪ್ರೊಫೈಲ್ ಅವಳ ವೈಯಕ್ತಿಕ ಚಿತ್ರಗಳನ್ನು ಮಾನಹಾನಿಕರ ಸಂದರ್ಭದಲ್ಲಿ ಬಳಸುತ್ತಿರುವುದರಿಂದ, ಇದು ಗೌಪ್ಯತೆಯ ಉಲ್ಲಂಘನೆಯ (ಸೆಕ್ಷನ್ 66E) ಅಡಿಯೂ ಬರುತ್ತದೆ. ಶಿಕ್ಷಣದಿಂದ ಕಾರ್ಯಸಾಧ್ಯವಾದ ಪ್ರತಿಕ್ರಿಯೆಗೆ ತೆರಳಿ, ಸೈಬರ್-ಸಿಯಾ ನೇಹಾಗೆ ಫೋರೆನ್ಸಿಕ್ ಪುರಾವೆಗಳ ಸಂಗ್ರಹಣೆಯ ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದಳು. ಅವರು ನಕಲಿ ಪ್ರೊಫೈಲ್, URL ಗಳು, ಸಮಯ ಮತ್ತು ನಿರ್ದಿಷ್ಟ ಕಿರುಕುಳದ ಸಂದೇಶಗಳ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ತೆಗೆದುಕೊಂಡರು. ನಂತರ ಅವರು 'ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಕ್ರೈಮ್ ರಿಪೋರ್ಟಿಂಗ್ ಪೋರ್ಟಲ್' (cybercrime.gov.in) ಅನ್ನು ಬಳಸಿಕೊಂಡು ವರದಿ ಮಾಡಿದರು, ಇದು ನೇಹಾಳ ವಿಶ್ವಾಸವನ್ನು ಮರಳಿ ತಂದಿತು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ನಕಲಿ ಖಾತೆ ಸೃಷ್ಟಿಸುವುದನ್ನು ಏನೆಂದು ಕರೆಯುತ್ತಾರೆ?",
                "options": [
                    "ಫೋಟೋ ಎಡಿಟಿಂಗ್",
                    "ಗುರುತಿನ ಕಳ್ಳತನ (Identity Theft)",
                    "ಫೈರ್ವಾಲ್ ದಾಳಿ",
                    "ರಾಂಶಮ್‌ವೇರ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "ಭಾರತದಲ್ಲಿ ಸೈಬರ್ ಅಪರಾಧಗಳನ್ನು ನಿರ್ವಹಿಸುವ ಪ್ರಮುಖ ಕಾನೂನು ಯಾವುದು?",
                "options": [
                    "ಭಾರತೀಯ ಮೋಟಾರು ವಾಹನ ಕಾಯಿದೆ",
                    "ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಕಾಯಿದೆ 2000 (IT Act, 2000)",
                    "ಭಾರತೀಯ ದಂಡ ಸಂಹಿತೆ 1860 (ಮೂಲ ರೂಪದಲ್ಲಿ)",
                    "ಭಾರತೀಯ ಡಿಜಿಟಲ್ ಆಕ್ಟ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 3,
                "text": "ಸೈಬರ್ ಕಿರುಕುಳ (Cyberbullying) ಎದುರಿಸಿದಾಗ ಮೊದಲು ಏನು ಮಾಡಬೇಕು?",
                "options": [
                    "ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಪುರಾವೆಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದು",
                    "ಖಾತೆಯನ್ನು ತಕ್ಷಣ ಡಿಲೀಟ್ ಮಾಡುವುದು",
                    "ತಿರುಗಿ ಬೈಯ್ಯುವುದು",
                    "ಯಾರಿಗೂ ಹೇಳದಿರುವುದು"
                ],
                "correctAnswer": 0
            },
            {
                "id": 4,
                "text": "ಐಟಿ ಕಾಯಿದೆಯ ಸೆಕ್ಷನ್ 66C (Section 66C) ಯಾವುದಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ?",
                "options": [
                    "ಅಶ್ಲೀಲತೆ ಹರಡುವುದು",
                    "ಗುರುತಿನ ಕಳ್ಳತನ ಮತ್ತು ವಂಚನೆ",
                    "ಲಾಟರಿ ಹಗರಣ",
                    "ಕಂಪ್ಯೂಟರ್ ಹ್ಯಾಕಿಂಗ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 5,
                "text": "ಸೈಬರ್ ಅಪರಾಧವನ್ನು ರಿಪೋರ್ಟ್ ಮಾಡಲು ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಯಾವುದು?",
                "options": [
                    "policestation.in",
                    "cybercrime.gov.in",
                    "cyberhelp.com",
                    "internetpolice.org"
                ],
                "correctAnswer": 1
            },
            {
                "id": 6,
                "text": "ಇಂಟರ್ನೆಟ್ ನಲ್ಲಿ ನಿಮ್ಮ ಅನುಮತಿಯಿಲ್ಲದೆ ನಿಮ್ಮ ಖಾಸಗಿ ಫೋಟೋಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದು ಯಾವ ಸೆಕ್ಷನ್ ಅಡಿ ಬರುತ್ತದೆ?",
                "options": [
                    "ಸೆಕ್ಷನ್ 66C",
                    "ಸೆಕ್ಷನ್ 66E (ಗೌಪ್ಯತೆಯ ಉಲ್ಲಂಘನೆ)",
                    "ಸೆಕ್ಷನ್ 43",
                    "ಸೆಕ್ಷನ್ 65"
                ],
                "correctAnswer": 1
            },
            {
                "id": 7,
                "text": "ಭಾರತದಲ್ಲಿ ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಕ್ರೈಮ್ ಹೆಲ್ಪ್‌ಲೈನ್ ಸಂಖ್ಯೆ ಯಾವುದು?",
                "options": [
                    "100",
                    "1930",
                    "112",
                    "1994"
                ],
                "correctAnswer": 1
            },
            {
                "id": 8,
                "text": "ಸೈಬರ್ ಅಪರಾಧದ ಸಾಕ್ಷ್ಯಗಳನ್ನು ನಿರ್ವಹಿಸುವಾಗ ಏನು ಮುಖ್ಯ?",
                "options": [
                    "ಸಾಕ್ಷ್ಯದ ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತನ್ನು ಬದಲಾಯಿಸದೆ ಉಳಿಸಿಕೊಳ್ಳುವುದು (Digital Trail)",
                    "ಸಾಕ್ಷ್ಯವನ್ನು ಸ್ನೇಹಿತರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುವುದು",
                    "ಸಾಕ್ಷ್ಯವನ್ನು ಅಳಿಸುವುದು",
                    "ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ಫಿಲ್ಟರ್ ಹಾಕುವುದು"
                ],
                "correctAnswer": 0
            },
            {
                "id": 9,
                "text": "ಸೈಬರ್ ಕಳ್ಳತನವು ವಾಸ್ತವ ಜೀವನದ ಅಪರಾಧಗಳಿಗಿಂತ ಕಡಿಮೆ ಗಂಭೀರವೇ?",
                "options": [
                    "ಹೌದು, ಇದು ಕೇವಲ ಇಂಟರ್ನೆಟ್ ನಲ್ಲಿ ನಡೆಯುತ್ತದೆ",
                    "ಇಲ್ಲ, ಇದು ಅತ್ಯಂತ ಗಂಭೀರವಾಗಿದೆ ಮತ್ತು ಭಾರಿ ದಂಡ ಹಾಗೂ ಜೈಲು ಶಿಕ್ಷೆಗೆ ಗುರಿಯಾಗಬಹುದು",
                    "ಮಕ್ಖಳಾಟಿಕೆಯಲ್ಲಿ ಮಾಡಿದರೆ ತೊಂದರೆ ಇಲ್ಲ",
                    "ಯಾರು ಹಿಡಿಯುವುದಿಲ್ಲವಾದ್ದರಿಂದ ಗಂಭೀರವಲ್ಲ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 10,
                "text": "ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಯಾರಾದರೂ ನಿರಂತರವಾಗಿ ಹಿಂಬಾಲಿಸಿ தொந்தರவு ಕೊಟ್ಟರೆ (Cyber Stalking) ಏನು ಮಾಡಬೇಕು?",
                "options": [
                    "ತಕ್ಷಣ ಅವರನ್ನು ಬ್ಲಾಕ್ ಮಾಡಿ ಮತ್ತು ಸೈಬರ್ ಸೆಲ್‌ಗೆ ಸಂಪರ್ಕಿಸಬೇಕು",
                    "ಅವರ ಜೊತೆ ಸ್ನೇಹ ಬೆಳೆಸಬೇಕು",
                    "ಸ್ವತಃ ಸಿಟ್ ಆಗಬೇಕು",
                    "ಫೋನ್ ಆಫ್ ಮಾಡಬೇಕು"
                ],
                "correctAnswer": 0
            }
        ]
    },
    {
        "id": 5,
        "title": "ಸುರಕ್ಷಿತ ಬ್ರೌಸಿಂಗ್ ಮತ್ತು ಇಂಟರ್ನೆಟ್ ನೈರ್ಮಲ್ಯ",
        "level": "Intermediate",
        "duration": "2 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/S2pEicQvL20",
        "storyboard": [
            {
                "image": "module5_scene1.jpg",
                "text": "ನೇಹಾ ಉಚಿತ ಪಬ್ಲಿಕ್ ವೈ-ಫೈಗೆ (Public Wi-Fi) ಸಂಪರ್ಕ ಹೊಂದುತ್ತಾಳೆ. ಇದು ತುಂಬಾ ನಿಧಾನವಾಗಿದೆ."
            },
            {
                "image": "module5_scene2.jpg",
                "text": "ಬ್ರೌಸರ್ ನಲ್ಲಿ 'ನಾಟ್ ಸೆಕ್ಯೂರ್' (Not Secure) ಎಚ್ಚರಿಕೆ ತೋರಿಸಿದರೂ ಅವಳು ಅದನ್ನು ಕಡೆಗಣಿಸಿ ಲಾಗಿನ್ ಆಗುತ್ತಾಳೆ!"
            },
            {
                "image": "module5_scene3.jpg",
                "text": "ಸೈಬರ್-ಸಿಯಾ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತಾಳೆ: 'ಸಾಧ್ಯವಾದರೆ ಯಾವಾಗಲೂ HTTPS ಬಳಸಿ ಮತ್ತು ಪಬ್ಲಿಕ್ ವೈ-ಫೈ ನಲ್ಲಿ VPN ಬಳಸಿ.'"
            },
            {
                "image": "module5_scene4.jpg",
                "text": "ಅಪರಿಚಿತ ವೈ-ಫೈ ನೆಟ್‌ವರ್ಕ್‌ಗಳಿಗೆ ಎಂದಿಗೂ ನಿಮ್ಮ ಖಾಸಗಿ ಡೇಟಾವನ್ನು ನಂಬಬೇಡಿ!"
            }
        ],
        "caseStudy": {
            "title": "ಪಬ್ಲಿಕ್ ವೈ-ಫೈನ ಅಪಾಯ",
            "scenario": "ತನ್ನ ಲ್ಯಾಪ್‌ಟಾಪ್‌ನೊಂದಿಗೆ ಹತ್ತಿರದ ಕಾಫಿ ಶಾಪಿನಲ್ಲಿ ಕುಳಿತಿದ್ದ ನೇಹಾ, ಮುಂಬರುವ ಪ್ರಮುಖ ಪರೀಕ್ಷೆಯ ತಯಾರಿಗಾಗಿ ಅಂತರ್ಜಾಲದಲ್ಲಿ ಸಂಶೋಧನೆ ನಡೆಸುತ್ತಿದ್ದಳು. ಅವಳ ಮೊಬೈಲ್ ಡೇಟಾ ಖಾಲಿಯಾಗಿದ್ದ ಕಾರಣ, ಅವಳು 'Free_Cafe_WiFi_Fast_24x7' ಎಂಬ ಉಚಿತ ಸಾರ್ವಜನಿಕ ವೈ-ಫೈ ನೆಟ್ವರ್ಕ್ ಗೆ ತ್ವರಿತವಾಗಿ ಸಂಪರ್ಕಗೊಂಡಳು. ಯಾವುದೇ ಪಾಸ್‌ವರ್ಡ್ ಇಲ್ಲದ ಈ ನೆಟ್‌ವರ್ಕ್ ಅವಳಿಗೆ ಸುಲಭವಾಗಿತ್ತು. ಅವಳು ಬ್ಯಾಂಕಿಂಗ್ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಲಾಗಿನ್ ಆಗಲು ಮುಂದಾದಾಗ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಒಂದು ಎಚ್ಚರಿಕೆ ('Not Secure') ಕಾಣಿಸಿಕೊಂಡರೂ ಅವಳು ಅದನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ ತನ್ನ ಕ್ರೆಡೆನ್ಷಿಯಲ್‌ಗಳನ್ನು ಟೈಪ್ ಮಾಡಿದಳು. ಆ ನೆಟ್‌ವರ್ಕ್ ವಾಸ್ತವವಾಗಿ ಕೆಫೆಯ ಅಧಿಕೃತ ನೆಟ್‌ವರ್ಕ್ ಆಗಿರಲಿಲ್ಲ ಬದಲಾಗಿ ಆ ಕಾಫಿ ಶಾಪಿನ ಮೂಲೆಯಲ್ಲಿ ಕುಳಿತಿದ್ದ ದಾಳಿಕೋರನು ಸ್ಥಾಪಿಸಿದ್ದ 'ಇವಿಲ್ ಟ್ವಿನ್' (Evil Twin) ಅಥವಾ ನಕಲಿ ನೆಟ್‌ವರ್ಕ್ ಆಗಿತ್ತು.\\\\n\\\\nದಾಳಿಕೋರನು 'ಮ್ಯಾನ್-ಇನ್-ದ-ಮಿಡಲ್' (Man-in-the-Middle) ದಾಳಿಯನ್ನು ಬಳಸಿಕೊಂಡು ನೇಹಾಳ ಎಲ್ಲಾ ಇಂಟರ್ನೆಟ್ ಟ್ರಾಫಿಕ್ ಅನ್ನು ಪ್ರತಿಬಂಧಿಸುತ್ತಿದ್ದನು. ಸೈಬರ್-ಸಿಯಾ ಇದನ್ನು ಗಮನಿಸಿ ನೇಹಾಗೆ ಮಧ್ಯಪ್ರವೇಶಿಸಿದಳು. ಸಾರ್ವಜನಿಕವಾಗಿ ಲಭ್ಯವಿರುವ ಓಪನ್ ವೈ-ಫೈ ನೆಟ್‌ವರ್ಕ್‌ಗಳು ಡೇಟಾವನ್ನು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡುವುದಿಲ್ಲ ಎಂದು ಸೈಬರ್-ಸಿಯಾ ವಿವರಿಸಿದಳು; ಅಂದರೆ ನೇಹಾಳು ಟೈಪ್ ಮಾಡಿದ ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ದಾಳಿಕೋರನ ಕಂಪ್ಯೂಟರ್ ಒಳಗೆ ಸರಳ ಪಠ್ಯದಲ್ಲಿ (Plaintext) ಸುಲಭವಾಗಿ ಗೋಚರಿಸುತ್ತಿದ್ದವು. ಬ್ರೌಸರ್ URL ನಲ್ಲಿ ಯಾವಾಗಲೂ 'https://' ಇರಬೇಕು ಮತ್ತು ಪ್ಯಾಡ್‌ಲಾಕ್ (Padlock) ಐಕಾನ್ ಅನ್ನು ಕಡ್ಡಾಯವಾಗಿ ನಂಬಬೇಕು ಎಂದು ಸೈಬರ್-ಸಿಯಾ ವಿವರಿಸಿದಳು. ನೇಹಾ ತಕ್ಷಣವೇ ಆ ನೆಟ್‌ವರ್ಕ್‌ನಿಂದ ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸಿದಳು ಮತ್ತು ತನ್ನ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಸುರಕ್ಷಿತ ಮೊಬೈಲ್ ಡೇಟಾ ಬಳಸಿ ಬದಲಾಯಿಸಿದಳು. ಭವಿಷ್ಯದಲ್ಲಿ ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳಲ್ಲಿ ಅಗತ್ಯವಿದ್ದಾಗ ವರ್ಚುವಲ್ ಪ್ರೈವೇಟ್ ನೆಟ್‌ವರ್ಕ್ (VPN) ಅನ್ನು ಬಳಸುವ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಅವಳು ಅರಿತುಕೊಂಡಳು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ಬ್ರೌಸಿಂಗ್ ಮಾಡುವಾಗ URL ನಲ್ಲಿ 'HTTPS' ನ ಅರ್ಥವೇನು?",
                "options": [
                    "ಅತ್ಯಂತ ವೇಗವಾದ ವೆಬ್‌ಸೈಟ್",
                    "ಡೇಟಾ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಆಗಿದೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಸಂಪರ್ಕವಿದೆ",
                    "ಹ್ಯಾಕರ್ ನಿಯಂತ್ರಿತ ವೆಬ್‌ಸೈಟ್",
                    "ಉಚಿತ ಡೌನ್‌ಲೋಡ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "ಸಾರ್ವಜನಿಕ ವೈ-ಫೈ (Public Wi-Fi) ಬಳಸುವಾಗ ಯಾವ ದಾಳಿಯ ಅಪಾಯ ಹೆಚ್ಚು?",
                "options": [
                    "ಫಿಸಿಕಲ್ ಅಟ್ಯಾಕ್",
                    "ಮ್ಯಾನ್-ಇನ್-ದ-ಮಿಡಲ್ (Man-in-the-Middle) ದಾಳಿ",
                    "ರಾಂಶಮ್‌ವೇರ್ ಡ್ರಾಪ್",
                    "ಸಾಮಾಜಿಕ ಜಾಲತಾಣದ ಸ್ಥಗಿತ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 3,
                "text": "ಸಾರ್ವಜನಿಕ ವೈ-ಫೈ ಬಳಸುವಾಗ ಡೇಟಾವನ್ನು ಎನ್ಕ್ರಿಪ್ಟ್ ಮಾಡಲು ಯಾವುದನ್ನು ಬಳಸಬೇಕು?",
                "options": [
                    "VPN (Virtual Private Network)",
                    "ಹೊಸ ಬ್ರೌಸರ್",
                    "ಡಿಜಿಟಲ್ ವಾಲೆಟ್",
                    "ಫೈರ್ವಾಲ್ ಆಫ್ ಮಾಡುವುದು"
                ],
                "correctAnswer": 0
            },
            {
                "id": 4,
                "text": "ನಿಮ್ಮ ಬ್ರೌಸರ್ 'Not Secure' ಅಥವಾ 'ಸುರಕ್ಷಿತವಲ್ಲ' ಎಂದು ಎಚ್ಚರಿಸಿದರೆ ‌ನೀವೇನು ಮಾಡಬೇಕು?",
                "options": [
                    "ವಿಧಾನವನ್ನು ಮುಂದುವರಿಸಿ ಲಾಗಿನ್ ಆಗುವುದು",
                    "ಖಾಸಗಿ ಮಾಹಿತಿಯನ್ನು ನಮೂದಿಸುವುದನ್ನು ತಕ್ಷಣ ನಿಲ್ಲಿಸುವುದು",
                    "ಆಂಟಿ-ವೈರಸ್ ಆಫ್ ಮಾಡುವುದು",
                    "ಕಂಪ್ಯೂಟರ್ ರಿಸ್ಟಾರ್ಟ್ ಮಾಡುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 5,
                "text": "'ಇವಿಲ್ ಟ್ವಿನ್' (Evil Twin) ವೈ-ಫೈ ಎಂದರೆ ಏನು?",
                "options": [
                    "ಒಂದೇ ರೂಟರ್ ನ ಎರಡು ಆಂಟೆನಾಗಳು",
                    "ಅಧಿಕೃತ ವೈ-ಫೈ ಹೆಸರನ್ನೇ ಹೋಲುವ ಹ್ಯಾಕರ್ ಸ್ಥಾಪಿಸಿದ ನಕಲಿ ವೈ-ಫೈ ನೆಟ್‌ವರ್ಕ್",
                    "ವೇಗವಾಗಿರುವ ಡ್ಯೂಯಲ್-ಬ್ಯಾಂಡ್ ವೈ-ಫೈ",
                    "ಪಾಸ್‌ವರ್ಡ್ ಹೊಂದಿರುವ ವೈ-ಫೈ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 6,
                "text": "ಬ್ರೌಸರ್‌ನ ಇನ್‌ಕಾಗ್ನಿಟೋ (Incognito) ಮೋಡ್ ನಿಮ್ಮನ್ನು ಹ್ಯಾಕರ್‌ಗಳಿಂದ ರಕ್ಷಿಸುತ್ತದೆಯೇ?",
                "options": [
                    "ಹೌದು, ಇದು 100% ಸುರಕ್ಷಿತ",
                    "ಇಲ್ಲ, ಇದು ಕೇವಲ ಬ್ರೌಸಿಂಗ್ ಹಿಸ್ಟರಿಯನ್ನು ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಸೇವ್ ಮಾಡುವುದಿಲ್ಲ",
                    "ಹೌದು, ಇದು VPN ನಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
                    "ಇಲ್ಲ, ಇದು ವೈರಸ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡುತ್ತದೆ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 7,
                "text": "ಇಂಟರ್ನೆಟ್ ನೈರ್ಮಲ್ಯದ (Internet Hygiene) ಪ್ರಮುಖ ನಿಯಮವೇನು?",
                "options": [
                    "ಹಳೆಯ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನೇ ಮುಂದುವರಿಸುವುದು",
                    "ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಬ್ರೌಸರ್ ಅನ್ನು ನಿಯಮಿತವಾಗಿ ಅಪ್‌ಡೇಟ್ ಮಾಡುವುದು",
                    "ನಿರಂತರವಾಗಿ ವೈ-ಫೈ ಆನ್ ಇಡುವುದು",
                    "ಎಲ್ಲಾ ಆಡ್-ಆನ್‌ಗಳನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 8,
                "text": "ನಕಲಿ ಡೌನ್‌ಲೋಡ್ ಬಟನ್‌ಗಳು ಅಥವಾ ಮಾಲ್‌ವೇರ್ ಜಾಹೀರಾತುಗಳನ್ನು ತಡೆಯಲು ಯಾವ ಟೂಲ್ ಉಪಯುಕ್ತ?",
                "options": [
                    "ಆಡ್ ಬ್ಲಾಕರ್ (Ad Blocker)",
                    "ಹೆಚ್ಚಿನ RAM",
                    "ಹಾರ್ಡ್ ಡಿಸ್ಕ್",
                    "ವೆಬ್ ಕ್ಯಾಮ್"
                ],
                "correctAnswer": 0
            },
            {
                "id": 9,
                "text": "VPN ನ ಪೂರ್ಣ ರೂಪವೇನು?",
                "options": [
                    "Visual Public Network",
                    "Virtual Private Network",
                    "Verify Password Now",
                    "Voice Phone Number"
                ],
                "correctAnswer": 1
            },
            {
                "id": 10,
                "text": "ಕ್ಯಾಶ್ (Cache) ಮತ್ತು ಕುಕೀಸ್ (Cookies) ಅನ್ನು ಆಗಾಗ್ಗೆ ಕ್ಲಿಯರ್ ಮಾಡುವುದು ಏಕೆ ಒಳ್ಳೆಯದು?",
                "options": [
                    "ಚಿತ್ರಗಳು ಬೇಗ ಡೌನ್‌ಲೋಡ್ ಆಗಲು",
                    "ಬಾಕಿ ಉಳಿದಿರುವ ಸೆಷನ್ ಟೋಕನ್ ಗಳನ್ನು ನಾಶಪಡಿಸಿ, ಟ್ರ್ಯಾಕಿಂಗ್ ಅನ್ನು ಕಡಿಮೆ ಮಾಡಲು",
                    "ಪಾಸ್‌ವರ್ಡ್ ಡಿಲೀಟ್ ಆಗಲು",
                    "ಗೇಮ್ಸ್ ಆಡಲು"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": 6,
        "title": "ಡೇಟಾ ಬ್ಯಾಕಪ್ ಮತ್ತು ಚೇತರಿಕೆ (Ransomware)",
        "level": "Intermediate",
        "duration": "2 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/5H-K3XFof9k",
        "storyboard": [
            {
                "image": "module6_scene1.jpg",
                "text": "ನೇಹಾ ತನ್ನ ಪ್ರೊಜೆಕ್ಟ್ ಗಾಗಿ ಒಂದು ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ಅಪರಿಚಿತ ಸೈಟ್‌ನಿಂದ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿದಳು."
            },
            {
                "image": "module6_scene2.jpg",
                "text": "ಒಮ್ಮೆಲೇ ಅವಳ ಕಂಪ್ಯೂಟರ್ ಸ್ಕ್ರೀನ್ ಲಾಕ್ ಆಗುತ್ತದೆ! ಎಲ್ಲಾ ಫೈಲ್‌ಗಳು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಆಗಿವೆ. ಮತ್ತು ಬಿಡುಗಡೆಗಾಗಿ ಭಾರಿ ಹಣದ (Ransom) ಬೇಡಿಕೆ!"
            },
            {
                "image": "module6_scene3.jpg",
                "text": "ಸೈಬರ್-ಸಿಯಾ ನೆರವಿಗೆ ಬರುತ್ತಾಳೆ: 'ಇದನ್ನೇ ರಾನ್‌ಸಮ್‌ವೇರ್ (Ransomware) ಎನ್ನುತ್ತಾರೆ. ಹಣ ನೀಡಬೇಡಿ!'"
            },
            {
                "image": "module6_scene4.jpg",
                "text": "ನೀವು ನಿಯಮಿತವಾಗಿ ಆಫ್‌ಲೈನ್ ಬ್ಯಾಕಪ್ ತೆಗೆದುಕೊಂಡಿದ್ದರೆ, ಕೇವಲ ಕಂಪ್ಯೂಟರ್ ರಿಸೆಟ್ ಮಾಡಿ ಡೇಟಾ ಮರಳಿ ಪಡೆಯಬಹುದು."
            }
        ],
        "caseStudy": {
            "title": "ರಾಂಶಮ್‌ವೇರ್ ದಿಗ್ಬಂಧನ",
            "scenario": "ನೇಹಾ ತನ್ನ ಬಹು-ನಿರೀಕ್ಷಿತ ಫೈನಲ್-ಇಯರ್ ಪ್ರೊಜೆಕ್ಟ್ ಅನ್ನು ಉಳಿಸಿಕೊಂಡಿರುವ ಲ್ಯಾಪ್‌ಟಾಪ್‌ನಲ್ಲಿ ಕೆಲವು ನಿರ್ಣಾಯಕ ಕೆಲಸಗಳನ್ನು ಮಾಡುತ್ತಿದ್ದಳು. ಒಂದು ಅಪರಿಚಿತ ವೆಬ್‌ಸೈಟ್‌ನಿಂದ ಅವಳು ಉಚಿತ ಡಾಕ್ಯುಮೆಂಟ್ ಕನ್ವರ್ಟರ್ ಟೂಲ್ ಒಂದನ್ನು ಬಲವಂತವಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿದಳು. ಕೆಲವೇ ಹತ್ತಾರು ನಿಮಿಷಗಳಲ್ಲಿ ಅವಳ ಲ್ಯಾಪ್‌ಟಾಪ್ ನ ಎಲ್ಲಾ ಐಕಾನ್ ಗಳು ಬದಲಾದವು, ಮತ್ತು ಅವಳ ಪ್ರಮುಖ ಫೈಲ್‌ಗಳು ತೆರೆಯಲು ನಿರಾಕರಿಸಿದವು. ಆಶ್ಚರ್ಯದಿಂದ ನೋಡುತ್ತಿರುವಾಗ, ಅವಳ ಪರದೆಯ ಮೇಲೆ ಒಂದು ಕೆಂಪು ಬಣ್ಣದ ಎಚ್ಚರಿಕೆ ಸಂದೇಶ ಮೂಡಿತು: 'ನಿಮ್ಮ ಎಲ್ಲಾ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳು, ಫೋಟೋಗಳು ಮತ್ತು ಪ್ರೊಜೆಕ್ಟ್ ಗಳನ್ನು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾಗಿದೆ (ಮಿಲಿಟರಿ-ಗ್ರೇಡ್ ಮೂಲಕ). ವಾಲೆಟ್ ಗೆ 48 ಗಂಟೆಗಳ ಒಳಗೆ 500 ಡಾಲರ್ ಮೌಲ್ಯದ ಬಿಟ್‌ಕಾಯಿನ್ ಅನ್ನು ಪಾವತಿಸದಿದ್ದರೆ ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಶಾಶ್ವತವಾಗಿ ಅಳಿಸಲಾಗುತ್ತದೆ.' ಇದು 'ರಾಂಶಮ್‌ವೇರ್' (Ransomware) ದಾಳಿಯ ಸ್ಪಷ್ಟ ಲಕ್ಷಣವಾಗಿತ್ತು ಮತ್ತು ನೇಹಾಳ ಹೃದಯ ಒಡೆಯಿತು.\\\\n\\\\nಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಅವಳು ಸೈಬರ್-ಸಿಯಾ ಅವರನ್ನು ಭೇಟಿ ಮಾಡಿದಾಗ, ಸೈಬರ್-ಸಿಯಾ ಅವಳಿಗೆ ಎರಡು ಕಠಿಣ ಸತ್ಯಗಳನ್ನು ವಿವರಿಸಿದರು: ಮೊದಲನೆಯದಾಗಿ, ಹ್ಯಾಕರ್‌ಗಳಿಗೆ ಎಂದಿಗೂ ಹಣ ಪಾವತಿಸಬಾರದು; ಏಕೆಂದರೆ ಪಾವತಿಸಿದರೂ ಡೇಟಾ ಮರಳಿ ಸಿಗುವ ಖಾತರಿಯಿಲ್ಲ, ಜೊತೆಗೆ ಇದು ಈ ಅಪರಾಧ ವ್ಯವಸ್ಥೆಗೆ ಆರ್ಥಿಕ ಬೆಂಬಲ ನೀಡಿದಂತಾಗುತ್ತದೆ. ಎರಡನೆಯದಾಗಿ, ಭವಿಷ್ಯದಲ್ಲಿ ಈ ರೀತಿಯ ದಾಳಿಗೆ ತುತ್ತಾಗದಿರಲು ಇರುವ ಏಕೈಕ ಮತ್ತು ಸಂಪೂರ್ಣ ಪರಿಹಾರವೆಂದರೆ ಡೇಟಾದ ಬ್ಯಾಕಪ್ (Backup) ಮಾಡುವುದು. '3-2-1 ಬ್ಯಾಕಪ್ ನಿಯಮವನ್ನು' (3 ನಕಲುಗಳು, 2 ಬೇರೆ ಬೇರೆ ಮಾಧ್ಯಮಗಳಲ್ಲಿ, 1 ಆಫ್‌ಲೈನ್/ಕ್ಲೌಡ್) ಸೈಬರ್-ಸಿಯಾ ವಿವರಿಸಿದಳು. ಅದೃಷ್ಟವಶಾತ್, ನೇಹಾ ತನ್ನ ಹಳೆಯ ಎಕ್ಸ್‌ಟರ್ನಲ್ ಹಾರ್ಡ್‌ಡ್ರೈವ್‌ನಲ್ಲಿ ಕೆಲವು ದಿನಗಳ ಹಿಂದೆ ಕೆಲವು ಡೇಟಾವನ್ನು ಕಾಪಿ ಮಾಡಿಕೊಂಡಿದ್ದಳು. ಸೈಬರ್-ಸಿಯಾ ಸಹಾಯದಿಂದ ಲ್ಯಾಪ್‌ಟಾಪ್ ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಫಾರ್ಮ್ಯಾಟ್ ಮಾಡಿ (ವೈರಸ್ ತೆಗೆದುಹಾಕಲು) ಆಫ್‌ಲೈನ್ ಡೇಟಾವನ್ನು ಮರುಪಡೆದಳು. ಯಾವುದೇ ಸಂರಕ್ಷಣಾ ವ್ಯವಸ್ಥೆಯೂ 100% ಪರಿಪೂರ್ಣವಲ್ಲ, ಆದರೆ ಡೇಟಾ ಬ್ಯಾಕಪ್ ಎಂಬುದು ಸೈಬರ್ ದಾಳಿಯ ಅಂತಿಮ ವಿಮೆಯಾಗಿದೆ ಎಂದು ಈ ಕಠಿಣ ಪಾಠ ಅವಳಿಗೆ ತಿಳಿಯುವಂತೆ ಮಾಡಿತು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ರಾಂಶಮ್‌ವೇರ್ (Ransomware) ಎಂದರೇನು?",
                "options": [
                    "ಕಂಪ್ಯೂಟರ್ ಅನ್ನು ವೇಗಗೊಳಿಸುವ ಸಾಫ್ಟ್‌ವೇರ್",
                    "ಬಳಕೆದಾರರ ಫೈಲ್‌ಗಳನ್ನು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಿ, ಅನ್ಲಾಕ್ ಮಾಡಲು ಹಣಕ್ಕೆ ಬೇಡಿಕೆಯಿಡುವ ಮಾಲ್‌ವೇರ್",
                    "ಹೊಸ ಆಂಟಿ-ವೈರಸ್",
                    "ಫೈಲ್ ಕನ್ವರ್ಟರ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "ರಾಂಶಮ್‌ವೇರ್ ದಾಳಿಗೊಳಗಾದಾಗ ಹಣ (Ransom) ಪಾವತಿಸುವುದು ಏಕೆ ಕೆಟ್ಟದ್ದು?",
                "options": [
                    "ಹಣ ಪಾವತಿಸಿದರೂ ಡೇಟಾ ಮರಳಿ ಸಿಗುವ ಖಾತರಿ ಇಲ್ಲ ಮತ್ತು ಇದು ಅಪರಾಧಕ್ಕೆ ಉತ್ತೇಜನ ನೀಡುತ್ತದೆ",
                    "ಹಣ ವರ್ಗಾವಣೆ ನಿಧಾನವಾಗುತ್ತದೆ",
                    "ಅವರ ಬಳಿ ಖಾತೆ ನಂಬರ್ ಇರಲ್ಲ",
                    "ಕಂಪ್ಯೂಟರ್ ವೇಗ ಕಡಿಮೆಯಾಗುತ್ತದೆ"
                ],
                "correctAnswer": 0
            },
            {
                "id": 3,
                "text": "ರಾಂಶಮ್‌ವೇರ್ ದಾಳಿಯಿಂದ ರಕ್ಷಿಸಿಕೊಳ್ಳಲು ಉತ್ತಮ ಪೂರ್ವಭಾವಿ ರಕ್ಷಣೆ (Preventive Defense) ಯಾವುದು?",
                "options": [
                    "ಲ್ಯಾಪ್‌ಟಾಪ್ ಅನ್ನು ಲಾಕರ್ ನಲ್ಲಿ ಇಡುವುದು",
                    "ನಿಯಮಿತವಾಗಿ ಡೇಟಾವನ್ನು ಆಫ್‌ಲೈನ್/ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್ (Backup) ಮಾಡಿಕೊಳ್ಳುವುದು",
                    "ಇಂಟರ್ನೆಟ್ ಬಳಸದಿರುವುದು",
                    "ಪಾಸ್‌ವರ್ಡ್ ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 4,
                "text": "ಬ್ಯಾಕಪ್ ಮಾಡಲು '3-2-1 ರೂಲ್' ಎಂದರೇನು?",
                "options": [
                    "3 ಲ್ಯಾಪ್‌ಟಾಪ್, 2 ವೈ-ಫೈ, 1 ಪಾಸ್‌ವರ್ಡ್",
                    "3 ನಕಲುಗಳು, 2 ಬೇರೆ ಬೇರೆ ಮಾಧ್ಯಮಗಳಲ್ಲಿ, 1 ಪ್ರತಿ ஆಫ್‌ಲೈನ್/ಸುರಕ್ಷಿತ ಸ್ಥಳದಲ್ಲಿ",
                    "3 ದಿನಕ್ಕೊಮ್ಮೆ ಬ್ಯಾಕಪ್",
                    "ಯಾವುದೇ ನಿಯಮವಿಲ್ಲ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 5,
                "text": "ಕ್ಲೌಡ್ (Cloud) ಬ್ಯಾಕಪ್‌ಗಿಂತ ಆಫ್‌ಲೈನ್ (ಹಾರ್ಡ್ ಡಿಸ್ಕ್) ಬ್ಯಾಕಪ್ ಏಕೆ ಮುಖ್ಯ?",
                "options": [
                    "ಕ್ಲೌಡ್ ದುಬಾರಿಯಾಗಿದೆ",
                    "ಕಂಪ್ಯೂಟರ್ ಗೆ ಕನೆಕ್ಟ್ ಆದ ಕ್ಲೌಡ್ ಫೈಲ್‌ಗಳು ಕೂಡ ರಾಂಶಮ್‌ವೇರ್ ದಾಳಿಗೊಳಗಾಗಬಹುದು, ಆದರೆ ಆಫ್‌ಲೈನ್ ಡ್ರೈವ್ ಸುರಕ್ಷಿತ",
                    "ಹಾರ್ಡ್ ಡಿಸ್ಕ್ ಸುಂದರವಾಗಿದೆ",
                    "ಕ್ಲೌಡ್ ನಲ್ಲಿ ಫೈಲ್ ಸೇವ್ ಆಗುವುದಿಲ್ಲ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 6,
                "text": "ಮಾಲ್‌ವೇರ್ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗೆ ಹೇಗೆ ಪ್ರವೇಶಿಸಬಹುದು?",
                "options": [
                    "ಅಧಿಕೃತ ಮೂಲಗಳಿಂದ ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿದಾಗ",
                    "ಮಾನ್ಯವಾಗಿರದ ಮೂಲಗಳಿಂದ ಶಂಕಿತ ಫೈಲ್‌ಗಳನ್ನು (ಉದಾ: ಕ್ರ್ಯಾಕ್ ಸಾಫ್ಟ್‌ವೇರ್) ಡೌನ್‌ಲೋಡ್ ಮಾಡುವುದರಿಂದ",
                    "ಕೀಬೋರ್ಡ್ ಮೂಲಕ",
                    "ಪವರ್ ಆಫ್ ಮಾಡಿದಾಗ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 7,
                "text": "ನಿಮ್ಮ ಸಿಸ್ಟಮ್ రాಂಶಮ್‌ವೇರ್ ದಾಳಿಗೆ ಒಳಗಾದ ತಕ್ಷಣ ಏನು ಮಾಡಬೇಕು?",
                "options": [
                    "ಸ್ನೇಹಿತರಿಗೆ ಕಾಲ್ ಮಾಡಬೇಕು",
                    "ನೆಟ್‌ವರ್ಕ್‌ನಿಂದ (ವೈ-ಫೈ) ಸಿಸ್ಟಮ್ ಅನ್ನು ತಕ್ಷಣ ಕಡಿತಗೊಳಿಸಿ ಹರಡುವುದನ್ನು ತಡೆಯಬೇಕು",
                    "ಕಂಪ್ಯೂಟರ್ ರಿಸ್ಟಾರ್ಟ್ ಮಾಡುತ್ತಲೇ ಇರಬೇಕು",
                    "ಹ್ಯಾಕರ್ ಗೆ ಮೆಸೇಜ್ ಮಾಡಬೇಕು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 8,
                "text": "ಎನ್‌ಕ್ರಿಪ್ಶನ್ (Encryption) ಎಂದರೇನು?",
                "options": [
                    "ಡೇಟಾವನ್ನು ರಹಸ್ಯ ಕೋಡ್ ಆಗಿ ಪರಿವರ್ತಿಸುವ ಪ್ರಕ್ರಿಯೆ",
                    "ಕಂಪ್ಯೂಟರ್ ತೇವಾಂಶ",
                    "ಫೈಲ್ ಅನ್ನು ಡಿಲೀಟ್ ಮಾಡುವುದು",
                    "ಹೊಸ ಐಕಾನ್ ಸೃಷ್ಟಿಸುವುದು"
                ],
                "correctAnswer": 0
            },
            {
                "id": 9,
                "text": "ಹೆಚ್ಚಿನ ರಾಂಶಮ್‌ವೇರ್ ದಾಳಿಕೋರರು ಬೇಡುವ ಮುಖ್ಯ ಕರೆನ್ಸಿ (Currency) ಯಾವುದು?",
                "options": [
                    "ರೂಪಾಯಿ",
                    "ಡಾಲರ್",
                    "ಕ್ರಿಪ್ಟೋಕರೆನ್ಸಿ (Cryptocurrency) ಉದಾ: ಬಿಟ್‌ಕಾಯಿನ್, ಏಕೆಂದರೆ ಇದನ್ನು ಪತ್ತೆ ಹಚ್ಚುವುದು ಕಷ್ಟ",
                    "ಚಿನ್ನ"
                ],
                "correctAnswer": 2
            },
            {
                "id": 10,
                "text": "ಬ್ಯಾಕಪ್‌ಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಕೇವಲ ತೆಗೆದುಕೊಳ್ಳುವುದಲ್ಲದೆ ಮತ್ತೇನು ಮಾಡಬೇಕು?",
                "options": [
                    "ಬ್ಯಾಕಪ್ ಡ್ರೈವ್ ಅನ್ನು ಎಸೆಯಬೇಕು",
                    "ಅವುಗಳು ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತಿವೆಯೇ ಎಂದು ಆಗಾಗ್ಗೆ ಟೆಸ್ಟ್/ಪರಿಶೀಲಿಸಬೇಕು",
                    "ಅದನ್ನು ಯಾರಿಗೂ ಹೇಳಬಾರದು",
                    "ಬಣ್ಣ ಬಳಿಯಬೇಕು"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": 7,
        "title": "ಡೀಪ್‌ಫೇಕ್ಸ್ ಮತ್ತು AI-ಆಧಾರಿತ ದಾಳಿಗಳು",
        "level": "Intermediate",
        "duration": "2 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/BoyeFozmAXk",
        "storyboard": [
            {
                "image": "module7_scene1.jpg",
                "text": "ಅರ್ಜುನ್ ಗೆ ವಾಟ್ಸಾಪ್ ನಲ್ಲಿ ಒಂದು ಆಘಾತಕಾರಿ ವೀಡಿಯೊ ಬರುತ್ತದೆ. ಅದರಲ್ಲಿ ಅವರ ಕಾಲೇಜಿನ ಪ್ರೀನ್ಸಿಪಾಲ್ ಏನೋ ತಪ್ಪು ಹೇಳುತ್ತಿದ್ದಾರೆ!"
            },
            {
                "image": "module7_scene2.jpg",
                "text": "ಅವನು ಅದನ್ನು ತಕ್ಷಣ ಶೇರ್ ಮಾಡಲು ಮುಂದಾಗುತ್ತಾನೆ. ಆದರೆ ವೀಡಿಯೊದಲ್ಲಿ ಏನೋ ಕೃತಕತೆ (Glitch) ಇರುವುದು ಕಂಡುಬರುತ್ತದೆ."
            },
            {
                "image": "module7_scene3.jpg",
                "text": "ಸೈಬರ್-ಸಿಯಾ 'ಡೀಪ್‌ಫೇಕ್' (Deepfake) ವಿವರಿಸುತ್ತಾಳೆ: 'AI ಬಳಸಿ ಮನುಷ್ಯರ ಮುಖ ಮತ್ತು ಧ್ವನಿಯನ್ನು ಅಸಲಿಯಂತೆ ನಕಲು ಮಾಡಬಹುದು.'"
            },
            {
                "image": "module7_scene4.jpg",
                "text": "ವೀಡಿಯೊಗಳನ್ನು ನಂಬುವ ಮುನ್ನ ಕಣ್ಣಿನ ಮಿಟುಕಿಸುವಿಕೆ, ಧ್ವನಿಯ ಸ್ವರ ಮತ್ತು ವಿಚಿತ್ರ ನೆರಳುಗಳನ್ನು ಗಮನಿಸಿ!"
            }
        ],
        "caseStudy": {
            "title": "ಕೃತಕ ಬಿಕ್ಕಟ್ಟು (The Synthetic Crisis)",
            "scenario": "ಚುನಾವಣೆಯ ಕೆಲವು ದಿನಗಳ ಮೊದಲು, ವಾಟ್ಸಾಪ್ ಮತ್ತು ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳಲ್ಲಿ ಒಂದು ಆಘಾತಕಾರಿ ವೀಡಿಯೊ ವೈರಲ್ ಆಗಲು ಪ್ರಾರಂಭಿಸಿತು. ಆ ವೀಡಿಯೊದಲ್ಲಿ, ಪ್ರಬಲ ರಾಜಕೀಯ ಅಭ್ಯರ್ಥಿಯೊಬ್ಬರು ಅತ್ಯಂತ ವಿವಾದಾತ್ಮಕ ಮತ್ತು ಆಕ್ಷೇಪಾರ್ಹ ಹೇಳಿಕೆಯನ್ನು ನೀಡುತ್ತಿರುವುದು ಸ್ಪಷ್ಟವಾಗಿ ಗೋಚರಿಸುತ್ತಿತ್ತು. ಅವರ ಧ್ವನಿ, ಅವರ ಮುಖಭಾವ ಮತ್ತು ತುಟಿಗಳ ಚಲನೆಯು ನೂರಕ್ಕೆ ನೂರು ಪ್ರತಿಶತ ಅಸಲಿಯಂತೆ ಕಾಣುತ್ತಿತ್ತು. ಈ ವೀಡಿಯೊ ಸಾರ್ವಜನಿಕರಲ್ಲಿ ಭಾರೀ ಆಕ್ರೋಶವನ್ನು ಹುಟ್ಟುಹಾಕಿತು ಮತ್ತು ಕೆಲವೇ ಗಂಟೆಗಳಲ್ಲಿ ಕೋಟ್ಯಾಂತರ ಬಾರಿ ಶೇರ್ ಮಾಡಲ್ಪಟ್ಟಿತು. ಅರ್ಜುನ್ ಕೂಡ ಅದನ್ನು ನೋಡಿ ದಿಗ್ಭ್ರಮೆಗೊಂಡ; ತಾನು ಬೆಂಬಲಿಸುತ್ತಿದ್ದ ಅಭ್ಯರ್ಥಿ ಈ ರೀತಿ ಮಾತನಾಡಲು ಸಾಧ್ಯವೇ? ಎಂದು ಪ್ರಶ್ನಿಸಲು ಪ್ರಾರಂಭಿಸಿದನು ಮತ್ತು ಅದನ್ನು ತನ್ನ ಸ್ನೇಹಿತರ ಗುಂಪಿಗೆ ಫಾರ್ವರ್ಡ್ ಮಾಡಲು ನಿರ್ಧರಿಸಿದನು.\\\\n\\\\nಅವನ ಫಾರ್ವರ್ಡ್ ಅನ್ನು ನೋಡಿದ ತಕ್ಷಣ ಸೈಬರ್-ಸಿಯಾ, ಅರ್ಜುನ್‌ಗೆ ವಿಡಿಯೋ ಕಾಲ್ ಮಾಡಿ ಆತನಿಗೆ ಆ ವೀಡಿಯೊವನ್ನು ಸೂಕ್ಷ್ಮವಾಗಿ ಗಮನಿಸಲು ಸೂಚಿಸಿದಳು. ಇದು 'ಡೀಪ್‌ಫೇಕ್' (Deepfake) - ಎಮರ್ಜಿಂಗ್ AI (Artificial Intelligence) ತಂತ್ರಜ್ಞಾನವನ್ನು ಬಳಸಿ ತಯಾರಿಸಲಾದ ಕೃತಕ ವೀಡಿಯೊ ಎಂದು ಅವಳು ವಿವರಿಸಿದಳು. ಅವಳು ಕೆಲವು ದೋಷಗಳನ್ನು ಎತ್ತಿತೋರಿಸಿದಳು: ಅಭ್ಯರ್ಥಿಯ ಕಣ್ಣುಗಳು ನೈಸರ್ಗಿಕವಾಗಿ ಮಿಟುಕಿಸುತ್ತಿರಲಿಲ್ಲ, ಕತ್ತಿನ ಭಾಗದಲ್ಲಿ ನೆರಳುಗಳು ವಿಚಿತ್ರವಾಗಿದ್ದವು ಮತ್ತು ಹಿನ್ನೆಲೆಯ ಶಬ್ದಕ್ಕೂ ಧ್ವನಿಗೂ ಸ್ವಲ್ಪ ಅಂತರವಿತ್ತು. ಡೀಪ್‌ಫೇಕ್‌ಗಳು ಡೀಪ್ ಲರ್ನಿಂಗ್ ಅಲ್ಗಾರಿದಮ್‌ಗಳನ್ನು (Neural Networks) ಬಳಸಿ ಲಕ್ಷಾಂತರ ಚಿತ್ರ ಮತ್ತು ಆಡಿಯೋ ಮಾದರಿಗಳನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಮೂಲಕ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ ಘಟನೆಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತವೆ ಎಂದು ಸೈಬರ್-ಸಿಯಾ ವಿವರಿಸಿದಳು. ಇದು ಕೇವಲ ರಾಜಕಾರಣಿಗಳಿಗಷ್ಟೇ ಅಲ್ಲ, ಸಾಮಾನ್ಯ ಜನರಿಗೂ ಸಹ ಬ್ಲ್ಯಾಕ್‌ಮೇಲ್ ಮತ್ತು ವಂಚನೆಗಾಗಿ ಬಳಕೆಯಾಗುತ್ತಿದೆ ಎಂಬ ಭಯಾನಕ ಸತ್ಯವನ್ನು ಅರ್ಜುನ್ ಗೆ ಮನವರಿಕೆ ಮಾಡಿದಳು. ನಾವು ನೋಡುವ ಪ್ರತಿಯೊಂದೂ, ವಿಶೇಷವಾಗಿ ಕೋಪ ಅಥವಾ ಭಾವೋದ್ರೇಕವನ್ನು ಕೆರಳಿಸುವಂತಿದ್ದರೆ, ಅದನ್ನು ಕುರುಡಾಗಿ ನಂಬಬಾರದು ಮತ್ತು ಅಧಿಕೃತ ಮೂಲಗಳಿಂದ 'ಫ್ಯಾಕ್ಟ್-ಚೆಕ್' (Fact-check) ಮಾಡಬೇಕು ಎಂದು ಅರ್ಜುನ್ ಅರಿತುಕೊಂಡನು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ಡೀಪ್‌ಫೇಕ್ (Deepfake) ಎಂದರೇನು?",
                "options": [
                    "ಆಳವಾದ ಸಮುದ್ರದ ವೀಡಿಯೊ",
                    "AI ಸಿಂಥೆಟಿಕ್ ಮೀಡಿಯಾ ಬಳಸಿ ವ್ಯಕ್ತಿಯ ಮುಖ, ಧ್ವನಿಯನ್ನು ಕೃತಕವಾಗಿ ಬದಲಾಯಿಸಿದ ನಕಲಿ ವೀಡಿಯೊ/ಆಡಿಯೊ",
                    "ಫೋಟೋಗ್ರಫಿ ತಂತ್ರ",
                    "ಒಂದು ರೀತಿಯ ವೈರಸ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "ಡೀಪ್‌ಫೇಕ್ ಗಳನ್ನು ಸೃಷ್ಟಿಸಲು ಯಾವ ತಂತ್ರಜ್ಞಾನವನ್ನು ಮುಖ್ಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ?",
                "options": [
                    "ಮೈಕ್ರೋಸಾಫ್ಟ್ ಪೇಂಟ್",
                    "ಆರ್ಟಿಫಿಶಿಯಲ್ ಇಂಟೆಲಿಜೆನ್ಸ್ (AI) ಮತ್ತು ಡೀಪ್ ಲರ್ನಿಂಗ್ (GANs)",
                    "ಫೋಟೋಶಾಪ್",
                    "ಮೋಡೆಮ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 3,
                "text": "ವಿಡಿಯೋವೊಂದು ಡೀಪ್‌ಫೇಕ್ ಹೌದೋ ಅಲ್ಲವೋ ಎಂದು ಗುರುತಿಸುವ ಸರಳ ವಿಧಾನ ಯಾವುದು?",
                "options": [
                    "ಮುಖದ ಹೊಳಪು",
                    "ನೈಸರ್ಗಿಕ ಕಣ್ಣಿನ ಮಿಟುಕಿಸುವಿಕೆಯ ಕೊರತೆ, ವಿಚಿತ್ರ ನೆರಳುಗಳು ಮತ್ತು ಲಿಪ್-ಸಿಂಕ್ ದೋಷಗಳು (Glitch)",
                    "ವೀಡಿಯೊದ ಉದ್ದ",
                    "ವೀಡಿಯೊದಲ್ಲಿರುವ ಬಣ್ಣ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 4,
                "text": "ಡೀಪ್‌ಫೇಕ್ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೆಚ್ಚಾಗಿ ಯಾವ ಅಪಾಯಕಾರಿ ಉದ್ದೇಶಕ್ಕೆ ಬಳಸಲಾಗುತ್ತದೆ?",
                "options": [
                    "ಚಲನಚಿತ್ರಗಳಿಗೆ ಮಾತ್ರ",
                    "ತಪ್ಪು ಮಾಹಿತಿ/ ಸುಳ್ಳು ಸುದ್ದಿ ಹರಡಲು, ಬ್ಲ್ಯಾಕ್‌ಮೇಲ್ ಮತ್ತು ರಾಜಕೀಯ ಕುಶಲತೆಗೆ",
                    "ಶಾಲೆಗಾಗಿ",
                    "ಸದ್ದನ್ನು ಕಡಿಮೆ ಮಾಡಲು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 5,
                "text": "ಆಘಾತಕಾರಿ ಅಥವಾ ವಿವಾದಾತ್ಮಕ ವೀಡಿಯೊವನ್ನು ನೋಡಿದಾಗ ತಕ್ಷಣ ಏನು ಮಾಡಬೇಕು?",
                "options": [
                    "ಎಲ್ಲಾ ಗ್ರೂಪ್ಸ್ ಗಳಿಗೆ ಫಾರ್ವರ್ಡ್ ಮಾಡುವುದು",
                    "ವೀಡಿಯೊವನ್ನು ನಂಬುವ ಮೊದಲು ಅಧಿಕೃತ ಸುದ್ದಿ ಮೂಲಗಳಲ್ಲಿ 'ಫ್ಯಾಕ್ಟ್-ಚೆಕ್' (Fact-check) ಮಾಡುವುದು",
                    "ಅದನ್ನು ಡಿಲೀಟ್ ಮಾಡುವುದು",
                    "ಕಾಮೆಂಟ್ ಹಾಕುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 6,
                "text": "ಡೀಪ್‌ಫೇಕ್ ಆಡಿಯೊ (Voice Clone) ವನ್ನು ಗುರುತಿಸುವುದು ಏಕೆ ಕಷ್ಟ?",
                "options": [
                    "ಇದು ತುಂಬಾ ಜೋರಾಗಿದೆ",
                    "ಕೇವಲ ಮೂರು ಸೆಕೆಂಡ್ ಗಳ ವಾಸ್ತವ ಧ್ವನಿಯನ್ನು ಬಳಸಿ, ಹ್ಯಾಕರ್‌ಗಳು ನೈಜವಾದ ಎಮೋಷನಲ್ ಧ್ವನಿಯನ್ನು ನಕಲಿಸಬಹುದು",
                    "ಇದು ಕಡಿಮೆ ಫ್ರೀಕ್ವೆನ್ಸಿ ಹೊಂದಿದೆ",
                    "ಯಾರಿಗೂ ಕೇಳಿಸುವುದಿಲ್ಲ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 7,
                "text": "ಕುಟುಂಬದವರಿಗೆ ತುರ್ತು ಹಣವನ್ನು ಕೇಳುವ 'AI ಧ್ವನಿ ಕರೆ' (AI Audio Scam) ಬಂದರೆ ಏನು ಮಾಡಬೇಕು?",
                "options": [
                    "ತಕ್ಷಣ ಹಣ ರವಾನಿಸುವುದು",
                    "ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿ, ನಿಮಗೆ ತಿಳಿದಿರುವ ಅಧಿಕೃತ ಸಂಖ್ಯೆಗೆ ಮತ್ತೆ ಕರೆಮಾಡಿ ದೃಢಪಡಿಸಿಕೊಳ್ಳುವುದು (Safe Word ಬಳಕೆ)",
                    "ಅಳುವುದು",
                    "ಬ್ಯಾಂಕ್‌ಗೆ ದೂರು ನೀಡುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 8,
                "text": "ಯಾವ ಪ್ರಮುಖ ಅಂಶವನ್ನು ಡೀಪ್‌ಫೇಕ್ ವೀಡಿಯೊಗಳಲ್ಲಿ ಸರಿಯಾಗಿ ನಕಲು ಮಾಡಲು ಕಷ್ಟವಾಗುತ್ತದೆ?",
                "options": [
                    "ಕೂದಲಿನ ಬಣ್ಣ",
                    "ಕೈಬರಹ",
                    "ಸೂಕ್ಷ್ಮವಾದ ಮುಖಭಾವಗಳು এবং ಚರ್ಮದ ಟೋನ್‌ಗಳು, ವಿಶೇಷವಾಗಿ ಕತ್ತಲೆಯಲ್ಲಿ ಅಥವಾ ಪಾರ್ಶ್ವನೋಟದಲ್ಲಿ (Profiles)",
                    "ಬಟ್ಟೆಯ ಬಣ್ಣ"
                ],
                "correctAnswer": 2
            },
            {
                "id": 9,
                "text": "ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳಲ್ಲಿ ಹೆಚ್ಚು ಫೋಟೋ/ಆಡಿಯೋಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದರಿಂದ ಆಗುವ ಒಂದು ಅಪಾಯವೇನು?",
                "options": [
                    "ಫಾಲೋವರ್ಸ್ ಕಮ್ಮಿ ಆಗುತ್ತಾರೆ",
                    "ದಾಳಿಕೋರರಿಗೆ ನಿಮ್ಮ ಮುಖ/ಧ್ವನಿಯ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಡೀಪ್‌ಫೇಕ್ ಮಾದರಿಗಳನ್ನು ತರಬೇತಿ ಮಾಡಲು ಸಹಾಯವಾಗುತ್ತದೆ",
                    "ಫೋನ್ ಮೆಮೊರಿ ತುಂಬುತ್ತದೆ",
                    "ಏನೂ ಆಗುವುದಿಲ್ಲ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 10,
                "text": "ಸುಳ್ಳು ಸುದ್ದಿಯನ್ನು ತಡೆಯಲು ಇರುವ ನಮ್ಮ ದೊಡ್ಡ ಅಸ್ತ್ರ ಯಾವುದು?",
                "options": [
                    "ಉತ್ತಮ ಆಂಟಿ-ವೈರಸ್",
                    "ವಿಮರ್ಶಾತ್ಮಕ ಚಿಂತನೆ (Critical Thinking) ಮತ್ತು ಜಾಗೃತಿ",
                    "ಹೊಸ ಲ್ಯಾಪ್‌ಟಾಪ್",
                    "ಇಂಟರ್ನೆಟ್ ಆಫ್ ಮಾಡುವುದು"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": 8,
        "title": "ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್ (Incident Response) ನ ಮೂಲಗಳು",
        "level": "Intermediate",
        "duration": "2 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/S2pEicQvL20",
        "storyboard": [
            {
                "image": "module8_scene1.jpg",
                "text": "ಕಂಪನಿಯೊಂದರಲ್ಲಿ ಒಮ್ಮೆಲೇ ಸರ್ವರ್‌ಗಳು ಡೌನ್ ಆಗುತ್ತವೆ ಮತ್ತು ಡೇಟಾ ಕಳ್ಳತನದ ಲಕ್ಷಣಗಳು ಕಾಣಿಸುತ್ತವೆ."
            },
            {
                "image": "module8_scene2.jpg",
                "text": "ಉದ್ಯೋಗಿಗಳು ಭೀತಿಗೊಳಗಾಗಿ ಏನೇನೋ ಪ್ಲಗ್ ಗಳನ್ನು ತೆಗೆಯಲು ಶುರು ಮಾಡುತ್ತಾರೆ. ಇದರಿಂದ ಡೇಟಾ ನಾಶವಾಗುತ್ತದೆ!"
            },
            {
                "image": "module8_scene3.jpg",
                "text": "ಸೈಬರ್-ಸಿಯಾ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾಳೆ: 'ಗಾಬರಿಯಾಗಬೇಡಿ. ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್ ಪ್ಲಾನ್ (IR Plan) ಅನ್ನು ಅನುಸರಿಸಿ.'"
            },
            {
                "image": "module8_scene4.jpg",
                "text": "ಗುರುತಿಸುವಿಕೆ, ನಿಯಂತ್ರಣ, ನಿರ್ಮೂಲನೆ ಮತ್ತು ಚೇತರಿಕೆ (Identify, Contain, Eradicate, Recover). ಇದು ಸರಿಯಾದ ವಿಧಾನ."
            }
        ],
        "caseStudy": {
            "title": "ಮಧ್ಯರಾತ್ರಿಯ ದೋಷ",
            "scenario": "ಎಲ್ಲವೂ ಶಾಂತವಾಗಿತ್ತು, ಆದರೆ ಶನಿವಾರ ಬೆಳಗಿನ ಜಾವ 2:00 ಗಂಟೆಗೆ ಟೆಕ್-ಸಲ್ಯೂಷನ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್‌ನ ಐಟಿ ಮ್ಯಾನೇಜರ್ ರಾಜ್ ಗೆ ಅಲರ್ಟ್ ಸಂದೇಶವೊಂದು ಬಂದಿತು. ಕಂಪನಿಯ ಪ್ರಮುಖ ಸರ್ವರ್‌ನಿಂದ ಭಾರೀ ಪ್ರಮಾಣದ ಡೇಟಾ ಬಾಹ್ಯ ಮೂಲವೊಂದಕ್ಕೆ ಅಸಾಮಾನ್ಯ ರೀತಿಯಲ್ಲಿ ರವಾನೆಯಾಗುತ್ತಿದೆ ಎಂಬುದೇ ಆ ಸಂದೇಶವಾಗಿತ್ತು. ಇದು ಸ್ಪಷ್ಟವಾದ ಡೇಟಾ ಉಲ್ಲಂಘನೆ (Data Breach)! ರಾಜ್ ನ ಮೊದಲ ಪ್ರತಿಕ್ರಿಯೆ ಸಂಪೂರ್ಣ ಭೀತಿಯಾಗಿತ್ತು. ಅವನು ತಕ್ಷಣ ಕಚೇರಿಗೆ ಓಡಿಬಂದು ಕಂಗೆಟ್ಟು ಎಲ್ಲಾ ಸರ್ವರ್‌ಗಳ ಪವರ್ ಕಾರ್ಡ್‌ಗಳನ್ನು ಎಳೆದುಬಿಟ್ಟನು. ಈ ಆತುರದ ಕ್ರಿಯೆಯು ದಾಳಿಯನ್ನು ನಿಲ್ಲಿಸಿದರೂ, ಜೊತೆಗೆ ಸರ್ವರ್‌ನ ಮೆಮೊರಿಯಲ್ಲಿ (RAM) ಉಳಿದಿದ್ದ ದಾಳಿಕೋರರ ನಿರ್ಣಾಯಕ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಾಕ್ಷ್ಯಗಳನ್ನು (Forensic Evidence) ಸಂಪೂರ್ಣವಾಗಿ ನಾಶಪಡಿಸಿತು. ಬೆಳಿಗ್ಗೆ ಬಂದ ಸೈಬರ್ ಸೆಕ್ಯುರಿಟಿ ತಜ್ಞರು, ರಾಜ್ ನ ಈ ತಪ್ಪಿನಿಂದ ದಾಳಿಕೋರರು ಹೇಗೆ ಪ್ರವೇಶಿಸಿದರು ಎಂದು ಪತ್ತೆಹಚ್ಚಲು ಅಸಾಧ್ಯವಾಯಿತು ಎಂದು ವಿವರಿಸಿದರು.\\\\n\\\\nಈ ಘಟನೆಯ ನಂತರ, ಸೈಬರ್-ಸಿಯಾ ಟೆಕ್-ಸಲ್ಯೂಷನ್ಸ್ ಕಂಪನಿಗಾಗಿ ಒಂದು ಕಟ್ಟುನಿಟ್ಟಾದ 'ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್' (IR - Incident Response) ಯೋಜನೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಿದಳು. ಭದ್ರತಾ ಘಟನೆ ಸಂಭವಿಸಿದಾಗ ಗಾಬರಿಯಾಗಬಾರದು, ಬದಲಾಗಿ ವ್ಯವಸ್ಥಿತವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸಬೇಕು ಎಂದು ಅವಳು ವಿವರಿಸಿದಳು. ಅವಳು IR ನ ಪ್ರಮುಖ ಹಂತಗಳನ್ನು ವಿವರಿಸಿದಳು: ಸಿದ್ಧತೆ (Preparation) - ಮುಂಚಿತವಾಗಿ ಯೋಜನೆ ರೂಪಿಸುವುದು; ಗುರುತಿಸುವಿಕೆ (Identification) - ಏನಾಗಿದೆ ಎಂಬುದನ್ನು ಸಾಕ್ಷ್ಯಗಳ ಸಮೇತ ಧೃಡಪಡಿಸುವುದು; ನಿಯಂತ್ರಣ (Containment) - ಪವರ್ ಆಫ್ ಮಾಡದೆ ಕೇವಲ ನೆಟ್‌ವರ್ಕ್ (Network) ಕೇಬಲ್ ಅನ್ನು ತೆಗೆಯುವ ಮೂಲಕ ದಾಳಿ ಹರಡದಂತೆ ತಡೆಯುವುದು; ನಿರ್ಮೂಲನೆ (Eradication) - ವೈರಸ್ ತೆಗೆಯುವುದು; ಚೇತರಿಕೆ (Recovery) - ಡೇಟಾವನ್ನು ಬ್ಯಾಕಪ್‌ನಿಂದ ಮರುಸ್ಥಾಪಿಸುವುದು; ಮತ್ತು ಕೊನೆಯದಾಗಿ ಪಾಠಗಳು (Lessons Learned) - ಮುಂದೆ ಈ ತಪ್ಪು ಆಗದಂತೆ ನೋಡಿಕೊಳ್ಳುವುದು. ಘಟನೆಯನ್ನು ನಿಭಾಯಿಸಬಲ್ಲ ಸಮರ್ಥ 'CSIRT' (Computer Security Incident Response Team) ನ ಅವಶ್ಯಕತೆಯನ್ನು ರಾಜ್ ಮತ್ತು ಅವನ ತಂಡ ಅರಿತುಕೊಂಡರು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್ (Incident Response) ನ ಮುಖ್ಯ ಉದ್ದೇಶವೇನು?",
                "options": [
                    "ಉದ್ಯೋಗಿಗಳನ್ನು ಪ್ರಶ್ನಿಸುವುದು",
                    "ಸೈಬರ್ ಭದ್ರತಾ ಘಟನೆಯನ್ನು ವ್ಯವಸ್ಥಿತವಾಗಿ ನಿರ್ವಹಿಸಿ, ನಿಯಂತ್ರಿಸಿ ಮತ್ತು ಚೇತರಿಸಿಕೊಳ್ಳುವುದು",
                    "ಹೊಸ ಲ್ಯಾಪ್‌ಟಾಪ್ ಖರೀದಿಸುವುದು",
                    "ಹ್ಯಾಕರ್ ಗಳ ಮೇಲೆ ಕೇಸ್ ಹಾಕುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "ಸೈಬರ್ ದಾಳಿ ಸಂಭವಿಸಿದ ತಕ್ಷಣ (ಉದಾ: ಡೇಟಾ ಸೋರಿಕೆ) ಸರ್ವರ್ ಪವರ್-ಆಫ್ ಮಾಡುವುದು ಏಕೆ ತಪ್ಪು?",
                "options": [
                    "ಕರೆಂಟ್ ಬಿಲ್ ಉಳಿಯುತ್ತದೆ",
                    "ವಿದ್ಯುತ್ ಕಡಿತದಿಂದ RAM ನಲ್ಲಿರುವ ಅತ್ಯಮೂಲ್ಯವಾದ ಅಸ್ಥಿರ ಸಾಕ್ಷ್ಯಗಳು (Volatile evidence) ನಾಶವಾಗುತ್ತವೆ",
                    "ಸರ್ವರ್ ಮತ್ತೆ ಆನ್ ಆಗಲ್ಲ",
                    "ದುಬಾರಿ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 3,
                "text": "ದಾಳಿಯನ್ನು ಹರಡದಂತೆ ತಡೆಯಲು 'ನಿಯಂತ್ರಣ' (Containment) ಹಂತದಲ್ಲಿ ಅತ್ಯುತ್ತಮ ವಿಧಾನ ಯಾವುದು?",
                "options": [
                    "ಟರ್ನ್-ಆಫ್ ಮಾಡುವುದು",
                    "ಸಾಧನವನ್ನು ಪವರ್ ಆನ್ ಇಟ್ಟುಕೊಂಡೇ ಭೌತಿಕವಾಗಿ ಇಂಟರ್ನೆಟ್ ಅಥವಾ ನೆಟ್‌ವರ್ಕ್ ಕೇಬಲ್ ಅನ್ನು ಕಡಿತಗೊಳಿಸುವುದು",
                    "ಪೋಲಿಸ್ ಗೆ ಕಾಲ್ ಮಾಡುವುದು",
                    "ಆಂಟಿ-ವೈರಸ್ ರನ್ ಮಾಡುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 4,
                "text": "ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್ ನ ನಾಲ್ಕು ಪ್ರಮುಖ ಹಂತಗಳಲ್ಲಿ ಯಾವುದು ಬರುವುದಿಲ್ಲ?",
                "options": [
                    "ಗುರುತಿಸುವಿಕೆ (Identification)",
                    "ವಿಮರ್ಶೆ (Review)",
                    "ವಿಕಸನ ಬಿಡುಗಡೆ (Release of Malware)",
                    "ಚೇತರಿಕೆ (Recovery)"
                ],
                "correctAnswer": 2
            },
            {
                "id": 5,
                "text": "ಒಂದು ಕಂಪನಿಯಲ್ಲಿ ಸೈಬರ್ ಘಟನೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಇರುವ ತಂಡದ ಹೆಸರೇನು?",
                "options": [
                    "HR ತಂಡ",
                    "CSIRT (Computer Security Incident Response Team)",
                    "ಮಾರ್ಕೆಟಿಂಗ್ ತಂಡ",
                    "ಸೇಲ್ಸ್ ತಂಡ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 6,
                "text": "ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್‌ ನಲ್ಲಿ 'ಪ್ಲೇಬುಕ್' (Playbook) ಎಂದರೇನು?",
                "options": [
                    "ಆಟದ ಪುಸ್ತಕ",
                    "ನಿರ್ದಿಷ್ಟ ರೀತಿಯ ಸೈಬರ್ ದಾಳಿಗಳನ್ನು (ಉದಾ: ರಾಂಶಮ್‌ವೇರ್) ನಿಭಾಯಿಸಲು ಪೂರ್ವ-ಲಿಖಿತ ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶಿ ಪುಸ್ತಕ",
                    "ಪಾಸ್‌ವರ್ಡ್‌ಗಳ ಪಟ್ಟಿ",
                    "ಖಾತೆ ವಿವರ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 7,
                "text": "'ಪಾಠಗಳು' (Lessons Learned) ಹಂತವು ಏಕೆ ಮುಖ್ಯವಾಗಿದೆ?",
                "options": [
                    "ತಂಡದ ವಾರ್ಷಿಕ ರಜೆಗಾಗಿ",
                    "ದಾಳಿಯ ಮೂಲ ಕಾರಣವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಮುಂಬರುವ ದಿನಗಳಲ್ಲಿ ಅದೇ ತಪ್ಪು ಮರುಕಳಿಸದಂತೆ ಭದ್ರತೆಯನ್ನು ಬಲಪಡಿಸಲು",
                    "ಹೊಸ ಉದ್ಯೋಗಿಗಳನ್ನು ನೇಮಿಸಲು",
                    "ದಂಡ ಪಾವತಿಸಲು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 8,
                "text": "'ಇಂಡಿಕೇಟರ್ ಆಫ್ ಕಾಂಪ್ರಮೈಸ್' (IOC - Indicator of Compromise) ಎಂದರೇನು?",
                "options": [
                    "ಬೇಗ-ಬೇಗ ಟೈಪ್ ಮಾಡುವುದು",
                    "ವ್ಯವಸ್ಥೆಯು ಹ್ಯಾಕ್ ಆಗಿರುವುದನ್ನು ಸೂಚಿಸುವ ಸಾಬೀತಾದ ಕುರುಹುಗಳು (ಉದಾ: ಅನುಮಾನಾಸ್ಪದ IP ವಿಳಾಸ, ವೈರಸ್ ಸಹಿ)",
                    "ಕಂಪ್ಯೂಟರ್ ಹಳೆಯದು",
                    "ನಕಲಿ ವಿಳಾಸ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 9,
                "text": "ಡೇಟಾ ಎಕ್ಸ್‌ಫಿಲ್ಟ್ರೇಷನ್ (Data Exfiltration) ಎಂದರೇನು?",
                "options": [
                    "ಡೇಟಾವನ್ನು ಬ್ಯಾಕಪ್ ಮಾಡುವುದು",
                    "ಅನಧಿಕೃತವಾಗಿ ಮತ್ತು ರಹಸ್ಯವಾಗಿ ಡೆಟಾವನ್ನು ಕಂಪನಿಯ ನೆಟ್‌ವರ್ಕ್‌ನಿಂದ ಹೊರಗೆ ರವಾನಿಸುವುದು",
                    "ವಿವರ ಅಳಿಸುವುದು",
                    "ಮಾಹಿತಿ ಹಂಚುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 10,
                "text": "ಸಿದ್ಧತೆ (Preparation) ಹಂತದಲ್ಲಿ ಯಾವ ಕೆಲಸವನ್ನು ಮಾಡಲಾಗುತ್ತದೆ?",
                "options": [
                    "ದಾಳಿ ನಡೆದಾಗ ಹುಡುಕುವುದು",
                    "ನೀತಿಗಳನ್ನು ರಚಿಸುವುದು, ಬ್ಯಾಕಪ್ ಯೋಜನೆ ಸಿದ್ಧಪಡಿಸುವುದು ಮತ್ತು ತಂಡಕ್ಕೆ ತರಬೇತಿ ನೀಡುವುದು",
                    "ಹ್ಯಾಕರ್ ಜೊತೆ ಮಾತನಾಡುವುದು",
                    "ಲಾಗಿನ್ ಆಗುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 11,
                "text": "ವಿಪತ್ತು ಚೇತರಿಕೆಯಲ್ಲಿ (Disaster Recovery) 'ಹಾಟ್ ಸೈಟ್' (Hot Site) ಎಂದರೆ ಏನು?",
                "options": [
                    "ಬೇಸಿಗೆಯಲ್ಲಿ ಬರುವ ವೆಬ್‌ಸೈಟ್",
                    "ಪೂರ್ಣ ಡೇಟಾ ಮತ್ತು ವ್ಯವಸ್ಥೆಯ ಲೈವ್ ಕಾಪಿಯನ್ನು ಹೊಂದಿರುವ ಸರ್ವರ್ ರಿಪ್ಲಿಕಾ, ಇದು ತೊಂದರೆಯಾದ ತಕ್ಷಣ ಕೆಲಸ ಶುರು ಮಾಡಬಲ್ಲದು",
                    "ದೊಡ್ಡ ಆಫೀಸ್",
                    "ಚಹಾ ಅಂಗಡಿ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 12,
                "text": "ಸುರಕ್ಷತಾ ಘಟನೆ ಸಂದರ್ಭದಲ್ಲಿ ಉದ್ಯೋಗಿಗಳಿಗೆ ಸಂವಹನವನ್ನು (Communication) ಏಕೆ ಸೀಮಿತಗೊಳಿಸಬೇಕು?",
                "options": [
                    "ಹಣ ಉಳಿಸಲು",
                    "ಮಾಧ್ಯಮಗಳಿಗೆ ಸೋರಿಕೆಯಾಗುವುದನ್ನು ತಡೆಯಲು ಮತ್ತು ದಾಳಿಕೋರನಿಗೆ ನಿಮ್ಮ ಮುಂದಿನ ಯೋಜನೆ ತಿಳಿಯದಂತೆ ಮಾಡಲು",
                    "ಸಿಟ್ ಬರುತ್ತದೆ ಆದ್ದರಿಂದ",
                    "ಬೇರೆಯವರಿಗೆ ಕೇಳಬಾರದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 13,
                "text": "ನಿರ್ಮೂಲನೆ (Eradication) ಹಂತದ ಗುರಿಯೇನು?",
                "options": [
                    "ಎಲ್ಲವನ್ನೂ ಫಾರ್ಮ್ಯಾಟ್ ಮಾಡುವುದು",
                    "ವ್ಯವಸ್ಥೆಯಿಂದ ದುರುದ್ದೇಶಪೂರಿತ ಅಂಶಗಳನ್ನು (ವೈರಸ್/ಹ್ಯಾಕರ್ ದಾರಿ) ಬೇರುಸಹಿತ ತೆಗೆದುಹಾಕುವುದು",
                    "ಹೊಸ ಸಾಫ್ಟ್ ವೇರ್ ಹಾಕುವುದು",
                    "ಪಾಸ್‌ವರ್ಡ್ ಹಂಚುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 14,
                "text": "ದಾಳಿಕೋರನು ಡೇಟಾ ಸ್ಟೋರೇಜ್ ಅನ್ನು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಿದಾಗ, IR ತಂಡ ಮೊದಲು ಏನು ಪರಿಶೀಲಿಸಬೇಕು?",
                "options": [
                    "ವಾರಂಟಿ",
                    "ಆಫ್‌ಲೈನ್ ಬ್ಯಾಕಪ್ ವ್ಯವಸ್ಥೆಗಳು ಸರಿಯಾಗಿವೆಯೇ ಮತ್ತು ಅವುಗಳಿಗೆ ಸೋಂಕಿಲ್ಲವೇ ಎಂಬುದನ್ನು",
                    "ಪವರ್ ಬಟನ್",
                    "ಹಾರ್ಡ್ ಡ್ರೈವ್ ಬಣ್ಣ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 15,
                "text": "ಇನ್ಸಿಡೆಂಟ್ ರೆಸ್ಪಾನ್ಸ್ ಯಶಸ್ವಿಯಾಗಲು ಯಾವುದು ಅತ್ಯಂತ ನಿರ್ಣಾಯಕ?",
                "options": [
                    "ವೇಗದ ಇಂಟರ್ನೆಟ್",
                    "ಶಾಂತವಾಗಿರುವುದು ನಿರ್ದಿಷ್ಟ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು (IR Plan) ನಿಖರವಾಗಿ ಅನುಸರಿಸುವುದು",
                    "ದುಬಾರಿ ಲ್ಯಾಪ್ ಟಾಪ್",
                    "ಬಹು-ಭಾಷಾ ಜ್ಞಾನ"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": 9,
        "title": "ಎಥಿಕಲ್ ಹ್ಯಾಕಿಂಗ್ ಮತ್ತು ಪೆಂಟೆಸ್ಟಿಂಗ್ (Ethical Hacking)",
        "level": "Graduate",
        "duration": "4 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/dz7Ntp7KQGA",
        "caseStudy": {
            "title": "ಸುಧಾರಿತ ದೌರ್ಬಲ್ಯ ಮೌಲ್ಯಮಾಪನ (Vulnerability Assessment)",
            "scenario": "ಬಹುರಾಷ್ಟ್ರೀಯ ಹಣಕಾಸು ಸಂಸ್ಥೆಯೊಂದು (Bank) ತಮ್ಮ ಮುಂದಿನ ಪೀಳಿಗೆಯ ಆನ್‌ಲೈನ್ ಬ್ಯಾಂಕಿಂಗ್ ಪೋರ್ಟಲ್ ಅನ್ನು ಬಿಡುಗಡೆ ಮಾಡಲು ಕೆಲವೇ ವಾರಗಳ ಅಂತರದಲ್ಲಿತ್ತು. ಈ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಪ್ರತಿದಿನ ಲಕ್ಷಾಂತರ ವಹಿವಾಟುಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಮತ್ತು ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮವಾದ ವೈಯಕ್ತಿಕ ಸಂಪತ್ತಿನ ಪೋರ್ಟ್‌ಫೋಲಿಯೊಗಳನ್ನು (Portfolios) ನಿರ್ವಹಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿತ್ತು. ಪೋರ್ಟಲ್ ಬಿಡುಗಡೆಯಾದ ನಂತರ ನಡೆಯುವ ಯಾವುದೇ ಸೈಬರ್ ಭೇದನೆಯು ಕಂಪನಿಯ ಅಸ್ತಿತ್ವಕ್ಕೇ ಅಪಾಯ ತರಬಹುದು ಎಂದು ಅರಿತ ನಿರ್ದೇಶಕರ ಮಂಡಳಿಯು, ಹೆಚ್ಚು ಆಕ್ರಮಣಕಾರಿ ರೀತಿಯಲ್ಲಿ ಒಳನುಗ್ಗುವಿಕೆಯ ಪರೀಕ್ಷೆಯನ್ನು (Penetration Test) ನಡೆಸಲು ಆದೇಶಿಸಿತು. 'ರೆಡ್ ಟೀಮ್' (Red Team) ಎಂಬ ಎಥಿಕಲ್ ಹ್ಯಾಕಿಂಗ್ ತಂಡದ ನಾಯಕನಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದ ಅರ್ಜುನ್, ನಿಜವಾದ ದಾಳಿಕೋರರು ನ್ಯೂನತೆಗಳನ್ನು ಕಂಡುಹಿಡಿಯುವ ಮುನ್ನವೇ ಅಪ್ಲಿಕೇಶನ್‌ನ ಭದ್ರತಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಒಡೆಯುವ ಕಾರ್ಯವನ್ನು ವಹಿಸಿಕೊಂಡನು. ಅವನ ಉದ್ದೇಶವು ಕೇವಲ ಸ್ವಯಂಚಾಲಿತ ಸ್ಕ್ಯಾನರ್‌ಗಳನ್ನು ರನ್ ಮಾಡುವುದಾಗಿರಲಿಲ್ಲ, ಬದಲಿಗೆ ದಾಳಿಕೋರನ ಮನಸ್ಥಿತಿಯನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳುವುದು ಮತ್ತು ಅನೇಕ ಸಣ್ಣ ನ್ಯೂನತೆಗಳನ್ನು ಶ್ರೇಣೀಕರಿಸಿ ಗಂಭೀರ ಹಾನಿಯನ್ನು ಉಂಟುಮಾಡುವುದಾಗಿತ್ತು.\\\\n\\\\nಅರ್ಜುನ್ ತನ್ನ ದಾಳಿಯನ್ನು 'OWASP Top 10'—ಅತ್ಯಂತ ನಿರ್ಣಾಯಕ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್ ಭದ್ರತಾ ಅಪಾಯಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿದನು. ಅವನ ಪ್ರಾಥಮಿಕ ವಿಶ್ಲೇಷಣೆಯಲ್ಲಿ ಅಪ್ಲಿಕೇಶನ್‌ನ ದ್ವಿತೀಯ ಪುಟದಲ್ಲಿ ಗ್ರಾಹಕರ ಪ್ರತಿಕ್ರಿಯೆಗಾಗಿ (Customer Feedback) ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಒಂದು ಸರಳ ಇನ್‌ಪುಟ್ ಫೀಲ್ಡ್ (Input Field) ಕಂಡುಬಂದಿತು. ಆ ಫೀಲ್ಡ್ ಅನ್ನು ಪರೀಕ್ಷಿಸಿದಾಗ (Fuzzing) ಬ್ಯಾಕೆಂಡ್ ಡೇಟಾಬೇಸ್ ಕಡೆಗೆ ನಿರ್ಬಂಧಿಸುವಿಕೆ (Input Sanitization) ಇಲ್ಲದಿರುವುದು ಕಂಡುಬಂದಿತು. ಈ ಅನನುಕೂಲತೆಯನ್ನು ಬೆಳೆಸಿ, ಸಂಕೀರ್ಣವಾದ ಮಲಿಷಿಯಸ್ SQL ಕ್ವೆರಿಗಳನ್ನು (Queries) ಆ ಪ್ರತಿಕ್ರಿಯೆ ಬಾಕ್ಸ್‌ಗೆ ಸೇರಿಸುವ ಮೂಲಕ, ಅರ್ಜುನ್ ಯಶಸ್ವಿಯಾಗಿ 'SQL ಇಂಜೆಕ್ಷನ್' (SQLi) ದಾಳಿಯನ್ನು ನಡೆಸಿದನು. ಈ ದಾಳಿಯು ದೃಢೀಕರಣ ಕಾರ್ಯವಿಧಾನಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಬೈಪಾಸ್ ಮಾಡಲು ಅವಕಾಶ ಮಾಡಿಕೊಟ್ಟಿತು, ಮತ್ತು ಇಡೀ ಗ್ರಾಹಕರ PII (Personally Identifiable Information) ಮತ್ತು ಆರ್ಥಿಕ ದಾಖಲೆಗಳನ್ನು ದೋಚಲು ಸೈದ್ಧಾಂತಿಕವಾಗಿ ಸಾಧ್ಯವಾಗಿಸಿತು. ಇಲ್ಲಿಗೇ ನಿಲ್ಲಿಸದ ಅರ್ಜುನ್, ಪೋರ್ಟಲ್ ಅನ್ನು ಹೋಸ್ಟ್ ಮಾಡುತ್ತಿರುವ ನೆಟ್‌ವರ್ಕ್ ಮೂಲಸೌಕರ್ಯದ ಕಡೆಗೆ ಗಮನ ಹರಿಸಿದನು. ಬಲವಾದ ಪೋರ್ಟ್ ಸ್ಕ್ಯಾನಿಂಗ್ ಮತ್ತು ಸರ್ವೀಸ್ ಎಣಿಕೆ, ನಿರ್ಣಾಯಕ ಫೈರ್ವಾಲ್ ತಪ್ಪಾದ ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು (Misconfiguration) ಬಹಿರಂಗಪಡಿಸಿತು: ಕ್ರಿಟಿಕಲ್ ಲೋಡ್ ಬ್ಯಾಲೆನ್ಸರ್ ನ ಹಳೆಯ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟಿವ್ ಇಂಟರ್ಫೇಸ್ ಇಂಟರ್ನೆಟ್ ಗೆ ನೇರವಾಗಿ ಮುಕ್ತವಾಗಿತ್ತು ಮತ್ತು ಕೇವಲ ತಯಾರಕರ ಡಿಫಾಲ್ಟ್ ಪಾಸ್‌ವರ್ಡ್ ('admin' ರೀತಿಯ) ಮೂಲಕ ಪ್ರವೇಶಿಸಬಹುದಾಗಿತ್ತು. ಅರ್ಜುನ್ ಸಲ್ಲಿಸಿದ ಆಳವಾದ ವರದಿಯು ಕಂಪನಿಯ ಕಾರ್ಯನಿರ್ವಾಹಕ ತಂಡಕ್ಕೆ ಕಣ್ಣು ತೆರೆಸಿತು. ಅವನ ಎಥಿಕಲ್ ಹ್ಯಾಕಿಂಗ್ ಪ್ರಯತ್ನವು ಸಂಭಾವ್ಯ ವಿಪತ್ತನ್ನು ತಡೆದು, ಸುರಕ್ಷಿತವಾದ ದೃಢವಾದ ಬ್ಯಾಂಕಿಂಗ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಅನ್ನು ಉಚಿತವಾಗಿ ಬಿಡುಗಡೆ ಮಾಡಲು ನೆರವಾಯಿತು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ಪೆನೆಟ್ರೇಶನ್ ಟೆಸ್ಟಿಂಗ್ (Penetration Testing) ನ ಪ್ರಾಥಮಿಕ ಗುರಿ ಏನು?",
                "options": [
                    "ಡೇಟಾವನ್ನು ಕದಿಯುವುದು",
                    "ಭದ್ರತೆಯನ್ನು ಸುಧಾರಿಸಲು ಮತ್ತು ದುರ್ಬಲತೆಗಳನ್ನು ಗುರುತಿಸಿ ಶೋಷಿಸುವುದು (Exploit)",
                    "ನೆಟ್‌ವರ್ಕ್ ಅನ್ನು ನಿಧಾನಗೊಳಿಸುವುದು",
                    "ಉದ್ಯೋಗಿಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "'SQL ಇಂಜೆಕ್ಷನ್' (SQLi) ಏನನ್ನು ಗುರಿಯಾಗಿಸುತ್ತದೆ?",
                "options": [
                    "ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್ (OS)",
                    "ಅಪ್ಲಿಕೇಶನ್ ನ ಡೇಟಾಬೇಸ್ ಲೇಯರ್ (Database Layer)",
                    "ಬಳಕೆದಾರರ ವೆಬ್ ಬ್ರೌಸರ್",
                    "ಭೌತಿಕ ಹಾರ್ಡ್‌ವೇರ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 3,
                "text": "OWASP ನ ಪೂರ್ಣ ರೂಪವೇನು?",
                "options": [
                    "Open Web Application Security Project - ನಿರ್ಣಾಯಕ ರಂಧ್ರಗಳನ್ನು ಗುರುತಿಸುವ ಯೋಜನೆ",
                    "Online Website Attack System Protocol",
                    "Organizational Web Assessment",
                    "Open World Attack"
                ],
                "correctAnswer": 0
            },
            {
                "id": 4,
                "text": "ಇನ್‌ಪುಟ್ ಸ್ಯಾನಿಟೈಸೇಶನ್ (Input Sanitization) ಕೊರತೆಯಿಂದ ಏನಾಗುತ್ತದೆ?",
                "options": [
                    "ವೆಬ್‌ಸೈಟ್ ಸುಂದರವಾಗುತ್ತದೆ",
                    "SQLi ಮತ್ತು XSS ನಂತಹ ಇಂಜೆಕ್ಷನ್ ದಾಳಿಗಳಿಗೆ ಎಡೆಮಾಡಿಕೊಡುತ್ತದೆ",
                    "ಡೇಟಾಬೇಸ್ ಲಾಕ್ ಆಗುತ್ತದೆ",
                    "ಸರ್ವರ್ ವೇಗ ಹೆಚ್ಚಾಗುತ್ತದೆ"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": 10,
        "title": "ಮಾಲ್‌ವೇರ್ ಅನಾಲಿಸಿಸ್ (Malware Analysis) ಮತ್ತು ರಿವರ್ಸ್ ಎಂಜಿನಿಯರಿಂಗ್",
        "level": "Graduate",
        "duration": "5 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/qA0YcYMRWyI",
        "caseStudy": {
            "title": "ರಹಸ್ಯ ಟ್ರೋಜನ್ ರೋಗನಿರ್ಣಯ",
            "scenario": "ಮಾರಣಾಂತಿಕ ಹೊಸ ಮಾಲ್‌ವೇರ್-ಝೀರೋ-ಡೇ ಟ್ರೋಜನ್ (Zero-Day Trojan) ಶೀರ್ಷಿಕೆಯಿಲ್ಲದ ಮೂಲದಿಂದ ದೊಡ್ಡ ಆಸ್ಪತ್ರೆಗಳ ನೆಟ್‌ವರ್ಕ್ ಒಳಗೆ ನುಸುಳಿತ್ತು. ಆಸ್ಪತ್ರೆಯ ಐಟಿ ತಂಡವು ತಕ್ಷಣವೇ ಮಾಲ್‌ವೇರ್ ಅನ್ನು ಗುರುತಿಸಿತು ಆದರೆ ಅದರ ನೈಜ ಪರಿಣಾಮ ಏನೆಂದು ತಿಳಿಯಲಿಲ್ಲ: ಅದು ರೋಗಿಗಳ ದಾಖಲೆಗಳನ್ನು ಮಾತ್ರ ಕದಿಯುತ್ತಿದೆಯೇ? ಅಥವಾ ಜೀವ ಉಳಿಸುವ ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳನ್ನು ಸ್ಥಗಿತಗೊಳಿಸುವ ಉದ್ದೇಶವನ್ನಿಟ್ಟುಕೊಂಡಿದೆಯೇ? ಈ ಬಿಕ್ಕಟ್ಟನ್ನು ಪರಿಹರಿಸುವ ಜವಾಬ್ದಾರಿಯನ್ನು ಮಾಲ್‌ವೇರ್ ವಿಶ್ಲೇಷಕ (Malware Analyst) ವಿಕ್ರಮ್ ಗೆ ವಹಿಸಲಾಯಿತು. ವಿಕ್ರಮ್ ಆ ಮಾಲ್‌ವೇರ್‌ನ ಸ್ಯಾಂಪಲ್ ಅನ್ನು ಕಂಪನಿಯ ನೆಟ್‌ವರ್ಕ್‌ನಿಂದ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಲಾದ (Isolated) ಎನ್‌ಕ್ರಿಪ್ಟೆಡ್ ಲ್ಯಾಬ್-ಸಾಂಡ್‌ಬಾಕ್ಸ್‌ನಲ್ಲಿ (Sandbox) ತೆಗೆದುಕೊಂಡನು. ಇದರಿಂದ ಆ ಸೋಂಕು ತನ್ನ ಮೂಲ ಸಿಸ್ಟಮ್‌ನ ಹೊರಗೆ ಹರಡುವುದನ್ನು ತಡೆಯಬಹುದು.\\\\n\\\\nವಿಶ್ಲೇಷಣೆಯಲ್ಲಿ ಎರಡು ಹಂತಗಳಿದ್ದವು. ಮೊದಲು, ಸ್ಥಿರ ವಿಶ್ಲೇಷಣೆ (Static Analysis) ನಡೆಸಿದ ವಿಕ್ರಮ್, ಕೋಡ್ ಅನ್ನು ರನ್ ಮಾಡದೆಯೇ ಅದರ ಮೂಲಭೂತ ಗುಣಲಕ್ಷಣಗಳನ್ನು, ಸಹಿಗಳನ್ನು (Signatures) ಮತ್ತು ಕಂಪ್ಲೈರ್ (Compiler) ಮಾಹಿತಿಯನ್ನು ಗಮನಿಸಿದನು. ಈ ಮಾಹಿತಿಯೆಲ್ಲವೂ ಇದು ಹೆಚ್ಚು ಸಂಕೀರ್ಣವಾದ 'ರಿವರ್ಸ್ ಶೆಲ್' (Reverse Shell) ಪೇಲೋಡ್ ಆಗಿರಬಹುದು ಎಂದು ಸೂಚಿಸಿತು. ನಂತರ ಅವನು ಹೆಚ್ಚು ಕಠಿಣವಾದ ಡೈನಾಮಿಕ್ ವಿಶ್ಲೇಷಣೆಗೆ (Dynamic Analysis) ಮುಂದಾದನು: ಮಾಲ್‌ವೇರ್ ಅನ್ನು ನಿಯಂತ್ರಿತ ಪರಿಸರದಲ್ಲಿ ಚಲಾಯಿಸುವುದು ಮತ್ತು ಅದರ ವಾಸ್ತವಿಕ ವರ್ತನೆಯನ್ನು ವೀಕ್ಷಿಸುವುದು. ಟ್ರೋಜನ್ ತಕ್ಷಣವೇ ಮಾಸ್ಕೋದಲ್ಲಿರುವ ಕಮಾಂಡ್-ಅಂಡ್-ಕಂಟ್ರೋಲ್ (C2) ಸರ್ವರ್‌ನೊಂದಿಗೆ ಸಂವಹನ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿತು. ಅದು ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಆಯಂಟಿ-ವೈರಸ್ ಅನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ, ಆಡಳಿತಾತ್ಮಕ (Admin) ಹಕ್ಕುಗಳನ್ನು ಕದಿಯುವ ತಂತ್ರಗಳನ್ನು ಬಳಸುತ್ತಿತ್ತು. ರಿವರ್ಸ್ ಎಂಜಿನಿಯರಿಂಗ್ (Reverse Engineering) ಮೂಲಕ ಡಿಸ್ ಅಸೆಂಬ್ಲರ್ (Disassembler) ಬಳಸಿಕೊಂಡು, ವಿಕ್ರಮ್ ಟ್ರೋಜನ್ ನ ಅಂತಿಮ ಉದ್ದೇಶವನ್ನು ಪತ್ತೆಹಚ್ಚಿದನು: ಇದು ವೈದ್ಯಕೀಯ ಯಂತ್ರಗಳನ್ನು ಕಣ್ಗಾವಲಿಟ್ಟು ನಂತರ ಅವನ್ನು ಆಫ್ ಮಾಡುವ ಬೈ-ಪಾಸ್ ಸ್ವಿಚ್ ಆಗಿತ್ತು. ವಿಕ್ರಮ್ ಈ ಕಮಾಂಡ್‌ಗಳನ್ನು ನಿರ್ಬಂಧಿಸುವ ನಿರ್ಣಾಯಕ ಸುರಕ್ಷತಾ ನಿಯಮಾವಳಿಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿದನು, ವೈದ್ಯಕೀಯ ಯಂತ್ರಗಳನ್ನು ಮತ್ತು ರೋಗಿಗಳ ಜೀವಗಳನ್ನು ರಕ್ಷಿಸಿದನು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ಮಾಲ್‌ವೇರ್ (Malware) ವಿಶ್ಲೇಷಕರು ಯಾಕೆ 'ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್' (Sandbox) ನಂತಹ ಪ್ರತ್ಯೇಕ ವಾತಾವರಣದಲ್ಲಿ ಪರೀಕ್ಷೆ ಮಾಡುತ್ತಾರೆ?",
                "options": [
                    "ಉತ್ತಮ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕಕ್ಕಾಗಿ",
                    "ಮಾಲ್‌ವೇರ್ ಉಳಿದ ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಹರಡದಂತೆ ತಡೆಯಲು",
                    "ವೈರಸ್ ಅನ್ನು ಓಡಿಸಲು",
                    "ಗೇಮ್ಸ್ ಆಡಲು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "'ಸ್ಟ್ಯಾಟಿಕ್ ಅನಾಲಿಸಿಸ್' (Static Analysis) ಅಂದರೆ ಏನು?",
                "options": [
                    "ಕಂಪ್ಯೂಟರ್ ಅನ್ನು ಆಫ್ ಮಾಡುವುದು",
                    "ಮಾಲ್‌ವೇರ್ ಅನ್ನು ಚಲಾಯಿಸದೆ ಅದರ ಕೋಡ್ ಮತ್ತು ಗುಣಲಕ್ಷಣಗಳನ್ನು ಅಧ್ಯಯನ ಮಾಡುವುದು",
                    "ರನ್ ಮಾಡುವ ಮೂಲಕ ಪರಿಶೀಲನೆ",
                    "ನೆಟ್‌ವರ್ಕ್ ಟ್ರಾಫಿಕ್ ವೀಕ್ಷಣೆ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 3,
                "text": "'ಡೈನಾಮಿಕ್ ಅನಾಲಿಸಿಸ್' ನಲ್ಲಿ (Dynamic Analysis) ಏನು ಮಾಡಲಾಗುತ್ತದೆ?",
                "options": [
                    "ಕೋಡ್ ಓದುವುದು ಕೇವಲ",
                    "ಮಾಲ್‌ವೇರ್ ಅನ್ನು ನಿಯಂತ್ರಿತ ವಾತಾವರಣದಲ್ಲಿ ರನ್ ಮಾಡಿ, ಅದರ ವರ್ತನೆಯನ್ನು (Behavior) ವಾಸ್ತವವಾಗಿ ವೀಕ್ಷಿಸುವುದು",
                    "ವೈರಸ್ ತಯಾರಿಸುವುದು",
                    "ಆಂಟಿ-ವೈರಸ್ ಡಿಲೀಟ್ ಮಾಡುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 4,
                "text": "C2 ಸರ್ವರ್ (Command and Control Server) ಎಂದರೇನು?",
                "options": [
                    "ಕಂಪನಿಯ ಮುಖ್ಯ ಸರ್ವರ್",
                    "ದಾಳಿಕೋರನು ಮಾಲ್‌ವೇರ್ ಅನ್ನು ನಿಯಂತ್ರಿಸಲು ಮತ್ತು ಡೇಟಾವನ್ನು ಪಡೆಯಲು ಬಳಸುವ ರಿಮೋಟ್ ಸರ್ವರ್",
                    "ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್ ಸರ್ವರ್",
                    "ಡೇಟಾಬೇಸ್"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": 11,
        "title": "ಕ್ಲೌಡ್ ಭದ್ರತೆ (Cloud Security Architecture)",
        "level": "Graduate",
        "duration": "4 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/S2pEicQvL20",
        "caseStudy": {
            "title": "AWS ಕಾಂಪ್ರಮೈಸ್",
            "scenario": "ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವ ಸ್ಟಾರ್ಟ್ಅಪ್ ಒಂದಾದ 'ಫ್ಲೈ-ಟೆಕ್', ಬಿಲಿಯನ್-ಡಾಲರ್ ಮಾರುಕಟ್ಟೆಯನ್ನು ಗುರಿಯಾಗಿಸಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿತ್ತು. ಆದರೆ ಈ ಕ್ಷಿಪ್ರ ಬೆಳವಣಿಗೆಯ ಅವಸರದಲ್ಲಿ, ಅವರ ಡೆವಲಪರ್ ತಂಡವು ಗಿಟ್‌ಹಬ್ (GitHub) ನ ಸಾರ್ವಜನಿಕ ರೆಪೊಸಿಟರಿಯಲ್ಲಿ ತಮ್ಮ ಪ್ರಮುಖ ಮೂಲ-ಕೋಡ್ ಅನ್ನು ಪುಶ್ ಮಾಡುವಾಗ ಆಕಸ್ಮಿಕವಾಗಿ AWS (Amazon Web Services) ನ ಅತ್ಯಮೂಲ್ಯವಾದ ಆಕ್ಸೆಸ್ ಕೀಗಳನ್ನು (Access Keys) ಸಂಕೇತಗಳಾಗಿ ಒಳಗೊಳ್ಳುವಂತೆ ಮಾಡಿದರು. ಕೋಡ್ ಅನ್ನು ಸಾರ್ವಜನಿಕವಾಗಿ ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡಿದ ಕೇವಲ ಐದು ನಿಮಿಷಗಳಲ್ಲಿ, ಇಂಟರ್ನೆಟ್‌ನಾದ್ಯಂತ ನಿರಂತರವಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತಿರುವ ಸ್ವಯಂಚಾಲಿತ ಬಾಟ್‌ಗಳು ಆ ಕೀಲಿಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಿ, ಅವುಗಳನ್ನು ಕದ್ದವು. ಈ ಕೀಲಿಗಳು ಪೂರ್ಣ 'ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್' ಸವಲತ್ತುಗಳನ್ನು ಹೊಂದಿದ್ದವು. ದಾಳಿಕೋರರು ತಕ್ಷಣವೇ ಈ ಕೀಲಿಗಳನ್ನು ಬಳಸಿ ಸ್ಟಾರ್ಟ್ಅಪ್ ನ ಸಂಪೂರ್ಣ AWS ಕ್ಲೌಡ್ ಮೂಲಸೌಕರ್ಯದ ನಿಯಂತ್ರಣವನ್ನು ತೆಗೆದುಕೊಂಡರು.\\\\n\\\\nದಾಳಿಕೋರರ ಮುಖ್ಯ ಉದ್ದೇಶವು ಕೇವಲ ಡೇಟಾವನ್ನು ಕದಿಯುವುದಾಗಿರಲಿಲ್ಲ. ಬದಲಿಗೆ ಅವರು, ಕ್ರಿಪ್ಟೋಕರೆನ್ಸಿ ಮೈನಿಂಗ್ (Cryptocurrency Mining) ಗಾಗಿ ಸಂಪೂರ್ಣ ಶಕ್ತಿಯುತವಾದ ನೂರಾರು ವರ್ಚುವಲ್ ಸರ್ವರ್‌ಗಳನ್ನು ಪ್ರಾರಂಭಿಸಿದರು. ಕೇವಲ ಎರಡು ದಿನಗಳಲ್ಲಿ, ಸ್ಟಾರ್ಟ್ಅಪ್ ನ ಕ್ಲೌಡ್ ಬಿಲ್ $10,000 ಮೀರಿದೆ! ಕ್ಲೌಡ್ ಆರ್ಕಿಟೆಕ್ಟ್ ಆದ ರಿಯಾ ತಕ್ಷಣ ಸ್ಪಂದಿಸಿದಳು. 'ಕ್ಲೌಡ್ ಭದ್ರತೆಯು ಹಂಚಿಕೆಯ ಜವಾಬ್ದಾರಿಯಾಗಿದೆ' (Shared Responsibility Model) ಎಂದು ಅವಳು ಕಂಪನಿಗೆ ವಿವರಿಸಿದಳು; ಅಮೆಜಾನ್ AWS ಕೇವಲ ಮೂಲಸೌಕರ್ಯವನ್ನು ಸುರಕ್ಷಿತವಾಗಿರಿಸುತ್ತದೆ ಆದರೆ ಬಳಕೆದಾರರೇ ಅದರೊಳಗಿನ ಡೇಟಾ ಮತ್ತು ಕೀಲಿಗಳನ್ನು (Keys) ರಕ್ಷಿಸಿಕೊಳ್ಳಬೇಕು. ರಿಯಾ ತಕ್ಷಣವೇ ಆ ಆಕ್ಸೆಸ್ ಕೀಗಳನ್ನು ರದ್ದುಗೊಳಿಸಿದಳು (Revoke) ಮತ್ತು ದಾಳಿಕೋರರು ಪ್ರಾರಂಭಿಸಿದ ಎಲ್ಲಾ ಮೈನಿಂಗ್ ಸರ್ವರ್‌ಗಳನ್ನು ಡಿಲೀಟ್ ಮಾಡಿದಳು. ಭವಿಷ್ಯದ ರಕ್ಷಣೆಗಾಗಿ ಅವಳು ಕಠಿಣ ನಿಯಮಗಳನ್ನು ಜಾರಿಗೆ ತಂದಳು: ಕೀಲಿಗಳನ್ನು ಕೋಡ್ ಒಳಗೆ (Hardcoding) ಬರೆಯುವುದನ್ನು ನಿಲ್ಲಿಸುವುದು, ಡೇಟಾವನ್ನು ನಿರ್ವಹಿಸಲು AWS ಸೀಕ್ರೆಟ್ಸ್ ಮ್ಯಾನೇಜರ್ (Secrets Manager) ಬಳಸುವುದು, ಮತ್ತು ಪ್ರತಿಯೊಂದು ಖಾತೆಗೂ ಕನಿಷ್ಠ ಸವಲತ್ತು (Least Privilege) ಮತ್ತು ಎರಡು-ಹಂತದ ದೃಢೀಕರಣವನ್ನು (MFA) ಕಡ್ಡಾಯಗೊಳಿಸುವುದು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ಕ್ಲೌಡ್‌ನಲ್ಲಿ 'ಹಂಚಿದ ಜವಾಬ್ದಾರಿ ಮಾದರಿ' (Shared Responsibility Model) ಎಂದರೇನು?",
                "options": [
                    "ಕ್ಲೌಡ್ ಪೂರೈಕೆದಾರರು 100% ಜವಾಬ್ದಾರರು",
                    "ಭೌತಿಕ ಮೂಲಸೌಕರ್ಯವು ಪೂರೈಕೆದಾರರ (ಉದಾ: AWS) ಜವಾಬ್ದಾರಿಯಾದರೆ, ಆವರೊಳಗಿನ ಡೇಟಾ ಮತ್ತು ಕೀಲಿಗಳ ಸುರಕ್ಷತೆಯು ಗ್ರಾಹಕರ ಜವಾಬ್ದಾರಿಯಾಗಿದೆ",
                    "ಯಾರೂ ಜವಾಬ್ದಾರರಲ್ಲ",
                    "ಕೇವಲ ಗ್ರಾಹಕರು ಮಾತ್ರ ಜವಾಬ್ದಾರರು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "ಆಕ್ಸೆಸ್ ಕೀಗಳನ್ನು (Access Keys) ಪಬ್ಲಿಕ್ ಗಿಟ್‌ಹಬ್ (GitHub) ನಲ್ಲಿ ಹಾಕುವುದು ಏಕೆ ಅಪಾಯಕಾರಿ?",
                "options": [
                    "ಬಾಟ್‌ಗಳು ತಕ್ಷಣ ಅವುಗಳನ್ನು ಕದ್ದು ಕಂಪನಿಯ ಇಡೀ ಕ್ಲೌಡ್ ಅನ್ನು ಹ್ಯಾಕ್ ಮಾಡಬಹುದು",
                    "ಕೋಡ್ ಅಂದವಾಗಿ ಕಾಣುವುದಿಲ್ಲ",
                    "ಗಿಟ್‌ಹಬ್ ಸರ್ವರ್ ನಿಧಾನವಾಗುತ್ತದೆ",
                    "ಕೀಲಿಗಳನ್ನು ಕಳೆದುಕೊಳ್ಳಬಹುದು"
                ],
                "correctAnswer": 0
            },
            {
                "id": 3,
                "text": "ದಾಳಿಕೋರರು ಕ್ಲೌಡ್ ಅನ್ನು ಹ್ಯಾಕ್ ಮಾಡಿ ಕ್ರಿಪ್ಟೋಕರೆನ್ಸಿ ಮೈನಿಂಗ್ ಸರ್ವರ್‌ಗಳನ್ನು ಪ್ರಾರಂಭಿಸಿದಾಗ ಏನಾಗುತ್ತದೆ?",
                "options": [
                    "ಕಂಪನಿಗೆ ಲಾಭವಾಗುತ್ತದೆ",
                    "ಕಂಪನಿಯ ಕ್ಲೌಡ್‌ನ ಬಳಕೆ-ಬಿಲ್ (Bill) ಭಾರಿ ಪ್ರಮಾಣದಲ್ಲಿ ಉಡ್ಡಯನವಾಗುತ್ತದೆ ಮತ್ತು ಆರ್ಥಿಕ ನಷ್ಟವಾಗುತ್ತದೆ",
                    "ಸರ್ವರ್ ವೇಗ ಹೆಚ್ಚಾಗುತ್ತದೆ",
                    "ಡೇಟಾ ರಕ್ಷಣೆಯಾಗುತ್ತದೆ"
                ],
                "correctAnswer": 1
            },
            {
                "id": 4,
                "text": "ಕೋಡ್ ಒಳಗೆ ಗುಪ್ತಪದಗಳನ್ನು ಮತ್ತು ಕೀಲಿಗಳನ್ನು ಬರೆಯದಿರಲು ಇರುವ ಪರಿಹಾರವೇನು?",
                "options": [
                    "ಪೇಪರ್ ಮೇಲೆ ಬರೆಯುವುದು",
                    "AWS ಸೀಕ್ರೆಟ್ಸ್ ಮ್ಯಾನೇಜರ್ ನಂತಹ ರಹಸ್ಯ ನಿರ್ವಹಣಾ ಸೇವೆಗಳನ್ನು ಬಳಸುವುದು",
                    "ಪಾಸ್‌ವರ್ಡ್ ಇಲ್ಲದೆ ಲಾಗಿನ್ ಮಾಡುವುದು",
                    "ಕೀಗಳನ್ನು ಎಲ್ಲರಿಗೂ ಹಂಚುವುದು"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": 12,
        "title": "ಕ್ಯಾಪ್ಟರ್ ದ ಫ್ಲ್ಯಾಗ್ (CTF) ಮತ್ತು ರಿಯಲ್-ವರ್ಲ್ಡ್ ಸಿಮ್ಯುಲೇಶನ್ಸ್",
        "level": "Graduate",
        "duration": "6 ಗಂಟೆ",
        "videoUrl": "https://www.youtube.com/embed/BoyeFozmAXk",
        "caseStudy": {
            "title": "ದಿ ಫೈನಲ್ ಚಾಲೆಂಜ್: ಸಿಮ್ಯುಲೇಟೆಡ್ ಬ್ರೀಚ್",
            "scenario": "ತಮ್ಮ ಸೈಬರ್ ಸೆಕ್ಯುರಿಟಿ ಪದವಿಯ ಅಂತ್ಯದಲ್ಲಿ, ವಿದ್ಯಾರ್ಥಿಗಳ ತಂಡವೊಂದು 'ಕ್ಯಾಪ್ಟರ್ ದ ಫ್ಲ್ಯಾಗ್' (CTF - Capture the Flag) ಎಂಬ ಅಂತಿಮ ಸ್ಕೋರ್ ಆಧಾರಿತ ಹ್ಯಾಕಿಂಗ್ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿದರು. ಇದು ಯಾವುದೇ ಪಾಸ್ವರ್ಡ್ ಇರದ ಕೇವಲ ಪಠ್ಯಪುಸ್ತಕದ ಸಿದ್ಧಾಂತವಾಗಿರಲಿಲ್ಲ; ಇದು 'ಕಾರ್ಪ್-ನೆಟ್-X' (CorpNet-X) ಎಂಬ ನೈಜ ಪ್ರಪಂಚದ ಎದುರಾಳಿ-ಬಹುವಿಧದ ವರ್ಚುವಲ್ ಕಾರ್ಪೊರೇಟ್ ನೆಟ್‌ವರ್ಕ್ ಅನ್ನು ಬೇಧಿಸುವ, ನೈಜ ಪ್ರಪಂಚದ-ಅನುಕರಣೆಯ ಸವಾಲಾಗಿತ್ತು. ತಂಡದ ನಾಯಕಿಯಾಗಿದ್ದ ಮಾಯಾ, ವ್ಯವಸ್ಥೆಯ ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತನ್ನು ಸಮಗ್ರವಾಗಿ ಗುರುತಿಸಲು ಉಪಕರಣಗಳನ್ನು (Nmap, Wireshark) ಬಳಸಲು ತನ್ನ ತಂಡವನ್ನು ನಿರ್ದೇಶಿಸಿದಳು. ಮೊದಲ ಸವಾಲು ವೆಬ್-ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿರುವ ದುರ್ಬಲತೆಯನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವುದಾಗಿತ್ತು. ಮಾಯಾ ತನ್ನ ಹಿಂದಿನ 'SQL ಇಂಜೆಕ್ಷನ್' ಮತ್ತು 'XSS' ಜ್ಞಾನವನ್ನು ಬಳಸಿ ಕೇವಲ ಲಾಗಿನ್ ಪೋರ್ಟಲ್ ಅಷ್ಟೇ ಅಲ್ಲದೆ, ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಓಡುತ್ತಿದ್ದ ಡೇಟಾಬೇಸ್ ಅನ್ನು ನಿಯಂತ್ರಣಕ್ಕೆ ತೆಗೆದುಕೊಂಡಳು.\\\\n\\\\nಆ ಡೇಟಾಬೇಸ್ ಒಳಗಿಂದ, ಅವಳಿಗೆ 'ಫ್ಲ್ಯಾಗ್ 1' (Flag 1- ಒಂದು ಎನ್‌ಕ್ರಿಪ್ಟೆಡ್ ಸ್ಟ್ರಿಂಗ್) ದೊರಕಿತು. ಆದರೆ ಆಟವು ಕೇವಲ ಅಲ್ಲಿಗೇ ಮುಗಿಯಲಿಲ್ಲ! ಒಮ್ಮೆ ಒಳಗಾದ ನಂತರ, ಅವರು ಮತ್ತೊಂದು ಗುಪ್ತ ಸಬ್‌ನೆಟ್‌ಗೆ (Subnet) ನೆಟ್‌ವರ್ಕ್ ಅನ್ನು 'ಪಿವೋಟ್' (Pivot - ಒಂದು ಕಾಂಪ್ರಮೈಸ್ ಆದ ಸಿಸ್ಟಮ್‌ನಿಂದ ಮತ್ತೊಂದಕ್ಕೆ ಚಲಿಸುವುದು) ಮಾಡಬೇಕಾಗಿತ್ತು. ಅಲ್ಲಿ ಹಳೆಯ ವಿಂಡೋಸ್ ಸರ್ವರ್‌ (SMB vulnerability) ಅನ್ನು ರನ್ ಮಾಡಲಾಗುತ್ತಿತ್ತು. ಎಕ್ಸ್ಪ್ಲಾಯಿಟ್ (Exploit) ಅನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ ಹಾರಿಬಿಡುವ ಮೂಲಕ ಅವಳು ಆ ಸರ್ವರ್‌ಗೂ ಒಳನುಗ್ಗಿದಳು. ಕೊನೆಯ ಸವಾಲು ಅತ್ಯಂತ ಕಠಿಣವಾಗಿತ್ತು: ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾದ ಆಡಳಿತಾತ್ಮಕ ಪೇಲೋಡ್ (Payload) ಅನ್ನು ಡಿಕೋಡ್ ಮಾಡಲು ಅವಳು ಕೋಡ್‌ನ ರಿವರ್ಸ್ ಎಂಜಿನಿಯರಿಂಗ್ ಬಳಸಬೇಕಾಯಿತು. ಎಲ್ಲಾ ಸುಳಿವುಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸುವ ಮೂಲಕ, ಮಾಯಾ ಮತ್ತು ಅವಳ ತಂಡ ಯಶಸ್ವಿಯಾಗಿ 'ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್' ಫ್ಲ್ಯಾಗ್ ಅನ್ನು ವಶಪಡಿಸಿಕೊಂಡರು, ಮತ್ತು ಇದು ಅವರ ತರಬೇತಿಯ ಯಶಸ್ಸನ್ನು ಸಾರಿತು. CTF ಸ್ಪರ್ಧೆಗಳು ಕೇವಲ ವಿಜಯದ ಬಗ್ಗೆ ಮಾತ್ರವಲ್ಲ; ಅವು ತಂಡದ ಕೆಲಸ, ಗಡೀಪಾರು ಆಲೋಚನೆ ಮತ್ತು ಉರಿಯುತ್ತಿರುವ ಬೆದರಿಕೆಗಳಿಗೆ ಹೇಗೆ ಒತ್ತಡದ ನಡುವೆ ಪ್ರತಿಕ್ರಿಯಿಸಬೇಕು ಎಂಬುದನ್ನು ಕಲಿಸುತ್ತವೆ ಎಂದು ಮಾಯಾ ಅರಿತುಕೊಂಡಳು."
        },
        "quiz": [
            {
                "id": 1,
                "text": "ಸೈಬರ್ ಭದ್ರತೆಯಲ್ಲಿ CTF (Capture the Flag) ಸ್ಪರ್ಧೆಗಳ ಮುಖ್ಯ ಉದ್ದೇಶವೇನು?",
                "options": [
                    "ವಿಡಿಯೋ ಗೇಮ್ ಆಡುವುದು",
                    "ಹ್ಯಾಕಿಂಗ್ ಕೌಶಲ್ಯಗಳನ್ನು ನೈಜ-ಪ್ರಪಂಚದ ಸನ್ನಿವೇಶಗಳಲ್ಲಿ ಪರೀಕ್ಷಿಸಲು ಮತ್ತು ಕಲಿಯಲು ಕಾನೂನು ಸಮ್ಮತ ಸ್ಪರ್ಧೆ",
                    "ಧ್ವಜವನ್ನು ಕದಿಯುವುದು",
                    "ಕಂಪ್ಯೂಟರ್ ಹ್ಯಾಕ್ ಮಾಡಿ ಹಣ ಮಾಡುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 2,
                "text": "ನೆಟ್‌ವರ್ಕ್ ಶೋಧನೆಯಲ್ಲಿ 'ಪಿವೋಟಿಂಗ್' (Pivoting) ಎಂದರೇನು?",
                "options": [
                    "ಲ್ಯಾಪ್‌ಟಾಪ್ ಅನ್ನು ತಿರುಗಿಸುವುದು",
                    "ಒಮ್ಮೆ ಹ್ಯಾಕ್ ಮಾಡಿದ ಸಿಸ್ಟಮ್ ಅನ್ನು ಬಳಸಿ, ಆಂತರಿಕ ನೆಟ್‌ವರ್ಕ್‌ನ ಇತರ ಸಾಧನಗಳ ಮೇಲೆ ದಾಳಿ ಮಾಡುವುದು",
                    "ಪಾಸ್‌ವರ್ಡ್ ಬದಲಾಯಿಸುವುದು",
                    "ಮೌಸ್ ಬಳಸುವುದು"
                ],
                "correctAnswer": 1
            },
            {
                "id": 3,
                "text": "CTF ಗಳಲ್ಲಿ 'ಫ್ಲ್ಯಾಗ್' (Flag) ಎಂದರೆ ಏನು?",
                "options": [
                    "ದೇಶದ ಧ್ವಜ",
                    "ದುರ್ಬಲತೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಶೋಷಿಸಿದ ನಂತರ ಸಿಗುವ ರಹಸ್ಯ ಕೋಡ್ ಅಥವಾ ಸ್ಟ್ರಿಂಗ್",
                    "ಹೊಸ ಸಾಫ್ಟ್ ವೇರ್",
                    "ವೈರಸ್"
                ],
                "correctAnswer": 1
            },
            {
                "id": 4,
                "text": "ನೈಜ ಪ್ರಪಂಚದ ಸೈಬರ್ ದಾಳಿಗಳನ್ನು ಅನುಕರಿಸುವ (Simulate) ಸ್ಪರ್ಧೆಗಳು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಏಕೆ ಅಗತ್ಯ?",
                "options": [
                    "ಕಾಲೇಜು ಫೀಸ್ ಕಟ್ಟಲು",
                    "ಪುಸ್ತಕದ ಸಿದ್ಧಾಂತವನ್ನು ಮೀರಿ, ಒತ್ತಡದ ವಾತಾವರಣದಲ್ಲಿ ವಾಸ್ತವ ಪ್ರಪಂಚದ ಸಮಸ್ಯೆಗಳನ್ನು ಬಿಡಿಸುವ ಕೌಶಲ್ಯವನ್ನು ನೀಡಲು",
                    "ಎಲ್ಲರಿಗೂ ಹ್ಯಾಕಿಂಗ್ ಕಲಿಸಲು",
                    "ಇಂಟರ್ನೆಟ್ ವೇಗ ಹೆಚ್ಚಿಸಲು"
                ],
                "correctAnswer": 1
            }
        ]
    }
];

export const getStudyModules = (language: string): StudyModuleType[] => {
    const lang = language.split(' ')[0];
    const baseModulesEn = studyModulesEn;
    const baseModulesKn = studyModulesKn;

    if (lang === 'Hindi' || lang === 'हिंदी') {
        return baseModulesEn.map(m => ({
            ...m,
            videoUrl: m.videoUrl ? `${m.videoUrl}${m.videoUrl.includes('?') ? '&' : '?'}cc_load_policy=1&cc_lang_pref=hi` : m.videoUrl
        }));
    }
    if (lang === 'Kannada' || lang === 'ಕನ್ನಡ') {
        return baseModulesKn.map(m => ({
            ...m,
            videoUrl: m.videoUrl ? `${m.videoUrl}${m.videoUrl.includes('?') ? '&' : '?'}cc_load_policy=1&cc_lang_pref=kn` : m.videoUrl
        }));
    }
    return baseModulesEn;
};
