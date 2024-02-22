class KeybladesController < ApplicationController
  before_action :set_keyblade, only: [:show, :update, :destroy]

  # GET /keyblades
  def index
    @keyblades = Keyblade.all
    render json: @keyblades
  end

  # GET /keyblades/1
  def show
    render json: @keyblade
  end

  # POST /keyblades
  def create
    @keyblade = Keyblade.new(keyblade_params)
    if @keyblade.save
      render json: @keyblade, status: :created
    else
      render json: @keyblade.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /keyblades/1
  def update
    if @keyblade.update(keyblade_params)
      render json: @keyblade
    else
      render json: @keyblade.errors, status: :unprocessable_entity
    end
  end

  # DELETE /keyblades/1
  def destroy
    @keyblade.destroy
  end

  private
    def set_keyblade
      @keyblade = Keyblade.find(params[:id])
    end

    def keyblade_params
      # Permit the attributes of an keyblade that can be changed by a user
      params.require(:keyblade).permit(:name, :strength, :magic, :abilities, :location, :price, :synthesis)
    end
end
