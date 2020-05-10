class AppContainer{

   static questions = [];
    themes = [];
    url = "http://localhost:3000";
   score = {};

   bindEventListener(){
     const btn1 = document.getElementById('person');
     btn1.addEventListener('click', this.getPersonQuestions);
     const btn2 = document.getElementById('species');
     const btn3 = document.getElementById('spaceships');
     const btn4 = document.getElementById('planets');
     const btn5 = document.getElementById('films');
     const btn6 = document.getElementById('vehicles');
     //debugger


   };
   getPersonQuestions(){
     //console.log("testing cheeky monkey")
     this.questions

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
   //AppContainer.questions.forEach(question => {


   //})

  
   };


   
};