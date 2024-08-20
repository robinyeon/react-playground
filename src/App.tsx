import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Main />
      </ErrorBoundary>
    </>
  );
}

export default App;
