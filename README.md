# sport-server2# Florence-Sport

----

##    Register a new user. 

* **URL**

    /register

* **Method:**

    `POST`

*  **Data Params**

   **Required:**
 
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```md
    {
        "id": 1,
        "email": "bulba@gmail.com"
    }
    ```
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----
##   Login into apps. 

* **URL**

    /login

* **Method:**

    `POST`

*  **Data Params**

   **Required:**
 
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```md
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJidWxiYUBnbWFpbC5jb20iLCJpYXQiOjE2MDM5Njc1NzV9.IZIgb-6Rxt58pPQuberOrRDC1-IBnT7ug51oTCk0l80"
    }
    ```

* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : "Wrong email/password!" }`

  * **Code:** 401 <br />
    **Content:** `{ error : "Wrong email/password!" }`

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----
##    Get random covid data by day 

* **URL**

    /random

* **Method:**

    `GET`

*  **Data Body**

   **Required:**
 
   `jokes=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```md
    { "jokes": "Chuck Norris doesn't commit suicide, suicide commits him" }
    ```

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`
    
---    
    

**SHOW NEXT 15 PREMIER LEAGUE MATCH**
----
* **URL**
/jadwal/next15
- **Method**
> `GET`
- **Success Response** :
    * **code:** 200 <br />
    * **content:**
```
   { "events": [
        {
            "idEvent": "1045887",
            "idSoccerXML": null,
            "idAPIfootball": "605173",
            "strEvent": "Valladolid vs Levante",
            "strEventAlternate": "Levante @ Valladolid",
            "strFilename": "Spanish La Liga 2020-11-27 Valladolid vs Levante",
            "strSport": "Soccer",
            "idLeague": "4335",
            "strLeague": "Spanish La Liga",
            "strSeason": "2020-2021",
            "strDescriptionEN": null,
            "strHomeTeam": "Valladolid",
            "strAwayTeam": "Levante",
            "intHomeScore": null,
            "intRound": "11",
            "intAwayScore": null,
            "intSpectators": null,
            "strOfficial": "",
            "strHomeGoalDetails": null,
            "strHomeRedCards": null,
            "strHomeYellowCards": null,
            "strHomeLineupGoalkeeper": null,
            "strHomeLineupDefense": null,
            "strHomeLineupMidfield": null,
            "strHomeLineupForward": null,
            "strHomeLineupSubstitutes": null,
            "strHomeFormation": null,
            "strAwayRedCards": null,
            "strAwayYellowCards": null,
            "strAwayGoalDetails": null,
            "strAwayLineupGoalkeeper": null,
            "strAwayLineupDefense": null,
            "strAwayLineupMidfield": null,
            "strAwayLineupForward": null,
            "strAwayLineupSubstitutes": null,
            "strAwayFormation": null,
            "intHomeShots": null,
            "intAwayShots": null,
            "strTimestamp": "2020-11-27T20:00:00+00:00",
            "dateEvent": "2020-11-27",
            "dateEventLocal": null,
            "strDate": null,
            "strTime": "20:00:00",
            "strTimeLocal": null,
            "strTVStation": null,
            "idHomeTeam": "133841",
            "idAwayTeam": "133732",
            "strResult": null,
            "strVenue": "Estadio Municipal José Zorrilla",
            "strCountry": "Spain",
            "strCity": null,
            "strPoster": null,
            "strFanart": null,
            "strThumb": "https://www.thesportsdb.com/images/media/event/thumb/9xjrlz1603543493.jpg",
            "strBanner": null,
            "strMap": null,
            "strTweet1": null,
            "strTweet2": null,
            "strTweet3": null,
            "strVideo": null,
            "strStatus": "Not Started",
            "strPostponed": "no",
            "strLocked": "unlocked"
        }...
    ]
};
```

- **respon(400)** :
> `Something wrong`

- **respon(500)**
>`internal server eror`
---
## GET LAST 15 MATCH SCHEDULE

- **URL**
jadwal/last15
- **Method**
GET

- **Success Response**
- **Code :** 200
- **Content :**
```
{
    "last15match": {
        "events": [
            {
                "idEvent": "1032781",
                "idSoccerXML": null,
                "idAPIfootball": "592230",
                "strEvent": "Wolves vs Southampton",
                "strEventAlternate": "Southampton @ Wolves",
                "strFilename": "English Premier League 2020-11-23 Wolves vs Southampton",
                "strSport": "Soccer",
                "idLeague": "4328",
                "strLeague": "English Premier League",
                "strSeason": "2020-2021",
                "strDescriptionEN": "",
                "strHomeTeam": "Wolves",
                "strAwayTeam": "Southampton",
                "intHomeScore": "1",
                "intRound": "9",
                "intAwayScore": "1",
                "intSpectators": null,
                "strOfficial": "",
                "strHomeGoalDetails": "",
                "strHomeRedCards": null,
                "strHomeYellowCards": null,
                "strHomeLineupGoalkeeper": null,
                "strHomeLineupDefense": null,
                "strHomeLineupMidfield": null,
                "strHomeLineupForward": null,
                "strHomeLineupSubstitutes": null,
                "strHomeFormation": null,
                "strAwayRedCards": null,
                "strAwayYellowCards": null,
                "strAwayGoalDetails": "",
                "strAwayLineupGoalkeeper": null,
                "strAwayLineupDefense": null,
                "strAwayLineupMidfield": null,
                "strAwayLineupForward": null,
                "strAwayLineupSubstitutes": null,
                "strAwayFormation": null,
                "intHomeShots": null,
                "intAwayShots": null,
                "strTimestamp": "2020-11-23T20:00:00+00:00",
                "dateEvent": "2020-11-23",
                "dateEventLocal": "2020-11-23",
                "strDate": null,
                "strTime": "20:00:00",
                "strTimeLocal": "20:00:00",
                "strTVStation": null,
                "idHomeTeam": "133599",
                "idAwayTeam": "134778",
                "strResult": "",
                "strVenue": "Molineux Stadium",
                "strCountry": "England",
                "strCity": "",
                "strPoster": null,
                "strFanart": null,
                "strThumb": "https://www.thesportsdb.com/images/media/event/thumb/j6mj2l1603530571.jpg",
                "strBanner": null,
                "strMap": null,
                "strTweet1": "",
                "strTweet2": "",
                "strTweet3": "",
                "strVideo": "https://www.youtube.com/watch?v=ICjTiy8JNls",
                "strStatus": "Match Finished",
                "strPostponed": "no",
                "strLocked": "unlocked"
            },
```
-  Code : 500
- Content : 
```
{
    message : internal server eror
}
```
- Code : 400
- Content :
```
{
                    status : 400,
                    message : 'Something Wrong'
}
```

---
## GET HIGHLIGHTS

* **URL**

    /highlights

* **METHOD**

    `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

```
  {
    "arr": [
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fbc71b067043/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            },
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fbc4e76ac485/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fbc21186cea1/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fbb5ae738197/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            },
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fbaf12e05817/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fbae1a3e9a2f/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fbad8d83675d/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fba83a95291e/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fb98ffd1fc08/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fba0752d2148/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            },
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fb98e67d9f22/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fb9ae07e35ee/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fa89aecf0b86/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            },
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fa86d47669ed/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ],
        [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5fa88b1132cbb/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ]
    ]
}
```

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```
    `{ error : "Internal Server Error" }`
    
    ```

