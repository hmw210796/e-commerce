import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
