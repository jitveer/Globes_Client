import useWindowSize from "../../hooks/useWindowSize";
import MobileHomeLayout from "./Home_Mobile/MobileHomeLayout";
import DesktopHomeLayout from "./Home_Desktop/DesktopHomeLayout";

const MOBILE_BREAKPOINT = 768;

const Home = () => {
  const { width } = useWindowSize();

  if (width === undefined) {
    return null;
  }

  const isMobile = width < MOBILE_BREAKPOINT;

  return (
    <div className="home-page-content">
      {/* {isMobile ? (
        <div>
          <MobileHomeLayout />
        </div>
      ) : (
        <DesktopHomeLayout />
      )} */}
      <DesktopHomeLayout />
    </div>
  );
};

export default Home;
