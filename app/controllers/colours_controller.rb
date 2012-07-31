class ColoursController < ApplicationController
  respond_to :json

  def index
    respond_with Colour.scoped
  end

  def show
    respond_with Colour.find(params[:id])
  end

  def create
    @colour = Colour.create(params[:colour])
    @colour.save
    respond_with @colour
  end

  def update
    @colour = Colour.find(params[:id])
    @colour.update_attributes(params[:colour])
    respond_with @colour
  end

  def destroy
    @colour = Colour.find(params[:id])
    @colour.destroy
    respond_with @colour
  end
end
