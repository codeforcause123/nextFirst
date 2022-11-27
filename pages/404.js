import Link from 'next/link'
const Notfound = () => {
    return ( 
        <div className="not-found text-center">
            <h1 className="bold text-5xl">Ooooops...</h1>
            <h2 className="bold text-3xl">Page cannot be found.</h2>
            <p className="text-2xl">Go Back to <Link href="/" className="text-cyan-500 underline">Homepage</Link></p>
        </div>
     );
}
 
export default Notfound;