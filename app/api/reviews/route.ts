import { faker } from "@faker-js/faker";

const data: Review[] = [];
export async function GET() {
  function generateReview(): Review[] {
    for (let i = 0; i < 20; i++) {
      const randomId = faker.string.uuid();
      const randomName = faker.person.fullName();
      const randomRating = +(Math.random() * 5).toFixed(1);
      const randomDate = faker.date.past({
        years: 2023,
      });
      const randomReview = faker.lorem.paragraph();
      const randomPhoto = faker.image.avatar();

      const item: Review = {
        id: randomId,
        name: randomName,
        rating: randomRating,
        date: randomDate,
        review: randomReview,
        photo: randomPhoto,
      };

      data.push(item);
    }

    return data;
  }
  const randomReview: Review[] = generateReview();
  const jsonified = JSON.stringify(randomReview);
  return new Response(jsonified, { status: 200 });
}
