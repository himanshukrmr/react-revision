import React, { useEffect, useState } from "react";
import Card from "./component/card";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <div id="loading">Loading... Please Wait</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div id="product-showcase">
          {data.slice((pageNumber - 1) * 4, pageNumber * 4).map((product) => (
            <Card key={product.id} product={product} />
          ))}
          <div>
            <button
              onClick={() => {
                setPageNumber((prev) => prev - 1);
              }}
              disabled={pageNumber === 1}
            >
              Prev
            </button>
            {Array.from({ length: Math.ceil(data.length / 4) }).map(
              (_, index) => (
                <span
                  onClick={() => {
                    setPageNumber(index + 1);
                  }}
                  className={pageNumber == index + 1 ? "active" : ""}
                  id="page-span"
                  key={index}
                >
                  {index + 1}
                </span>
              )
            )}

            <button
              onClick={() => {
                setPageNumber((prev) => prev + 1);
              }}
              disabled={pageNumber * 4 >= data.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
