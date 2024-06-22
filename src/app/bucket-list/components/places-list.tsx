import { DISPATCH_ACTIONS, usePlaces, usePlacesDispatch } from "@visit-it/app/lib/place-context";
import { AutocompleteCustom } from "./auto-complete";
import { Place } from "@visit-it/app/lib/definitions";
import { useCallback } from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";


export default function PlacesList() {
  const places = usePlaces();
  const dispatch = usePlacesDispatch();
  
  const onPlacesSelect = useCallback(
    (place: google.maps.places.PlaceResult | null) => {
      console.log('place..', place?.geometry?.location);
      if (dispatch !== null) {
        dispatch({
          type: DISPATCH_ACTIONS.ADD_PLACE,
          payload: {
            name: place?.name,
            formattedAddres: place?.formatted_address,
            geometry: place?.geometry
          } satisfies Place
        });
      }
    },
    [dispatch]
  );


  return <div className="w-full h-full p-5">
    <AutocompleteCustom onPlaceSelect={onPlacesSelect}/>
    <div className="mt-10">
      {places.length > 0 && (
        <Command>
          <CommandList>
            {
              places.map((place: Place, index: number) => {
                return <CommandItem key={`${index}-${place.name}`}>{ place.name }</CommandItem>
              })
            }
          </CommandList>
            
        </Command>
      )}
    </div>
  </div>
}