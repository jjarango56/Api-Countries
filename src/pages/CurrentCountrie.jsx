import { useNavigate, useParams } from "react-router-dom";
import { TiArrowLeft } from "react-icons/ti";

export const CurrentCountrie = () => {
  const {
    name,
    population,
    img,
    id,
    topLevelDomain,
    area,
    nativeName,
    subregion,
    borders,
    capital
  } = useParams();
  const navigate = useNavigate();
  if (!id) {
    console.log("id no encontrado");
  }
  return (
    <section className="flex flex-col md:flex-row min-h-screen w-full items-start md:items-center justify-center md:justify-evenly px-5 py-5 gap-8">
      <div className="w-full md:w-auto">
        <button
          className="px-5 py-1 cursor-pointer flex items-center gap-2 bg-header-bg text-button-gray shadow-sm shadow-gray-900 rounded mb-4"
          label="Volver a la pagina anterior"
          aria-label="Volver a la pagina anterior"
          onClick={() => navigate(-1)}
        >
          <TiArrowLeft />
          Back
        </button>
        <img className="w-full md:w-96 lg:w-120 rounded-lg" src={img} alt="" />
      </div>
      <div className="w-full md:w-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:h-70 items-start md:items-center">
          <div className="text-left flex flex-col gap-3 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-3xl py-4 font-bold">
              {name}
            </h1>
            <p className="font-bold text-sm ">
              Population:{" "}
              <span className="font-medium text-text-countrie">
                {population}
              </span>
            </p>
            <p className="font-bold text-sm">
              Area:{" "}
              <span className="font-medium text-text-countrie">{area}</span>
            </p>
            <p className="font-bold text-sm">
              SubRegion:{" "}
              <span className="font-medium text-text-countrie">
                {subregion}
              </span>
            </p>
            <p className="font-bold text-sm">
              Capital:{" "}
              <span className="font-medium text-text-countrie">
                {capital}
              </span>
            </p>
           
          </div>
          <div className="flex flex-col items-start  w-full">
            <p className="font-bold text-sm text-text">
              topLevelDomain :{" "}
              <span className="font-medium text-sm text-text-countrie">
                {topLevelDomain}
              </span>
            </p>
            <p className="font-bold text-sm ">
              Native Name : {" "}
              <span className="font-medium text-text-countrie">
                {nativeName}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 py-5 w-full">
          <h2 className="font-bold text-sm">Borders Countries: </h2>
          <p className="bg-header-bg p-2 text-xs break-words text-center w-full md:w-auto">{borders}</p>
        </div>
      </div>
    </section>
  );
};
