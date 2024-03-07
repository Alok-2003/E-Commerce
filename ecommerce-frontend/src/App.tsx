
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./components/Loader";
import Dashboard from "./pages/admin/dashboard";
import Products from "./pages/admin/products";
import Customers from "./pages/admin/customers";
import Transaction from "./pages/admin/transaction";
import Barcharts from "./pages/admin/charts/barcharts";
import PieCharts from "./pages/admin/charts/piecharts";
import Linecharts from "./pages/admin/charts/linecharts";
import Coupon from "./pages/admin/apps/coupon";
import Stopwatch from "./pages/admin/apps/stopwatch";
import Toss from "./pages/admin/apps/toss";
import NewProduct from "./pages/admin/management/newproduct";
import Productmanagement from "./pages/admin/management/productmanagement";
import TransactionManagement from "./pages/admin/management/transactionmanagement";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

//Admin Routes Importing


function App() {

  return (
    <>
      <Router>
        {/* Header */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />

            <Route
            // element={ <ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} /> } 
            >
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/product" element={<Products />} />
              <Route path="/admin/customer" element={<Customers />} />
              <Route path="/admin/transaction" element={<Transaction />} />
              {/* Charts */}
              <Route path="/admin/chart/bar" element={<Barcharts />} />
              <Route path="/admin/chart/pie" element={<PieCharts />} />
              <Route path="/admin/chart/line" element={<Linecharts />} />
              {/* Apps */}
              <Route path="/admin/app/coupon" element={<Coupon />} />
              <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
              <Route path="/admin/app/toss" element={<Toss />} />

              {/* Management */}
              <Route path="/admin/product/new" element={<NewProduct />} />

              <Route path="/admin/product/:id" element={<Productmanagement />} />

              <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
            </Route>

          </Routes>
        </Suspense>

      </Router>
    </>
  )
}

export default App
