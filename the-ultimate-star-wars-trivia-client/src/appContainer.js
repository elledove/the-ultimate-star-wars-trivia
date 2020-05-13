class AppContainer {
    questions = [];
    themes = [];
    url = "http://localhost:3000";
    score = {};
  
    btn1 = document.getElementById("person");
    btn2 = document.getElementById("species");
    btn3 = document.getElementById("spaceships");
    btn4 = document.getElementById("planets");
    btn5 = document.getElementById("films");
    btn6 = document.getElementById("vehicles");
    allButtons = document.getElementById("all-start");
  
    bindEventListener() {
    const allButtons = this.allButtons;
    const startTrivia = this.startTrivia;
    this.btn1.addEventListener("click", function (event) {
      event.stopPropagation();
      allButtons.style.visibility = "hidden";
      startTrivia(event);
    });
    this.btn2.addEventListener("click", function (event) {
      event.stopPropagation();
      allButtons.style.visibility = "hidden";
      startTrivia(event);
    });
    this.btn3.addEventListener("click", function (event) {
      event.stopPropagation();
      allButtons.style.visibility = "hidden";
      startTrivia(event);
    });
    this.btn4.addEventListener("click", function (event) {
      event.stopPropagation();
      allButtons.style.visibility = "hidden";
      startTrivia(event);
    });
    this.btn5.addEventListener("click", function (event) {
      event.stopPropagation();
      allButtons.style.visibility = "hidden";
      startTrivia(event);
    });
    this.btn6.addEventListener("click", function (event) {
      event.stopPropagation();
      allButtons.style.visibility = "hidden";
      startTrivia(event);
    });
    }
  debugger
    startTrivia(elem) {
      const triviaBox = document.getElementById("trivia-container");
       if (elem) {
        console.log(elem.path[0]);
       triviaBox.style.visibility = "visible";
        console.log("how do we pivot?");
      }

      else{
          console.log("it worked!")

          };
    }
  
    getQuestions() {
      // make fetch request to /questions, then call renderQuestions
      fetch(this.url + "/questions")
        .then((resp) => resp.json())
  
        //populate the questions and theme properties with the returned data
        .then((data) => {
          data.forEach((question) => {
            new Question(question.name, question.theme);
          });
  
          this.renderQuestions();
        })
        .catch((err) => alert(err));
    }
  
    renderQuestions() {
      // creat DOM nodes and insert data into them to render in the DOM
      const personButton = document.getElementById("person");
      const filmsButton = document.getElementById("films");
      const spaceshipsButton = document.getElementById("spaceships");
      const speciesButton = document.getElementById("species");
      const vehiclesButton = document.getElementById("vehicles");
      const planetsButton = document.getElementById("planets");
  
      this.questions.forEach((question) => {
        const option = document.createElement("option");
        option.innerText = question.name;
  
        //switch (question.theme.name) {
        //  case "person":
        //        personButton.appendChild(option);
  
        //         break;
  
        //   case "films":
        //    filmsButton.appendChild(option);
  
        //    break;
  
        //  case "spaceships":
        //    spaceshipsButton.appendChild(option);
  
        //     break;
  
        //   case "species":
        //     speciesButton.appendChild(option);
  
        //     break;
  
        //       case "vehicles":
        //     vehiclesButton.appendChild(option);
  
        //      break;
  
        //    case "planets":
        //    planetsButton.appendChild(option);
  
        //   break;
        //   default:
        //code block
  
        //  }
      });
      document.body.appendChild(option);
    }
  }