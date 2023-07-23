import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function GoogleAuth() {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log(res);
    const token = res.credential;
    const userData = jwt_decode(token);
    console.log(userData);
    navigate("/home", { state: { userData: userData } });
  };

  const onFailure = () => {
    console.log("ALgo salio mal papi");
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