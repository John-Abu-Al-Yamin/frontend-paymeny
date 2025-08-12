import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import UserId from "./pages/Home/UserId";
import Home from "./pages/Home/Home";
import RequireAuth from "./components/auth/RequireAuth";
import Cookies from "js-cookie";
import TransactionsPage from "./pages/Transactions/TransactionsPage";

export default function App() {
  const accessToken = Cookies.get("accessToken");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="auth">
          <Route
            path="login"
            element={accessToken ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="register"
            element={accessToken ? <Navigate to="/" replace /> : <Register />}
          />
        </Route>
        <Route
          path="user/:id"
          element={
            <RequireAuth>
              <UserId />
            </RequireAuth>
          }
        />

        {/* Home */}
        <Route
          path="/transactions"
          element={
            <RequireAuth>
              <TransactionsPage />
            </RequireAuth>
          }
        />

        {/* Auth */}
        <Route path="auth">
          <Route
            path="login"
            element={accessToken ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="register"
            element={accessToken ? <Navigate to="/" replace /> : <Register />}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
