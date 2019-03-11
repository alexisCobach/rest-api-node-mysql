const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');


// GET all Employees
router.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });
  // GET An Employee
router.get('/employees/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM employees WHERE idEmpleado = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });   

  router.post('/employees/post', (req,res) => {
      const { NombreEmpleado, SalarioEmpleado} = req.body;
        console.log(req.body)
      
const query = `call spInsEmpleados (?, ?); `;
mysqlConnection.query(query, [NombreEmpleado, SalarioEmpleado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employeed Saved'});
    } else {
      console.log(err);
    }
  });
  });

  router.put('/:id', (req, res) => {
      const { NombreEmpleado, SalarioEmpleado} = req.body;
      const { idEmpleado } = req.params;
      const query = 'call employeeAddOrEdit(?,?,?)';
      mysqlConnection.query(query, [idEmpleado, NombreEmpleado, SalarioEmpleado], (err, rows, fields) => {
          if(!err){
              res.json({status: 'Employee Updated'});
          }else{
              console.log(err);
          }
      })
  })
module.exports = router;