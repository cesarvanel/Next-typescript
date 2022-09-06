import { type } from "os";
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";


type ContextProps = {
    n :number ,
    incr : () => void
}

const counterContext = createContext<null | ContextProps>(null);

type Props = PropsWithChildren<{
  start?: number;
}>;

export const CounterProvider = ({
  start = 0,
  children,
}: Props) => {
  const [n, setN] = useState(start);

  const incr = useCallback(() => setN((n) => n + 1), []);

  return (
    <counterContext.Provider value={{ n, incr }}>
      {children}
    </counterContext.Provider>
  );
};

export const useCounter = () => {
  const value =  useContext(counterContext);
  if(value === null){
     throw new Error("Vous devez entourer ce composant d'un CountextProider")
  }
  return value ; 
}
