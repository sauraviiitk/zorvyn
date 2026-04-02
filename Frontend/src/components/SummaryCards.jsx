const SummaryCards = ({ records }) => {
  const income = records
    .filter((r) => r.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = records
    .filter((r) => r.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-green-200 p-4 rounded-xl">
        <h2>Income</h2>
        <p className="text-xl font-bold">₹{income}</p>
      </div>

      <div className="bg-red-200 p-4 rounded-xl">
        <h2>Expense</h2>
        <p className="text-xl font-bold">₹{expense}</p>
      </div>
    </div>
  );
};

export default SummaryCards;