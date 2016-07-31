class JokesgetController < ApplicationController

  def index
    url="http://api.icndb.com/jokes/random/5"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body

  end



end
