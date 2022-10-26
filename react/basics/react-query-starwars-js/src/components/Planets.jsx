import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  //   const { data, status} = useQuery("planets", fetchPlanets);
  // console.log('data :>> ', data);
  // console.log('status', status)

  return <div>Planets</div>;
};

export default Planets;
