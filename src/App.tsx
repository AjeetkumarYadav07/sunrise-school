import { ThemeProvider } from "./components/theme/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import DashboardLayout from "./Layout/dashBoardLayout";
import { RegistrationForm } from "./pages/registrationForm";
import { LoginForm } from "./pages/loginFrom";
import { Dashboard } from "./components/dashboardPage/dashboard";
import { Students } from "./components/dashboardPage/students";
import { Teachers } from "./components/dashboardPage/teacher";
import { Complaints } from "./components/dashboardPage/complaints";
import { Fees } from "./components/dashboardPage/fees";
import { StudentPanel } from "./pages/student.panel";
import { AddTeacher } from "./pages/addTeachers.Page";


function App() {
  return (
   <BrowserRouter>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers/>} />
          <Route path="complaints" element={<Complaints/>} />
          <Route path="fees" element={<Fees/>} />
        </Route>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/student-panel" element={<StudentPanel/>} />
        <Route path="/add-teacher" element={<AddTeacher/>} />
      </Routes>
    </div>
  </ThemeProvider>
</BrowserRouter>

  );
}

export default App;
