# Tetris

Front End Documentation

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


Game Play

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


API DOCUMENTATION - V.0.1

DISPLAY LOGIN
Resource URL: /
GET "/" do
  erb :index
end

DISPLAY HELP MENU
Resource URL: /help/
GET "/help" do
  erb :help
end

DISPLAY GAME
Resource URL: /blocks/
Parameters : User.id
GET "/blocks" do
  :erb blocks
end

LIST OF ALL HIGHSCORES Summary: Returns top 10 highscores
Resource URL: /highscore/
Parameters: Score.all
GET "/highscore" do
  Score.all(select top ten)
  :erb highscore
end

LIST OF USER'S HIGHSCORES Summary: Returns top 10 highscores of user
Resource URL: /user/:id/highscore/
Parameters: Score.find_by(user.id)
GET "/user/:id/highscore" do
  Score.find_by(user.id) (select top ten)
  :erb highscore
end

ADD NEW USER Summary: Adds user to database
Resource URL: /user/
Parameters: user.name, user.email, user.digest
POST "/user" do
  redirect "/highscores"
end

ADD NEW SCORE
Resource URL: /score/
Parameters: user.id, score
POST "/score" do
  redirect "/highscores"
end

ADD NEW SESSION
Resource URL: /session/
Parameters: user.email, user.digest
POST "/session" do
  if logged in
    redirect "/highscore"
  else
    redirect "/"
  end
end

END SESSION
Resource URL: /session/
Parameters: session.id
DELETE "/session" do
  redirect "/"
end

## For all controllers
Add "before" blocks, to check the user is logged in before going to other pages

######################################################
 PSEUDOCODE for game mechanics
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



