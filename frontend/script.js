fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        username: "Addy",
        email: "addy@example.com",
        password: "mypassword"
    })
}).then(res => res.json())
  .then(data => console.log(data));
