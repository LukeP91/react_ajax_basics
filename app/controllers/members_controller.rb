class MembersController < ApplicationController
  def index
    @members = Member.all.map{ |member| { firstname: member.first_name, lastname: member.last_name } }
  end
end
