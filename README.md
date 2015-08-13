# Tetris

## Front End Documentation

==============
Stretch MUSIC?
==============


	Login Screen / Sign Up
	offers Help and High Score buttons

	Help Screen
	Provides user instruction for how to play the game.

	On successful login:

		High Score Screen
		Shows table of all user scores sorted by value (highest at the top)
		Shows table of user's best scores and current ranking.

		'Start Game' button launches the....

	Playing 'board'

		20x10 visible
		24x10 total
		Highest four rows are masked by a SCORE banner.

		SCORE banner shows 'next piece' and 'current score'


### Game Play

	The game ends when a block cannot descend below row 21.

	There are six types of block, identified as:

	'L' 'S' 'Z' 'I' 'T' and 'O'


	x
	x
	xx		L

	XX
	 XX   Z

	  XX
	 XX   S

	 X
	 X
	 X
	 X    I

	 XX
	 XX   O

	 XXX
	  X   T



	The blocks descend from row 24 to 0 (or the first empty space in that column)

	Blocks can be rotated by the user.

	If all ten spaces in a row are filled, the contents of that row disappears and the
	blocks above are moved down 1 row.

	The speed of game play increases as time elapses.


#API DOCUMENTATION - V.0.1

## Routes

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



## PSEUDOCODE for game mechanics
  0. GAME BOARD REPRESENT ITSELF in ARRAY of 20*10(maybe other suitable scale),
  each element of ARRAY corresponds to HTML DIV and save information about current state
  (is there any block inside at the moment, and what color is this block).
  GAME STARTED
  1. ASK for BLOCK back-end.
  2. GET BLOKE array
  3. START SHOWING BLOCK MOVING DOWN BY CHANGING DIVS in GAME BOARD.
  4. THEN ANY PIECE of the BLOCK REACHED LAST LINE OR NON-EMPTY DIVS BLOCK STOPS.
  5. IF ANY LINE IS FILLED WITH THE BLOCKS - DELETE THE LINE, ADD SCORE, AND MOVE BLOCKS FROM AALL UPPER LINES DOWN
  6. REPEAT PROCESS.

  ROTATION MECHANICS
  X00                   000                 0XX                 XXX                 X00
  X00  RIGHT ROTATION   00X  RIGHT ROTATION 00X RIGHT ROTATION  X00 RIGHT ROTATION  X00
  XX0                   XXX                 00X                 000                 XX0

  LINE ROTATION IS PRETTY OBVIOUS INSIDE THE 4X4 BOX
  QUBE DON'T CHANGE SIDES

  XX0                0X0                000
  0XX RIGHT ROTATION XX0 RIGHT ROTATION XX0
  000                X00                0XX

  ALL ROTATIONS COULD BE DESCRIBED AS REASSIGNING IN 2-DIMENSIONAL ARRAY.

    For LEFT turns
For Y = 0 to 3
    For X = 0 to 3
        Destination(Y,3-X) = Source(X,Y)
    Next
Next

' For RIGHT turns
For Y = 0 to 3
    For X = 0 to 3
        Destination(3-Y,X) = Source(X,Y)
    Next
Next
(I just googled it, but have similar staff in mind http://geekswithblogs.net/cwilliams/archive/2008/06/16/122906.aspx)
