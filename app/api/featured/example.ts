import { faker } from "@faker-js/faker";

export default function generateFakeFood({
  range,
}: {
  range: number;
}): FoodItem[] {
  const fakeFoods: FoodItem[] = [];

  for (let index = 0; index < range; index++) {
    const addOns = [
      {
        name: faker.word.noun(),
        selected: false,
        image: faker.image.urlLoremFlickr({
          category: "food",
        }),
      },
      {
        name: faker.word.noun(),
        selected: false,
        image: faker.image.urlLoremFlickr({ category: "food" }),
      },
    ];

    const foodItem: FoodItem = {
      id: faker.string.uuid(),
      name: faker.lorem.words(),
      prepareTime: `${faker.number.int({ min: 10, max: 60 })} minutes`,
      image: faker.image.urlLoremFlickr({ category: "food" }),
      categories: [faker.word.noun(), faker.word.noun(), faker.word.noun()],
      customerFavorite: faker.datatype.boolean({ probability: 0.3 }),
      featured: faker.datatype.boolean({ probability: 0.7 }),
      rating: +faker.number.int({ min: 0, max: 5 }),
      ratingCount: +faker.number.int({ min: 0, max: 100 }),
      price: +faker.finance.amount(5, 20, 2),
      instructions: faker.lorem.lines({ min: 10, max: 20 }),
      addOns: addOns,
    };

    fakeFoods.push(foodItem);
  }

  return fakeFoods;
}
