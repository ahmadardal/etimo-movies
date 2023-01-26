import "./styles/App.css";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./utils/AppRouter";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient: QueryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AppRouter} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
