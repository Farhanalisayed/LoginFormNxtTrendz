import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="the-cont">
      <img
        className="image"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <ul className="links">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/products" className="link">
            Products
          </Link>
        </li>

        <li>
          <Link to="/cart" className="link">
            Cart
          </Link>
        </li>

        <li>
          <button className="logout-btn" onClick={logOut}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}
export default withRouter(Header)
