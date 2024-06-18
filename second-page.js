document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
  
    const homePage = `
      <div class="container1">
        <div class="container2">
          <h1>Euro Cup 2024 Score Predictions</h1><br>
          <button id="start-predictions"><strong>Enter Your Predictions</strong></button>
        </div>
      </div>
    `;
  
    const predictionPage = `

      <div class="container">
        
        <div class="header">
          

        <h1>Enter Your Predictions </h1> 
        <h2> Upcoming Matches </h2>
        <form id="predictions-form">
          <div class="form-group">
            <label> <h1>Match 1: </h1><br>
          
            <div class="vs1">
             <img src="german.jpg"  class="german"> Germany <input type="number" id="teamA1" placeholder=""> V/S <img src="scotland.jpg" class="scotland">
             Scotland</label> <input type="number" id="teamB1" placeholder="">

            </div>
          </div>
          <div class="form-group">
            <label> <h1>Match 2: </h1><br>

            <div class="vs2">
              <img src="hungary.jpg" class="hungary">
              Hungary <input type="number" id="teamC1" placeholder="">
                  V/S  <img src="switzerland.jpg"  class="switzerland">
                  Switzerland <input type="number" id="teamD1" placeholder="">
            </label>
            </div>
          </div>
          <div class="form-group">
            <label> <h1> Match 3: </h1><br>

            <div class="vs3">
              <img src="spain.jpg"  class="spain">
              Spain <input type="number" id="teamE1" placeholder="">
              V/S   <img src="croatia.jpg"  class="croatia">
            Croatia <input type="number" id="teamF1" placeholder="">
            </label>
            </div>
           </div>
          <button type="submit" class="button button1">Submit Predictions</button>
        </form> <br><br>
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
  