import { ThemeProvider } from "./components/theme/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./Layout/dashBoardLayout";

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
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
