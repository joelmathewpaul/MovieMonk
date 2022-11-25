
//function to create login page
const Login = () =>{
    var username;
    var password;
    const setUserName = (e) =>{
        username = e.target.value;
    }
    const setPassword = (e) =>{
        password = e.target.value;
    }

    const checkCredAndLogIn = () => {
      //function to check if the credentials provided are valid and proceed with login
        
    }
    
    const 

    return(
        <div className="loginpage">
            <form className="p-5 position-absolute bg-success">
                <div className="input-group mt-5">
                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                    <div className="form-floating ">
                        <input required={true} onChange={setUserName} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">username</label>
                    </div>
                </div>
                <br/>
                <div className="input-group mb-4 mt-2">
                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                    <div className="form-floating">
                        <input required={true} onChange={setPassword} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">password</label>
                    </div>
                </div>
                <button  onClick={checkCredAndLogIn} className="rounded-3 bg-primary text-light" type="submit">
                    Sign In
                </button>
                <br/>
                <p></p>
                <a href="#" className="text-white">Forgot Password?</a>
                <br/>
                <a href="#" className="text-white">Register</a>
            </form>

        </div>
        
    );
}
export default Login;