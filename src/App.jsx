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
import Home from "./pages/Home/Home";
import RequireAuth from "./components/auth/RequireAuth";
import Cookies from "js-cookie";
import TransactionsPage from "./pages/Transactions/TransactionsPage";
import DashboardUser from "./pages/DashboardUser/DashboardUser";
import DashboardMain from "./components/DashboardUser/DashboardMain";
import PreviousTransactions from "./components/DashboardUser/PreviousTransactions";
import ExchangeRates from "./components/DashboardUser/ExchangeRates";
import Account from "./components/DashboardUser/Account";
import NewOrder from "./components/DashboardUser/NewOrder";
import Help from "./components/DashboardUser/Help";

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
          path="dashboard-user"
          element={
            <RequireAuth>
              <DashboardUser />
            </RequireAuth>
          }
        >
          <Route index element={<DashboardMain />} />
          <Route path="previous-transactions" element={<PreviousTransactions />} />
          <Route path="exchange-rates" element={<ExchangeRates />} />
          <Route path="account" element={<Account />} />
          <Route path="new-order" element={<NewOrder />} />
          <Route path="help" element={<Help />} />
        </Route>

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
