import "./App.css";
import { Fragment } from "react";
import Grid from "./background/Grid";
import Information from "./background/apps/Information";
import Menu from "./background/menu/Menu";

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
