import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>
        <h3 className="text-2xl text-center my-4">Auth UI</h3>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
