import { DataTypes } from 'sequelize'
import { sequelizeCon } from '../Conntion.js'

export const userModel = sequelizeCon.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    FirstName: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Phone: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    Age: {
        type: DataTypes.INTEGER
    }
})