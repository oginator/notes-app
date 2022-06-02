export const submit = (data, setIsLoggedIn, email, password) => {
    const isLoginSuccess = data.filter((d) => {
        return d.email === email && d.password === password; 
    });

    if (isLoginSuccess.length > 0) {
        console.log("Logovan sam");
        setIsLoggedIn(true);
    } else {
        console.log("Nisam logovan");
        setIsLoggedIn(false);
    }
}
