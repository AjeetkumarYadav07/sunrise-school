import { ThemeProvider } from "./components/theme/theme-provider"
import { ModeToggle } from "./components/theme/mode-toggle"
import { Button } from "./components/ui/button"
import Dark from "./components/Dark"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground p-4">
        <ModeToggle />
        <Dark/>
        <h1 className="text-2xl font-bold mt-4">Hello TS</h1>
        <Button className="mt-2">Hello</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
