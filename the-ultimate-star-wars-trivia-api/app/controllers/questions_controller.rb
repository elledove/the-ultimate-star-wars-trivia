class QuestionsController < ApplicationController

    def index 

        render :json => Question.all, :include => :theme
    end
end
