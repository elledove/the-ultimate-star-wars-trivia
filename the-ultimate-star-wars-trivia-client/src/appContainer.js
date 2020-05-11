class AppContainer{

   static questions = [];
    themes = [];
    url = "http://localhost:3000";
   score = {};

   btn1 = document.getElementById('person');
   btn2 = document.getElementById('species');
   btn3 = document.getElementById('spaceships');
   btn4 = document.getElementById('planets');
   btn5 = document.getElementById('films');
   btn6 = document.getElementById('vehicles');
  // allButtons = document.getElementsById('all-start');


   bindEventListener(){
     this.btn1.addEventListener('click', this.startTrivia);
     this.btn2.addEventListener('click', this.startTrivia);
     this.btn3.addEventListener('click', this.startTrivia);
    this.btn4.addEventListener('click', this.startTrivia);
    this.btn5.addEventListener('click', this.startTrivia);
    this.btn6.addEventListener('click', this.startTrivia);
     //debugger

     this.allButtons.addEventListener('click',this.startTrivia)

   };
   getPersonQuestions(){
     console.log("testing cheeky monkey")
     //this.questions

   };

    

     startTrivia() {
        console.log("started Boss Bane")
        const startBtn2 = document.getElementById('species');
        const allButtons = document.getElementById('all-start');
        allButtons.onclick

        

        

        if(startBtn2.style.visibility === 'hidden') {
            startBtn2.style.visibility = 'visible';
       } else {
            startBtn2.style.visibility = 'hidden' ;
       }
        console.log('how do we pivot?')

// add case statement to click a buttona and start the quiz based on choice

        



        //const btn2 = document.getElementById('species');
       
        //debugger



     };







   getQuestions(){
       // make fetch request to /questions, then call renderQuestions
       fetch(this.url + '/questions')
       .then(resp => resp.json())

       //populate the questions and theme properties with the returned data
       .then(data => {
              data.forEach(question => {
              new Question(question.name, question.theme)
            
              });

              this.renderQuestions();

       })

       .catch(err => alert(err));
   

     };

   renderQuestions(){
   // creat DOM nodes and insert data into them to render in the DOM 
   const personButton = document.getElementById('person');
   const filmsButton = document.getElementById('films');
   const spaceshipsButton = document.getElementById('spaceships');
   const speciesButton = document.getElementById('species');
   const vehiclesButton = document.getElementById('vehicles');
   const planetsButton = document.getElementById('planets');
   
   AppContainer.questions.forEach(question => {
       const option = document.createElement('option');
         option.innerText = question.name;



         //switch (question.theme.name) {
           //  case "person":
         //        personButton.appendChild(option);
                 
        //         break;
         
         //   case "films":
            //    filmsButton.appendChild(option);

             //    break;

          //  case "spaceships":
            //    spaceshipsButton.appendChild(option);

           //     break;

         //   case "species":
           //     speciesButton.appendChild(option);
    
           //     break;

         //       case "vehicles":
           //     vehiclesButton.appendChild(option);

           //      break;

             //    case "planets":
            //    planetsButton.appendChild(option);

              //   break;
              //   default:
                     //code block   
            
       //  }




   })
        document.body.appendChild(option)

  
   };


   
};