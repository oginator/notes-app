import "../styles/header.css";

export default function Header(props) {
    const logout = () => {
        props.setIsLoggedIn(false);
    }

    return (
        <div className="header">
            <h3>Notes Application</h3>
            <a className="logout" onClick={logout} href="#">Logout</a>
        </div>
    );
}