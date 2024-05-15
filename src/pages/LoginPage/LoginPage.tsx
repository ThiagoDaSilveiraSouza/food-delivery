import { useState } from "react";
import { AuthModal, LogoutconfirmModal } from "./components";

export const LoginPage = () => {
  const [authModalisShow, setAuthModalisShow] = useState(false);
  const [logoutModalIsShow, setLoginModalIsShow] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          width: "100vw",
          height: "100vh",
        }}
      >
        <button onClick={() => setAuthModalisShow(true)}>Login</button>
        <button onClick={() => setLoginModalIsShow(true)}>Logout</button>
      </div>
      <AuthModal useModal={[authModalisShow, setAuthModalisShow]} />
      <LogoutconfirmModal useModal={[logoutModalIsShow, setLoginModalIsShow]} />
    </>
  );
};
