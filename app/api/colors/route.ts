export async function GET() {
  let colors: ColorSchemeInterface = {
    primary: "#FE724C",
    secondary: "#FFC529",
    accent: "#B5E1FA",
    background: "#FFFFFF",
    backgroundText: "#111719",
  };

  const jsonResponse = JSON.stringify(colors);

  return new Response(jsonResponse, {
    status: 200,
    statusText: "Success",
  });
}
