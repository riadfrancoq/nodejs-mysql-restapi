import express, { json } from "express";
import employeesRoutes from './routes/employes.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use('/api/',employeesRoutes);
app.use(indexRoutes);

app.listen(3000);
console.log("Server running on port 3000")