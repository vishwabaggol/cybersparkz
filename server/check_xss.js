const axios = require('axios');

async function testXSS() {
    console.log('Testing XSS Protection...');
    const url = 'http://localhost:3000/api/auth/login'; // Using login as a test endpoint
    const payload = {
        username: '<script>alert("xss")</script>admin',
        password: 'password123'
    };

    try {
        console.log(`Sending payload:`, payload);
        const response = await axios.post(url, payload);

        // Since login will likely fail (or succeed if we mock it), we mainly care about how the server handled the input.
        // But wait, the server modifies req.body. The response might not reflect the sanitized input unless we echo it back.
        // Login endpoint doesn't echo back username in failure usually.
        // Let's try to register a user, that returns the user object.

        console.log('Response status:', response.status);
    } catch (error) {
        if (error.response) {
            console.log('Response status:', error.response.status);
            console.log('Response data:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
    }

    // Better test: Create a temporary endpoint that echoes back the body?
    // Or just check if the username in the database (if register succeeded) is sanitized.
    // Or, check an endpoint that returns input.
    // The register endpoint returns the created user.

    console.log('\nTesting Registration with XSS payload...');
    const regUrl = 'http://localhost:3000/api/auth/register';
    const uniqueUser = 'user' + Date.now();
    const regPayload = {
        name: '<b>John Doe</b><script>alert(1)</script>',
        email: `${uniqueUser}@example.com`,
        username: uniqueUser,
        password: 'password123',
        role: 'user',
        bio: '<img src=x onerror=alert(1)>'
    };

    try {
        const regResponse = await axios.post(regUrl, regPayload);
        console.log('Registration Response:', regResponse.data);

        const returnedName = regResponse.data.user.name;
        if (returnedName === '&lt;b&gt;John Doe&lt;/b&gt;&lt;script&gt;alert(1)&lt;/script&gt;' ||
            returnedName === '<b>John Doe</b>&lt;script&gt;alert(1)&lt;/script&gt;' || // xss lib might allow b tag
            !returnedName.includes('<script>')) {
            console.log('✅ XSS Protection Verified: Input was sanitized.');
            console.log('Sanitized Name:', returnedName);
        } else {
            console.log('❌ XSS Protection Failed: Input may not be fully sanitized.');
            console.log('Returned Name:', returnedName);
        }

    } catch (error) {
        if (error.response) {
            console.log('Registration Failed:', error.response.data);
            // If it failed due to validation (e.g. username alphanumeric), that's good too, but we want to test sanitization.
        } else {
            console.error('Error:', error.message);
        }
    }
}

// Check headers (CSP)
async function checkHeaders() {
    try {
        const response = await axios.get('http://localhost:3000/api/jobs');
        const csp = response.headers['content-security-policy'];
        if (csp) {
            console.log('✅ CSP Header found:', csp);
        } else {
            console.log('❌ CSP Header missing.');
        }
    } catch (error) {
        console.error('Error checking headers:', error.message);
    }
}

async function run() {
    await testXSS();
    await checkHeaders();
}

run();
