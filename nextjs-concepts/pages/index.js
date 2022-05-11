import Link from 'next/link'

function Home(params) {
    return (<div>
        <h1>Home Page</h1>
        <ul>
            <li>
                <Link href='/blog'>
                    <a> Blogs</a>
                </Link>
            </li>
            <li>
                <Link href='/product'>
                    <a> Products</a>
                </Link>
            </li>
        </ul>


    </div>
    )


}


export default Home