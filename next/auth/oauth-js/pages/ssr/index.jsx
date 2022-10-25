export async function getServerSideProps() {
  const apiResponse = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  const data = await apiResponse.json();

  return {
    props: {
      getServerSideData: data,
    },
  };
}

const Index = ({ getServerSideData }) => {
  return (
    <div>
      <h1>GetServerSidePropsExample</h1>
      <ul>
        {getServerSideData && getServerSideData.length > 0
          ? getServerSideData.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
    </div>
  );
};

export default Index;
