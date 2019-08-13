class EmployeeSerializer < UserSerializer
  attributes :leave_credits

  def leave_credits
  	object.leave_credits
  end
end