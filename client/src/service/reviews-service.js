import $api from "../http";

export default class ReviewsService{
    static async createReviews(message, userId){
        return $api.post("/reviews", {message, userId})
        .then(res=>res.data)
    }
    static async updateReviews(id, isСonfirmed){
        return $api.put(`/reviews/${id}`, {isСonfirmed})
        .then(res=>res.data)
    }
    static async getReviews(){
        return $api.get("/reviews")
    }
    static async getReview(id){
        return $api.get(`/review/${id}`)
    }
}