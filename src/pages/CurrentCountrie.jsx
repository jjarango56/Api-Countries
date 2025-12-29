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
  } = useParams();
  const navigate = useNavigate();
  if (!id) {
    console.log("id no encontrado");
  }
  return (
    <section className="flex flex-col md:flex-row min-h-screen w-full items-center justify-evenly ">
      <div>
        <button
          className="px-5 cursor-pointer flex items-center bg-header-bg text-button-gray rounded-md position: absolute top-30 inset-shadow-sm inset-shadow-gray-900 "
          label="Volver a la pagina anterior"
          aria-label="Volver a la pagina anterior"
          onClick={() => navigate(-1)}
        >
          <TiArrowLeft />
          Back
        </button>
        <img className="md:w-120" src={img} alt="" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-8 h-70 items-center ">
          <div className="text-center md:text-left flex flex-col gap-3 ">
            <h1 className="text-center text-5xl md:text-4xl text-left py-4 font-bold">
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
              SubRegion:{" "}
              <span className="font-medium text-text-countrie">
                {subregion}
              </span>
            </p>
            <p className="font-bold text-sm">
              SubRegion:{" "}
              <span className="font-medium text-text-countrie">
                {subregion}
              </span>
            </p>
            <p className="font-bold text-sm">
              SubRegion:{" "}
              <span className="font-medium text-text-countrie">
                {subregion}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center">
            <h1 className="font-bold text-sm text-text">
              topLevelDomain :{" "}
              <span className="font-medium text-sm text-text-countrie">
                {topLevelDomain}
              </span>
            </h1>
            <h1 className="font-bold text-sm">
              topLevelDomain :{" "}
              <span className="font-medium text-sm text-text-countrie">
                {topLevelDomain}
              </span>
            </h1>
            <h1 className="font-bold text-sm">
              topLevelDomain :{" "}
              <span className="font-medium text-text-countrie">
                {topLevelDomain}
              </span>
            </h1>
            <p className="font-bold">
              <span className="font-medium text-text-countrie">
                {nativeName}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:flex-row justify-between gap-2 py-2">
          <h1 className="bg-header-bg p-1 text-xs">{borders}</h1>
          <h1 className="bg-header-bg p-1 text-xs">{borders}</h1>
          <h1 className="bg-header-bg p-1 text-xs">{borders}</h1>
          <h1 className="bg-header-bg p-1 text-xs">{borders}</h1>
        </div>
      </div>
    </section>
  );
};
