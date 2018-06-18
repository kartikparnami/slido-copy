# slido

a [Sails v1](https://sailsjs.com) application

## Installation

+ Install the newest version of npm from [npm executable](https://nodejs.org/en/)
+ npm install sails -g
+ npm install nested-pop
+ git clone https://github.com/kartikparnami/slido-copy
+ git checkout master
+ sails lift
+ Go to localhost:1337
+ Make an admin account at localhost:1337/signup - This is sails generated and only for admin creation purposes. Not part of the actual app functionality.
+ Go to localhost:1337 for audience end page. Go to admin login and login using the admin credentials to check the admin side app.

## Tech stack

+ Frontend: Vue.js (Bundled in Sails.js sample web app which I have extended.)
+ Backend: Node.js (Used Sails.js framework.)
+ Unable to use Docker/Vagrant due to time constraints.
+ Used default file-backed db as provided in Sails.js

## Features/High level design

#### Admin End

+ Login page for admin
+ Welcome page with option to 'Create new event' or 'Show all events'
+ Create new event form with option to enter a unique event code, start datetime and end datetime.
+ Show all events created till date. (Defult order: No sorting)
+ Shared events in case of multiple admins (No requirement was mentioned for this use-case, so this was assumed.)
+ Show event page
   + Shows all questions sorted by latest first.
   + Show the number of likes and dislikes received on every question.
   + Option to delete a question.
   + Option to highlight/unhighlight a question. (Throttle to avoid more than 3 highlighted questions in one event)
   + Option to inline edit a question.

#### Audience End

+ Open entry page to see any event if the event code is known and the event is still live.
+ Show event page
   + Shows all questions default sorted by popularity (Most liked first).
   + Option to sort questions by created time (latest first or earliest first).
   + Option to like/dislike a question once. (As the audience are not supposed to login, I have used the ip address as a unique identifier to avoid repeated liking/disliking of a question)
   + Option to add a new question.
   + Any action shows up immediately on the screen without refresh on the client end. (This requirement was slighly confusing. Not sure if this meant immediate reflection of the change on the same client where the change occured, or on all clients. I have implemented the first one, but the second one is also easily implementable using websockets - Sockets.io )

## Important notes

+ You might see many extraneous files on the repo which are due to sails.js sample app. I have cleared the UI to not show extraneous features but the code remains.
+ The code quality might be slightly low due to no prior experience in either Node.js or Vue.js
+ The UI is not like the one shown in the assignment as that required more time for accurate matching.
+ Most of the apis have defensive checks for corner cases (eg. No more than 3 highlighted questions per event), but the errors are not visible on frontend. They can be checked in the browser networks tab.
+ This app needs internet connectivity to pull a few libraries and to fetch the audience's ip address as that is the unique identifier used considering the requirement of no login on the audience end but option to vote on a question only once.
+ One requirement was slighly confusing. I was not sure if it meant immediate reflection of the change on the same client where the change occured, or on all clients. I have implemented the first one, but the second one is also easily implementable using websockets (Sockets.io)

## Version info

This app was originally generated on Thu Jun 14 2018 00:42:07 GMT+0530 (IST) using Sails v1.0.2.
