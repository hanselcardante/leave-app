module Api
	class EmployeesController < ApplicationController
		def show
			params.permit(:id)
			employee = Employee.find(params[:id])
			render json: EmployeeSerializer.new(employee, root: false).to_json, status: :ok
		end
	end
end
