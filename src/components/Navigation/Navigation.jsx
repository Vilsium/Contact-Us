import style from './Navigation.module.css'
import frame from '/images/Frame 2 1.png'

const Navigation = () => {
    return (
        <nav className={`${style.navigation} container`}>
            <div className="logo">
                <img src={frame} alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation
