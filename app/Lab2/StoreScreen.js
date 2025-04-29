import React from "react";
import { Provider } from "react-redux";
import DrawerNavigator from "./routes"; // Đường dẫn đúng vì routes/ nằm trong Lab2
import Store from "./store"; // Store redux cũng trong Lab2

export default function StoreScreen() {
  return (
    <Provider store={Store}>
      <DrawerNavigator />
    </Provider>
  );
}
