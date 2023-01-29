class ListingsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        listings = Listing.all
        render json: listings
    end

    def show
        listing = Listing.find(params[:user_id])
        render json: listing
    end

    def create
        listing = Listing.create!(listing_params)
        render json: listing, status: :created
    end

    def update
        listing = Listing.find(params[:user_id])
        Listing.update!(listing_params)
        render json: listing, status: 202
    end

    def destroy
        listing = Listing.find(params[:user_id])
        listing.destroy
        head :no_content
    end

    private

    def listing_params
        params.permit(:user_id, :earing_id, :price)
    end
    
    def render_unproccesable_entity_response(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Listing Not Found"}, status: :not_found
    end

end
