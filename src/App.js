import AppRouter from "./components/routers/AppRouter/AppRouter";
import { AuthProvider } from "./providers/AuthContext";
//está en el mismo domin

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
