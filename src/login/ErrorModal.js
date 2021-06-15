function ErrorModal(props) {
debugger
    if (!props.login){
        return(
            <ul>
                <li>Please enter your username & password</li>
            </ul>   
        )
    }else if (props.login.username.length < 4 && props.login.password < 4){
        return(
            <ul>
                <li>Username & password must have at least 4 characters</li>
            </ul>
        )
    }else if (props.login.username.length < 4) {
        return(
            <ul>
                <li>Username must have at least 4 characters, please try again</li>
            </ul>
        )
    }else if (props.login.password.length < 4) {
        return(
            <ul>
                <li>Password must have at least 4 characters</li>
            </ul>
        )
    }else if (props.users.some( u => u.username === props.user.username)) {
        return (
            <ul>
                <li>That username already exists, please choose another</li>
            </ul>
        )
    }
}

export default ErrorModal