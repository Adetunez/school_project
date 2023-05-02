import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { Homepage, Login, Register } from "./Pages/Public";
import { Dashboard } from "./Pages/Private";
import ProtectedPages from "./utils/protectedPage";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route element={<ProtectedPages />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.PAYMENTS} element={<Dashboard />} />
          <Route path={ROUTES.PROFILE} element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
function App() {
  return <AppRoute />;
}

export default App;
