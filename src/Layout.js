import SimpleBottomNavigation from "routes/BottomNav";
import LogoBar from "LogoBar";

const Layout = ({ children }) => {
  return (
    <>
      <LogoBar />
      <div className="bg-white max-w-screen-xl mx-auto h-5/6">{children}</div>
      <SimpleBottomNavigation />
    </>
  );
};

export default Layout;
