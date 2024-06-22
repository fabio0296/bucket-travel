import { Dispatch, createContext, useCallback, useContext, useMemo, useReducer } from "react";
import { Place } from "./definitions";

export const DISPATCH_ACTIONS = {
  ADD_PLACE: 'ADD_PLACE',
  DELETE_PLACE: 'DELETE_PLACE'
} as const;

type PlaceReducerAction = {
  type: string;
  payload: Place;
}

const PlacesContext = createContext<Array<Place>>([]);
const PlacesDispatchContext = createContext<Dispatch<PlaceReducerAction> | null>(null);

const reducer = (places: Array<Place>, action: PlaceReducerAction): Array<Place> => {
  switch (action.type) {
    case DISPATCH_ACTIONS.ADD_PLACE: {
      return [...places, { ...action.payload }]
    }
  }
  return places;
}

export const PlacesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [places, dispatch] = useReducer(reducer, []);
  const placesCatched = useMemo(() => places, [places]);
  return (
    <PlacesDispatchContext.Provider value={dispatch}>
      <PlacesContext.Provider value={placesCatched}>
        {children}
      </PlacesContext.Provider>
    </PlacesDispatchContext.Provider>
  );
}

export function usePlaces() {
  return useContext(PlacesContext);
}

export function usePlacesDispatch() {
  return useContext(PlacesDispatchContext);
};




