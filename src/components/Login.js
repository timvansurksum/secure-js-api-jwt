import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
let base64 = require("base-64"); 
let headers = new Headers();

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  
  const onChangeUsername = (userName) => setUserName(userName);
  const onChangePassword = (password) => setPassword(password);
  let history = useHistory();
  
  const onClickLogin = () => {
    headers.set("Authorization", "Basic "+base64.encode(userName+ ":"+password));
    fetch("http://localhost:5000/login", {headers: headers, method: "Post"})
    .then(res => {
      if(res.status === 200) return res.json();
      else return null;
    })
    .then(json => {
      if(json) history.push("/scientists")
      else setLoginError("username or password is incorrect")
    })
    .catch(err => console.log("Error logging into app ", err.message));
  };
  
  return (
    <Grid container direction={"column"} alignItems={"center"} style={{marginTop: "10vh"}}>
      <Grid item style={{marginBottom: "5vh"}}>
        <Typography variant={"h3"}>
          Welcome to scientia!
          <span role={"img"} aria-label={"scientists"}>
          🔬
          </span>
        </Typography>
      </Grid>
      <Grid item  style={{marginBottom: "7vh"}}>
        <TextField
          id={"username-input"}
          label={"username"}
          value={userName}
          onChange={(e) => onChangeUsername(e.target.value)}
        />
      </Grid>
      <Grid item style={{marginBottom: "7vh"}}>
        <TextField
          id={"password-input"}
          type={"password"}
          label={"password"}
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          aria-label={"login"}
          variant={"contained"}
          size={"large"}
          onClick={onClickLogin}
        >
          LOGIN
        </Button>
      </Grid>
      <Grid item>
        <Typography variant={"body2"} color={"error"}>
          {loginError}
        </Typography>  
      </Grid>    
    </Grid>
  )
}