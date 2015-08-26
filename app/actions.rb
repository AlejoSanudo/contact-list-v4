# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  Contact.all.to_json
end

post '/contacts/add' do

end
post '/contacts/edit' do
end

post 'contacts/search' do
end