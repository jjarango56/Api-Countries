import { useFilterData } from "../hooks/useFilterData";
export /**
 *
 *
 * @return {*}
 */
const LisData = () => {
  const {
    query,
    data,
    navigate,
    setQueryRegion,
    queryRegion,
    newData,
    setQuery,
    filterRegion,
  } = useFilterData();

  return (
    <>
      <aside className="grid grid-cols-2 gap-10  py-5 px-5">
        <input
          type="text"
          className="bg-input-bg px-5 text-xs text-text"
          placeholder="Search countries"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          name="Filter by Region"
          id=""
          className="overflow-y-scroll p-2 bg-input-bg"
          value={queryRegion}
          onChange={(e) => setQueryRegion(e.target.value)}
        >
          {filterRegion.map((i) => (
            <option key={i.alpha3Code}>{i.region}</option>
          ))}
        </select>
      </aside>
      <section className="grid grid-cols-1 md:grid-cols-3 space-y-7">
        {newData.map((i) => (
          <div
            key={i.alpha3Code}
            className=" flex flex-col w-full items-center justify-items-center"
          >
            <img
              className="rounded-t-md h-58 w-96 object-cover"
              src={i.flags.png}
              alt={i.name}
            />
            <div className="bg-header-bg w-sm rounded-b-md flex flex-col justify-center items-start px-5 h-50 gap-3 ">
              <button
                className="cursor-pointer text-2xl text-center font-bold"
                onClick={() =>
                  navigate(
                    `/CurrentCountrie/${i.alpha3Code}/${i.name}/${
                      i.population
                    }/${encodeURIComponent(i.flags.png)}/${i.topLevelDomain}/${
                      i.area
                    }/${i.nativeName}/${i.subregion}/${i.borders}`
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
