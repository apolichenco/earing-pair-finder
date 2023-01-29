class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:name, :password)
    end
    
    def render_unproccesable_entity_response(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
