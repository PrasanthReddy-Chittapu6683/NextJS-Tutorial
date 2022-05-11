import Link from 'next/link'

const productList = ({ productId = 100 }) => {

    return (
        <>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Back to Home</a>
                    </Link>
                </li>
            </ul>
            <h3>
                <Link href='/product/1'>
                    <a>Product - 1</a>
                </Link>
            </h3>
            <h3>
                <Link href='/product/2'>
                    <a>Product - 2</a>
                </Link></h3>
            <h3>
                <Link href='/product/3' replace>
                    <a>Product - 3 - (using replace prop which redirects to home page)</a>
                </Link>
            </h3>
            <h3>
                <Link href={`/product/${productId}`}>
                    <a>Product - {productId}</a>
                </Link>
            </h3>
        </>
    )
}

export default productList