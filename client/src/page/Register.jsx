import ReviewsService from "../service/reviews-service"


const Register = () => {

    const test = async () => {
        const rec = await ReviewsService.getReviews()
        console.log(rec)
    }

    return (
        <main>
            <button onClick={() => test()}>ooo</button>
            Register
        </main>
    )
}

export default Register