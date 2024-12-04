import React from "react";

const loginCSS = {
  wrapper: {
    backgroundColor: "#cccaac",
    marginTop: "10px",
  },
  p1: {
    fontSize: "larger",
    fontFamily: "Sans-Serif",
  },
  p2: {
    fontSize: "18px",
    fontFamily: "Arial, sans-serif",
    color: "blue",
  },
};

const LoginPage = () => {
  return (
    <div style={loginCSS.wrapper}>
      <p style={loginCSS.p1}>
        Login page Login page. Login page. Login page. Login page. Login page.
        Login page. Login page.
      </p>
      <p style={loginCSS.p2}>
        Login Page Login Page Login Page Login Page Login Page
      </p>
    </div>
  );
};

export default LoginPage;
