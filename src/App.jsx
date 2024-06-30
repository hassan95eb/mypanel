import Content from "./Content";
import Sidebar from "./Sidebar";
import "./style.css";

export default function App() {
  return (
    <div className="mian-body">
      <Sidebar />
      <Content />
    </div>
  );
}
