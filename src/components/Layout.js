import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="text-center md:text-center">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
