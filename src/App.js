import "./App.css";
import { Fragment } from "react";
import Menu from "./components/menu/Menu";
import Grid from "./components/background/Grid";
import Information from "./components/background/Information";

function App() {
  return (
    <Fragment>
      <Grid />
      <Information />
      <Menu />
    </Fragment>
  );
}

export default App;
