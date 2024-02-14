import { useCreation } from "ahooks";
import { createContext } from "react";
import usePharmacyProviderValue, {
  usePharmacyProviderValueProps,
} from "../hooks/usePharmacyProviderValue";

const PharmacyContext = createContext(
  {} as ReturnType<typeof usePharmacyProviderValue>
);

type PharmacyProviderProps = {
  children: React.ReactNode;
} & usePharmacyProviderValueProps;
export function PharmacyProvider(props: PharmacyProviderProps) {
  const { children, ...rest } = props;
  const value = usePharmacyProviderValue(rest);
  return (
    <PharmacyContext.Provider value={useCreation(() => value, [value])}>
      {children}
    </PharmacyContext.Provider>
  );
}

export const AuthConsumer = PharmacyContext.Consumer;
export default PharmacyContext;
