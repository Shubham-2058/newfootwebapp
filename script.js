document.addEventListener('DOMContentLoaded', function() {
  const predictButton = document.getElementById('predictButton');

  predictButton.addEventListener('click', function() {
    window.location.href = 'another-page.html'; // Navigate to another-js.html
  });
});
