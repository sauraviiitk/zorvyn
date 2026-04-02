import { useState } from "react";
import { createRecord } from "../api/record";

const RecordForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    category: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await createRecord(form);
      onSuccess();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl space-y-2">
      <input
        name="amount"
        placeholder="Amount"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <select name="type" onChange={handleChange}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        name="category"
        placeholder="Category"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Record
      </button>
    </div>
  );
};

export default RecordForm;