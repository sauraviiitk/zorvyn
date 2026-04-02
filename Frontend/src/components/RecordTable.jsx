import { deleteRecord }  from "../api/record";

const RecordTable = ({ records, refresh, setRefresh }) => {
  const handleDelete = async (id) => {
    try {
      await deleteRecord(id);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl">
      <table className="w-full">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r) => (
            <tr key={r._id}>
              <td>₹{r.amount}</td>
              <td>{r.type}</td>
              <td>{r.category}</td>
              <td>
                <button
                  onClick={() => handleDelete(r._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;