before "/blocks" do
  redirect "/login" unless session[:user_id]
end

get "/blocks" do
  array = ["L", "L", "L", "Z", "Z", "Z", "S", "S", "S", "I", "I", "O", "O", "T", "T", "T", "J", "J", "J"]
  blocks = array.shuffle!
  blocks.to_json
end



