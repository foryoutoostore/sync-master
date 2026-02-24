import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CremosoFormigueiro from "./pages/CremosoFormigueiro";
import AbacaxiDocura from "./pages/AbacaxiDocura";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/receita/cremoso-formigueiro" component={CremosoFormigueiro} />
      <Route path="/receita/abacaxi-docura" component={AbacaxiDocura} />
      <Route path="/politica-privacidade" component={PoliticaPrivacidade} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
