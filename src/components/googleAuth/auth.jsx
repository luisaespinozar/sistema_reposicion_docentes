import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function GoogleAuth() {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    const token = res.credential;
    const userData = jwt_decode(token);
    console.log('userData: ', userData);
    const indexArroba = userData.email.indexOf('@');
  
    const numeroCuenta = userData.email.slice(0, indexArroba);
  
    navigate("/home", { state: { userData: userData, cuentaCatedratico: numeroCuenta } });
  };

  const onFailure = () => {
    console.log("ALgo salio mal :)");
  };

  return (
    <>
      <div className="w-48">
        <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} />
      </div>
    </>
  );
}

export default GoogleAuth;