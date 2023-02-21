import { Routes, Route } from "react-router-dom";
import ConfirmBuyPage from "../pages/ConfirmBuyPage";
import PageWithoutLink from "../pages/PageWithoutLink";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/:seller_link" element={<ConfirmBuyPage />} />
      <Route path="*" element={<PageWithoutLink />} />
    </Routes>
  );
};
