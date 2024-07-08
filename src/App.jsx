import { useState } from "react";
import { AddResult } from './Components/AddResult/AddResult'
import { TableResult } from './Components/TableResult/TableResult'
import './App.css'

function App() {
  const [results, setResults] = useState([]);

  const sortByDate = (a, b) => {
    if (a.date < b.date) {
        return 1;
    }
    if (a.date > b.date) {
        return -1;
    }
    return 0;
  }

  const addResult = (result) => {
    result.id = results.length + 1;
    setResults([...results, result].sort(sortByDate));
  };

  const updateResult = (result) => {
    const dateIndex = results.findIndex(({ date }) => result.date === date);
    const existedDate = results[dateIndex];
    const newResult = {
        ...existedDate,
        distance: Number(existedDate.distance) + Number(result.distance)
    };
    const newResults = [...results];
    newResults[dateIndex] = newResult;
    setResults(newResults);

  };

  const deleteResult = (id) => {
    setResults(results.filter((i) => i.id !== id));
};

  return (
    <>
      <AddResult addResult={addResult} updateResult={updateResult} />
      <TableResult results={results} deleteResult={deleteResult} />
    </>
  )
}

export default App
