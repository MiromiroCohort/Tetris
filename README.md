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
