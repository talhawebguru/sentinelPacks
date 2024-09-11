import AboutUs from "./components/common/AboutUs";
import Banner from "./components/common/Banner";
import Product from "./components/home/Product";
import ProductOverview from "./components/home/ProductOverview";

export default function Home() {
  return (
  <>
    <AboutUs/>
    <Product/>
    <ProductOverview/>
    <Banner/>
  </>
  );
}
