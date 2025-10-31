import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>

      <Footer />
    </>
  );
};
