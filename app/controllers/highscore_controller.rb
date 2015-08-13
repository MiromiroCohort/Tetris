get "user/:user_id/highscore" do
  params[:user_id]
  user = User.find(params[:user_id])
  user.scores.sort.first.to_json


end

get "/highscore" do
  Score.all.sort.first(10).to_json
end