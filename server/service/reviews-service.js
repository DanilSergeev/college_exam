const { Reviews } = require("../models/models")


class ReviewsService {

    async createReviews(message, userId) {
        const review = await Reviews.create({ message, userId })
        return { review }
    }

    async updateReviews(id, isСonfirmed) {
        const beforeData = await Reviews.findOne({ where: { id } })
        if (!isСonfirmed) {
            isСonfirmed = beforeData.isСonfirmed
        }
        await Reviews.update(
            { isСonfirmed },
            { where: { id } }
        )

        return "Обновлено"
    }

    async getReviews() {
        const reviewsData = await Reviews.findAll()
        return reviewsData
    }
    async getReview(id) {
        const reviewsData = await Reviews.findOne({ where: { id } })
        return reviewsData
    }

}


module.exports = new ReviewsService()