
get '/highscores/global' do
  global = {}
  top_scores = Score.all.order('score DESC').first(10)
  top_scores.each do |item|
    key = User.find_by(id: item.user_id).name
    val = item.score
    global[key] = val
  end
  score_top_ten = {global: global}
  score_top_ten.to_json
end


get '/highscores/user' do
  # user = User.find(session[:user_id]) #FOR ACTUAL PURPOSES
  user = User.find(4) #FOR TESTING PURPOSES ONLY
  users_highest_score = user.scores.order("score DESC").first(10).to_json
  user_high = {user_high: users_highest_score}
  user_high.to_json
end


get '/highscores/user/rank' do
  # user = User.find(session[:user_id]) #FOR ACTUAL PURPOSES
  user = User.find(4) #FOR TESTING PURPOSES ONLY
  ranked_array = Score.all.order("score DESC")
  your_ranking = ranked_array.find_index(Score.find_by_id(user.id)) # Maybe + 1, as the top player potentially will be ranked 0 due to index in array.
  user_rank = {user_rank: your_ranking}
  user_rank.to_json
end

get '/highscores/user/latest' do
    # user = User.find(session[:user_id]) #FOR ACTUAL PURPOSES
  user = User.find(4) #FOR TESTING PURPOSES ONLY
  latest_score = user.scores.last.to_json
  user_latest = {user_latest: latest_score}
  user_latest.to_json
end

post '/score' do
  # user = User.find(session[:user_id]) #FOR ACTUAL PURPOSES
  score = params[:score]
  Score.create(user, score)
end



# get "/user/:id/highscore" do
#   user = User.find(params[:id])
#   user.to_json
# end
# # also need world rank high score & session[:user_id]


# get "/highscore" do
#   Score.all.sort.first(10).to_json
#   # highscore should have user name & be sorted
# end

# get "/score" do
#   global = {}

#   top_scores = Score.all.order('score DESC').first(10)
#   top_scores.each do |item|
#     key = User.find_by(id: item.user_id).name
#     val = item.score
#     global[key] = val
#   end



#   # user = User.find(session[:user_id]) #FOR ACTUAL PURPOSES
#   user = User.find(4) #FOR TESTING PURPOSES ONLY
#   latest_score = user.scores.last.to_json
#   users_highest_score = user.scores.order("score DESC").first.to_json

#   ranked_array = Score.all.order("score DESC")
#   your_ranking = ranked_array.find_index(Score.find_by_id(user.id))
#   # your_ranking.to_json

#   score = {top: global, latest_score: latest_score, high_score: users_highest_score, rank: your_ranking}
#   score.to_json
# end

