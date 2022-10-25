import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  // const { data, error } = useSWR("https://dummyjson.com/products", fetcher);
  const { data, error } = useSWR("/api/productList", fetcher);

  if (error) return <div>Error occured! Please try again</div>;
  if (!data) return <div>Loading...</div>;

  const { productList } = data;

  return (
    <div>
      {productList && productList.length > 0 ? (
        <>
          <h1>This is SWR hook client side data fetching</h1>
          {productList.map((item) => (
            <p key={item.id}>
              <span>{item.label}</span>
            </p>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Index;
