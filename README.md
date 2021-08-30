# News-Weather
1.To run this Project you would require a mongoURI to store profile data in.


2.To get the News data i have used https://newsapi.org/ so creating an account there so as to get API Key


3.To get weather forcast https://home.openweathermap.org/ API is being used so you would also require a key for that. 


4.After you have the keys make a config.env file inside on config folder and paste all your keys as follows. 

```js
MONGO_URI=your_mongouri
KEY=your_mongo_secret
NEWSK=key_from_newsapi.org
WEATHERK=key_from_openweathermap.org
```
## Initialize

```shell
$ git clone https://github.com/hyzen0/news-weather.git
$ npm i
```

## Run
```shell
$ npm start
$ npm run dev 

```
