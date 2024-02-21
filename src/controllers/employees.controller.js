import { pool } from '../db.js';


export const getEmployees = async(req, res)=> {

    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);


}

export const getEmployee = async(req, res ) => {
    const {id} = req.params;
    const [rows] = await pool.query('SELECT name, salary FROM employee WHERE id = ?',[id]);
    res.json(rows);
};

export const createEmployee =  async(req, res)=> {
    const {name, salary} = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?,?)',[name, salary]);
    console.log(req.body);
    res.send({
        id: rows.insertId,
        name, 
        salary
    });

}

export const updateEmployee =   (req, res)=> {

    res.send("Actualizando empleados ");

}

export const deleteEmployee =   (req, res)=> {

    res.send("Borrando empleados ");

}