import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route>
          <Navigation />
        </Route>
      </Routes>
    </main>
  );
};
