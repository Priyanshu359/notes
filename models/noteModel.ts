import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Note extends Model {
    public id!: number;
    public title!: string;
    public content!: string;
    public readonly createdAt!: Date;
}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        tableName: "notes_table",
        sequelize,
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: false,
    }
);

export default Note;