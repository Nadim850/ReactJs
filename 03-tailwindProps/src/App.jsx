import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-yellow-500 text-white rounded ">tailwind css</h1>
      <div className="flex justify-center m-4">
        <Card username="nadim" btnText="click me" />
        <Card username="chaiAurCode" btnText="visit me" />
      </div>
    </>
  );
}

export default App;
