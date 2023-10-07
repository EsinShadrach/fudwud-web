export async function GET() {
  let colors: ColorSchemeInterface = {
    primary: "#FE724C",
    secondary: "#FFC529",
    accent: "#B5E1FA",
    background: "#FFFFFF",
    backgroundText: "#111719",
  };

  // try {
  //   const response = await fetch("http://localhost:3001/api/colors");
  //   if (response.ok) {
  //     console.log("Response is okay");
  //     const data: ColorSchemeInterface = await response.json();
  //     colors = data;
  //     console.log(data);
  //   } else {
  //     console.log("Response is not okay");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  const jsonResponse = JSON.stringify(colors);

  return new Response(jsonResponse, {
    status: 200,
    statusText: "Success",
  });
}
