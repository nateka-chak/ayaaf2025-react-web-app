// Test script to verify backend connectivity
const API_URL = 'https://ayaaf2025-react-web-app.onrender.com';

async function testBackend() {
  console.log('🧪 Testing Backend Connectivity...\n');
  
  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await fetch(`${API_URL}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test main endpoint
    console.log('\n2. Testing main endpoint...');
    const mainResponse = await fetch(`${API_URL}/`);
    const mainData = await mainResponse.json();
    console.log('✅ Main endpoint:', mainData);
    
    // Test exhibitor registration endpoint
    console.log('\n3. Testing exhibitor registration endpoint...');
    const testData = {
      name: 'Test User',
      institution: 'Test Institution',
      number: '1234567890',
      transaction: 'TEST123456789'
    };
    
    const regResponse = await fetch(`${API_URL}/api/register/exhibitor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    const regData = await regResponse.json();
    console.log('✅ Registration response:', regData);
    
  } catch (error) {
    console.error('❌ Error testing backend:', error.message);
  }
}

// Run the test
testBackend(); 