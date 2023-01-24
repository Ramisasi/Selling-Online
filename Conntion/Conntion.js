import { Sequelize } from 'sequelize'
const sequelizeCon = new Sequelize('assginment_five_db', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})
const connectDB = async () => {

    return await sequelizeCon.sync({ alter: true }).then((result) => {
        console.log(`DB Connected `);
    }).catch((err) => {
        console.log(`fail to connect DB ${err}`);
    })
}
export {
    sequelizeCon,
    connectDB
}