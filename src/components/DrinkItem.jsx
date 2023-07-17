import { Col, Card, Button } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

const DrinkItem = ({drink}) => {
    const { handleModalClick, handleDrinkIdClick } = useDrink();

    return(
        <Col md={6} lg={3}>
            <Card className="mb-4">
                <Card.Img 
                    variant="top"
                    src={drink.strDrinkThumb}
                    alt={`Image of ${drink.strDrink}`}
                />
                <Card.Body>
                    <Card.Title>{drink.strDrink}</Card.Title>
                    <Button
                        variant="info"
                        className="w-100 text-uppercase mt-2"
                        onClick={() => {
                            handleModalClick(true);
                            handleDrinkIdClick(drink.idDrink)
                        }}
                    >See recipe</Button>
                </Card.Body>
            </Card>
        </Col>
        
    )
}

export default DrinkItem;