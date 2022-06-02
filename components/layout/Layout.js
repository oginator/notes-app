import Footer from "../parts/Footer";
import Header from "../Header";

export default function Layout(props) {
    return (
        <>
            <Header setIsLoggedIn={props.isLoggedIn} />
                {props.children}
            <Footer />
        </>
    );
}