import { ErrorBoundary } from "react-error-boundary";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import FallbackRender from "./components/ErrorBoundaries/Fallback/FallbackRender";

function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={FallbackRender}
        onReset={(details) => console.log("onReset", details)}
        onError={(error, errorInfo) => {
          console.error("onError:", error, errorInfo);
        }}
      >
        <Header />
        <Main />
      </ErrorBoundary>
    </>
  );
}

export default App;
