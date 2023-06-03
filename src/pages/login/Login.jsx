import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate  = useNavigate()

  const {dispatch} = useContext(AuthContext)

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       dispatch({type:"LOGIN", payload:user});
  //       navitage("/")
  //     })
  //     .catch((error) => {
  //       setError(true);
  //     });
  // };
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "tcc@test.com" && password === "finalproject") {
      // Berhasil login
      setError(false);
      navigate("/");
    } else {
      // Gagal login
      setError(true);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
        {/* <div className="register">
        <Link to="/users/new" className="link">
          Register
        </Link>
        </div> */}
      </form>
    </div>
    
  );
};

export default Login;
