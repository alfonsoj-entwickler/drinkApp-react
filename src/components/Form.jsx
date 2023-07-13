import { useState } from "react";
import { Button, Form as FormBootrap, Row, Col, Alert } from "react-bootstrap";
import useCategory from "../hooks/useCategory";
import useDrink from "../hooks/useDrink";

const Form = () => {
  const [searchDrink, setSearchDrink] = useState({
    name: "",
    category: "",
  });
  const [ alert, setAlert ] = useState('');
  const { categories } = useCategory();
  const { queryDrinks } = useDrink();

  const handleSubmit = e => {
    e.preventDefault();
    if( Object.values(searchDrink).includes('') ){
      setAlert('All fields are mandatory');
      return
    }
    setAlert('');
    queryDrinks(searchDrink);
  }

  return (
    <FormBootrap onSubmit={handleSubmit}>
      {alert && <Alert variant="danger">{alert}</Alert>}
      <Row>
        <Col md={6}>
          <FormBootrap.Group className="mb-3">
            <FormBootrap.Label htmlFor="name">Drinks name</FormBootrap.Label>
            <FormBootrap.Control
              id="name"
              type="text"
              placeholder="Ex: Tequila, Vodka, etc"
              name="name"
              value={searchDrink.name}
              onChange={(e) =>
                setSearchDrink({
                  ...searchDrink,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </FormBootrap.Group>
        </Col>
        <Col md={6}>
          <FormBootrap.Group className="mb-3">
            <FormBootrap.Label htmlFor="category">
              Drinks name
            </FormBootrap.Label>
            <FormBootrap.Select
              id="category"
              name="category"
              value={searchDrink.category}
              onChange={(e) =>
                setSearchDrink({
                  ...searchDrink,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option value="">Select a category</option>
              {categories.map((drink) => (
                <option key={drink.strCategory} value={drink.strCategory}>
                  {drink.strCategory}
                </option>
              ))}
            </FormBootrap.Select>
          </FormBootrap.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button variant="danger" className="text-uppercase w-100" type="submit">
            Search drinks
          </Button>
        </Col>
      </Row>
    </FormBootrap>
  );
};

export default Form;
