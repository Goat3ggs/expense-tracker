import { FiSettings, FiShoppingCart, FiDollarSign } from "react-icons/fi";

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

      {/* Insights Card */}
      <article className="insight-card">
        <div className="insight-card__content">
          <p>Your spending went down 20% last week!</p>
          <button className="btn-secondary">View stats</button>
        </div>
      </article>

      {/* History List */}
      <section className="history">
        <div className="history__header">
          <h2>Recent Transactions</h2>
          <button className="btn-icon" aria-label="Settings">
            <FiSettings />
          </button>
        </div>

        <ul className="history__list">
          {/* Dynamic generated with .map() */}
          <li className="history__item">
            <div className="item__info">
              <span className="item__icon expense-icon">
                <FiShoppingCart />
              </span>
              <span className="item__name">Groceries</span>
            </div>
            <span className="item__amount expense">-$45.00</span>
          </li>

          <li className="history__item">
            <div className="item__info">
              <span className="item__icon income-icon">
                <FiDollarSign />
              </span>
              <span className="item__name">Salary</span>
            </div>
            <span className="item__amount income">+$1,200.00</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
