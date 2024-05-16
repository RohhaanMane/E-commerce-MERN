import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"; // lazy() - when below route hits then only page will be loaded not before that
import Loader from "./components/loader";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));

const App = () => {
    return (
        <Router>
             <Suspense fallback={<Loader />}>  {/*until one of the route component is loaded show this fallback component */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
