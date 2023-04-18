import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
	const title = 'La maison jungle'
	return (
        <header className="lmj-banner">
            <img src={logo}
                 alt='la maison jungle'
                 className='lmj-logo'/>
            <h1>{title}</h1>
        </header>
        
    )
}

export default Banner
