import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import FooterTerm from "./component/FooterTerm";
import { useState, useEffect, useRef } from "react";
import catagoryData from "./catagoryData";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const [selectedCategories, setSelectedCategories] = useState([]);
  const initialDataRef = useRef(null);

  const fetchData = async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${5 * pageNum}`
      );
      if (!response.ok) {
        throw new Error("something went wrong....");
      }

      initialDataRef.current = await response.json();
      if (selectedOption) {
        if (selectedOption === "Desc") {
          initialDataRef.current = [
            ...initialDataRef.current.sort((a, b) => b.price - a.price),
          ];
        } else {
          initialDataRef.current = [
            ...initialDataRef.current.sort((a, b) => a.price - b.price),
          ];
        }
      }
      setData(initialDataRef.current);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data...");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading && page === 1) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <Header toggleSidebar={toggleSidebar} />
      <Banner />
      <div className="mainWrapper">
        <div className="container">
          <div className="dFlex mainInner">
            <Sidebar
              data={data}
              setData={setData}
              initialData={initialDataRef.current}
              catagoryData={catagoryData}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              visible={sidebarVisible}
              toggleSidebar={toggleSidebar}
            />
            <Main
              data={data}
              setData={setData}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>

          <div className="dFlex justifyCenter loadMoreBtn  alignCenter">
            {loading && <div>Loading more data...</div>}
            {!loading && (
              <button onClick={handleLoadMore} disabled={loading}>
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <FooterTerm />
    </div>
  );
}

export default App;
