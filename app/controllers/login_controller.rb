before "/login" do
  redirect "/" if session[:user_id]
end

get "/login" do
  erb :login
end
