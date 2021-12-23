import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import MyNotes from "./Screens/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Route path="/" exact component={LandingPage}></Route>
      <Route path="/mynotes" exact component={MyNotes}></Route>
    </BrowserRouter>
  );
}

export default App;
