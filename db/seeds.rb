# This file should contain all the record creation needed to
# seed the database with its default values.
# The data can then be loaded with the rails db:seed command
# (or created alongside the database with db:setup).
#

#If they are not in the database yet, do rails db:seed.
#User.create({
#    first_name: 'John',
#    last_name: 'Smith',
#    email: 'joe_smith1607@chromedia.com',
#    password: '19@pocahontas#95',
#    employment_date: '1996-01-01'
#})
<<<<<<< HEAD
=======
UserRoleType.create({
    role_type: 'regular_employee'
})
UserRoleType.create({
    role_type: 'admin'
})
UserRoleType.create({
    role_type: 'superior'
})
UserRole.create({
    user_id: 1,
    user_role_type_id: 2
})


# Notification.create!(
#   text: "your request has been declined",
#   trackable_id: 1,
#     status: "unread",
#     recipient_id: 1,
#     sender_id: 2,
# frozen_string_literal: true
# )


# This file should contain all the record creation needed to
# seed the database with its default values.
# The data can then be loaded with the rails db:seed command
# (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
    email: 'dummyaccount@chromedia.com',
    password: 'password',
    first_name: 'Dummy',
    last_name: 'Account',
    employment_date: Date.parse('2015-03-25')
)

User.create!(
    email: 'dummyaccount2@chromedia.com',
    password: 'password',
    first_name: 'Dummy',
    last_name: 'Account',
    employment_date: Date.parse('2015-03-25')
)

User.create!(
    email: 'dummyaccount3@chromedia.com',
    password: 'password',
    first_name: 'Dummy',
    last_name: 'Account',
    employment_date: Date.parse('2015-03-25')
)

>>>>>>> dev


UserRoleType.create({
    role_type: 'superior'
})
UserRoleType.create({
    role_type: 'admin'
})



# UserSuperior.create!(
#     superior_id: 2,
#     regular_id: 1
# )

# UserSuperior.create!(
#     superior_id: 1,
#     regular_id: 3
# )


LeaveType.create([{
    name: 'Vacation Leave',
    code: 'VL',
    description: 'Requests for time off must be made at least two (2) weeks in advance of the start of the time off, and are subject to approval.  The Company reserves the right not to approve a vacation request if it will interfere with Company operations or adversely affect coverage of job and staff requirements. Vacation Leave may not be used in succession with Personal Leave or Sick Leave.'    
},
{
    name: 'Sick Leave',
    code: 'SL',
    description: "If you are claiming sick leave, you will be required to submit a valid doctor's note confirming your absence from work was due to an illness.  Failure to submit this document may lead to your request being delayed or denied."
},
{
    name: 'Personal Leave',
    code: 'PL',
    description: ""
},
{
    name: 'Unpaid Leave',
    code: 'UL',
    description: "ATTENTION!  UNPAID LEAVE MUST BE APPROVED IN ADVANCE AND IS NOT GUARANTEED."
},
{
    name: 'Bereavement Leave',
    code: 'BL',
    description: "Full-time employees who have worked for at least three (3) months are permitted up to 5 consecutive days with pay to attend the wake and funeral of an immediate family member, which includes a spouse, child, brother, sister, parent or grandparent. Eligible employees may be permitted 2 days with pay for the death of a relative who is not an immediate member-including an aunt, uncle, first cousin, nephew, niece, brother-in-law, sister-in-law or parent-in-law. Your supervisor must approve all bereavement time, and the Company may request verification of the facts surrounding the leave and grant or deny the leave as deemed appropriate. Bereavement leave will not be paid if it occurs when the employee is on vacation, absent due to illness or injury, or not working due to a paid holiday."
},
{
    name: 'Maternity Leave',
    code: 'MatL',
    description: ""
},
{
    name: 'Paternity Leave',
    code: 'PatL',
    description: ""

}])

