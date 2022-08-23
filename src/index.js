import ReactDOM from "react-dom/client";
import Login from "./Login"

export default function App() {
  return (
    <Login/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);