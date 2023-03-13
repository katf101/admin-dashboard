import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import { ThemeProvider, CssBaseline } from "@mui/material";
import { RecoilRoot } from "recoil";
import App from "./App";
// import theme from "./styles/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <RecoilRoot>
        <App />
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* </ThemeProvider> */}
    </QueryClientProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
