module Api
	class LeaveCommentsController < ApplicationController
		def create
			leave = Leave.find(params[:leave_id])

			unless params[:comment_text].nil?
				leave_comment = LeaveComment.new
				leave_comment.comment_text = params[:comment_text]
				leave_comment.user_id = params[:user_id]
				leave_comment.leave_id = leave.id

        unless leave_comment.save
          render json: {
            status: 'ERROR'
          }, status: :unprocessable_entity
        end
      end
      
    	render json: {
          status: 'SUCCESS'
      }, status: :ok
		end
	end
end
