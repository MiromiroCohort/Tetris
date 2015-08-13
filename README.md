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


