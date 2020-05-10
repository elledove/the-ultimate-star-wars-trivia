class AppContainer{

    questions = []
    themes = []
    url = "https://localhost:3000/"
   score = {}


   getQuestions(){
       // make fetch request to /questions, then call renderQuestions
       console.log('blah')
       fetch(this.url + '/questions')
       .then(resp => console.log(resp))
       .catch(err => alert(err))
   

     }

   renderQuestions(){
   // creat DOM nodes and insert data into them to render in the DOM 

  
   }


   
}