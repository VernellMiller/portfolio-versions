import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Index from "../Pages/Index";

const Main = (props) => {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route exact path="/">
          <Index />
        </Route>
      </Routes>
    </main>
  );
};

export default Main;
