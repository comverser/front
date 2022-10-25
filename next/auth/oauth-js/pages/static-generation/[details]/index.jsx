// import { useRouter } from "next/router";

import { list } from "../../../utils";

export async function getStaticPaths() {
  const allListItemPaths = list.map((item) => ({
    params: {
      details: item.id,
    },
  }));

  return {
    paths: allListItemPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { details } = params;

  // filter current list item here
  const filteredListItem = list.find((item) => item.id === details);

  return {
    props: { filteredListItem },
  };
}

const ListDetails = ({ filteredListItem }) => {
  // const router = useRouter();
  // const { query } = router;
  // const { details } = query;

  return (
    <div>
      <h1>
        This is List Details component for list item {filteredListItem.id} and
        the label is {filteredListItem.label}
      </h1>
    </div>
  );
};

export default ListDetails;
