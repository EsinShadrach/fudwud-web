import generateFakeFood from "./example";

export async function GET() {
  const imageInfo: FoodItem[] = generateFakeFood({ range: 30 });

  const jsonified = JSON.stringify(imageInfo);
  console.log("Making request");
  return new Response(jsonified, {
    status: 200,
  });
}
