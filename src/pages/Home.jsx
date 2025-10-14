import { ListCard } from "../components/filter-container/ListCard.jsx";
import { Hero } from "../components/hero/Hero.jsx";
import { useProper } from "../hooks/useProper.jsx";
import { Filter } from "../components/filter-container/Filter.jsx";
import { Layout } from "../components/layout/Layout.jsx";

export const Home = () => {
  const { loading, countries, filter, setSelectedCountry } = useProper();
  return (
    <>
      <Layout>
        <Hero />
        <Filter options={countries} onChange={setSelectedCountry} />
        <ListCard data={filter} loading={loading} />
      </Layout>
    </>
  );
};
