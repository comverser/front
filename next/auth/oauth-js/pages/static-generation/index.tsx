import Link from "next/link";
import styled from "styled-components";

import { list } from "../../utils";

export async function getStaticProps() {
  const apiReponse = await fetch("https://dummyjson.com/products");
  const jsonResponseFromApiResponse = await apiReponse.json();

  console.log(jsonResponseFromApiResponse);

  return {
    props: {
      listOfItems: list,
      listOfDataFromApi: jsonResponseFromApiResponse,
    },
  };
}

const Flex = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Index = ({ listOfItems, listOfDataFromApi }) => {
  const { products } = listOfDataFromApi;
  return (
    <div>
      <h2>List of Items</h2>
      <Flex>
        {listOfItems && listOfItems.length > 0
          ? listOfItems.map((item) => (
              <Link key={item.id} href={`/static-generation/${item.id}`}>
                <a>{item.label}</a>
              </Link>
            ))
          : null}
      </Flex>
      <h2>List of Items from API</h2>
      <ul>
        {products && products.length > 0
          ? products.map((item) => (
              <li key={item.id}>
                <p>
                  <span>Title :</span>
                  <span>{item.title}</span>
                </p>
                <p>
                  <span>Description :</span>
                  <span>{item.description}</span>
                </p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Index;
