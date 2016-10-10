class MembersController < ApplicationController
  def index
    @members = Member.all.map{ |member| { name: "#{member.first_name} #{member.last_name}" } }
  end
end
