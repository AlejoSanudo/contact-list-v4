class Contact < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true
  def to_s
    "ID: #{id} | First Name: #{firstname} | Last Name: #{lastname} | Email: #{email}"
  end
end