vl_id = LeaveType.where('code = "VL"').first.id
sl_id = LeaveType.where('code = "SL"').first.id
pl_id = LeaveType.where('code = "PL"').first.id
ul_id = LeaveType.where('code = "UL"').first.id
matl_id = LeaveType.where('code = "MatL"').first.id
patl_id = LeaveType.where('code = "PatL"').first.id
bl_id = LeaveType.where('code = "BL"').first.id
User.create(
  email: 'usersuperior@chromedia.com',
  first_name: 'User',
  sex: 'female',
  civil_status: 'single',
  last_name: 'Superior',
  password: 'password'
)

User.create(
  email: 'usersuperior2@chromedia.com',
  first_name: 'UserMale',
  sex: 'male',
  civil_status: 'single',
  last_name: 'Superior',
  password: 'password'
)

User.create(
  email: 'regularemployee@chromedia.com',
  first_name: 'Regular',
  last_name: 'Employee',
  sex: 'male',
  civil_status: 'married',
  employment_date: Date.parse('2015-03-25'),
  password: 'password'
)

regular = User.where('email = "regularemployee@chromedia.com"').first
superior = User.where('email = "usersuperior@chromedia.com"').first
superior2 = User.where('email = "usersuperior2@chromedia.com"').first

superior_role = UserRoleType.where('role_type = "superior"').first

UserRole.create(
  user_id: superior.id,
  user_role_type_id: superior_role.id
)

UserRole.create(
  user_id: superior2.id,
  user_role_type_id: superior_role.id
)



vl = LeaveType.where('code = "VL"').first
sl = LeaveType.where('code = "SL"').first
pl = LeaveType.where('code = "PL"').first

vl_sample = Leave.create(
  start_date: Date.parse('2018-07-21'),
  end_date: Date.parse('2018-07-25'),
  num_of_halfdays: 2,
  user_id: regular.id,
  leave_type_id: vl.id
)

sl_sample = Leave.create(
  start_date: Date.parse('2018-07-26'),
  end_date: Date.parse('2018-07-27'),
  num_of_halfdays: 0,
  doctor_note: true,
  user_id: regular.id,
  leave_type_id: sl.id
)

pl_sample = Leave.create(
  start_date: Date.parse('2018-07-30'),
  end_date: Date.parse('2018-07-30'),
  num_of_halfdays: 0,
  user_id: regular.id,
  leave_type_id: pl.id
)

LeavePermission.create(
  status: 0,
  leave_id: vl_sample.id,
  user_id: superior.id
)

LeavePermission.create(
  status: 0,
  leave_id: sl_sample.id,
  user_id: superior.id
)

LeavePermission.create(
  status: 0,
  leave_id: pl_sample.id,
  user_id: superior.id
)

LeaveCredit.create(
  value: 0,
  dividing_factor: 1.0,
  user_id: regular.id,
  leave_type_id: vl
)

LeaveCredit.create(
  value: 0,
  dividing_factor: 1.5,
  user_id: regular.id,
  leave_type_id: sl
)

LeaveCredit.create(
  value: 0,
  dividing_factor: 1.0,
  user_id: regular.id,
  leave_type_id: pl
)

LeaveCredit.create(
  value: 0,
  dividing_factor: 1.0,
  user_id: superior.id,
  leave_type_id: vl
)

LeaveCredit.create(
  value: 0,
  dividing_factor: 1.5,
  user_id: superior.id,
  leave_type_id: sl
)

LeaveCredit.create(
  value: 0,
  dividing_factor: 1.0,
  user_id: superior.id,
  leave_type_id: pl
)

EmployeeUsedCredit.create!([
  {:value => 13, :dividing_factor => 1, :user_id => user_id,
   :leave_type_id => vl_id},
  {:value => 6, :dividing_factor => 1.5, :user_id => user_id,
   :leave_type_id => sl_id},
  {:value => 1, :dividing_factor => 1, :user_id => user_id,
   :leave_type_id => pl_id}
])
