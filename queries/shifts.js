const knex = require('./db')

const getEmployeeShifts = (employee_id) => {
  return knex('shifts')
    .select('shifts.id AS shift_id', 'shifts.date', 'shifts.start', 'employees.first_name')
    .join('employees_shifts', 'shift_id', '=', 'shifts.id')
    .join('employees', "employees.id", "=", employee_id)
    .where('employees_shifts.employee_id', employee_id )
}

const updateEmployeesShifts = (shift_id, employee_id, userId) => {
return knex('employees_shifts')
  .where('shift_id', shift_id)
  .andWhere('employee_id', employee_id)
  .update({ employee_id: userId })
  .returning('*')
}

module.exports = { 
  getEmployeeShifts,
  updateEmployeesShifts,
}