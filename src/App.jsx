import Dashboard from "./components/Dashboard";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [transactions, setTransactions] = useLocalStorage(
    "app_transactions",
    [],
  );

  return (
    <main className="container">
      <Dashboard />
    </main>
  );
}

export default App;
