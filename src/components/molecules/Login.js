import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';



const Login = () => {
      
      
 const responseGoogle = (response) => {
        console.log(response);
    }
const responseFacebook = (response) => {
    console.log(response);
    }

  return <div>
     
      <GoogleLogin
        clientId="563752908485-2qt9f3au119j44l7eev02hhsj4s8ame7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    /> 

     <FacebookLogin
        appId="1725420477708303"
        autoLoad={true}
        fields="name,email,picture"
    callback={responseFacebook} />


    </div>
}
  export default Login  