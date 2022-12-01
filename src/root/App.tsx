import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../layout/Header";
import { Wrapper } from "../layout/Wrapper";
import { IS_LOGGED } from "../libs/utilities/constants/sessionStorage";
import { getUser } from "../libs/utilities/store/actions.ts/actions";
import { userSelector } from "../libs/utilities/store/selectors";

function App() {
  const dispatch = useDispatch();
  const isLogged = sessionStorage.getItem(IS_LOGGED);
  const user = useSelector(userSelector);

  useEffect(() => {
    if (isLogged && !user.email) {
      dispatch(getUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Wrapper />
    </BrowserRouter>
  );
}

export default App;
