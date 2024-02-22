class ShieldsController < ApplicationController
  before_action :set_shield, only: [:show, :update, :destroy]

  # GET /shields
  def index
    @shields = Shield.all
    render json: @shields
  end

  # GET /shields/1
  def show
    render json: @shield
  end

  # POST /shields
  def create
    @shield = Shield.new(shield_params)
    if @shield.save
      render json: @shield, status: :created
    else
      render json: @shield.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shields/1
  def update
    if @shield.update(shield_params)
      render json: @shield
    else
      render json: @shield.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shields/1
  def destroy
    @shield.destroy
  end

  private
    def set_shield
      @shield = Shield.find(params[:id])
    end

    def shield_params
      # Permit the attributes of an shield that can be changed by a user
      params.require(:shield).permit(:name, :strength, :fire, :blizzard, :thunder, :water, :aero, :dark, :abilities, :location, :price, :synthesis)
    end
end
