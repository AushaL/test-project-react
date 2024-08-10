import { Providers } from "./providers";
import { AppRouter } from "./routers";
import "@mantine/core/styles.css";

function App() {
  return (
    <>
      <Providers>
        <AppRouter />
      </Providers>
    </>
  );
}

export default App;
