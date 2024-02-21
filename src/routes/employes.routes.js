import { Router } from "express";
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";
const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployee);

router.put('/employees', updateEmployee);

router.delete('/employees', deleteEmployee);

export  default router;