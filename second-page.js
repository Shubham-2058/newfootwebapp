document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
  
    const homePage = `
      <div class="container">
        <h1>Euro Cup Score Predictions</h1>
        <button id="start-predictions">Enter Your Predictions</button>
      </div>
    `;
  
    const predictionPage = `
      <div class="container">
        <h1>Enter Your Predictions</h1>
        <form id="predictions-form">
          <div class="form-group">
            <label>Match 1: Germany vs Sacotland</label>
            <input type="number" id="teamA1" placeholder="Team A">
            <input type="number" id="teamB1" placeholder="Team B">
          </div>
          <div class="form-group">
            <label>Match 2: Hungary vs Switzerland</label>
            <input type="number" id="teamC1" placeholder="Team C">
            <input type="number" id="teamD1" placeholder="Team D">
          </div>
          <div class="form-group">
            <label>Match 3: Spain vs Croatia</label>
            <input type="number" id="teamE1" placeholder="Team E">
            <input type="number" id="teamF1" placeholder="Team F">
          </div>
          <button type="submit">Submit Predictions</button>
        </form> <br>
        <button id="go-back">Go Back</button>
      </div>
    `;
  
    app.innerHTML = homePage;
  
    document.getElementById('start-predictions').addEventListener('click', function() {
      app.innerHTML = predictionPage;
  
      document.getElementById('go-back').addEventListener('click', function() {
        app.innerHTML = homePage;
      });
  
      document.getElementById('predictions-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Predictions submitted successfully!');
        app.innerHTML = homePage;
      });
    });
  });
  