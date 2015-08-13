post "/user" do
  user = User.create(name: params[:name],
                      email: params[:email],
                      digest: params[:digest])
  session[:user_id] = user.id
  redirect "/highscore"
end
