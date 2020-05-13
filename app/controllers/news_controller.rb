class NewsController < ApplicationController
  def create
    if News.create(news_params)
      redirect_to user_path(current_user.id)
    end
  end

  def destroy
    @news = News.find(params[:id])
    @news.destroy
  end

private

  def news_params
    params.require(:news).permit(:date ,:content).merge(user_id: current_user.id)
  end
end