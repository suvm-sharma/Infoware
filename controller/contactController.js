const Employee = require('../model/employeeModel');

exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newEmployee,
      },
    });
  } catch (error) {
    res.status(200).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.getAllEmployee = async (req, res) => {
  try {
    const PAGE_SIZE = 10;
    const pageNumber = req.query.page || 1;

    const employees = await Employee.find()
      .skip((pageNumber - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE);

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: employees.length,
      data: {
        employees,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const updates = req.body;

    const employee = await Employee.findOneAndUpdate(
      { _id: employeeId },
      updates,
      { new: true } // Return the updated document
    );

    res.status(200).json({ status: 'success', data: employee });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      data: {
        employee,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
