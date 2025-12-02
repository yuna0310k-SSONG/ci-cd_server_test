import { handleValidationError, handleNotFoundError } from "../utils/errorHandlers.js";

const dogs = [
  { name: "Buddy", breed: "Golden Retriever", age: 3 },
  { name: "Max", breed: "Bulldog", age: 5 },
  { name: "Bella", breed: "Poodle", age: 2 },
];

export const getDogs = () => dogs;

export const addDog = (dog) => {
  dogs.push(dog);
  return dog;
};

export const updateDog = (index, updatedDog) => {
  if (dogs[index]) {
    dogs[index] = updatedDog;
    return updatedDog;
  }
  return handleNotFoundError(null, "Dog not found");
};

export const deleteDog = (index) => {
  if (dogs[index]) {
    return dogs.splice(index, 1);
  }
  return handleNotFoundError(null, "Dog not found");
};
