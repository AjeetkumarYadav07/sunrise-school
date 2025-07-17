import { ThemeProvider } from "./components/theme/theme-provider"
import { ModeToggle } from "./components/theme/mode-toggle"


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground p-4">
        <ModeToggle />
        <h1 className="text-2xl font-bold mt-4">Hello TS</h1>
     
      </div>
    </ThemeProvider>
  )
}

export default App
