import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./components/expenses";
import Nav from "./components/nav";
import Invoices from "./components/invoices";
import Invoice from "./components/invoice";

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <Nav></Nav>
      <div>
        <Routes>
          <Route path="/" />
          <Route path="expenses" element={<Expenses></Expenses>} />
          <Route path="invoices" element={<Invoices></Invoices>} />
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path="/invoice/:invoiceId" element={<Invoice></Invoice>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
