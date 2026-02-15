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
            scenario: "You are a junior security analyst at a financial firm. On Monday morning, several employees report receiving an email from 'IT Support' asking them to reset their passwords immediately due to a 'security breach'. The email contains a link to a website that looks exactly like the company's login page but has a URL 'secure-bank-login.net' instead of 'bank.com'. One employee admitted to clicking the link and entering their credentials. The SOC team is now investigating the extent of the compromise. \n\nUpon further analysis, you discover that the email originated from an external domain that was registered only 24 hours ago. The landing page hosted a script that not only captured credentials but also attempted to download a malicious payload. This incident highlights the critical importance of user awareness and technical controls in preventing social engineering attacks."
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
            },
            {
                id: 6,
                text: "What does the 'lock icon' in a browser address bar signify?",
                options: ["The site is 100% safe", " The connection is encrypted (HTTPS)", "The site is owned by a bank", "No hackers can see the site"],
                correctAnswer: 1
            },
            {
                id: 7,
                text: "Why is '24 hours ago' relevant to the domain registration?",
                options: ["New domains are always safe", "Attackers often use freshly registered domains to bypass filters", "It takes 24 hours to propagate DNS", "It means the domain is expired"],
                correctAnswer: 1
            },
            {
                id: 8,
                text: "If the employee had Multi-Factor Authentication (MFA) enabled, would the attacker have succeeded in logging in?",
                options: ["Yes, MFA is useless", "No, they would need the second factor too", "Maybe, if they guessed the OTP", "Yes, passwords are the only factor"],
                correctAnswer: 1
            },
            {
                id: 9,
                text: "What is the best way to verify a suspicious email from 'IT Support'?",
                options: ["Reply to the email", "Click the link to check", "Call the IT helpdesk using a known internal number", "Forward it to your personal email"],
                correctAnswer: 2
            },
            {
                id: 10,
                text: "Which of the following creates a sense of urgency in phishing emails?",
                options: ["'Please take your time'", "'Review at your convenience'", "'Account will be suspended in 1 hour'", "'Welcome to the newsletter'"],
                correctAnswer: 2
            },
            {
                id: 11,
                text: "What is 'Spear Phishing'?",
                options: ["Phishing targets broad audience", "Phishing targeting a specific individual or organization", "Phishing via SMS", "Phishing via Voice"],
                correctAnswer: 1
            },
            {
                id: 12,
                text: "What is the payload in this scenario?",
                options: ["The email subject", "The malicious script attempting to download", "The credential form", "The URL"],
                correctAnswer: 1
            },
            {
                id: 13,
                text: "What does SOC stand for?",
                options: ["Security Operations Center", "System on Chip", "Social Organized Crime", "Secure Online Chat"],
                correctAnswer: 0
            },
            {
                id: 14,
                text: "Which law protects data privacy in Europe?",
                options: ["GDPR", "HIPAA", "SOX", "PCI-DSS"],
                correctAnswer: 0
            },
            {
                id: 15,
                text: "What is the 'CIA Triad'?",
                options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Control, Inspector, Audit", "Computer, Internet, Access"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 2,
        title: 'Digital Forensics Fundamentals',
        duration: '4 hours',
        videoUrl: 'https://www.youtube.com/embed/udD_GQVDt5g', // Edureka: Digital Forensics
        caseStudy: {
            title: "The Deleted Evidence",
            scenario: "A rogue employee is suspected of stealing trade secrets before resigning. They wiped their company laptop, deleting all files and clearing logs. The security team needs to prove the theft occurred. Upon receiving the laptop, the forensic analyst immediately creates a bit-stream image of the hard drive to preserve the state of the evidence. \n\nUsing forensic tools, they recover several 'deleted' files from the unallocated space. They also find artifacts in the Windows Registry indicating that an external USB drive was connected shortly before the employee's departure. The timestamps match the file deletion events, creating a strong chain of circumstantial evidence linking the data exfiltration to the specific USB device and time."
        },
        quiz: [
            {
                id: 1,
                text: "What is the primary goal of Digital Forensics?",
                options: ["To hack the hacker", "To preserve, identify, extract, and document evidence", "To repair broken computers", "To delete viruses"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "The principle that states 'Evidence must not be altered' is crucial for:",
                options: ["Chain of Custody", "Data Encryption", "Network Speed", "Software Updates"],
                correctAnswer: 0
            },
            {
                id: 3,
                text: "When a file is 'deleted' on a standard hard drive, what actually happens?",
                options: ["It is gone forever", "The file is overwritten immediately", "The pointer to the file is removed, but data remains", "The hard drive melts"],
                correctAnswer: 2
            },
            {
                id: 4,
                text: "What type of data is stored in RAM and is lost when power is cut?",
                options: ["Persistent Data", "Volatile Data", "Archived Data", "Encrypted Data"],
                correctAnswer: 1
            },
            {
                id: 5,
                text: "Which tool is commonly used to create a bit-by-bit copy (image) of a drive?",
                options: ["Photoshop", "FTK Imager / dd", "Microsoft Word", "Calculator"],
                correctAnswer: 1
            },
            {
                id: 6,
                text: "What is 'Unallocated Space'?",
                options: ["Empty space on a drive where deleted files may reside", "Broken sectors", "The cloud", "RAM"],
                correctAnswer: 0
            },
            {
                id: 7,
                text: "What is a 'Hash Value' used for in forensics?",
                options: ["To encrypt the drive", "To verify integrity (digital fingerprint) of evidence", "To speed up the computer", "To guess passwords"],
                correctAnswer: 1
            },
            {
                id: 8,
                text: "Why must you never work on the original evidence drive?",
                options: ["It might explode", "You might accidentally alter the data", "It is too slow", "It is illegal"],
                correctAnswer: 1
            },
            {
                id: 9,
                text: "What is 'Steganography'?",
                options: ["Hiding data within other files (like images)", "Encrypting emails", "Deleting logs", "Password cracking"],
                correctAnswer: 0
            },
            {
                id: 10,
                text: "What artifact stores user activity on Windows?",
                options: ["The Registry", "Notepad", "Paint", "The Recycle Bin only"],
                correctAnswer: 0
            },
            {
                id: 11,
                text: "What covers the legal process of handling evidence?",
                options: ["Chain of Custody", "Chain of Command", "Blockchain", "Supply Chain"],
                correctAnswer: 0
            },
            {
                id: 12,
                text: "Metadata is:",
                options: ["Data about data", "Big data", "Encrypted data", "Deleted data"],
                correctAnswer: 0
            },
            {
                id: 13,
                text: "An 'Image' in forensics refers to:",
                options: ["A photo of the crime scene", "An exact bit-for-bit copy of a storage device", "A screenshot", "A drawing"],
                correctAnswer: 1
            },
            {
                id: 14,
                text: "Which file system is used by modern Windows?",
                options: ["NTFS", "EXT4", "HFS+", "APFS"],
                correctAnswer: 0
            },
            {
                id: 15,
                text: "What is the first step in the forensic process?",
                options: ["Analysis", "Reporting", "Identification / Seizure", "Presentation"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 3,
        title: 'Ethical Hacking Fundamentals',
        duration: '4 hours',
        videoUrl: 'https://www.youtube.com/embed/woNY9og8H_s', // Simplilearn: Ethical Hacking
        caseStudy: {
            title: "The White Hat Audit",
            scenario: "A company hires an ethical hacker to test their security. The hacker simulates a real attack to find vulnerabilities before malicious actors do. They identify that an old web server is running an outdated version of Apache with known vulnerabilities. \n\nAfter obtaining permission (Scope of Work), the hacker exploits this vulnerability to gain shell access to the server. Instead of stealing data, they document the exploit path (Proof of Concept) and immediately report it to the IT team. They also discover that the server has weak password policies, allowing them to crack the administrator password in under 10 minutes using a dictionary attack."
        },
        quiz: [
            {
                id: 1,
                text: "What is the primary difference between a Black Hat and a White Hat hacker?",
                options: ["Skill level", "Authorization/Permission", "Coding language used", "Operating System used"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "The first phase of ethical hacking, where you gather information about the target, is called:",
                options: ["Scanning", "Reconnaissance / Footprinting", "Enumeration", "Exploitation"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "What tool is famously used for network scanning and mapping?",
                options: ["Wireshark", "Nmap", "Metasploit", "John the Ripper"],
                correctAnswer: 1
            },
            {
                id: 4,
                text: "Attempting to find vulnerabilities by sending data to a system is known as:",
                options: ["Scanning", "Phishing", "Social Engineering", "Patching"],
                correctAnswer: 0
            },
            {
                id: 5,
                text: "After finding a vulnerability, what must an ethical hacker do?",
                options: ["Exploit it for profit", "Report it to the organization", "Share it on the dark web", "Ignore it"],
                correctAnswer: 1
            },
            {
                id: 6,
                text: "What is a 'Zero-Day' vulnerability?",
                options: ["A vulnerability known for 0 days (no patch exists)", "A vulnerability that is 0 days old", "A vulnerability fixed in 0 days", "A harmless bug"],
                correctAnswer: 0
            },
            {
                id: 7,
                text: "Metasploit is primarily used for:",
                options: ["Scanning", "Exploitation framework", "Password cracking", "Documentation"],
                correctAnswer: 1
            },
            {
                id: 8,
                text: "What is 'Penetration Testing'?",
                options: ["Fixing bugs", "Simulating cyberattacks to find weaknesses", "Installing firewalls", "Writing policies"],
                correctAnswer: 1
            },
            {
                id: 9,
                text: "Which team defends the network during a simulation?",
                options: ["Red Team", "Blue Team", "Purple Team", "Green Team"],
                correctAnswer: 1
            },
            {
                id: 10,
                text: "What is SQL Injection?",
                options: ["Injecting code into a database query", "Injecting code into HTML", "Injecting code into the network", "Injecting code into RAM"],
                correctAnswer: 0
            },
            {
                id: 11,
                text: "What does Vulnerability Assessment focus on?",
                options: ["Exploiting bugs", "Identifying and prioritizing vulnerabilities", "Physical security", "Social engineering"],
                correctAnswer: 1
            },
            {
                id: 12,
                text: "A 'Grey Hat' hacker is:",
                options: ["Someone who hacks without permission but often for good intent", "A government hacker", "A retired hacker", "A bad hacker"],
                correctAnswer: 0
            },
            {
                id: 13,
                text: "What is 'Pivot' in hacking?",
                options: ["Turning your chair", "Moving from one compromised system to others in the network", "Stopping the hack", "Changing IP address"],
                correctAnswer: 1
            },
            {
                id: 14,
                text: "Which phase covers removing logs to avoid detection?",
                options: ["Reconnaissance", "Scanning", "Maintaining Access", "Clearing Tracks"],
                correctAnswer: 3
            },
            {
                id: 15,
                text: "Why is the 'Scope of Work' important?",
                options: ["It lists the payment", "It defines legal boundaries of the test", "It lists tools to use", "It names the hackers"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 4,
        title: 'IoT Security Essentials',
        duration: '3 hours',
        videoUrl: 'https://www.youtube.com/embed/LlhmzVL5bm8', // Edureka: IoT Security
        caseStudy: {
            title: "The Smart Fish Tank",
            scenario: "A casino was hacked through a smart thermometer in its lobby fish tank. The IoT device was on the main network and had no security measures. Hackers used it as a gateway to steal the casino's high-roller database. \n\nThe thermometer had a default password that was never changed. Once the attackers accessed the thermometer, they were inside the firewall. They then scanned the internal network, found the high-roller database server, engaged in lateral movement, and exfiltrated 10GB of data. This incident demonstrated that even the most seemingly insignificant connected device can be a critical point of failure if not properly isolated."
        },
        quiz: [
            {
                id: 1,
                text: "Why are IoT devices often considered 'weak links' in a network?",
                options: ["They are expensive", "They often have weak/default passwords and lack updates", "They use too much power", "They are hard to buy"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "What attack utilized millions of insecure IoT devices to take down major websites in 2016?",
                options: ["Stuxnet", "Mirai Botnet", "WannaCry", "SolarWinds"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "What is the best practice for securing IoT devices on a home network?",
                options: ["Put them on a separate Guest Network (Segmentation)", "Disable the internet", "Use WEP encryption", "Hide the SSID"],
                correctAnswer: 0
            },
            {
                id: 4,
                text: "If a smart camera has a default password like 'admin/admin', what should you do immediately?",
                options: ["Leave it as is", "Change it to a strong, unique password", "Return the device", "Share it with friends"],
                correctAnswer: 1
            },
            {
                id: 5,
                text: "What does 'IoT' stand for?",
                options: ["Input of Things", "Internet of Technology", "Internet of Things", "Internal of Things"],
                correctAnswer: 2
            },
            {
                id: 6,
                text: "Why is 'Firmware' update difficult for many IoT devices?",
                options: ["They have no screens", "Manufacturers often stop supporting them", "It requires a license", "They don't have USB ports"],
                correctAnswer: 1
            },
            {
                id: 7,
                text: "Segmentation helps by:",
                options: ["Making the network faster", "Containing a breach to a specific subnet", "Saving electricity", "Encrypting data"],
                correctAnswer: 1
            },
            {
                id: 8,
                text: "What is 'Shodan'?",
                options: ["A search engine for IoT devices", "A type of malware", "A firewall brand", "A password cracker"],
                correctAnswer: 0
            },
            {
                id: 9,
                text: "Many IoT devices communicate using clear text protocols like:",
                options: ["HTTPS", "SSH", "Telnet / HTTP", "VPN"],
                correctAnswer: 2
            },
            {
                id: 10,
                text: "Smart Locks vulnerability often involves:",
                options: ["Physical breaking", "Replay attacks of the wireless signal", "Rust", "Battery failure"],
                correctAnswer: 1
            },
            {
                id: 11,
                text: "The 'S' in IoT stands for:",
                options: ["Security", "Smart", "Speed", "It's a joke (There is no S in IoT, implying Security is missing)"],
                correctAnswer: 3
            },
            {
                id: 12,
                text: "Universal Plug and Play (UPnP) on routers/devices can:",
                options: ["Increase security", "Expose internal devices to the internet automatically", "Speed up downloads", "Block hackers"],
                correctAnswer: 1
            },
            {
                id: 13,
                text: "Which sector uses 'IIoT' (Industrial IoT)?",
                options: ["Manufacturing / Energy", "Retail", "Gaming", "Social Media"],
                correctAnswer: 0
            },
            {
                id: 14,
                text: "What is a major privacy concern with Smart Speakers?",
                options: ["They play loud music", "They are always listening", "They use too much bandwidth", "They are ugly"],
                correctAnswer: 1
            },
            {
                id: 15,
                text: "How does a Botnet use IoT devices?",
                options: ["To mine crypto mostly", "To launch DDoS attacks by amplifying traffic", "To print papers", "To play music"],
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
            scenario: "Two generals are communicating battle plans. They know a spy intercepts their messengers. They decide to use a code where they shift every letter by 3 positions (A -> D). The spy intercepts a message 'ATTACK' but sees 'DWWDFN' and is confused. \n\nHowever, a clever cryptanalyst working for the spy notices that 'W' appears twice, just like specific letters in common words. By analyzing letter frequency, they deduce the shift pattern (Substitution Cipher) and decode the message. This failure leads the generals to seek a more robust method: Asymmetric Encryption, where they exchange public keys to encrypt messages that only their private keys can decrypt."
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
            },
            {
                id: 6,
                text: "AES (Advanced Encryption Standard) is an example of:",
                options: ["Symmetric Encryption", "Asymmetric Encryption", "Hashing", "Steganography"],
                correctAnswer: 0
            },
            {
                id: 7,
                text: "RSA is widely used for:",
                options: ["Key Exchange / Digital Signatures", "Encrypting full hard drives (slow)", "Hashing passwords", "Compression"],
                correctAnswer: 0
            },
            {
                id: 8,
                text: "What does SSL/TLS provide for web traffic?",
                options: ["Encryption in transit", "Virus scanning", "Faster speeds", "Free internet"],
                correctAnswer: 0
            },
            {
                id: 9,
                text: "A Digital Signature provides:",
                options: ["Confidentiality", "Integrity, Authentication, and Non-Repudiation", "Availability", "Anonymity"],
                correctAnswer: 1
            },
            {
                id: 10,
                text: "What is 'Salting' a password?",
                options: ["Adding random data before hashing to prevent rainbow table attacks", "Making it spicy", "Encrypting it twice", "Writing it down"],
                correctAnswer: 0
            },
            {
                id: 11,
                text: "Enigma Machine was used by:",
                options: ["The Greeks", "Germany in WWII", "The Romans", "NASA"],
                correctAnswer: 1
            },
            {
                id: 12,
                text: "Quantum Computing poses a threat to:",
                options: ["Current Asymmetric Encryption (RSA/ECC)", "Symmetric Encryption", "Hashing", "All of the above"],
                correctAnswer: 0
            },
            {
                id: 13,
                text: "Non-Repudiation means:",
                options: ["The sender cannot deny sending the message", "The receiver cannot read it", "The message was deleted", "The message was bounced"],
                correctAnswer: 0
            },
            {
                id: 14,
                text: "Which is considered a weak/broken hash function?",
                options: ["MD5 / SHA-1", "SHA-256", "SHA-3", "Bcrypt"],
                correctAnswer: 0
            },
            {
                id: 15,
                text: "What is PKI?",
                options: ["Public Key Infrastructure", "Private Key Internet", "Public Key Internet", "Personal Key ID"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 6,
        title: 'Cloud Security Fundamentals',
        duration: '3 hours',
        videoUrl: 'https://www.youtube.com/embed/Qt9lhzFhW_c', // Simplilearn: Cloud Security
        caseStudy: {
            title: "The Leaky Bucket",
            scenario: "A startup stores all customer records in an AWS S3 bucket. A researcher discovers they can access the files simply by guessing the URL, without any login. Millions of records are exposed. \n\nThe startup had configured the bucket with 'Public Read' access to easily share a few images, but they accidentally applied this policy to the entire folder containing sensitive PDFs. They failed to implement the principle of Least Privilege. Furthermore, they had no logging enabled (CloudTrail), so they couldn't even tell how long the data had been exposed or who had accessed it."
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
            },
            {
                id: 6,
                text: "What does 'SaaS' stand for?",
                options: ["Software as a Service", "System as a Service", "Security as a Service", "Storage as a Service"],
                correctAnswer: 0
            },
            {
                id: 7,
                text: "Who is responsible for physical security of the data center in the cloud?",
                options: ["The Cloud Provider", "The Customer", "The Security Guard", "No one"],
                correctAnswer: 0
            },
            {
                id: 8,
                text: "What is a 'CASB'?",
                options: ["Cloud Access Security Broker", "Cloud Anti-Spam Bot", "Central Authorization System", "Cloud Audit Service"],
                correctAnswer: 0
            },
            {
                id: 9,
                text: "Serverless computing (like AWS Lambda) shifts responsibility of managing servers to:",
                options: ["The Provider", "The Customer", "The Hacker", "The Developer"],
                correctAnswer: 0
            },
            {
                id: 10,
                text: "Multi-Tenancy in cloud means:",
                options: ["Multiple customers share the same physical infrastructure", "You have multiple accounts", "You use multiple clouds", "You have multiple passwords"],
                correctAnswer: 0
            },
            {
                id: 11,
                text: "What is 'Cloud Bursting'?",
                options: ["Expanding to public cloud when private cloud demand spikes", "A cloud explosion", "Deleting cloud data", "Hacking the cloud"],
                correctAnswer: 0
            },
            {
                id: 12,
                text: "DDoS mitigation is often better in the cloud because:",
                options: ["Providers have massive bandwidth and specialized scrubbing", "The cloud is invisible", "Hackers like the cloud", "It is cheaper"],
                correctAnswer: 0
            },
            {
                id: 13,
                text: "ISO 27017 is a standard for:",
                options: ["Cloud Security", "Car Safety", "Food Safety", "Medical Devices"],
                correctAnswer: 0
            },
            {
                id: 14,
                text: "Which of these is a 'Hybrid Cloud'?",
                options: ["Combination of Public and Private Cloud", "Combination of Google and AWS", "Combination of Rain and Snow", "Combination of Phone and Laptop"],
                correctAnswer: 0
            },
            {
                id: 15,
                text: "In SaaS (like Gmail), who patches the application software?",
                options: ["The Provider (Google)", "You", "Your ISP", "Microsoft"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 7,
        title: 'Malware Analysis & Reverse Engineering',
        duration: '6 hours',
        videoUrl: 'https://www.youtube.com/embed/E86wyomzDjs', // HackerSploit: Malware Analysis
        caseStudy: {
            title: "The Unknown Executable",
            scenario: "The SOC team isolates a suspicious file named 'invoice.exe'. When run in a sandbox, it attempts to contact a server in Russia and modifies registry keys to start up automatically. \n\nUpon checking the file hash against VirusTotal, there were 0 detections, indicating a targeted or custom-made malware (FUD - Fully Undetectable). The analyst then opens the file in a disassembler (IDA Pro) and finds hardcoded IP addresses and a function that logs keystrokes. The malware was designed to steal banking credentials and exfiltrate them via an encrypted channel every hour."
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
            },
            {
                id: 6,
                text: "What is a 'Trojan Horse'?",
                options: ["Malware disguised as legitimate software", "A virus that replicates", "Ransomware", "A worm"],
                correctAnswer: 0
            },
            {
                id: 7,
                text: "Ransomware primarily affects which aspect of security?",
                options: ["Availability", "Confidentiality", "Integrity", "Authentication"],
                correctAnswer: 0
            },
            {
                id: 8,
                text: "What is a 'Rootkit'?",
                options: ["Malware designed to hide its existence and maintain privileged access", "A tool to root phones", "A beginner kit", "A cleaning tool"],
                correctAnswer: 0
            },
            {
                id: 9,
                text: "Polymorphic code changes its:",
                options: ["Signature/Appearance", "Function", "Target", "Author"],
                correctAnswer: 0
            },
            {
                id: 10,
                text: "What is 'C2' or 'C&C'?",
                options: ["Command and Control Server", "Copy and Console", "Computer and Code", "Cyber and Crime"],
                correctAnswer: 0
            },
            {
                id: 11,
                text: "A 'Worm' differs from a virus because:",
                options: ["It self-replicates without a host file/user interaction", "It is slower", "It is bigger", "It eats files"],
                correctAnswer: 0
            },
            {
                id: 12,
                text: "What is 'Packing' in malware?",
                options: ["Compressing/Obfuscating the executable to avoid detection", "Putting it in a zip file", "Sending it away", "Storing it"],
                correctAnswer: 0
            },
            {
                id: 13,
                text: "Strings analysis helps to find:",
                options: ["Readable text like IP addresses, URLs, or messages in the binary", "The color of the icon", "The file size", "The creation date"],
                correctAnswer: 0
            },
            {
                id: 14,
                text: "Which file format is standard for Windows executables?",
                options: ["PE (Portable Executable)", "ELF", "Mach-O", "DMG"],
                correctAnswer: 0
            },
            {
                id: 15,
                text: "What is 'Keylogger'?",
                options: ["Malware that records keystrokes", "A key making tool", "A locking tool", "A login script"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 8,
        title: 'Physical Security & Human Hacking',
        duration: '2 hours',
        videoUrl: 'https://www.youtube.com/embed/lc7scxvKQOo',
        caseStudy: {
            title: "The Tailgater",
            scenario: "An attacker dresses in a delivery uniform and carries a heavy box. They wait for an employee to badge into the secure office building and ask, 'Can you hold the door? My hands are full.' The employee politely holds the door open. \n\nOnce inside, the attacker walks confidently to the server room. Finding it locked, they wait for a janitor to exit and slip in before the door closes (another tailgate). They then plug a USB keylogger into the main admin console. This entire breach was accomplished without writing a single line of code, relying entirely on social norms and physical security lapses."
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
                options: ["Man traps / Security Guards / Education", "Stronger passwords", "Firewalls", "Anti-virus"],
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
            },
            {
                id: 6,
                text: "What is a 'Man Trap'?",
                options: ["A secure entry system with two interlocking doors", "A trap for hackers", "A fake network", "A firewall"],
                correctAnswer: 0
            },
            {
                id: 7,
                text: "Dumpster Diving is:",
                options: ["Searching trash for sensitive information", "Swimming in trash", "A sport", "Deleting trash"],
                correctAnswer: 0
            },
            {
                id: 8,
                text: "What is 'Pretexting'?",
                options: ["Creating a fabricated scenario (pretext) to steal info", "Predicting the text", "Testing text", "Texting while driving"],
                correctAnswer: 0
            },
            {
                id: 9,
                text: "Why are clean desk policies important?",
                options: ["To prevent sensitive info derived from sticky notes/papers being stolen", "It looks nice", "The cleaners like it", "It saves paper"],
                correctAnswer: 0
            },
            {
                id: 10,
                text: "Biometrics uses what for authentication?",
                options: ["Physical characteristics (Fingerprint, Retina)", "Passwords", "Keycards", "PINs"],
                correctAnswer: 0
            },
            {
                id: 11,
                text: "What defines 'Something you possess'?",
                options: ["Smart Card / Key Fob", "Password", "Fingerprint", "PIN"],
                correctAnswer: 0
            },
            {
                id: 12,
                text: "A 'Cold Boot Attack' requires:",
                options: ["Physical access to the RAM chips", "A cold room", "A remote connection", "A virus"],
                correctAnswer: 0
            },
            {
                id: 13,
                text: "Badge cloning is a risk for:",
                options: ["RFID / NFC cards", "Passwords", "Retina scans", "Face ID"],
                correctAnswer: 0
            },
            {
                id: 14,
                text: "What is the most common way malware enters a secure facility?",
                options: ["USB Drops (Baiting)", "Wifi", "Bluetooth", "Cables"],
                correctAnswer: 0
            },
            {
                id: 15,
                text: "Why is 'Bating' effective?",
                options: ["Curiosity (e.g., USB labeled 'Salaries')", "Fear", "Hunger", "Tiredness"],
                correctAnswer: 0
            }
        ]
    }
];
