require 'spec_helper'
require_relative '../factories.rb'
require 'bcrypt'


describe "Index controller" do
  # before do
  #   User.destroy_all
  #   Score.destroy_all
  # end


# describe "GET / blocks" do
#   before do
#     5.times do
#       @user = FactoryGirl.create :user
#       rand(10).times{
#         @score = FactoryGirl.create :score, :user => @user
#       }
#     end
#     post "/sessions"
#     get "/blocks"
#   end
#   it "return twenty blocks in an array" do
#     var = JSON.parse(last_response.body)
#     expect(var["block"].length).to eq(19)
#   end
# end

# describe "GET /help" do
#   before do
#     get "/help"
#     @helptext = ["Welcome to Tetris", "Use the arrow keys to rotate the falling block", "Press space bar to quickly drop the block", "Press play to play!"]
#   end
#   it "return a string of instrutions" do
#     puts last_response.body
#     expect(last_response.body).to eq(@helptext.to_json)
#   end
# end

  # describe "GET /highscores/global" do
  #   before do
  #       20.times do
  #       @user = FactoryGirl.create :user
  #       rand(10).times{
  #         @score = FactoryGirl.create :score, :user => @user
  #       }
  #       @global = {}
  #       top_scores = Score.all.order('score DESC').first(10)
  #       counter = 0
  #       top_scores.each do |i|
  #         counter += 1
  #         name = User.find_by(id: i.user_id).name
  #         score = i.score
  #         @global[counter] = {name => score}
  #       end
  #       @score_top_ten = {global: @global}
  #     end
  #     get "/highscores/global"
  #   end
  #   it "return of 10 global scores" do
  #     puts last_response.body
  #     expect(last_response.body).to eq(@score_top_ten.to_json)
  #   end
  # end

  # describe "GET /highscores/user" do
  #   before do
  #     20.times do
  #       @user = FactoryGirl.create :user
  #       rand(10).times{
  #         @score = FactoryGirl.create :score, :user => @user
  #       }
  #     end
  #     get "/highscores/user"
  #   end
  #   it "returns a string" do
  #     expect(last_response.body).to be_kind_of(String)
  #   end
  #   it "is this user's highest score" do
  #     expect(JSON.parse(last_response.body)["user_high"]).to eq(User.find(1305).scores.order("score DESC").first(10).to_json)
  #   end
  # end

  # describe 'GET highscores/user/rank' do
  #   before do
  #     user = User.find(1305)
  #     ranked_array = Score.all.order("score DESC")
  #     @your_ranking = ranked_array.index(Score.find_by_user_id(user.id))
  #     get "highscores/user/rank"
  #   end
  #   it "returns users rank" do
  #     expect(JSON.parse(last_response.body)["user_rank"]).to eq(@your_ranking.to_json.to_i)
  #   end
  # end






end



# describe 'GET /score' do
#   before do
#     5.times do
#       @user = FactoryGirl.create :user
#       rand(10).times{
#         @score = FactoryGirl.create :score, :user => @user
#       }
#     end
#     global = {}

#     top_scores = Score.all.order('score DESC').first(10)
#     top_scores.each do |item|
#       key = User.find_by(id: item.user_id).name
#       val = item.score
#       global[key] = val
#     end

#     user = User.find(4) #FOR TESTING PURPOSES ONLY
#     latest_score = user.scores.last.to_json
#     users_highest_score = user.scores.order("score DESC").first.to_json

#     ranked_array = Score.all.order("score DESC")
#     your_ranking = ranked_array.find_index(Score.find_by_id(user.id))
#     your_ranking.to_json

#     @score = {top: global, latest_score: latest_score, high_score: users_highest_score, rank: your_ranking}

#     get "/score"
#   end

#   it "should return all high scores" do
#     puts last_response.body
#     expect(last_response.body).to eq(@score.to_json)
#   end
# end

