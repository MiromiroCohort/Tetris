post "/users" do
  user = User.create params[:user]
  sessions[:user_id] = user.user_id
  redirect "/highscore" # Play/help/highscore page
end
