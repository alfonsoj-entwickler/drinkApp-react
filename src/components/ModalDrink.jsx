import { Modal, Image } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

const ModalDrink = () => {
  const { modal, recipe, loading, handleModalClick } = useDrink();
  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };
  return (
    !loading && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image src={recipe.strDrinkThumb} alt={`Image of ${recipe.strDrink}`} />
        <Modal.Header>
          <Modal.Title>{recipe.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instructions</h2>
            <p>{recipe.strInstructions}</p>
            <p>{recipe.strInstructionsDE}</p>
            <h2>Ingredients and Quantity</h2>
            {showIngredients()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default ModalDrink;
