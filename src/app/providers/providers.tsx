import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store";
import { Fallback } from "../../shared/ui/fallback";
import { createTheme, MantineProvider } from "@mantine/core";
import { HelmetProvider } from "react-helmet-async";

interface IProviders {
  readonly children: JSX.Element;
}

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider theme={theme}>
            <HelmetProvider>
              <BrowserRouter>{children}</BrowserRouter>
            </HelmetProvider>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};
