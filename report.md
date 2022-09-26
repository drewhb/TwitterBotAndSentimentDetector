# Twitter Bot Detector Application
## Andrew Brownback and Pengyu Wu

This application was built with the intention of working with two sets of APIs which handle twitter data. The first set being the twitter APIs which we used to gather data about a twitter user given a handle that the user would input. Most of the twitter data we needed (Mentions and Timelines) came from two endpoints and only worked given a userID as a parameter to a GET request. So we had to use a seperate endpoint to get userID from userName. 

The second set was the rapidAPI calls to the Botomoter API which would allow us to be returned a "Bot or Not" score between 0 and 5. Due to formatting issues with the returned JSON data from Twitter JavaScript not working well together and current in progress UI bugs in the project, we were not able to make the necessary POST request to this endpoint to return our intended bot score. 

Currently our app can be run on iPhone and allows the user to enter a handle. After they enter the handle there is a bug where it doesn't immediatly return the entered user. Since the code is run through a digital emulator app which actively refreshes as we make changes to the code, it will return the enterned user only after a change is made in the code forcing the app to reestablish a connection. I believe this is a bug in using react native and our struggles with it held us back in fully completing our goals on time. That being said we learned a lot about using github as well as best practices for full stack application design as this will be an essential aspect of our upcoming senior design projects. 

## To Use the App
Clone the repository: 