import { ToastContainer } from "react-toastify";
import { useTheme } from "../theme/useTheme";

export const Toast = () => {
  const { resolvedTheme } = useTheme();
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme={resolvedTheme}
    />
  );
};
