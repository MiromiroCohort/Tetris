require 'spec_helper'
require_relative '../factories.rb'

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


describe "GET / highscore" do
  before do
    @user = FactoryGirl.create :user
    rand(6).times{
      @score = FactoryGirl.create :score, :user => @user
    }
    get "user/#{@user.id}/highscore"
  end
  it "should be an string" do
    expect (last_response.body).to be_kind_of(String)
  end
  it "is this user's highest score" do
    expect (last_response.body). to eq(User.scores.sort.first)
  end
end