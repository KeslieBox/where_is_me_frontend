function ErrorModal(props) {
debugger
    if(!props.login){
        return(
            <ul>
                <li>Please enter your username & password</li>
            </ul>   
        )
    }else if(props.login.username.length < 4 && props.login.password < 4){
        return(
            <ul>
                <li>That is an invalid login, please try again</li>
            </ul>
        )
    }else if (props.login.username.length < 4) {
        return(
            <ul>
                <li>Username must be at least 4 characters, please try again</li>
            </ul>
        )
    }else if (props.login.password.length < 4) {
        return(
            <ul>
                <li>Password must be at least 4 characters</li>
            </ul>
        )
    } else {
        <ul>
            <li>Invalid login, make sure your username and password are correct</li>
        </ul>
    }
}


export default ErrorModal