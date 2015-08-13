before "/blocks" do
  redirect "/login" unless session[:user_id]
end

get "/blocks" do
  array = ["L", "L", "L", "L", "Z", "Z", "Z", "Z", "S", "S", "S", "S", "I", "I", "O", "O", "T", "T", "T", "T"]
  shuffled_array = array.shuffle!
  blocks = {block: shuffled_array}
  blocks.to_json
end



