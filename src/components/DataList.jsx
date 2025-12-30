import { useFilterData } from "../hooks/useFilterData";

/**
 * Lists countries from API and provides search and region filters.
 * @returns {import('react').JSX.Element} The country list UI.
 * @example
 * <ListData/>
 */
export const LisData = () => {
  const {
    query,
    navigate,
    setQueryRegion,
    queryRegion,
    newData,
    setQuery,
    filterRegion,
  } = useFilterData();

  return (
    <>
      <aside className="flex flex-col md:flex-row justify-between px-30 gap-5 md:gap-10 py-5">
        <input
          type="text"
          className="p-2 bg-input-bg px-5 w-full md:w-100 text-xs text-text shadow-xl"
          placeholder="Search countries"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          name="Filter by Region"
          id=""
          className="overflow-y-scroll p-2 w-full md:w-48 bg-input-bg shadow-xl"
          value={queryRegion}
          onChange={(e) => setQueryRegion(e.target.value)}
        >
          {filterRegion.map((i) => (
            <option key={i.alpha3Code}>{i.region}</option>
          ))}
        </select>
      </aside>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 px-5 md:px-0">
        {newData.map((i) => (
          <div
            key={i.alpha3Code}
            className="flex flex-col w-full items-center justify-items-center max-w-sm mx-auto"
          >
            <img
              className="rounded-t-md h-48 sm:h-56 w-full object-cover"
              src={i.flags.png}
              alt={i.name}
            />
            <div className="bg-header-bg shadow-md w-full rounded-b-md flex flex-col justify-center items-start px-5 py-4 gap-3">
              <button
                className="cursor-pointer text-2xl text-center font-bold"
                onClick={() =>
                  navigate(
                    `/CurrentCountry/${i.alpha3Code}/${i.name}/${
                      i.population
                    }/${encodeURIComponent(i.flags.png)}/${i.topLevelDomain}/${
                      i.area
                    }/${i.nativeName}/${i.subregion}/${i.borders}/${i.capital}`
                  )
                }
              >
                {i.name}
              </button>
              <p className="text-xs font-bold text-text">
                Population :
                <span className="font-normal text-text px-1">
                  {i.population}
                </span>
              </p>
              <p className="text-xs font-bold text-text">
                Region :
                <span className="font-normal text-text px-1">{i.region}</span>
              </p>
              <p className="text-xs font-bold text-text">
                Capital :
                <span className="font-normal text-text">{i.capital}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
