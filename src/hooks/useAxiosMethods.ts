import createHttpMethod from "@/helpers/createHttpMethod";
import { useMemo } from "react";


export default function useAxiosMethods(axios) {
    return useMemo(() => createHttpMethod(axios), [])
}