import BottomNav from "~/utils/bottom-nav";
import Sidebar from "~/utils/sidebar";

export default function RootLayout({ params, children }: Layout) {
  const segment = children.props.childProp.segment;
  const tableNumber: string | unknown = JSON.parse(segment.split("?")[1]).table;
  let home = `/resturant/${params.id}/`;
  if (tableNumber) {
    console.log(home);
    home = `/resturant/${params.id}/?table=${tableNumber}`;
  } else {
    console.log("NO TABLE ", tableNumber);
  }
  return (
    <>
      {children}
      <BottomNav path={home} />
    </>
  );
}
