import "./App.css";
import Layout  from "./pages/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* Layout screen */}
      <Layout/>
    </Router>
  );
}

export default App;
