import Link from 'next/link'
import { useRouter } from 'next/router'

function Home(params) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/product')
    }
    return (<div>
        <h1>Home Page</h1>
        <button onClick={handleClick}>
            Place Orders (Navigate programatically on button click)
        </button>
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