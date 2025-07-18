import { ThemeProvider } from "./components/theme/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import DashboardLayout from "./Layout/dashBoardLayout";
import { SingUp } from "./pages/singupPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background text-foreground p-4">
          {/* <ModeToggle /> */}

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardLayout/>} > 
              <Route />
            </Route>
            <Route path="/singup" element={<SingUp/>}  />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
