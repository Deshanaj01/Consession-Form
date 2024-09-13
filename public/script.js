document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
  
    const response = await fetch('/api/registers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    });
  
    const result = await response.json();
    alert(result.message);
  });  
  