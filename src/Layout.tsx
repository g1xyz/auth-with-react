import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>
        <h3>Auth with React</h3>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
