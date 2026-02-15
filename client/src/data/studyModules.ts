export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
}

export interface StudyModuleType {
    id: number;
    title: string;
    duration: string;
    videoUrl: string; // Placeholder or YouTube embed link
    caseStudy: {
        title: string;
        scenario: string;
    };
    quiz: Question[];
}

export const studyModules: StudyModuleType[] = [
    {
        id: 1,
        title: 'Introduction to Cybersecurity',
        duration: '2 hours',
        videoUrl: 'https://www.youtube.com/embed/inWWhr5tnEA', // Example placeholder
        caseStudy: {
            title: "The Phishing Simulation",
            scenario: "You are a junior security analyst at a financial firm. On Monday morning, several employees report receiving an email from 'IT Support' asking them to reset their passwords immediately due to a 'security breach'. The email contains a link to a website that looks exactly like the company's login page but has a URL 'secure-bank-login.net' instead of 'bank.com'. One employee admitted to clicking the link and entering their credentials."
        },
        quiz: [
            {
                id: 1,
                text: "What represents the most immediate threat in this scenario?",
                options: ["Malware infection", "Credential Harvesting", "DDoS Attack", "Insider Threat"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "What is the first action you should take regarding the compromised employee account?",
                options: ["Fire the employee", "Reset the user's password immediately", "Reply to the phishing email", "Monitor the account for another week"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "The URL 'secure-bank-login.net' is an example of:",
                options: ["Typosquatting/Domain Spoofing", "SQL Injection", "Cross-Site Scripting", "DNS Poisoning"],
                correctAnswer: 0
            },
            {
                id: 4,
                text: "To prevent this in the future, which technical control would be most effective against the email delivery?",
                options: ["Firewall rules", "Email Filtering/DMARC/SPF", "Antivirus software", "Web Content Filtering"],
                correctAnswer: 1
            },
            {
                id: 5,
                text: "What type of attack vector is being used here?",
                options: ["Social Engineering", "Brute Force", "Man-in-the-Middle", "Ransomware"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 2,
        title: 'Network Security Fundamentals',
        duration: '4 hours',
        videoUrl: 'https://www.youtube.com/embed/2hC_jG6yv-E',
        caseStudy: {
            title: "The Unsecured Wi-Fi",
            scenario: "A coffee shop offers free Wi-Fi to customers. A hacker sits in the corner and sets up a 'Rogue Access Point' with the same name as the shop's Wi-Fi. Customers connect to the hacker's device instead of the legitimate router. The hacker is now intercepting all unencrypted traffic."
        },
        quiz: [
            {
                id: 1,
                text: "What is this specific type of attack called?",
                options: ["Evil Twin Attack", "Dictionary Attack", "Bluejacking", "Packet Sniffing"],
                correctAnswer: 0
            },
            {
                id: 2,
                text: "Which protocol would encrypt the traffic between the user and the website, mitigating packet sniffing?",
                options: ["HTTP", "FTP", "HTTPS (TLS/SSL)", "Telnet"],
                correctAnswer: 2
            },
            {
                id: 3,
                text: "What should the coffee shop implement to secure their own Wi-Fi network?",
                options: ["WEP", "WPA3", "Open System Authentication", "MAC Filtering only"],
                correctAnswer: 1
            },
            {
                id: 4,
                text: "If a user effectively uses a VPN, what does the hacker see?",
                options: ["Everything in plain text", "Only the text messages", "Encrypted garbage data", "The user's passwords"],
                correctAnswer: 2
            },
            {
                id: 5,
                text: "How can users verify they are on the legitimate network?",
                options: ["Ask the barista", "Check the signal strength", "There is no easy way for average users, making this attack dangerous", "Check if the internet is fast"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 3,
        title: 'Web Application Security (OWASP Top 10)',
        duration: '5 hours',
        videoUrl: 'https://www.youtube.com/embed/w7K752d5e_0',
        caseStudy: {
            title: " The SQL Injection Breach",
            scenario: "A retail company's website allows users to search for products. A researcher types generic search terms but then tries inputting `' OR '1'='1`. Suddenly, the search result page displays a list of all user emails and hashed passwords instead of products."
        },
        quiz: [
            {
                id: 1,
                text: "What vulnerability did the researcher exploit?",
                options: ["Cross-Site Scripting (XSS)", "SQL Injection (SQLi)", "Cross-Site Request Forgery (CSRF)", "Insecure Direct Object Reference (IDOR)"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "What is the primary mechanism that allows this attack to work?",
                options: ["The database uses weak passwords", "The application trusts user input without sanitation", "The server is outdated", "The firewall is turned off"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "How can developers best prevent SQL Injection?",
                options: ["Use Prepared Statements/Parameterized Queries", "Encrypt the database", "Hide the error messages", "Use a stronger firewall"],
                correctAnswer: 0
            },
            {
                id: 4,
                text: "If the passwords were leaked, what security measure made them 'hashed' but potentially still crackable?",
                options: ["Salting", "Hashing", "Encryption", "Encoding"],
                correctAnswer: 1
            },
            {
                id: 5,
                text: "Which OWASP Top 10 category does this fall under?",
                options: ["Broken Access Control", "Injection", "Cryptographic Failures", "Security Misconfiguration"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 4,
        title: 'Incident Response & Forensics',
        duration: '3 hours',
        videoUrl: 'https://www.youtube.com/embed/ixTb5b8pW2g',
        caseStudy: {
            title: "The Ransomware Incident",
            scenario: "An HR employee opens a resume attachment. Immediately, their screen locks, and a message appears demanding Bitcoin to decrypt files. The malware begins spreading to shared network drives."
        },
        quiz: [
            {
                id: 1,
                text: "What is the very first step in the Incident Response Lifecycle according to NIST?",
                options: ["Preparation", "Detection and Analysis", "Containment", "Eradication"],
                correctAnswer: 0
            },
            {
                id: 2,
                text: "In this scenario, what is the immediate 'Containment' action?",
                options: ["Pay the ransom", "Disconnect the infected machine from the network", "Restore from backup", "Format the drive"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "Why is it important NOT to shut down the computer immediately if memory forensics is required?",
                options: ["It spreads the virus", "Volatile memory (RAM) data will be lost", "The hard drive will crash", "It alerts the attacker"],
                correctAnswer: 1
            },
            {
                id: 4,
                text: "After the threat is removed, what phase involves restoring systems and data?",
                options: ["Preparation", "Detection", "Recovery", "Loans"],
                correctAnswer: 2
            },
            {
                id: 5,
                text: "What meeting is held after the incident to learn from mistakes?",
                options: ["Press Conference", "Lessons Learned / Post-Incident Activity", "Performance Review", "Budget Meeting"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 5,
        title: 'Cryptography Basics',
        duration: '4 hours',
        videoUrl: 'https://www.youtube.com/embed/S9JGmA5_unY',
        caseStudy: {
            title: "The Intercepted Message",
            scenario: "Two generals are communicating battle plans. They know a spy intercepts their messengers. They decide to use a code where they shift every letter by 3 positions (A -> D). The spy intercepts a message 'ATTACK' but sees 'DWWDFN' and is confused."
        },
        quiz: [
            {
                id: 1,
                text: "The 'shift by 3' method is an example of what classic cipher?",
                options: ["Caesar Cipher", "Vigenère Cipher", "Enigma", "AES"],
                correctAnswer: 0
            },
            {
                id: 2,
                text: "In modern cryptography, what key type allows anyone to encrypt a message but only the receiver to decrypt it?",
                options: ["Symmetric Key", "Asymmetric (Public) Key", "Hash Key", "Session Key"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "Which of the following is meant to be IRREVERSIBLE (one-way)?",
                options: ["Encryption", "Hashing", "Encoding", "Compression"],
                correctAnswer: 1
            },
            {
                id: 4,
                text: "What ensures that a message has not been altered in transit (Integrity)?",
                options: ["Digital Signature / Hashing", "Encryption", "Firewall", "VPN"],
                correctAnswer: 0
            },
            {
                id: 5,
                text: "If Alice sends Bob a sensitive file using Symmetric encryption, what is the main problem they face?",
                options: ["Key Exchange/Distribution", "Slow performance", "Larger file size", "Complexity"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 6,
        title: 'Cloud Security Fundamentals',
        duration: '3 hours',
        videoUrl: 'https://www.youtube.com/embed/U33r9qqK1yI',
        caseStudy: {
            title: "The Leaky Bucket",
            scenario: "A startup stores all customer records in an AWS S3 bucket. A researcher discovers they can access the files simply by guessing the URL, without any login. Millions of records are exposed."
        },
        quiz: [
            {
                id: 1,
                text: "What is the primary cause of this breach?",
                options: ["Zero-day exploit", "Misconfiguration (Public Access)", "Weak passwords", "DDoS"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "In the Shared Responsibility Model, who is responsible for securing the data IN the cloud?",
                options: ["The Cloud Provider (AWS/Azure)", "The Customer", "The Government", "The ISP"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "What tool helps manage permissions and identities in the cloud?",
                options: ["IAM (Identity and Access Management)", "IPS", "DLP", "SIEM"],
                correctAnswer: 0
            },
            {
                id: 4,
                text: "Which cloud service model gives you the most control (and responsibility) over the OS and apps?",
                options: ["SaaS (Software as a Service)", "PaaS (Platform as a Service)", "IaaS (Infrastructure as a Service)", "FaaS (Function as a Service)"],
                correctAnswer: 2
            },
            {
                id: 5,
                text: "What principle should have been applied to the S3 bucket permissions?",
                options: ["Least Privilege", "Defense in Depth", "Security by Obscurity", "Fail Secure"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 7,
        title: 'Malware Analysis & Reverse Engineering',
        duration: '6 hours',
        videoUrl: 'https://www.youtube.com/embed/4G5o7rT2m9U',
        caseStudy: {
            title: "The Unknown Executable",
            scenario: "The SOC team isolates a suspicious file named 'invoice.exe'. When run in a sandbox, it attempts to contact a server in Russia and modifies registry keys to start up automatically."
        },
        quiz: [
            {
                id: 1,
                text: "Running the malware in a controlled environment (sandbox) to observe its behavior is called:",
                options: ["Static Analysis", "Dynamic Analysis", "Code Review", "Fuzzing"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "Looking at the code/strings without running the program is called:",
                options: ["Static Analysis", "Dynamic Analysis", "Black Box Testing", "Penetration Testing"],
                correctAnswer: 0
            },
            {
                id: 3,
                text: "What tool is commonly used to disassemble/decompile executables?",
                options: ["Wireshark", "Ghidra / IDA Pro", "Nmap", "Metasploit"],
                correctAnswer: 1
            },
            {
                id: 4,
                text: "The ability of the malware to survive a reboot by adding a registry key is known as:",
                options: ["Persistence", "Escalation", "Lateral Movement", "Exfiltration"],
                correctAnswer: 0
            },
            {
                id: 5,
                text: "If the malware detects it is in a sandbox and stops running, this is called:",
                options: ["Anti-virus", "Evasion / Anti-analysis", "Polymorphism", "Encapsulation"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 8,
        title: 'Social Engineering & Human Hacking',
        duration: '2 hours',
        videoUrl: 'https://www.youtube.com/embed/lc7scxvKQOo',
        caseStudy: {
            title: "The Tailgater",
            scenario: "An attacker dresses in a delivery uniform and carries a heavy box. They wait for an employee to badge into the secure office building and ask, 'Can you hold the door? My hands are full.' The employee politely holds the door open."
        },
        quiz: [
            {
                id: 1,
                text: "What physical security vulnerability was exploited here?",
                options: ["Tailgating / Piggybacking", "Dumpster Diving", "Lock Picking", "Shoulder Surfing"],
                correctAnswer: 0
            },
            {
                id: 2,
                text: "Which human emotion did the attacker exploit?",
                options: ["Greed", "Helpfulness / Courtesy", "Fear", "Curiosity"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "What is the best defense against tailgating?",
                options: ["Man traps / Security Guards", "Stronger passwords", "Firewalls", "Anti-virus"],
                correctAnswer: 0
            },
            {
                id: 4,
                text: "If an attacker calls pretending to be the CEO and demands urgent wire transfer, this is:",
                options: ["Phishing", "Vishing (Voice Phishing) / CEO Fraud", "Smishing", "Whaling"],
                correctAnswer: 1
            },
            {
                id: 5,
                text: "Shoulder surfing involves:",
                options: ["Looking over someone's shoulder to steal credentials", "Stealing ID badges", "Hacking Wi-Fi", "Guessing passwords"],
                correctAnswer: 0
            }
        ]
    }
];
