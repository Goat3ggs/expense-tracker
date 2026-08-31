import SummaryCards from "./SummaryCards";
import TransactionList from "./TransactionList";

export default function Dashboard() {
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
        <button className="btn-primary">Add Transaction</button>
      </section>

      <SummaryCards />
      <TransactionList />
    </div>
  );
}
