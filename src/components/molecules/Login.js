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
        clientId="563752908485-hvo0ptgkd0s946aj4ngb6skhgkan569m.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    /> 

     <FacebookLogin
        appId="1507659512736081"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook} />


    </div>
}
  export default Login  