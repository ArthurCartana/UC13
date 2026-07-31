import { Request, Response } from "express";
import { User, users } from "../models/User";

export class UserController {

    createUser(req:Request, res:Response) {
        const { name, age, email, password } = req.body

        if(!name || !email || !age || !password) {
            return res.status(400).json({ message: 'name, age, email and password are necessary!' })
        }

        const id = users.length === 0 ? 1 : Math.max(users[users.length].id) +1

        const user = new User(id, name, age, email, password)

        users.push(user)

        return res.status(201).json({ message: 'User created with success' })
    }

    getUser(req:Request, res:Response) {
        return res.status(200).json(users)
    }

    updateUser(req:Request, res:Response) {
        const id = Number(req.params.id)
        const {name, age, email, password} = req.body

        if(!id || !name || !email || !age || !password) {
            return res.status(400).json({ message: 'id, name, age, email and password are necessary!' })
        }

        const user = users.find((user) => user.id === id)

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        user.name = name
        user.age = age
        user.email = email
        user.password = password

        const updateUser = {...user, password}

        return res.status(200).json({ 
            message: 'User update with success',
            user:updateUser
         })
    
    }

    deleteUser(req:Request, res: Response) {
        const id = Number(req.params.id)

        if(!id) {
            return res.status(400).json({ message: 'Id are necessary' })
        }

        const user = users.find((user) => user.id === id)

        if(!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        
    }

}