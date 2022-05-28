import logo from "../img/chat.png"

function Header() {
    return (
        <div className="header-container">
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu-buttons">
                <a href="">
                    <div className="menu-button">
                        About
                    </div>
                </a>
                <a href="">
                    <div className="menu-button">
                        Contacts
                    </div>
                </a>
                <a href="">
                    <div className="menu-button">
                        Logout
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Header; 