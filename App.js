import * as React from "react";
import { Navigate } from "./App/routes/navigate";
import { Provider } from 'react-redux';
import store from "./App/redux/store"
import ReceitaButton from "./App/routes/ReceitaButton";

// import Notification from "./App/Screens/NotificationFirebase/index"


export default function App() {
  return (
    <Provider store={store}>
      <Navigate />
      {/* <ReceitaButton /> */}
    </Provider>
  );
}
