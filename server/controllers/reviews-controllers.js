const reviewsService = require("../service/reviews-service")

class ReviewsController {
    async createReviews(req, res) {
        try {
            const { message, userId } = req.body
            const reviewsData = await reviewsService.createReviews(message, userId)
            return res.json(reviewsData)
        } catch (error) {
            console.log(error)
        }
    }

    async updateReviews(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return "ID не передан"
            }
            const { isСonfirmed } = req.body

            const reviewsData = await reviewsService.updateReviews(id, isСonfirmed)
            res.json(reviewsData)
        } catch (error) {
            console.log(error)

        }
    }

    async getReviews(req, res, next) {
        try {
            const reviewsData = await reviewsService.getReviews()
            res.json(reviewsData)
        } catch (error) {
            console.log(error)
        }
    }
    async getReview(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                console.log("ID не передан")
            }
            const reviewsData = await reviewsService.getReview(id)
            res.json(reviewsData)
        } catch (error) {
            console.log(error)
        }
    }

}




module.exports = new ReviewsController()