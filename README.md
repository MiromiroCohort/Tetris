#API DOCUMENTATION - V.0.1


###[GET] list of Highest scores
- returns a list of top 10 high scores and users
- /api/v1/highscore/
- example:
```
[{
  "global":
    [{
      "name" : "Michael",
      "score" : 1000
    },
    {
      "name" : "Iona",
      "score" : 2090
    }]
}]
```

###[GET] list of users high scores
- returns a list of the top 10 high score of a user
- /api/v1/user/:id/highscore/
- example:
```
[{
  "your_high_scores":
    [{
      "rank" : 6
      "name" : "Michael",
      "score" : 1000
    },
    {
      "rank" : 2
      "name" : "Michael",
      "score" : 2090
    }],
  "your_latest":
    [{
      "score" : 1000
    }]
}]
```

###[POST] create a new score
- allows the user to create a new score, new score requires score and user id
- /api/v1/user/:id/score/
- example:
```
[{
  "user_id" : 13,
  "score" : 4684
}]
```

###[POST] create a new user
- allows someone to create a new user, requires name, email, digest
- /api/v1/user/
- example:
```
[{
  "name" : "Bob Dylan",
  "email" : "name@email.com",
  "digest" : "password"
}]
```

###[POST] create a new session
- allows user to create a new session on login
- /api/v1/session/
- example:
```
[{
  "session_cookie" : "seghve%^ksuycrpq34b87o(ey52np3894"
}]
```

###[DELETE] destroy user session
- allows user to end their current session
- /api/v1/session/
- example:
```
[{}]
```
