import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="" element={""}>
          <Route path="" element={""} />
          <Route path="" element={""}>
            <Route path="" element={""} />
          </Route>
          <Route path="*" element={""} />
        </Route>
      </Routes>
  );
}
export default App;
