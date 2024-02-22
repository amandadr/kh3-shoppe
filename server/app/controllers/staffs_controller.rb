class StaffsController < ApplicationController
  before_action :set_staff, only: [:show, :update, :destroy]

  # GET /staves
  def index
    @staves = Staff.all
    render json: @staves
  end

  # GET /staves/1
  def show
    render json: @staff
  end

  # POST /staves
  def create
    @staff = Staff.new(staff_params)
    if @staff.save
      render json: @staff, status: :created
    else
      render json: @staff.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /staves/1
  def update
    if @staff.update(staff_params)
      render json: @staff
    else
      render json: @staff.errors, status: :unprocessable_entity
    end
  end

  # DELETE /staves/1
  def destroy
    @staff.destroy
  end

  private
    def set_staff
      @staff = Staff.find(params[:id])
    end

    def staff_params
      # Permit the attributes of an staff that can be changed by a user
      params.require(:staff).permit(:name, :strength, :magic, :abilities, :location, :price)
    end
end
