# fso-project
![logo](https://raw.githubusercontent.com/hhokka/dev-academy-2022-fall-exercise/111dec7357e9309b79bbe22d60f7fe140a9feddd/readme/logo-generic.svg)

With this application it is possible for users to book group exercises on a gym. This application shows different instances of group exercises, offers a possibility to sign up on and create on group exercise instances. Chosen technologies include React and Node.js with Express.

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

Tests are run with this command
```
cypress:open
```
## Using the application

Signin information: email: hhokka, password: salainen

TODO: guide to using the application

## API
Returns all journeys in database:
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

## TODO
- Because MongoDB's quota is too small to load all the data, the application can load only one dataset. It would be good to have a paid subscription of MongoDB witch a larger quota. Application also validates only one of the datasets.

## Record of working hours

|   day   | time | what did I do                                                                                                |
| :-----: | :--- | :----------------------------------------------------------------------------------------------------------- |
| 1.7.22  | 1    | Alustavat työt                                                                                               |
| 4.7.22  | 2    | Karkea rakenteen suunnittelu, frontendin muokkaus projektin pohjaksi, frontendin userin toiminnallisuutta #1 |
| 4.7.22  | 1,5  | Frontendin userin toiminnallisuutta #2, käyttäjän luominen frontendistä käsin                                |
| 4.7.22  | 1,5  | Course: model, controller, service                                                                           |
| 5.7.22  | 2    | Course: service                                                                                              |
| 5.7.22  | 1,5  | Coursen implementointi                                                                                       |
| 5.7.22  | 2,5  | Coursen implementointi, courseReducer                                                                        |
| 5.7.22  | 2    | App.js/course debuggaus, courseReducer                                                                       |
| 5.7.22  | 1    | App.js/course debuggaus                                                                                      |
| 6.7.22  | 2    | App.js/course debuggaus                                                                                      |
| 6.7.22  | 2    | App.js/course debuggaus                                                                                      |
| 6.7.22  | 2    | App.js/course debuggaus                                                                                      |
| 6.7.22  | 0,5  | App.js/course debuggaus valmis                                                                               |
| 6.7.22  | 2    | CourseForm, Routing                                                                                          |
| 6.7.22  | 1    | Routing, Menu, Courses                                                                                       |
| 19.7.22 | 2    | Course-dataa syötetty, piirretty kuva näkymistä, Course-modelia muutettu                                     |
| 19.7.22 | 2,5  | Course-moduuli + reititys + courset viikonpäivittäin                                                         |
| 19.7.22 | 2    | Course-moduuli + Date + Signup                                                                               |
| 20.7.2  | 2    | Signupin kirjoittamista, kurssien järjestäminen kellonajan mukaan                                            |
| 28.7.22 | 2,5  | Linkkien lisääminen kursseihin, Lisää kurssi -sivun tekemistä, coursen schema                                |
| 29.7.22 | 3    | Kurssien lisäyksen tekoa, kurssien listausta päivämäärän ja viikonnumeron perusteella                        |
| 29.7.22 | 1    | Kurssien yksityiskohtanäkymä                                                                                 |
| 29.7.22 | 2,5  | Syötetty kurssidataa, tehty dropdown viikon valitsemiseksi                                                   |
| 30.7.22 | 1    | Kurssien listaus viikoittain                                                                                 |
| 30.7.22 | 1,5  | Kurssien listaus viikoittain                                                                                 |
| 30.7.22 | 2,5  | Kurssien järjestäminen ajan mukaan, debuggausta                                                              |
| 30.7.22 | 0,5  | App.js:n refaktorointia                                                                                      |
| 30.7.22 | 1    | Varausnapin ja funktion luominen                                                                             |
| 31.7.22 | 1,5  | Varaamisen debuggausta                                                                                       |
| 31.7.22 | 2,5  | Coursen debuggausta                                                                                          |
| 11.8.22 | 1,5  | README.md:n tekoa                                                                                            |
|   yht   | 54   |
