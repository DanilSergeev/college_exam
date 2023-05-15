const Router = require("express").Router
const router = new Router()
const userController = require("../controllers/user-controllers")
const reviewsControllers = require("../controllers/reviews-controllers")

router.post('/login', userController.login)
router.post('/register', userController.registration)
router.get('/users', userController.getUsers)
router.get('/user/:id', userController.getUser)

router.post('/reviews', reviewsControllers.createReviews)
router.put('/reviews/:id', reviewsControllers.updateReviews)
router.get('/reviews', reviewsControllers.getReviews)
router.get('/review/:id', reviewsControllers.getReview)



module.exports = router