require 'factory_girl'
require "faker"

FactoryGirl.define  do
  factory :user do
    name {Faker::Internet.user_name}
    email {Faker::Internet.email}
    digest {Faker::Internet.password(6)}
  end

  factory :score do
    score {Faker::Number.number(2)}
    user
  end



end