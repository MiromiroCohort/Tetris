post "/session" do
  user = User.find_by_email(params[:email])

  if user.password == params[:password]
    session[:user_id] = user.id
    redirect "/highscore"
  else
    redirect "/" # Is this the login?????
  end
end

delete "/session" do
  session[:user_id] = nil

  redirect "/"
end
