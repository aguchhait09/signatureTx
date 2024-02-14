import { useContext } from "react";
import PharmacyContext from "../context/PharmacyContext";

export default function usePharmacy() {
  const context = useContext(PharmacyContext);
  if (!context) {
    throw new Error(`usePharmacy must be called inside PharmacyProvider`);
  }
  return context;
}
