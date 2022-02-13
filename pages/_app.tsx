import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../app/store";
import { Provider } from "react-redux";

import { API } from "@aws-amplify/api";
import awsConfig from "../aws-exports";

function MyApp({ Component, pageProps }: AppProps) {
  API.configure(awsConfig);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
