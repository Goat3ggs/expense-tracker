import ExpenseChart from "./ExpenseChart";
import SummaryCards from "./SummaryCards";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import { useState } from "react";

export default function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="dashboard-container">
      {/* Top header */}
      <header className="header">
        <p className="header__welcome-msg">
          Hello, <span className="header__welcome-name">Alex!</span>
        </p>
        <h1 className="header__title">Overview</h1>
      </header>

      {/* Central zone chart for current sold */}
      <section className="hero-summary">
        <div className="balance">
          <span className="balance__label">Current Balance</span>
          <span className="balance__amount">$280.00</span>
        </div>
        <button className="btn-primary" onClick={() => setIsFormOpen(true)}>
          Add Transaction
        </button>
      </section>

      <SummaryCards />

      {/* New Wrapper for Bento Layout (Side-by-Side on Desktop) */}
      <div className="bento-layout">
        <ExpenseChart />
        <TransactionList />
      </div>

      {isFormOpen && <TransactionForm onClose={() => setIsFormOpen(false)} />}
    </div>
  );
}
