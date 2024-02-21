import express, { json } from "express";
import employeesRoutes from './routes/employes.routes.js';
import indexRoutes from './routes/index.routes.js';
const app = express();

app.use(express.json());
app.use('/api/',employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next)=> {
    res.status(404).json({
        message: "Not found"
    });
});


export default app;