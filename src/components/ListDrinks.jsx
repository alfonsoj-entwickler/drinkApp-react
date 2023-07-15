import DrinkItem from "./DrinkItem";
import { Row } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

const ListDrinks = () => {
    const { drinks } = useDrink();
 
    return(
        <Row className="mt-5">
            {Object.keys(drinks).length > 0 && (
                <>
                    {drinks.drinks.map( (item, i) => (
                        <DrinkItem key={`${i}-${item.idDrink}`} drink={item} />
                    ))}
                </>
            )}
        </Row>
    )
}

export default ListDrinks;