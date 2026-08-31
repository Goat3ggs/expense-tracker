import { FiSettings, FiShoppingCart, FiDollarSign } from "react-icons/fi";

export default function TransactionList() {
  return (
    <>
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
    </>
  );
}
