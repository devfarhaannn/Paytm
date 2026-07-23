import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { SidebarProvider } from "./context/SidebarContext";
import { AuthProvider } from "./context/AuthContext";
import { AddMoney } from "./pages/AddMoney";

import { Landing } from "./pages/Landing";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";
import { Transfer } from "./pages/Transfer";
import { Transactions } from "./pages/Transactions";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";

import { ProtectedRoute } from "./components/common/ProtectedRout";
import { BalanceProvider } from "./context/BalanceContext";
import { ROUTES } from "./constants/routes";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <BalanceProvider>
            <SidebarProvider>

              <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: "#18181B",
                    color: "#ffffff",
                    borderRadius: "12px",
                    border: "1px solid #27272A",
                  },
                }}
              />

              <Routes>

                {/* Landing */}
                <Route path="/" element={<Landing />} />

                {/* Authentication */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Dashboard */}
                <Route
                  path={ROUTES.DASHBOARD}
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                {/* Transfer */}
                <Route
                  path={ROUTES.TRANSFER}
                  element={
                    <ProtectedRoute>
                      <Transfer />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={ROUTES.ADD_MONEY}
                  element={
                    <ProtectedRoute>
                      <AddMoney />
                    </ProtectedRoute>
                  }
                />

                {/* Transactions */}
                <Route
                  path={ROUTES.TRANSACTIONS}
                  element={
                    <ProtectedRoute>
                      <Transactions />
                    </ProtectedRoute>
                  }
                />


                <Route
                  path={ROUTES.PROFILE}
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path={ROUTES.SETTINGS}
                  element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  }
                />


                {/* Unknown */}
                <Route path="*" element={<Navigate to="/" replace />} />

              </Routes>

            </SidebarProvider>
          </BalanceProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;