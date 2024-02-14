import { useQuery } from "@tanstack/react-query";
import { getPharmacyDetailsQuery } from "../functions/pharmacy.api";

export type usePharmacyProviderValueProps = {
  pharmacyId?: string;
};
export default function usePharmacyProviderValue(
  props: usePharmacyProviderValueProps
) {
  const { pharmacyId } = props;
  const pharmacyQuery = useQuery({
    queryKey: ["pharmacy", pharmacyId],
    queryFn: () => getPharmacyDetailsQuery(pharmacyId),
    enabled: Boolean(pharmacyId),
  });

  return { pharmacyId, pharmacyQuery };
}
