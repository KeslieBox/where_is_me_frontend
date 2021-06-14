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
    }else if(props.users.some( u => u.username === props.user.username)) {
        return (
            <ul>
                <li>That username already exists, please choose another</li>
            </ul>
        )
    }else {
        return (
            <ul>
                <li>Invalid login, please make sure your username & password have at least 4 characters</li>
            </ul>
        )
    }
}


export default ErrorModal