class LeaveCredit < ApplicationRecord
	belongs_to :user
	belongs_to :leave_type

	MONTH_OF_JANUARY = Date.parse('01-01')
	MONTH_OF_JUNE = Date.parse('06-01')
	MONTH_OF_JULY = Date.parse('07-01')
	MID_OF_SEPTEMBER = Date.parse('09-15')
	MAX_CREDITS = {
		'VL' => 12,
		'SL' => 8,
		'PL' => 2
	}

	def calculate_value
		employee = Employee.find(user.id)
		earned_credits = (Date.today - last_increment).to_i / (dividing_factor * 30).to_i

		do_updates_if_any(earned_credits)

		if (leave_type.code.eql?(LeaveType::PERSONAL))
			if employee.year_started.eql?(Date.today.year) and !last_increment.eql?(Date.today.year)
        if employee.month_day_started.between?(MONTH_OF_JANUARY, MONTH_OF_JUNE)
          credits = MAX_CREDITS[LeaveType::PERSONAL]
        elsif employee.month_day_started.between?(MONTH_OF_JULY, MID_OF_SEPTEMBER)
          credits = MAX_CREDITS[LeaveType::PERSONAL] * 0.5
        else
        	credits = 0
        end
      	update_attributes(:value => credits, :last_increment => Date.today)
      end
		end
	end

	def do_updates_if_any(earned_credits)
		if (leave_type.code.eql?(LeaveType::PERSONAL))
			unless (Date.today.year.eql?(last_increment.year))
    		update_attributes(:value => MAX_CREDITS[LeaveType::PERSONAL], :last_increment => Date.today)
    	end
		else
			if (earned_credits > 0)
				credits = value + earned_credits
				if (credits > MAX_CREDITS[leave_type.code])
					credits = MAX_CREDITS[leave_type.code]
				end
				elapsed_days = (Date.today - last_increment).to_i % (dividing_factor * 30).to_i
				last_increment = Date.today - elapsed_days
				update_attributes(:value => credits, :last_increment => last_increment)
			end
		end
	end
end
