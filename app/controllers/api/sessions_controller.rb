class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: {errors: ["Invalid username or password."]}, status: 422
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: {errors: ["No user to log out!"]}, status: 404
    end
  end
end
