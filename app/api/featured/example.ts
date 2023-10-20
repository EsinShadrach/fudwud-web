import { faker } from "@faker-js/faker";

export default function generateFakeFood(): FoodItem {
  const addOns = [
    {
      name: "Extra Cheese",
      selected: false,
      // image: faker.image.urlLoremFlickr({
      //   category: "food",
      // }),
    },
    {
      name: "Peppers",
      selected: false,
      // image: faker.image.urlLoremFlickr({ category: "food" }),
    },
  ];

  return {
    id: faker.string.uuid(),
    name: faker.lorem.words(),
    prepareTime: `${faker.number.int({ min: 10, max: 60 })} minutes`,
    image: faker.image.urlLoremFlickr({ category: "food" }),
    categories: [faker.word.noun()],
    customerFavorite: faker.datatype.boolean({ probability: 0.3 }),
    featured: faker.datatype.boolean({ probability: 0.7 }),
    rating: +faker.number.int({ min: 0, max: 5 }),
    ratingCount: +faker.number.int({ min: 0, max: 100 }),
    price: +faker.finance.amount(5, 20, 2),
    addOns: addOns,
  };
}
