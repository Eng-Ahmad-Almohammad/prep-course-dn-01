
let LogInButton = ({isLoggedIn, setIsLoggedIn, setGreeting}) => {
    function handelLogin() {
        if(!isLoggedIn){
            setGreeting("Welcome Back");
        }else{
            setGreeting("Please Log In");
        }
        
        setIsLoggedIn(!isLoggedIn);
        
    }
    

    return(
        <button onClick={handelLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    );
};

export default LogInButton;