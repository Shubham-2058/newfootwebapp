document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementsByClassName('button');
  
    enterButton.addEventListener('click', function() {
      window.location.href = 'second-page.html';
    });
  });
  