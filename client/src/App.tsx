import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CaseStudyNexorwa from "./pages/CaseStudyNexorwa";
import CaseStudyOgintech from "./pages/CaseStudyOgintech";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Legal from "./pages/Legal";
import LiveChat from "./components/LiveChat";
import RetargetingPixels from "./components/RetargetingPixels";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/case-study/nexorwa"} component={CaseStudyNexorwa} />
      <Route path={"/case-study/ogintech"} component={CaseStudyOgintech} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/privacy"} component={() => <Legal type="privacy" />} />
      <Route path={"/terms"} component={() => <Legal type="terms" />} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <LiveChat />
          <RetargetingPixels />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
