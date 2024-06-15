import { AutocompleteCustom } from "./auto-complete";


export default function PlacesList(){
  // const list = [];
  const onPlacesSelect = (place: any) =>{
    console.log(place);;
  }

  return <div className="w-full h-full">
    <AutocompleteCustom onPlaceSelect={onPlacesSelect}></AutocompleteCustom>
  </div>
}