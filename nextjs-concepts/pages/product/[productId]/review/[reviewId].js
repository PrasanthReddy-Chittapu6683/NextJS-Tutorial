import { useRouter } from 'next/router'

const Review = () => {
    const router = useRouter();
    const { productId, reviewId } = router.query;
    return (
        <h3>Review {reviewId} for Product Details {productId} </h3>
    )
}

export default Review