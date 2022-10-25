import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function App() {
  // const [name, setName] = useLocalStorage("name", "");
  const [name, setName] = useLocalStorage("name", () => "");

  useUpdateLogger(name);

  // console.log("name", name);
  // console.log("setName", setName);
  // console.log("useLocalStorage", useLocalStorage);

  return (
    <div className="App">
      <h1>Custom Hook: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
