import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


function GoogleAuth() {
    //TODO: Cambiar esto a una manera mas segura...
    //? Puede ser en una variable de entorno [REACT_APP_GOOGLE_CLIENT_ID]

    const onSuccess = (res) => {
        console.log(res);
        const token = res.credential;
        const userData = jwt_decode(token);
        console.log(userData);
    };
    
    const onFailure = () => {
        console.log("ALgo salio mal papi");
    };

  return (
    <>
      <div className='w-48'>
        <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        />
      </div>
    </>
  )
}

export default GoogleAuth
