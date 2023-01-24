import { DataTypes } from 'sequelize'
import { sequelizeCon } from '../Conntion.js'

export const ProductModel = sequelizeCon.define('Product', {
    ProductID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    ProductTitle: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    ProductDescription: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    ProductPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
})