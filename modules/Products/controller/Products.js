import { ProductModel } from '../../../Conntion/Model/Products.js'
import { userModel } from '../../../Conntion/Model/Users.js'
import { Op } from 'sequelize'


export const AddProduct = async (req, res, next) => {
   try {
      const { ProductTitle, ProductDescription, ProductPrice, UserUserID } = req.body

      const ChekeUser = await userModel.findOne({
         where: {
            UserID: UserUserID
         }
      })
      if (ChekeUser) {
         const NewProduct = await ProductModel.create({
            ProductTitle,
            ProductDescription,
            ProductPrice,
            UserUserID
         })
         res.json({ message: "Done", NewProduct })
      }
   }
   catch (err) {
      res.json({ message: "catch error", err })

   }
}

export const UpdateProduct = async (req, res) => {
   try {
      const { ProductID } = req.params;
      const { ProductTitle, ProductDescription, ProductPrice, UserUserID } = req.body
      const ChekeUser = await userModel.findOne({
         where: {
            UserID: UserUserID
         }
      })
      if (ChekeUser) {
      const UpProduct = await ProductModel.update({
         ProductTitle,
         ProductDescription,
         ProductPrice,
         UserUserID
      },
         {
            where: {
               ProductID
            }
         })
         res.json({ message: "Done", UpProduct })
      }
   }
   catch (error) {
      res.json({ message: "catch error", error })

   }
}

export const DeleteProduct = async (req, res) => {
   try {
      const { ProductID } = req.params
      const ChekDeleted = await ProductModel.destroy({
         where: {
            ProductID
         }
      })
      if (ChekDeleted) {
         res.json({ message: "Done", ChekDeleted })
      } else {
         res.json({ message: "In-valid Product" })

      }
   } catch (error) {
      res.json({ message: "catch error", error })

   }
}

export const GetProductByID = async (req, res) => {
   try {
       const { ProductID } = req.params;
       const Product = await ProductModel.findOne({
           where: {
            ProductID
           },
           include: [{
            model: userModel,
            attributes: ['FirstName', 'LastName','Email']
        }]
       })
       if (Product) {
           res.json({ message: "Done", Product })

       } else {
           res.json({ message: "In-valid Product" })

       }
   } catch (error) {
       res.json({ message: "catch error", error })
   }
}

export const GreaterThanProduct = async (req, res, next) => {
   const { ProductPrice } = req.query
   const GetProduct = await ProductModel.findAll({
       where: {
         ProductPrice: { [Op.gt]: ProductPrice }
       }
   })
   res.json({ message: "Product Page", GetProduct })
}

export const PriceBetweenProduct = async (req, res, next) => {
   const { FirstPrice , LostPrice} = req.query
   const GetProduct = await ProductModel.findAll({
       where: {
         ProductPrice: {  [Op.between]: [FirstPrice,LostPrice] }
       }
   })
   res.json({ message: "Product Page", GetProduct })
}

export const ContainProduct = async (req, res, next) => {
   const { Contain } = req.query
   const GetProduct = await ProductModel.findAll({
       where: {
            ProductTitle: { [Op.like]: `%${Contain}%` }
       }
   })
   res.json({ message: "User Page", GetProduct })
}
