import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import theme from "./styles/theme";
// import Sidebar from "./Sidebar";
// import Login from "./Login";
import Loading from "./components/Loading";
// import { isLoggedInState } from "../atoms/auth";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

// const DashboardPage = lazy(() => import("./pages/DashboardPage"));
// const SessionDetailsPage = lazy(() => import("./pages/SessionDetailsPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
    },
  },
});

function App() {
  // const isLoggedIn = useRecoilValue(isLoggedInState);
  const isLoggedIn = false;
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Router>
        {isLoggedIn ? (
          // <Sidebar>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route
                path="/sessions/:sessionId"
                element={<SessionDetailsPage />}
              />
            </Routes>
          </Suspense>
        ) : (
          // </Sidebar>
          <Route path="/login" element={<LoginPage />} />
        )}
      </Router> */}
      <Router>
        <Routes>
          Login
          <Route path="/login" element={<LoginPage />} />
          Dashboard
          <Route path="/dashboard" element={<DashboardPage />} />
          Redirect
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
