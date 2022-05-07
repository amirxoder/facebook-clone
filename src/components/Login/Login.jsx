import { Button } from "@mui/material";
import React from "react";
// import { auth, provider } from "../../firebase";
import "./login.css";

const Login = () => {
  const signInHandler = () => {
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => console.log(result))
    //   .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          className="img__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <img
          className="text__logo"
          src="https://www.nyforetagarcentrum.se/goteborgsregionen/wp-content/uploads/sites/29/2020/11/Facebook-Logo.png"
          alt="facebooktext"
        />
      </div>
      <Button
        variant="contained"
        onClick={signInHandler}
        type="submit"
        style={{
          width: "200px",
          textAlign: "center",
          position: "absolute",
          bottom: "4rem",
        }}
      >
        Sign In
      </Button>
    </div>
  );
};

export default Login;
