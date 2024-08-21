import { categoria } from "../model/categoria.js"; //Para mostar las personas necesitas importar el modelo 
import { persona } from "../model/persona.js"; 


export const ingresarPersona = async (req, res) => {
    try {
        const { tipo, stado, categoria_id } = req.body;

        // Validación de campos requeridos
        if (!tipo || categoria_id === undefined) { // Nota: stado no es obligatorio, puede ser undefined
            return res.status(400).json({ message: 'Los campos tipo y categoria_id son obligatorios' });
        }

        // Validación adicional para stado (opcional)
        if (stado !== undefined && typeof stado !== 'boolean') {
            return res.status(400).json({ message: 'El campo stado debe ser un valor booleano' });
        }

        // Crear una nueva persona
        const nuevaPersona = await persona.create({
            tipo,
            stado: stado !== undefined ? stado : true, // Usa el valor por defecto si stado no se proporciona
            categoria_id
        });

        res.status(201).json({ message: 'Persona creada correctamente', persona: nuevaPersona });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllPersonas = async (req, res) => {
    try {
        // Obtener todas las personas
        const personas = await persona.findAll({
            include: { // Opcional: incluir datos relacionados (ej. categoría)
                model: categoria,
                attributes: ['id', 'descripcion'] // Incluye solo los atributos necesarios
            }
        });

        res.status(200).json({ message: 'Personas obtenidas correctamente', personas });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};