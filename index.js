import Expslib from 'express'

import ProductRouter from './modules/Products/Products.Router.js'
import UserRouter from './modules/Users/User.router.js'
import { connectDB } from './Conntion/Conntion.js'
import { userModel } from './Conntion/Model/Users.js'
import { ProductModel } from './Conntion/Model/Products.js'

const app = Expslib()
const Port = 3000
const baseUrl = '/StartMarket'

connectDB()
userModel.hasMany(ProductModel, {
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
ProductModel.belongsTo(userModel)

app.use(Expslib.json())
app.use(`${baseUrl}/Users`,UserRouter)
app.use(`${baseUrl}/Products`,ProductRouter)


app.listen(Port , ()=>{
    console.log('Server is Run ..........' , Port)
})