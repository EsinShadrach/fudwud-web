import { faker } from "@faker-js/faker";
import { NextRequest } from "next/server";
const orders: CreateOrder[] = [
  {
    id: faker.string.uuid(),
    count: faker.number.int({ min: 1, max: 10 }),
    instructions: faker.lorem.words({ min: 0, max: 30 }),
    status: "pending",
  },
  {
    id: faker.string.uuid(),
    count: faker.number.int({ min: 1, max: 10 }),
    instructions: faker.lorem.words({ min: 0, max: 30 }),
    status: "pending",
  },
];

export async function GET() {
  const jsonified = JSON.stringify(orders);
  return new Response(jsonified, {
    status: 200,
  });
}

// Get edits an order from there
export async function POST(req: NextRequest) {
  const body = (await req.json()) as CreateOrder;
  try {
    orders.push(body);
    const jsonified = JSON.stringify(orders);
    return new Response(jsonified, {
      status: 201,
    });
  } catch (error) {
    const errorM = error as Error;
    return new Response(errorM.message, {
      status: 500,
    });
  }
}
