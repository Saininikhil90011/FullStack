import { ThemeContext, ThemeProvider } from "./Components/Themep";
import ThemeButton from "./Components/Button";

function App1() {
  return (
    <ThemeProvider>
      <div>
        <h1>React Context Example</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default App1;
