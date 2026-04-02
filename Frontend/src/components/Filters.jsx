import { useState } from "react";

const Filters = ({ setFilters }) => {
  const [local, setLocal] = useState({});

  const handleChange = (e) => {
    setLocal({ ...local, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    setFilters(local);
  };

  return (
    <div className="bg-white p-4 rounded-xl flex gap-4 flex-wrap">
      <select name="type" onChange={handleChange}>
        <option value="">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
        className="border p-2"
      />

      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply
      </button>
    </div>
  );
};

export default Filters;