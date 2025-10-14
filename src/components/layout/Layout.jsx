import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
