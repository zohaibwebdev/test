import AuthContext from "./authContext";

const AuthState = (props)=>{
    return(
        <AuthContext.provider value={{'name':'zohaib'}}>
            {props.children}
        </AuthContext.provider>
    )
}

export default AuthState;