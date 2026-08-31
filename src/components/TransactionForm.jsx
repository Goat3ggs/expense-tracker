import { FiX } from "react-icons/fi";

export default function TransactionForm({ onClose }) {
  return (
    //  1. Close modal when clicking the dark overlay
    <div className="form-overlay" onClick={onClose}>
      {/* 2. Stop the click from reaching the overlay when clicking inside the form inputs */}
      <form className="transaction-form" onClick={(e) => e.stopPropagation()}>
        {/* Close button positioned at the top */}
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX />
        </button>

        {/* Type selection area (Income/Expense) */}
        <div className="transaction-type-toggle">
          <button type="button" className="type-btn active">
            Income
          </button>
          <button type="button" className="type-btn">
            Spending
          </button>
        </div>

        <p className="transaction-form__error hidden">
          Some text success or error
        </p>

        {/* Transacction Title */}
        <div className="form-group">
          <label htmlFor="title">Transaction Title</label>
          <input type="text" id="title" placeholder="e.g. Groceries" />
        </div>

        {/* Amount */}
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          {/* The div that group input and currency */}
          <div className="input-with-currency">
            <input
              type="number"
              id="amount"
              step="0.01"
              min="0"
              placeholder="0.00"
            />
            <span className="currency-label">EUR</span>
          </div>
        </div>

        {/* Row with Date and Category - placed on the same row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" date id="date" />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>

            <select id="category">
              <option value="">Select category...</option>
              <option value="food">Food & Drinks</option>
              <option value="bills">Bills</option>
              <option value="salary">Salary</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
