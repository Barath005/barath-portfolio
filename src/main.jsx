import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <>
      <Toaster
          position="top-right"
          gutter={12}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0F172A",
              color: "#fff",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(6,182,212,.3)",
              boxShadow: "0 10px 40px rgba(0,0,0,.35)",
            },

            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      <ThemeProvider> 
       <App />
      </ThemeProvider> 
    </>
  </React.StrictMode>
);