import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { OrderProvider } from "./context/OrderContext.jsx";

//  <React.StrictMode>
// </React.StrictMode>
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <OrderProvider>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </OrderProvider>
  </Provider>
);
