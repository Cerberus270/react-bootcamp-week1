import Form from "./components/form/Form";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="container-lg mx-auto">
      <Header headerText={"Get GitHub Profile"} />
      <Form />

    </div>
  );
}

export default App;
