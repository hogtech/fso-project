import {
    BrowserRouter as Router,
    Routes, Route, Link, useNavigate, useParams
} from "react-router-dom"
const Menu = () => {
    const padding = {
        paddingRight: 5
    }
    return (
        < div >
            <Link style={padding} to="/">Tuntikalenteri</Link>
            <Link style={padding} to="/create">Lisää kurssi</Link>
            <Link style={padding} to="/signup">Rekisteröidy</Link>
        </div >
    )
}

export default Menu