import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Routes from "./routes/index";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
