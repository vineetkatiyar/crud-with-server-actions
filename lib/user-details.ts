import prisma from "./prisma";

const seetProduct = async () => {
  const count = await prisma.details.count();
  if (count === 0) {
    await prisma.details.createMany({
      data: [
        { name: "vineet", email: "vineet@gmail.com", phone: "1234567890" },
        { name: "navneet", email: "navneet@gmail.com", phone: "1234567890" },
      ],
    });
  }
};
seetProduct();

export const getDetails = async (query?: string) => {
  if (query) {
    return await prisma.details.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
        ],
      },
    });
  }
  return await prisma.details.findMany();
};

export const getDetail = async (id: string) => {
  return await prisma.details.findUnique({
    where: { id },
  });
};

export const deleteDetails = async (id: string) => {
  return await prisma.details.delete({
    where: { id },
  });
};

export const addDetail = async (name: string, email: string, phone: string) => {
  return prisma.details.create({
    data: { name, email, phone },
  });
};

export const updateDetail = async (
  id: string,
  name: string,
  email: string,
  phone: string
) => {
  return prisma.details.update({
    where: { id },
    data: { name, email, phone },
  });
};
