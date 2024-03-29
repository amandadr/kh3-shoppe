class ItemsController < ApplicationController

  before_action :set_item, only: [:show, :update, :destroy]

  # GET /items
  def index
    @items = Item.all
    render json: @items
  end

  # GET /items/1
  def show
    render json: @item
  end

  # POST /items
  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item, status: :created
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      # Permit the attributes of an item that can be changed by a user
      params.require(:item).permit(:name, :description, :chests, :locations, :price, :synth) 
    end
end
