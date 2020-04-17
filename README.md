# Covid19Hackthon
Covid-19 Hackthon

This project actually has 2 parts: (1) backend spring-boot project, (2) front-end Angular UI project. For now, you run them separately. 

First you start the backend to make the API's available for UI.

One thing, in order to run backend on your local, you have to install MongoDB first, which you can easily find online.

To run the backend, if you use Spring Tool Suite (STS), you don't have to deploy it to a server but simply right-click on the application, select "Run As" and select "Spring Boot App".

To run the Angular UI, goto "ng-ui" folder, type "ng serve -o". A browser page will automatically open at this url: localhost:4200.

Currently, there are not much going with the code. For the backend, you can copy/paste "http://localhost:8080/all" to a browser and hit return. It will try to retrieve customers from the database and returned as JSon. Of course, it'll be empty for you until you add records in your local database, which you can do with PostMan with url "http://localhost:8080/add" and this payload:

    {
      "firstName":"Dan",
      "lastName":"Bush",
      "pnone": "770-567-1234"
    }
    
Once the records are added this way, if you refresh your UI at localhost:4200, the customers should be displayed at the webpage.
