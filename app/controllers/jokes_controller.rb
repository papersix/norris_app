class JokesController < ApplicationController

    def index
      jokes = Joke.all
      render :json => jokes

    end

    def show
      joke = Joke.find(params[:id])
      render :json => joke
    end

    def create
      @joke = Joke.create({
                      :joke => params[:joke],
                    })
      render :json => @joke
    end
end


    # def edit


    # end

    # def update


    # end


    def destory


    end


