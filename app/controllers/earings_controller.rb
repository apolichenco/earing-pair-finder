class EaringsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response

    def index
        earings = Earing.all
        render json: earings
    end

    def create
        return render json: { errors: ["You are not logged in"]}, status: :unauthorized unless session.include? :user_id
        earing = Earing.create!(earing_params)
        render json: earing, status: :created
    end

    private

    def earing_params
        params.permit(:color, :shape)
    end
    
    def render_unproccesable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
