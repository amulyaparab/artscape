import { createContext, useContext, useReducer } from "react";
import { categories } from "../Database/categories";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const categoryReducer = (categoryState, action) => {
    switch (action.type) {
      default:
        return categoryState;
    }
  };
  const initialState = {
    categories: categories,
  };
  const [categoryState, categoryDispatch] = useReducer(
    categoryReducer,
    initialState
  );
  return (
    <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategory = () => useContext(CategoryContext);
