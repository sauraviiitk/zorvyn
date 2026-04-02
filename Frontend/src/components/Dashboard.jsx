import { useEffect, useState } from "react";
import { getRecords } from "../api/record";
import RecordTable from "./RecordTable";
import Filters from "./Filters";
import SummaryCards from "./SummaryCards";
import RecordForm from "./RecordForm";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({});
  const [refresh, setRefresh] = useState(false);

  const fetchRecords = async () => {
    try {
      const res = await getRecords({ ...filters, page });
      setRecords(res.data.data);
      setMeta(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [filters, page, refresh]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <SummaryCards records={records} />

      <Filters setFilters={setFilters} />

      <RecordForm onSuccess={() => setRefresh(!refresh)} />

      <RecordTable
        records={records}
        setRefresh={setRefresh}
        refresh={refresh}
      />

      {/* Pagination */}
      <div className="flex justify-between">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Prev
        </button>

        <span>Page {meta.page}</span>

        <button
          disabled={page === meta.totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;