post "/session" do
  user = User.find_by_email(params[:email])

  if user.password == params[:password]
    session[:user_id] = user.id
    redirect "/"
  else
    redirect "/login"
  end
end

delete "/session" do
  session[:user_id] = nil

  redirect "/login"
end
