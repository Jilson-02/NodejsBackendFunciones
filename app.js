import express from 'express';
import { sequelize } from './db/conexion.js';
import { persona } from './model/persona.js';
import { categoria } from './model/categoria.js';
import { RouterPer } from './router/personarouter.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', RouterPer);

const conexion = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        console.log('Conexión a la base de datos exitosa');

        app.listen(PORT, ()=>{
            console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
conexion();
