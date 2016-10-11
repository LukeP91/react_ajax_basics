class MembersController < ApplicationController
  def index
    @members = Member.all.map{ |member| { name: "#{member.first_name} #{member.last_name}" } }
    respond_to do |format|
      format.json { render json: @members }
      format.html
    end
  end
end
