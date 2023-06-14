import React from "react";
import { auth, googleProvider } from "../firebase";
import styled from "@emotion/styled";
import { UserCredential, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store";

const Button = styled.button`
  padding: 12px;
  background-color: #00d2ff;
  font-size: 14px;
  display: flex;
  color: white;
  justify-content: center;
  max-height: min-content;
  max-width: 300px;
  border-radius: 2px;
  border: none;
  outline: none;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

const Auth = () => {
  let navigate = useNavigate();
  const userStore = useUserStore();

  const handleSignInGoogle = async () => {
    let userCred: UserCredential | null = await signInWithPopup(
      auth,
      googleProvider
    );
    console.log(userCred);
    if (userCred != null) {
      userStore.setUser(userCred.user);
      navigate("/");
    }
  };
  return (
    <Container>
      <Button onClick={handleSignInGoogle}>Sign In With Google</Button>
    </Container>
  );
};

export default Auth;
