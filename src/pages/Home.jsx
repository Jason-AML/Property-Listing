import { ListCard } from "../components/filter-container/ListCard.jsx";
import { Hero } from "../components/hero/Hero.jsx";
import { useProper } from "../hooks/useProper.jsx";
import { Filter } from "../components/filter-container/Filter.jsx";

export const Home = () => {
  const { loading, countries, filter, setSelectedCountry } = useProper();
  return (
    <>
      <Hero />
      <Filter options={countries} onChange={setSelectedCountry} />
      <ListCard data={filter} loading={loading} />
    </>
  );
};
