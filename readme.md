# Virginia Breweries API

### Goals
- Build a JSON API using Mongoose and Express. 
- Build at least one model. 
- Seed a database using data from an online dataset of our choosing.
- Have complete CREATE and READ functionality.
- Deploy on Heroku.

### Technologies Used
- MongoDB
- Mongoose
- Express
- Node.js
- Postman
- Heroku

### Example Object
```
[
  {
    "id": 7082,
    "name": "Back Bay Brewing Company",
    "brewery_type": "micro",
    "street": "614 Norfolk Ave",
    "city": "Virginia Beach",
    "state": "Virginia",
    "postal_code": "23451-4419",
    "country": "United States",
    "longitude": "-75.9797441428571",
    "latitude": "36.8377837142857",
    "phone": "7575317750",
    "website_url": "http://www.backbaybrewingco.com",
    "updated_at": "2018-08-24T16:27:08.471Z",
    "tag_list": [
      
    ]
  },
...
]
```

### How to Use
| Method | Path | Description |
| ______ | ____ | ___________ |
| POST | /create | create a new brewery |
| GET | / | get all breweries |
| GET | /name/:name | get brewery by name |
| GET | /id/:_id | get brewery by id |




















