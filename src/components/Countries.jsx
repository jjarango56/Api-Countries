import { ErrorBoundary } from "react-error-boundary";
import { GetData } from "../services/Api";
import { Suspense } from "react";
import { LoadingData } from "./LoadingData";
import { LisData } from "./ListData";


export const Countries = () => {
  return (
    <ErrorBoundary fallback={<p>Ocurrio un error al cargar los datos</p>}>
      <Suspense fallback={<LoadingData/>}>
        <LisData data={GetData} />
      </Suspense>
    </ErrorBoundary>
  );
};
