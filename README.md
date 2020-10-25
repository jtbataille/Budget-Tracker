# Unit 18 PWA Homework: Online/Offline Budget Trackers

Add functionality to our existing Budget Tracker application to allow for offline access and functionality.

The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.

## User Story
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.


## Acceptance Criteria
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

- - -

## Commit Early and Often

* One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

* Follow these guidelines for committing:

  * Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

  * Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

  * Don't commit half done work, for the sake of your collaborators (and your future self!)

  * Test your application before you commit to ensure functionality at every step in the development process

* We would like you to have well over 200 commits by graduation, so commit early and often!

* Deploy your application with [Heroku and MongoDB Atlas.](../04-Important/MongoAtlas-Deploy.md)

## Submission on BCS

* You are required to submit the following:

  * the URL to the deployed application

  * the URL to the Github repository

# On-/Off-line Budget Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Application Demo](#application-demo)
* [Contact Information](#contact-information)

## Description
This application will build a list of burgers based on user input. When users enter a burger name within the textbox and click the "Submit" button, their created burger title will be added to the lefthand side of the screen with a "Devour" button next to it--just in case they get a bit peckish! When this "Devour" button is clicked, the burger will be moved to the righthand side of the UI showing it has been thoroughly ingested by the ravenous users.

The users need not fear, however! They will be able to add as many burgers any they desire to satiate their hunger.

This application uses MySQL to store data, as well as Handlebars to dynamically create the UI for each next to-be-devoured and devoured burger on the docket.

## Installation
This application is deployed on [Heroku](https://desolate-wave-66580.herokuapp.com/) for any curious users to satiate their hunger.

Alternatively, users may clone this repository and use the following commands to make begin the application, entering them in an integrated terminal within the main directory:

* ```npm install express```
* ```npm install express-handlebars```
* ```npm install mysql```

After installing these packages to make sure the application functions, users should enter:

* ```node server.js```

This final command will make the app listen on the LocalHost PORT.

If following these commands, users should open their own browsers and go the following address to see the deployed application:

> localhost:8080

## Technologies Used
Node JS, MySQL, Express.js, Handlebars, JavaScript, CSS

## Application Demo
After following the information in the [Installation](#installation) section above--database start within MySQL, navigating to the localhost, as well as running ```node server.js```---users will be greated with an opening page that looks like this:

![startpage](public/assets/img/startpage.png)


From here, users may add more burgers in the text box at the bottom of the page OR, if they're feeling the need to satiate their hunger, they may wish use to the **Devour Me!** button to eat a burger of their choosing, which will move the burger to the right-hand side of the screen, showing that it has been consumed:

![devourbutton](public/assets/img/devourbutton.png)

In addition to being deployed on Heroku, here is a GIF showing the app's full functionality:

![burger](https://user-images.githubusercontent.com/65187093/94218953-a17ac480-feb3-11ea-9a11-6d827eafe996.gif)

## Contact Information
* Jarrod Bataille
  * Portfolio Webpage: https://jtbataille.github.io/
  * GitHub Profile: https://github.com/jtbataille
  * E-mail Address: jtbataille@gmail.com