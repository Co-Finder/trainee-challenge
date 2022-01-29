import React from "react";

import Navigation from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export const App = () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
);
