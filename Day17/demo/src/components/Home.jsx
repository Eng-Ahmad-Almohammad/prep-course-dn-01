import {useState} from 'react';
import Header from './Header';
import Greeting from './Greeting';
import LogInButton from "./LogInButton";

let Home = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [greeting, setGreeting] = useState("Please Log In");

    
    // function handelLogin() {
    
        
    //     setIsLoggedIn(!isLoggedIn);
        
    // }


    return(
        <>
        <Header />
        <h1>Welcome From Home Page</h1>
        <Greeting greeting={greeting}/>
        <LogInButton setGreeting={setGreeting} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </>
    )
}

export default Home;