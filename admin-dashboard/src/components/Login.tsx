import { useState } from "react";
import { useSetRecoilState } from "recoil";
// import { isLoggedInState } from "../atoms/auth";
import { Button, TextField, Typography } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
// import "./LoginPage.css";

const Login: React.FC = () => {
  //   const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const handleGoogleLogin = (user: any) => {
    console.log(user);
    // Google 로그인 성공 후 처리하는 코드를 작성합니다.
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // try {
    //   const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   if (response.ok) {
    //     setIsLoggedIn(true);
    //   } else {
    //     alert("로그인에 실패하였습니다.");
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" align="center" gutterBottom>
          Admin 로그인
        </Typography>
        <TextField
          label="이메일"
          variant="outlined"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="비밀번호"
          variant="outlined"
          type="password"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{
            mt: 3,
            mb: 2,
            bgcolor: "primary.main",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          로그인
        </Button>
        {/* <GoogleLogin
          clientId="Google API Console에서 발급한 클라이언트 ID를 입력하세요."
          buttonText="Google 계정으로 로그인"
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLogin}
          redirectUri={"http://localhost:3000"}
          scope="https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
        /> */}
      </form>
    </div>
  );
};

export default Login;
