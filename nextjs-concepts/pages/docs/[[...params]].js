import { useRouter } from 'next/router'

const Docs = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    if (params.length === 1) {
        return (
            <h2>Viewing docs for feature {params[0]}</h2>
        )
    }
    if (params.length === 2) {
        return (
            <h2>Viewing docs for feature {params[0]} and concept {params[1]}</h2>
        )
    }
    return (

        <h2>Docs Home page</h2>
    )
}

export default Docs