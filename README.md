# Twitter Bot Detector Application
## Andrew Brownback and Pengyu Wu

This application was built with the intention of working with two sets of APIs which handle twitter data. The first set being the twitter APIs which we used to gather data about a twitter user given a handle that the user would input. Most of the twitter data we needed (Mentions and Timelines) came from two endpoints and only worked given a userID as a parameter to a GET request. So we had to use a seperate endpoint to get userID from userName. 

The second set was the rapidAPI calls to the Botomoter API which would allow us to be returned a "Bot or Not" score between 0 and 5. Due to formatting issues with the returned JSON data from Twitter JavaScript not working well together and current in progress UI bugs in the project, we were not able to make the necessary POST request to this endpoint to return our intended bot score. 

Currently our app can be run on iPhone and allows the user to enter a handle. After they enter the handle there is a bug where it doesn't immediatly return the entered user. Since the code is run through a digital emulator app which actively refreshes as we make changes to the code, it will return the enterned user only after a change is made in the code forcing the app to reestablish a connection. I believe this is a bug in using react native and our struggles with it held us back in fully completing our goals on time. That being said we learned a lot about using github as well as best practices for full stack application design as this will be an essential aspect of our upcoming senior design projects. 

## To Use the App
1. Clone the repository: https://github.com/drewhb/TwitterBotAndSentimentDetector

2. Open up the project in any code editor and from terminal navigate to the project

3. Run "yarn start" and scan the QR code on your iPhone (You may need to install yarn)

4. Enter a Twitter User Name and click confirm

5. In the App.js file make an arbitrary change to the code (like add an empty new line) and the console will log the user you had previously entered
    - Since we couldn't successfully parse the JSON in react, this disallowed us from exersizing the other endpoints which required UserId as the main parameter

We learned a lot about the various means of authentication when users use APIs which is happening under our noses every time we use our phones, which was super interesting, as well as different database technologies that allow an application to easily store and work with all of this data in code in a low cost and efficient way, and of course the frustrations of working in javascript. 

We did build out the functionality to get the rest of the necessary Twitter data to run a post request to the Botometer API, which we intend on following through with in the weeks to come. 
