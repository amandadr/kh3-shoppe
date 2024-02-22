class ArmorController < ApplicationController
  before_action :set_armor, only: [:show, :update, :destroy]

  # GET /armor
  def index
    @armor = Armor.all
    render json: @armor
  end

  # GET /armor/1
  def show
    render json: @armor
  end

  # POST /armor
  def create
    @armor = Armor.new(armor_params)
    if @armor.save
      render json: @armor, status: :created
    else
      render json: @armor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /armor/1
  def update
    if @armor.update(armor_params)
      render json: @armor
    else
      render json: @armor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /armor/1
  def destroy
    @armor.destroy
  end

  private
    def set_armor
      @armor = Armor.find(params[:id])
    end

    def armor_params
      # Permit the attributes of an armor that can be changed by a user
      params.require(:armor).permit(:name, :defense, :fire, :blizzard, :thunder, :water, :aero, :dark, :abilities, :location, :price, :synthesis)
    end
end
