export async function GET() {
  const filters: FilterCategory[] = [
    {
      name: "Categories",
      filter: [
        {
          name: "Ipsum",
          selected: false,
        },
        {
          name: "Ipsum",
          selected: false,
        },
        {
          name: "Ipsum",
          selected: false,
        },
      ],
    },
    {
      name: "Cuisine",
      filter: [
        {
          name: "Ipsum",
          selected: false,
        },
        {
          name: "Ipsum",
          selected: false,
        },
        {
          name: "Ipsum",
          selected: false,
        },
      ],
    },
    {
      name: "Food Type",
      filter: [
        {
          name: "Ipsum",
          selected: false,
        },
        {
          name: "Ipsum",
          selected: false,
        },
        {
          name: "Ipsum",
          selected: false,
        },
      ],
    },
    {
      name: "Preferences",
      filter: [
        {
          name: "Ipsum",
          selected: false,
        },
        {
          name: "Ipsum",
          selected: false,
        },
        {
          name: "Ipsum",
          selected: false,
        },
      ],
    },
  ];
  const jsonified = JSON.stringify(filters);
  return new Response(jsonified, {
    status: 200,
  });
}
