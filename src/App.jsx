import { Container } from "react-bootstrap";
import Form from "./components/Form";
import ListDrinks from "./components/ListDrinks";
import ModalDrink from "./components/ModalDrink";
import { CategoryProvider } from "./context/CategoryProvider";
import { DrinkProvider } from "./context/DrinkProvider";

function App() {
  return (
    <CategoryProvider>
      <DrinkProvider>
        <header className="py-5">
          <h1>Search of drinks</h1>
        </header>
        <Container className="mt-5">
          <Form />
          <ListDrinks />
          <ModalDrink />
        </Container>
      </DrinkProvider>
    </CategoryProvider>
  );
}

export default App;
