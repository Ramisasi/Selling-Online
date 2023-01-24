import { userModel } from '../../../Conntion/Model/Users.js'
import { Op } from 'sequelize'

export const AddUsers = async (req, res, next) => {
    try {
        const { FirstName, LastName, Email, Password, Phone, Age } = req.body
        const NewUser = await userModel.create({
            FirstName,
            LastName,
            Email,
            Password,
            Phone,
            Age,
        })
        res.json({ message: "Done", NewUser })
    } catch (err) {
        if (err?.original?.errno == 1062) {
            res.json({ message: "Email exist" })
        } else {
            res.json({ message: "ctach error", err })
        }

    }
}

export const SigninUser = async (req, res, next) => {
    try {
        const { Email, Password } = req.body
        const ChekUser = await userModel.findOne({
            attributes: ['UserID', 'FirstName'],
            where: {
                Email,
                Password
            }
        })
        if (ChekUser) {
            res.json({ message: "Done", ChekUser })

        } else {
            res.json({
                message:
                    "in-valid email or password", ChekUser
            })
        }
    } catch (error) {
        res.json({ message: "ctach error", error })

    }

}

export const UpdateUser = async (req, res) => {
    try {
        const { UserID } = req.params;
        const { FirstName, LastName, Email, Password, Phone, Age } = req.body
        const user = await userModel.update({
            FirstName,
            LastName,
            Email,
            Password,
            Phone,
            Age,

        },
            {
                where: {
                    UserID
                }
            })
        if (user[0] == 1) {
            res.json({ message: "Done", user })

        } else {
            res.json({ message: "in-valid account" })

        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }
}

export const DeleteUser = async (req, res) => {
    try {
        const { UserID } = req.params
        const ChekDeleted = await userModel.destroy({
            where: {
                UserID
            }
        })
        if (ChekDeleted) {
            res.json({ message: "Done", ChekDeleted })
        } else {
            res.json({ message: "In-valid account" })

        }
    } catch (error) {
        res.json({ message: "catch error", error })

    }
}

export const GetUserByID = async (req, res) => {
    try {
        const { UserID } = req.params;
        const user = await userModel.findOne({
            attributes: ['UserID', 'FirstName', 'LastName', 'Email'],
            where: {
                UserID
            }
        })
        if (user) {
            res.json({ message: "Done", user })

        } else {
            res.json({ message: "In-valid account" })

        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }
}

export const GetUsers = async (req, res, next) => {
    const { FirstName } = req.query
    const GetUser = await userModel.findAll({
        where: {
            FirstName: {
                [Op.like]: `${FirstName}%`
            }
        }
    })
    res.json({ message: "User Page", GetUser })
}

export const StartNameUsers = async (req, res, next) => {
    const { StartName } = req.query
    const GetUser = await userModel.findAll({
        where: {
            [Op.or]: [{ FirstName: { [Op.like]: `${StartName}%` } }, { LastName: { [Op.like]: `${StartName}%` } }]
        }
    })
    res.json({ message: "User Page", GetUser })
}

export const ContainUsers = async (req, res, next) => {
    const { Contain } = req.query
    const GetUser = await userModel.findAll({
        where: {
            [Op.or]: [{ FirstName: { [Op.like]: `%${Contain}%` } }, { LastName: { [Op.like]: `%${Contain}%` } }]
        }
    })
    res.json({ message: "User Page", GetUser })
}

export const GreaterThanUsers = async (req, res, next) => {
    const { Age } = req.query
    const GetUser = await userModel.findAll({
        where: {
            Age: { [Op.gt]: Age }
        }
    })
    res.json({ message: "User Page", GetUser })
}

export const GreaterFirstnameAndAgeUsers = async (req, res, next) => {
    const { FirstName,Age } = req.query
    const GetUser = await userModel.findAll({
        where: {
            [Op.and]:
                [
                    { FirstName: { [Op.like]: `%${FirstName}%` } },
                    { Age: { [Op.gte]: Age} }
                ]

        }
    })
    res.json({ message: "User Page", GetUser })
}


