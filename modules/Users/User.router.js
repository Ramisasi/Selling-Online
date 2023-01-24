import { Router } from 'express'
import { AddUsers, GetUsers, SigninUser, UpdateUser ,DeleteUser, GetUserByID, StartNameUsers, ContainUsers, GreaterThanUsers, GreaterFirstnameAndAgeUsers} from './controller/users.js';

const router = Router();


router.post('/AddUser', AddUsers)

router.post('/SigninUser', SigninUser)

router.patch("/UpdateUser/:UserID", UpdateUser)

router.delete("/DeleteUser/:UserID", DeleteUser)

router.get("/GetUserByID/:UserID", GetUserByID)

router.get('/GetUsersStartsWith', GetUsers)

router.get('/StartNameUsers', StartNameUsers)

router.get('/ContainUsers', ContainUsers)

router.get('/GreaterThanUsers', GreaterThanUsers)

router.get('/GreaterFirstnameAndAgeUsers', GreaterFirstnameAndAgeUsers)


export default router