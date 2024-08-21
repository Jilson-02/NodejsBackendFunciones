import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const persona = sequelize.define("persona", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categoria', // nombre de la tabla correspondiente
            key: 'id',
        },
    },
}, {
    timestamps: false
});
