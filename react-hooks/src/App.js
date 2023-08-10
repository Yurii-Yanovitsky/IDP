import "./App.css";
import { ButtonWithTooltip } from "./components/ButtonWithTooltip";

function App() {
  return (
    <div className="App">
      <div style={{ height: 100 }}>
        <ButtonWithTooltip tooltipMessage="Tolltip 1">
          Hover over me 1
        </ButtonWithTooltip>
      </div>
      <div style={{ height: 50 }}>
        <ButtonWithTooltip tooltipMessage="Tolltip 2">
          Hover over me 2
        </ButtonWithTooltip>
      </div>
    </div>
  );
}

export default App;
