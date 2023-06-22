import { createContext, useState } from "react";

interface FilterProviderProps {
  children: React.ReactNode;
}

interface FilterProviderValue {
  brand: string | null | undefined;
  setBrand: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  model: string | null | undefined;
  setModel: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  color: string | null | undefined;
  setColor: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  year: string | null | undefined;
  setYear: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  fuel: string | null | undefined;
  setFuel: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  km: string | null | undefined;
  setKm: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  handleClick: () => void;
}

export const FilterContext = createContext({} as FilterProviderValue);

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [brand, setBrand] = useState<null | string | undefined>();
  const [model, setModel] = useState<null | string>();
  const [color, setColor] = useState<null | string>();
  const [year, setYear] = useState<null | string>();
  const [fuel, setFuel] = useState<null | string>();
  const [km, setKm] = useState<null | string>();

  const handleClick = () => {
    setBrand(null),
      setModel(null),
      setColor(null),
      setFuel(null),
      setYear(null);
    setKm(null);
  };

  return (
    <FilterContext.Provider
      value={{
        brand,
        color,
        fuel,
        km,
        model,
        setBrand,
        setColor,
        setFuel,
        setKm,
        setModel,
        setYear,
        year,
        handleClick,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};