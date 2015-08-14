before '/' do
  redirect '/login' unless session[:user_id]
end

get '/' do
  erb :index
end
