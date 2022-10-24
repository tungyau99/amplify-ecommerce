import logo from './logo.svg';
import './App.css';
import Helmet from "react-helmet";
import ScrollToTop from "./component/ScrollToTop";
import NavBar from "./component/NavBar";
import Routing from "./Routing";

function App() {
  return (
  <>
    <Helmet>
      <title>FYP e-commerce</title>
      <meta name="description" content="IERG4998 FYP Project (1155143965)" />
    </Helmet>
    <ScrollToTop />
    <Routing />
  </>
  );
}

export default App;
