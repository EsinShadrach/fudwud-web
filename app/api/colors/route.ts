export async function GET() {
  let colors: ColorSchemeInterface = {
    primary: "254, 114, 76",
    secondary: "255, 197, 41",
    accent: "181, 225, 250",
    background: "255, 255, 255",
    backgroundText: "10, 10, 10",
  };

  const jsonResponse = JSON.stringify(colors);

  return new Response(jsonResponse, {
    status: 200,
    statusText: "Success",
  });
}
