import "./App.css";
import LeftPannel from "./component/LeftPanel";
import RightPanel from "./component/RightPanel";
import BottomPanel from "./component/BottomPanel";

  function App() {
    return (
      <div className="container">
        <div className="sidebar">
          <LeftPannel />
        </div>
        <div className="main-container">
          <RightPanel />
        </div>
        <div className="footer">
          <BottomPanel />
        </div>
      </div>
    );
  }

  export default App;