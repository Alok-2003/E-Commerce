
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {

  return (
    <>
      <Router>
        {/* Header */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
