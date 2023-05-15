import $api from "../http";

export default class UserService{
    static async login(email, password){
        return $api.post("/login", {email, password})
        .then(res=>res.data)
    }
    static async register(email, name, password, role = "USER"){
        return $api.post("/register", {email, name, password, role})
        .then(res=>res.data)
    }
    static async getUsers(){
        return $api.get("/users")
    }
    static async getUser(id){
        return $api.get(`/user/${id}`)
    }
}