const BASE_URL = 'http://localhost:3000/api';
const TEST_USER = {
    name: 'Test User',
    username: `testuser${Date.now()}`,
    password: 'password123',
    role: 'user',
    email: `test_${Date.now()}@example.com`
};

const UPDATE_DATA = {
    name: 'Updated Test User',
    bio: 'This is an updated bio.',
    skills: 'JavaScript, Node.js',
    experience_level: 'Intermediate',
    photo_url: 'http://example.com/photo.jpg'
};

async function runTest() {
    try {
        console.log('1. Registering user...');
        const regRes = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(TEST_USER)
        });
        const regData = await regRes.json();

        if (!regRes.ok) throw new Error(JSON.stringify(regData));

        const { token, user } = regData;
        console.log('User registered:', user.id);

        console.log('2. Updating profile...');
        const updateRes = await fetch(`${BASE_URL}/users/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(UPDATE_DATA)
        });
        const updateData = await updateRes.json();
        console.log('Update response:', updateData);

        console.log('3. Fetching profile to verify...');
        const meRes = await fetch(`${BASE_URL}/auth/me`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const fetchedUser = await meRes.json();
        console.log('Fetched User:', fetchedUser);

        // Verification
        let failed = false;
        if (fetchedUser.name !== UPDATE_DATA.name) {
            console.error(`❌ Name mismatch: Expected "${UPDATE_DATA.name}", got "${fetchedUser.name}"`);
            failed = true;
        }
        if (fetchedUser.bio !== UPDATE_DATA.bio) {
            console.error(`❌ Bio mismatch: Expected "${UPDATE_DATA.bio}", got "${fetchedUser.bio}"`);
            failed = true;
        }
        // Skills match might need trim or specific formatting check, but let's see
        if (fetchedUser.skills !== UPDATE_DATA.skills) {
            console.error(`❌ Skills mismatch: Expected "${UPDATE_DATA.skills}", got "${fetchedUser.skills}"`);
            failed = true;
        }

        if (!failed) {
            console.log('✅ TEST PASSED: Profile updated successfully and persisted.');
        } else {
            console.log('❌ TEST FAILED: Data did not persist.');
        }

    } catch (error) {
        console.error('Test Error:', error);
    }
}

runTest();
