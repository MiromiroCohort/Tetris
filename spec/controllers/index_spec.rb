require 'spec_helper'
require_relative '../factories.rb'
require 'bcrypt'



describe "GET / blocks" do
  before do
    get "/blocks"
  end
  it "should return twenty blocks in an array" do
    var = JSON.parse(last_response.body)
    expect(var["block"].length).to eq(20)
  end
end

describe "GET /help" do
  before do
    get "/help"
    @helptext = ["Welcome to Tetris", "Use the arrow keys to rotate the falling block", "Press space bar to quickly drop the block", "Press play to play!"]
  end
  it "should return a string of instrutions" do
    puts last_response.body
    expect(last_response.body).to eq(@helptext.to_json)
  end
end


# describe 'GET /highscore' do
#   before do
#     5.times do
#       @user = FactoryGirl.create :user
#       rand(10).times{
#         @score = FactoryGirl.create :score, :user => @user
#       }
#     end
#     get "/highscore"
#   end

#   it "should return all high scores" do
#     # puts last_response.body
#     expect(last_response.body).to eq(Score.all.sort.first(10).to_json)
#   end
# end

# describe "GET user/:id/highscore" do
#   before do
#     @new_user = FactoryGirl.create :user
#     rand(6).times{
#       @new_score = FactoryGirl.create :score, :user => @user
#     }
#     # puts @user.scores
#     get "/user/#{@new_user.id}/highscore"
#   end
#   it "should be a string" do
#     expect(last_response.body).to be_kind_of(String)
#   end
#   it "is this user's highest score" do
#     puts last_response.body
#     expect(last_response.body).to eq(User.scores.sort.first)
#   end
# end

describe 'GET /score' do
  before do
    5.times do
      @user = FactoryGirl.create :user
      rand(10).times{
        @score = FactoryGirl.create :score, :user => @user
      }
    end
    global = {}

    top_scores = Score.all.order('score DESC').first(10)
    top_scores.each do |item|
      key = User.find_by(id: item.user_id).name
      val = item.score
      global[key] = val
    end

    user = User.find(4) #FOR TESTING PURPOSES ONLY
    latest_score = user.scores.last.to_json
    users_highest_score = user.scores.order("score DESC").first.to_json

    ranked_array = Score.all.order("score DESC")
    your_ranking = ranked_array.find_index(Score.find_by_id(user.id))
    your_ranking.to_json

    @score = {top: global, latest_score: latest_score, high_score: users_highest_score, rank: your_ranking}

    get "/score"
  end

  it "should return all high scores" do
    puts last_response.body
    expect(last_response.body).to eq(@score.to_json)
  end
end