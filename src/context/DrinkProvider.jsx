import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinkContext = createContext();

const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [ recipe, setRecipe ] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);
    const getRecipe = async () => {
      if(!drinkId) return
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.err(error);
      }
      finally {
        setLoading(false);
      }
    } 
    getRecipe();
  }, [drinkId])

  const handleModalClick = () => {
    setModal((modal) => !modal);
  };

  const queryDrinks = async (searching) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searching.name}&c=${searching.category}`;
      const { data } = await axios(url);
      setDrinks(data);
    } catch (error) {
      console.err(error);
    }
  };

  const handleDrinkIdClick = (id) => {
    setDrinkId(id);
  };

  return (
    <DrinkContext.Provider
      value={{
        drinks,
        modal,
        recipe,
        loading,
        queryDrinks,
        handleModalClick,
        handleDrinkIdClick,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export { DrinkProvider };

export default DrinkContext;
