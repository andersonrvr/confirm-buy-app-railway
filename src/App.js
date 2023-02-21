import "./App.css";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
