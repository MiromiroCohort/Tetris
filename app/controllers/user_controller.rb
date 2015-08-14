post "/user" do
  user = User.create params[:user]
  session[:user_id] = user.id
  redirect "/"
end
