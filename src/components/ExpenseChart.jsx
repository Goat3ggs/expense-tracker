import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const mockData = [
  { name: "Food & Drinks", value: 150, fill: "#9f7aea" },
  { name: "Bills", value: 200, fill: "#f56565" },
  { name: "Shopping", value: 85, fill: "#48bb78" },
];

export default function ExpenseChart() {
  return (
    <article className="chart-card">
      <h3 className="chart-card__title">Spending by Category</h3>

      <div className="chart-layout">
        {/* Left/Top side: The Chart */}
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={mockData}
                innerRadius="50%" /* Uses percentages for fluid responsive design */
                outerRadius="85%"
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(159, 122, 234, 0.15)",
                  fontWeight: "bold",
                  backgroundColor: "#ffffff",
                }}
                itemStyle={{ color: "var(--color-text-primary)" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Right/Bottom side: Custom Legend */}
        <ul className="chart-legend">
          {mockData.map((entry, index) => (
            <li key={index} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: entry.fill }}
              ></span>
              <span className="legend-name">{entry.name}</span>
              <span className="legend-value">${entry.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
