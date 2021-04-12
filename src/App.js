import React from "react";
import Routes from "./App-routes";
import Header from "./components/header";
import { BedriftKomponent } from "./pages/bedrift/BedriftKomponent";

const App = () => (
  <>
    <Header />
    <Routes />
  </>
);

export default App;
