import express from 'express';
import { ingresarPersona, getAllPersonas } from '../controller/personaController.js';
const rotuer = express.Router();

rotuer.post('/persona', ingresarPersona);
rotuer.get('/persona', getAllPersonas);

export const RouterPer = rotuer;