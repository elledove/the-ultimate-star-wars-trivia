class QuestionsController < ApplicationController

    def index 

        render :json => Question.all, :include => :theme
    end

    def show 
        question = Question.find_by(id: params[id])
        render :json => question
    end
end
