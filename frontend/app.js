// Simple frontend application
document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    
    // Check backend status
    fetch('/api/health')
        .then(response => response.json())
        .then(data => {
            statusElement.textContent = 'Connected to backend';
            statusElement.style.color = 'green';
        })
        .catch(error => {
            statusElement.textContent = 'Frontend running (backend not connected)';
            statusElement.style.color = 'orange';
        });
});

console.log('Application loaded successfully');