class JokesController < ApplicationController

    def index
      jokes = Joke.all
      render :json => jokes

    end
end

    # def create


    # end

    # def edit


    # end

    # def update


    # end


    # def destory


    # end


