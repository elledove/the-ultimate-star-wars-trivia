starwars-ultimate-trivia
   README.md
   starwars-ultimate-trivia-api
   starwars-ultimate-trivia-client
    index.html => single page of app. Loads JS that interacts w/api

    src 
       index.js => where JS starts running;top level
       
       questions.js
       answers.js
       class1.js
       class2.js
       category.js?
       theme.js?

       The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

      The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

      The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments. (THEME HAS MANY QUESTIONS)

      The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

      Ajax Request:
      1.) get/Questions (show all questions)
      2.)delete/Questions/:id( delete only the questions they made)
      3.)post/questions(create new questions)