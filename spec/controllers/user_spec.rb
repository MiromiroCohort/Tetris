require 'spec_helper'
require_relative '../factories.rb'


describe "User controller" do
  before do
    User.destroy_all
    Score.destroy_all
  end

  describe "creates a new user" do
    before do
      @valid_params = FactoryGirl.attributes_for :user
    end

    it "adds a user to the database" do
      post "/users", @valid_params
      expect( User.find_by( @valid_params ) ).to be_truthy
    end
  end


end
