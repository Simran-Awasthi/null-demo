import { useEffect } from "react";
import useUserStore from "./store";
import { Navigate, useNavigate } from "react-router-dom";
import AddTodo from "./component/AddTodo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Waveform } from "@uiball/loaders";
import { css } from "@emotion/react";

const App = () => {
  let userStore = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        userStore.setLoading(false);
        navigate("/auth");
      } else {
        userStore.setLoading(false);
      }
    });
    return unsubscribe;
  }, []);
  if (userStore.loading) {
    return (
      <div
        css={css`
          width: 100%;
          height: 100;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <Waveform size={35} color="#000000"></Waveform>
      </div>
    );
  }
  if (!userStore.loading && userStore.user === null) {
    return <Navigate to={"/auth"} />;
  }
  return <AddTodo />;
};
export default App;
