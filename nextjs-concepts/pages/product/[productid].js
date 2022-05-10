import { useRouter } from 'next/router'


// Dynamic Route rendering
const productDetail
    = () => {
        const router = useRouter();
        const pId = router.query.productid
        return (
            <h3> Product Details - {pId}
            </h3>
        )
    }

export default productDetail
