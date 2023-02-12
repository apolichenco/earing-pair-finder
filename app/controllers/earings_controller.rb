class EaringsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response

    def index
        earings = Earing.all
        render json: earings
    end

    def create
        earing = Earing.save!(earing_params)
        # earing.shape.capitalize()
        # earing.color.capitalize()
        # earing.save
        render json: earing, status: :created
    end

    private

    def earing_params
        params.permit(:color, :shape)
    end
    
    def render_unproccesable_entity_response(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
