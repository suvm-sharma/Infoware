const express = require('express');
const employeeController = require('../controller/contactController');

const router = express.Router();

router.get('/employees', employeeController.getAllEmployee);
router.post('/employeeContact', employeeController.createEmployee);

router
  .route('/:id')
  .get(employeeController.getEmployee)
  .delete(employeeController.deleteEmployee)
  .patch(employeeController.updateEmployee);

module.exports = router;
