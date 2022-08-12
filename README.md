# fso-project
![logo](https://raw.githubusercontent.com/hhokka/dev-academy-2022-fall-exercise/111dec7357e9309b79bbe22d60f7fe140a9feddd/readme/logo-generic.svg)

With this application it is possible for users to book group exercises on a gym. This application shows different instances of group exercises, offers a possibility to sign up and create group exercise instances. Chosen technologies include React and Node.js with Express.

**This application is not ready yet.**

## Configurations
The database settings are in .env file which you get by asking (hans.hokka@gmail.com). Database is fully configured. Other than what is mentioned in "installation and running" there is no need to configure anything. 


## Installation and running
### Development
Clone the repository to your own device:
```
git clone https://github.com/hhokka/fso-project.git
```
Install and run **backend**:
Copy .env to project root
```
cd fson-project
cd backend
npm install
npm run dev
```
Install and run **frontend**:

Open new command line window
```
cd fso-project
cd frontend
npm install
npm start
```
Go to address http://localhost:3000

### Production
Clone the repository to your own device:
```
git clone https://github.com/hhokka/fso-project.git
```

Build **frontend** and then serve it:
```
cd fso-project
cd frontend
npm install
npm run build
npm install -g serve
serve -s build
```
Start serving the **backend:**
Copy .env to project root
```
cd fso-project
cd backend
npm run start
```
Go to address http://localhost:3000
### Testing
There are no tests currently
<!-- Tests are run with this command
```
cypress:open
``` -->
## Using the application

Signin information: email: hhokka, password: salainen

TODO: guide to using the application

## API
<!-- Returns all journeys in database:
```
GET http://localhost:3001/api/journeys
```
Adds a journey to database:
    
    POST http://localhost:3001/api/journeys + payload
Removes all journeys in database:
    
    POST http://localhost:3001/api/journeys/reset

Returns all bikeStations in database:
    
    GET http://localhost:3001/api/bikeStations
Adds a bikeStation to database:
    
    POST http://localhost:3001/api/bikeStations + payload

Removes all bikeStations in database:
    
    POST http://localhost:3001/api/bikeStations/reset
 -->
## TODO
- Because MongoDB's quota is too small to load all the data, the application can load only one dataset. It would be good to have a paid subscription of MongoDB witch a larger quota. Application also validates only one of the datasets.

## Record of working hours

|   day   | time  | what did I do                                                 |
| :-----: | :---- | :------------------------------------------------------------ |
| 1.7.22  | 1     | Alustavat työt                                                | 2.7.22 | 0,5 | initial commit |
| 2.7.22  | 0,5   | documentation                                                 |
| 2.7.22  | 0,5   | more documentation                                            |
| 2.7.22  | 0,25  | README.md                                                     |
| 2.7.22  | 0,25  | README.md                                                     |
| 2.7.22  | 0,5   | Part 7's code for base                                        |
| 2.7.22  | 0,5   | Backend skeleton                                              |
| 4.7.22  | 1,5   | Fronendin userin toiminnallisuutta #1                         |
| 4.7.22  | 0,25  | Tuntikirjanpito                                               |
| 4.7.22  | 0,25  | Tuntikirjanpito2                                              |
| 4.7.22  | 3     | Signup implemented                                            |
| 4.7.22  | 0,25  | Tuntikirjanpito 3                                             |
| 4.7.22  | 0,25  | Tuntikirjanpito 4                                             |
| 4.7.22  | 1     | Course: model, controller                                     |
| 5.7.22  | 2     | Course: controller                                            |
| 5.7.22  | 1,5   | Coursen implementointi                                        |
| 5.7.22  | 2,5   | Tracking                                                      |
| 5.7.22  | 2     | Implementation of Course, courseReducer                       |
| 5.7.22  | 1     | Debugging App.js/course                                       |
| 6.7.22  | 2     | Debugging App.js/course#2                                     |
| 6.7.22  | 2     | Debugging App.js/course#3                                     |
| 6.7.22  | 2     | Debugging App.js/course#4                                     |
| 6.7.22  | 0,5   | Debugging App / course done                                   |
| 6.7.22  | 2     | CourseForm, Routing                                           |
| 6.7.22  | 1     | Routing, Menu, Courses                                        |
| 19.7.22 | 2     | Views, Course model, added some course data                   |
| 19.7.22 | 2,5   | Time sheet                                                    |
| 19.7.22 | 2     | Course module + routing + courses by week days                |
| 19.7.22 | 0,25  | Course module + Date + Signup                                 |
| 20.7.22 | 2     | Writing signup                                                |
| 25.7.22 | 0,5   | Update README.md                                              |
| 28.7.22 | 2,5   | Adding links to courses, add course -page, course's schema    |
| 29.7.22 | 3     | Adding courses, listing courses based on date and week number |
| 29.7.22 | 1     | Course details page                                           |
| 29.7.22 | 2,5   | Entered course data, kade dropdown for choosing week          |
| 29.7.22 | 0,5   | Time keeping document                                         |
| 30.7.22 | 1     | Listing courses by week                                       |
| 30.7.22 | 1,5   | Listing courses by week                                       |
| 30.7.22 | 2,5   | Listing courses based on time, debugging                      |
| 30.7.22 | 0,5   | Refactoring App.js                                            |
| 30.7.22 | 1     | Add booking button + function                                 |
| 30.7.22 | 0,25  | Time keeping                                                  |
| 30.7.22 | 0,25  | Time keeping                                                  |
| 31.7.22 | 1,5   | Debugging booking                                             |
| 31.7.22 | 0,5   | Removed useEffect                                             |
| 31.7.22 | 2,5   | Debugging Course                                              |
| 31.7.22 | 0,25  | Update README.md                                              |
| 31.7.22 | 0,25  | Removed some console.logs                                     |
| 31.7.22 | 0,25  | Moving some items to stash                                    |
| 11.8.22 | 2,5   | Writing README.md                                             |
| 11.8.22 | 0,25  | Counted hours -> total                                        |
| 11.8.22 | 0,25  | Modified README.md                                            |
| 12.8.22 | 3     | Cleaned code                                                  |
| 12.8.22 | 2     | Changes is README.md                                          |
| 12.8.22 | 2,5   | Debugged Eslint                                               |
|  total  | 63,25 |
