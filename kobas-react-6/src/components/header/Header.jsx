import "./Header.css";
import Logo from "../../assets/images/logo.svg";
function Header() {
  return (
    <div className="Headerdiv">
      <div className="left">
        <img src={Logo} />
        <div className="titles">
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <p>Login</p>
        <button>Register</button>
      </div>
    </div>
  );
}
export default Header;
