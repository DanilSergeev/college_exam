const { User } = require("../models/models")
const bcrypt = require('bcrypt');


class UserService {
    async registration(email, name, password, role = "USER") {
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            console.log(`Пользователь с таким email существует - ${email}`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({ email, name, password: hashPassword, role })
        return { user }
    }

    async login(email, password) {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            console.log(`Пользователя не существует - ${email}`)
        }
        const isPasswordEquals = await bcrypt.compare(password, user.password)
        if (!isPasswordEquals) {
            console.log(`Не верный пароль`)
        }
        return { user }
    }

    async getUsers() {
        const usersData = await User.findAll({ attributes: ['id', 'email', 'role'] })
        return usersData
    }
    async getUser(id) {
        const usersData = await User.findOne({ where: { id }, attributes: ['id', 'email', 'role'] })
        return usersData
    }

}


module.exports = new UserService()