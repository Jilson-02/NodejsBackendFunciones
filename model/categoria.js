import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { persona } from "./persona.js";

export const categoria = sequelize.define("categoria", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    timestamps: false,
});

categoria.hasMany(persona, { foreignKey: "categoria_id" });
persona.belongsTo(categoria, { foreignKey: "categoria_id" });
