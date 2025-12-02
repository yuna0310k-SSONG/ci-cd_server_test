import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDogs = async () => {
  return await prisma.dogs.findMany();
};

export const addDog = async (dog) => {
  const newDog = await prisma.dogs.create({
    data: dog,
  });
  return newDog;
};

export const updateDog = async (id, updatedDog) => {
  const dog = await prisma.dogs.update({
    where: { id },
    data: updatedDog,
  });
  return dog;
};

export const deleteDog = async (id) => {
  const dog = await prisma.dogs.delete({
    where: { id },
  });
  return dog;
};
