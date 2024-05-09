import Link from "next/link";
import React from "react";

function UniversitiesCard({
  id,
  name,
  webpage,
  region,
  country,
  city,
  academic_offer,
  exchange_info,
}) {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
        <h6 className="font-bold">{id}</h6>
        <div className="w-[95%] h-45 bg-figma_grey text-black rounded-lg">
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here
        </div>
        <p className="font-semibold">
          {name} - {country}
        </p>
        <div className="grid grid-cols-2 gap-3 p-4">
          <p className="font-semibold">{city}</p>
          <p className="font-semibold">{region}</p>
          <a href={`${webpage}`}>
            <p className="font-semibold underline">Página web.</p>
          </a>
          <a href={`${academic_offer}`}>
            <p className="font-semibold underline">Oferta académica.</p>
          </a>
          <a href={`${exchange_info}`}>
            <p className="font-semibold underline">
              Información de intercambio
            </p>
          </a>
        </div>

        <div className="flex justify-between items-center w-96">
          <div className="w-full p-2">
            <Link href={`/Universidades/${id}`}>
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Actualizar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UniversitiesCard;
