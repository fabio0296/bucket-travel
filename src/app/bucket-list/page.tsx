"use client";
import { APIProvider } from "@vis.gl/react-google-maps"
import MapContainer from "./components/maps/map"
import PlacesList from "./components/places-list";

export default function Page() {

  return <div className="w-full h-full m-auto grid grid-cols-2 gap-x-10 ">
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <PlacesList></PlacesList>
      <MapContainer></MapContainer>
    </APIProvider>
  </div>
}