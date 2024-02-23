import { ReactNode } from "react";
import { StateSchema } from "store/types";
import { createReduxStore } from "store/store";
import { Provider } from "react-redux";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
