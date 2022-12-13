import { GlobalStyles } from "./styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from "./components/Routes";

export const App = () => {

  return (
    <div className="App">
      <GlobalStyles theme="dark" />
      <AppRoutes />
      <ToastContainer
        autoClose={2500}
        newestOnTop={true}
        closeOnClick
        theme="light"
        pauseOnFocusLoss={false}
      />

    </div>
  );
};
