import express from 'express';
import connectDB from './db';  // Asumiendo que `connectDB` es exportado desde tu archivo `db.js`
import userRoutes from './routes/userRoutes';
import historialRoutes from './routes/historialRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();  // Asumiendo que `connectDB` es una función que conecta a la base de datos

app.use(express.json());  // Middleware para parsear el cuerpo de las solicitudes como JSON

app.use('/users', userRoutes);
app.use('/historial', historialRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
