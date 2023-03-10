class ListingsController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only: [:index]

    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        listings = Listing.all
        render json: listings, status: :created
    end

    def create
        listing = Listing.create!(listing_params)
        render json: listing, status: :created
    end

    def update
        listing = Listing.find_by(id: params[:id])
        if listing.user.id == current_user_id 
            listing.update!(listing_params)
            render json: listing, status: 202
        else
            render json: {errors: ["Not your listing"]}, status: :not_found
        end
    end

    def destroy
        listing = Listing.find(params[:id])
        if listing.user.id == current_user_id 
            listing.destroy
            head :no_content
        else
            render json: {errors: ["Not your listing"]}, status: :not_found
        end
    end

    private

    def listing_params
        params.permit(:user_id, :earing_id, :price)
    end
    
    def render_unproccesable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {errors: ["Listing Not Found"]}, status: :not_found
    end

    def authorize
        return render json: { errors: ["You are not logged in"]}, status: :unauthorized unless session.include? :user_id
    end
end
