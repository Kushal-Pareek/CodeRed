class UsersController < ApplicationController
  skip_before_action :ensure_user_logged_in
  # skip_before_action :verify_authenticity_token

  def new
    render "new"
  end

  def index
    # render plain: User.all.map { |user| user.to_pleasant_string }.join("\n")
    render "index"
  end

  def create
    first_name = params[:first_name]
    last_name = params[:last_name]
    email = params[:email]
    password = params[:password]
    new_user = User.new(
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    )

    if new_user.save
      flash[:msg] = "Account successfully created! Please Sign-In"
      redirect_to "/"
    else
      flash[:error] = new_user.errors.full_messages.join(", ")
      redirect_to "/"
    end

    # response_text = "A new user has been created with id #{new_user.id}"
    # render plain: response_text
  end

  def login
    email = params[:email]
    password = params[:password]
    if User.find_by(email: email, password: password)
      render plain: "true"
    else
      render plain: "false"
    end
  end
end
