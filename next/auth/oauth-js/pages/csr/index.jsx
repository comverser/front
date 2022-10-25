import { Fragment, useEffect, useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    // loading state here
    setLoading(true);

    // call api here
    async function getData() {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const dataFromApiResponse = await apiResponse.json();
      const { products } = dataFromApiResponse;

      if (products && products.length > 0) {
        setLoading(false);
        setData(products);
      }
    }

    // trigger
    getData();
  }, []);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div>
      {data && data.length > 0 ? (
        <>
          <h1>This is client side data fetching exmaple</h1>
          {data.map((item) => (
            <p key={item.id}>
              <span>{item.title}</span>
              <span>{item.description}</span>
            </p>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Index;
