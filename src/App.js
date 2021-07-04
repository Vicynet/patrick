import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Tools from "./components/tools/Tools";
import Ml from "./components/mlops/Mlops";
import DE from "./components/data-engineering/DataEngineering";
import BA from "./components/backend-application/BackendApplication";
import MA from "./components/ml-analytics/MlAnalytics";
import ArticleHeader from "./components/article-header/ArticleHeader";
import Articles from "./components/articles/Articles";
import Footer from "./components/footer/Footer";
import MlModal from "./components/mlops/modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <MlModal />
          <Route path="/" exact component={Hero} />
          <Route path="/" exact component={Tools} />
          <Route path="/" exact component={BA} />
          <Route path="/" exact component={DE} />
          <Route path="/" exact component={Ml} />
          <Route path="/" exact component={MA} />
          <Route path="/" exact component={ArticleHeader} />
          <Route path="/" exact component={Articles} />
          <Route path="/" exact component={Footer} />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
