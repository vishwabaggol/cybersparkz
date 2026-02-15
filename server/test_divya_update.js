const jwt = require('jsonwebtoken');

const BASE_URL = 'http://localhost:3000/api';
const SECRET_KEY = 'secret'; // Default from server.js
const USER_ID = 2; // Divya Umesh

const UPDATE_DATA = {
    name: 'Divya Umesh',
    bio: 'Updated via remote test script',
    skills: 'Testing, Debugging',
    experience_level: 'Senior',
    photo_url: 'http://example.com/divya.jpg'
};

async function runTest() {
    try {
        console.log('1. Generating token for Divya (ID 2)...');
        const token = jwt.sign({ id: USER_ID, username: 'Divya123', role: 'user' }, SECRET_KEY, { expiresIn: '1h' });
        console.log('Token generated.');

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

        if (fetchedUser.bio === UPDATE_DATA.bio) {
            console.log('✅ TEST PASSED: Divya profile updated successfully.');
        } else {
            console.log('❌ TEST FAILED: Data did not persist for Divya.');
        }

    } catch (error) {
        console.error('Test Error:', error);
    }
}

runTest();
