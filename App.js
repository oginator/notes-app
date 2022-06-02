import "./styles/main.css";
import Login from "./components/login/Login";
import NotesApp from "./components/NotesApp";
import {useState} from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn && (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}

      {isLoggedIn && (
        <NotesApp isLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}
