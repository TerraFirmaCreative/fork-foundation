import { Outlet } from "react-router-dom";
import { LocaleProvider } from "@/lib/i18n";

const LocaleLayout = () => {
  return (
    <LocaleProvider>
      <Outlet />
    </LocaleProvider>
  );
};

export default LocaleLayout;
