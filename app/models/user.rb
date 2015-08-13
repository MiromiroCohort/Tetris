class User < ActiveRecord::Base
  has_many :scores
  validates :email, uniqueness: true
  validates :name, uniqueness: {case_sensitive: false}

 include BCrypt

  def password
    @password ||= Password.new(digest)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.digest = @password
  end

end
