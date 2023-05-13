const userService = require("../service/user-service")

class UserController {
    async registration(req, res) {
        try {
            const { email, name, password, role } = req.body
            const userData = await userService.registration(email, name, password, role)
            return res.json(userData)
        } catch (error) {
            console.log(error)
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body
            const userData = await userService.login(email, password)
            return res.json(userData)
        } catch (error) {
            console.log(error)

        }
    }

    async getUsers(req, res, next) {
        try {
            const usersData = await userService.getUsers()
            res.json(usersData)
        } catch (error) {
            console.log(error)
        }
    }
    async getUser(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                console.log("ID не передан")
            }
            const usersData = await userService.getUser(id)
            res.json(usersData)
        } catch (error) {
            console.log(error)
        }
    }

}




module.exports = new UserController()