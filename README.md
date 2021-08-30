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

# POSTMAN

1.Register

![PostRegister](https://user-images.githubusercontent.com/36509597/131415835-9dfc50e3-d40f-4a51-b0a8-3ea79b5235f4.PNG)

2.Login

![PostLogin](https://user-images.githubusercontent.com/36509597/131415969-ac170f20-ab6d-4654-bf8f-1b9ad0897a55.PNG)

3.Get News

![GetNews](https://user-images.githubusercontent.com/36509597/131416187-b66ec0d5-8722-4833-99dc-3fdc50357a1c.PNG)

```json
{
    "count": 38,
    "data": [
        {
            "headline": "Caldor Fire Intensifies and Evacuations Are Ordered Near Lake Tahoe - The New York Times",
            "link": "https://www.nytimes.com/2021/08/30/us/caldor-fire-evauation-order-california.html"
        },
        {
            "headline": "Dow Jones Futures: Stock Market Rally, Apple Stock Hit New Highs; Zoom Dives 12% On Earnings - Investor's Business Daily",
            "link": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-stock-market-rally-hits-new-highs-zoom-stock-dives-on-earnings/"
        },
        {
            "headline": "Afghan folk singer taken from his house and killed by the Taliban - CNN",
            "link": "https://www.cnn.com/2021/08/30/asia/fawad-andarabi-afghan-folk-singer-killed-intl/index.html"
        },
        {
            "headline": "Here's The Latest On Ida, The Tropical Storm Thrashing The Gulf Coast - NPR",
            "link": "https://www.npr.org/2021/08/30/1032549785/heres-the-latest-on-ida-the-tropical-storm-thrashing-the-gulf-coast"
        },
        {
            "headline": "Teacher with COVID symptoms went maskless, making her class an experiment - Ars Technica",
            "link": "https://arstechnica.com/science/2021/08/teacher-with-covid-symptoms-went-maskless-making-her-class-an-experiment/"
        },
        {
            "headline": "Rand Paul Believes Hatred for Trump Is Why Scientists Won’t Study Horse Drug as COVID-19 Treatment - The Root",
            "link": "https://www.theroot.com/rand-paul-believes-hatred-for-trump-is-why-scientists-w-1847583884"
        },
        {
            "headline": "Hate crime reports in US surge to the highest level in 12 years, FBI says - CNN",
            "link": "https://www.cnn.com/2021/08/30/us/fbi-report-hate-crimes-rose-2020/index.html"
        },
        {
            "headline": "Last US planes leave Kabul airport, ending Afghanistan war - New York Post ",
            "link": "https://nypost.com/2021/08/30/last-us-planes-leave-kabul-airport-ending-afghanistan-war/"
        },
        {
            "headline": "Francisco Lindor – not Javy Baez – is the real Mets issue: Sherman - New York Post ",
            "link": "https://nypost.com/2021/08/30/javy-baez-is-not-the-one-who-should-get-mets-fans-thumbs-down-sherman/"
        },
        {
            "headline": "R. Kelly trial: Man accuses singer of sexually assaulting him at 17 - Insider",
            "link": "https://www.insider.com/r-kelly-trial-man-accuses-singer-of-sexual-assault-2021-8"
        },
        {
            "headline": "SEC Chairman Says Banning Payment for Order Flow Is 'On the Table' - barrons.com",
            "link": "https://www.barrons.com/articles/sec-chairman-says-banning-payment-for-order-is-on-the-table-51630350595"
        },
        {
            "headline": "CDC panel recommends Pfizer/BioNTech COVID-19 vaccine under full FDA approval - Fox News",
            "link": "https://www.foxnews.com/health/cdc-panel-pfizer-covid-19-vaccine-full-fda-approval"
        },
        {
            "headline": "White House says 'small number' of Americans remain in Afghanistan | TheHill - The Hill",
            "link": "https://thehill.com/policy/defense/570040-white-house-says-small-number-of-americans-remain-in-afghanistan"
        },
        {
            "headline": "IDF 'will not hesitate' in light of Gaza border riots, says Kohavi - The Jerusalem Post",
            "link": "https://www.jpost.com/israel-news/riots-cause-chaos-on-israel-gaza-border-678142"
        },
        {
            "headline": "NBA Rumors: Rajon Rondo gave Grizzlies $2.6 million to sign with Lakers - Silver Screen and Roll ",
            "link": "https://www.silverscreenandroll.com/2021/8/30/22648759/nba-rumors-rajon-rondo-lakers-grizzlies-buyout-contract-free-agent"
        },
        {
            "headline": "MSNBC reporter Shaquille Brewster harassed amid Hurricane Ida coverage - USA TODAY",
            "link": "https://www.usatoday.com/story/news/nation/2021/08/30/hurricane-ida-msnbc-reporter-shaquille-brewster-harassed-live-coverage/5654079001/"
        },
        {
            "headline": "Man convicted of murdering Iowa student Mollie Tibbetts sentenced to life in prison - NBC News",
            "link": "https://www.nbcnews.com/news/us-news/man-convicted-murdering-iowa-student-mollie-tibbetts-sentenced-life-prison-n1278038"
        },
        {
            "headline": "Apple Watch Series 7 will have flat edges and a larger display with new watch faces - Daily Mail",
            "link": "https://www.dailymail.co.uk/sciencetech/article-9940271/Apple-Watch-Series-7-flat-edges-larger-display-new-watch-faces.html"
        },
        {
            "headline": "Baltimore Ravens coach John Harbaugh defends playing starting RB J.K. Dobbins, who suffered season-ending knee injury in preseason finale - ESPN",
            "link": "https://www.espn.com/nfl/story/_/id/32114706/baltimore-ravens-coach-john-harbaugh-defends-playing-starting-rb-jk-dobbins-suffered-season-ending-knee-injury-preseason-finale"
        },
        {
            "headline": "Trudeau Suddenly Faces a Real Challenge - The Wall Street Journal",
            "link": "https://www.wsj.com/articles/trudeau-otoole-election-polling-conservatives-cost-1-trillion-debt-afghanistan-canada-11630336271"
        }
    ]
}
```

4. Search News

![SearchNews](https://user-images.githubusercontent.com/36509597/131416293-05f66daa-513a-4ae9-8e2d-7703fe5747e1.PNG)

```json
{
    "count": 2364,
    "data": [
        {
            "headline": "The $150 Million Machine Keeping Moore’s Law Alive",
            "link": "https://www.wired.com/story/asml-extreme-ultraviolet-lithography-chips-moores-law/"
        },
        {
            "headline": "Daily Crunch: China sets three-hour weekly time limit for under-18 gamers",
            "link": "http://techcrunch.com/2021/08/30/daily-crunch-56/"
        },
        {
            "headline": "TikTok owner ByteDance buys a top virtual reality hardware startup",
            "link": "http://techcrunch.com/2021/08/30/tiktok-owner-bytedance-buys-a-top-virtual-reality-hardware-company/"
        },
        {
            "headline": "Flip bags $28M to turn beauty, wellness social commerce on its head",
            "link": "http://techcrunch.com/2021/08/30/flip-bags-28m-to-turn-beauty-wellness-social-commerce-on-its-head/"
        },
        {
            "headline": "The Station: Rivian makes its IPO move, Nuro pushes into Nevada and Waymo scales up in SF",
            "link": "http://techcrunch.com/2021/08/30/the-station-rivian-makes-its-ipo-move-nuro-pushes-into-nevada-and-waymo-scales-up-in-sf/"
        },
        {
            "headline": "U.S. Records a Daily Average of 100,000 Covid Hospitalizations",
            "link": "https://www.nytimes.com/live/2021/08/30/world/covid-delta-variant-vaccine"
        },
        {
            "headline": "More than £38bn spent on transfers in past 10 years, Fifa finds",
            "link": "https://www.bbc.co.uk/sport/football/58387280"
        },
        {
            "headline": "Hate crime reports in US surge to the highest level in 12 years, FBI says",
            "link": "https://www.cnn.com/2021/08/30/us/fbi-report-hate-crimes-rose-2020/index.html"
        },
        {
            "headline": "China cuts children's online gaming to one hour",
            "link": "https://www.bbc.co.uk/news/technology-58384457"
        },
        {
            "headline": "China tightens scrutiny on $9.3 trillion fund industry - Reuters",
            "link": "https://www.reuters.com/world/china/china-tightens-scrutiny-93-trillion-fund-industry-2021-08-30/"
        },
        {
            "headline": "Facing China 'squeeze', Taiwan launches English-language news platform - Reuters",
            "link": "https://www.reuters.com/world/china/facing-china-squeeze-taiwan-launches-english-language-news-platform-2021-08-30/"
        },
        {
            "headline": "China tightens scrutiny on $9.3 trillion fund industry - Reuters",
            "link": "https://www.reuters.com/article/china-fund-regulations-idUSL1N2Q109Z"
        },
        {
            "headline": "AgBank, BoC post robust H1 profits, bad loans stable - Reuters",
            "link": "https://www.reuters.com/business/agbank-boc-post-robust-h1-profits-bad-loans-stable-2021-08-30/"
        },
        {
            "headline": "China reports 23 COVID-19 cases for Aug 29, none local - Reuters",
            "link": "https://www.reuters.com/world/china/china-reports-23-covid-19-cases-aug-29-none-local-2021-08-30/"
        },
        {
            "headline": "Asian shares rise on dovish Fed prospects but China caps gains - Reuters",
            "link": "https://www.reuters.com/business/global-markets-wrapup-2-2021-08-30/"
        },
        {
            "headline": "China's CNOOC launches first offshore carbon capture project - Reuters",
            "link": "https://www.reuters.com/business/sustainable-business/chinas-cnooc-launches-first-offshore-carbon-capture-project-2021-08-30/"
        },
        {
            "headline": "BlackRock tests Chinese retail appetite with mutual fund launch - Reuters",
            "link": "https://www.reuters.com/article/china-blackrock-fund-idUSL4N2Q11U8"
        },
        {
            "headline": "China Construction Bank says net interest margin to narrow in H2 2021 - Reuters",
            "link": "https://www.reuters.com/world/china/china-construction-bank-says-net-interest-margin-narrow-h2-2021-2021-08-30/"
        },
        {
            "headline": "China rolls out new rules on minors and online gaming - Xinhua - Reuters",
            "link": "https://www.reuters.com/world/china/china-rolls-out-new-rules-minors-online-gaming-xinhua-2021-08-30/"
        },
        {
            "headline": "WTO to examine U.S.-China dispute on grain import quotas - Reuters",
            "link": "https://www.reuters.com/business/wto-examine-us-china-dispute-grain-import-quotas-2021-08-30/"
        }
    ]
}
```

5. Get Weather

![Weather](https://user-images.githubusercontent.com/36509597/131416529-e9a53913-d320-4d6d-a8fc-843967da1690.PNG)

```json
{
    "count": 5,
    "unit": "metric",
    "locaton": "Dehradun",
    "data": [
        {
            "date": "Tuesday Aug 31 2021 ",
            "main": "Rain",
            "temp": 29.99
        },
        {
            "date": "Wednesday Sep 1 2021 ",
            "main": "Rain",
            "temp": 30.54
        },
        {
            "date": "Thursday Sep 2 2021 ",
            "main": "Rain",
            "temp": 30.8
        },
        {
            "date": "Friday Sep 3 2021 ",
            "main": "Rain",
            "temp": 30.17
        },
        {
            "date": "Saturday Sep 4 2021 ",
            "main": "Rain",
            "temp": 29.92
        }
    ]
}
```



