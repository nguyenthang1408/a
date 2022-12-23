import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { Wrapper } from "./GlobalStyles/globalStyle.styles";
import DefaultLayout from "./pages/DefaultLayout/defaultLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import routes from "./routes";

function App() {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <Router>
      <Wrapper>
        <Routes>
          {routes.map((route, key) => {
            let Layout = DefaultLayout;

            const Page = route.component;

            return (
              <Route
                key={key}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
