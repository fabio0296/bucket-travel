"use client"
import { Place } from '@visit-it/app/lib/definitions';
import { BucketMap } from './bucket-map';
import { usePlaces } from '@visit-it/app/lib/place-context';
import { memo, useDeferredValue, useMemo } from 'react';
import { useUserLocation } from '@visit-it/app/lib/location-hook';

const MapContainer = memo(() => {
  const places: Array<Place> =  usePlaces();
  const [userLocation, err] = useUserLocation();
  const locationDefferd = useDeferredValue(userLocation);
  console.log(userLocation, err);
  const location = useMemo(() => {
    return {
      lat: locationDefferd?.coords.latitude as number,
      lng: locationDefferd?.coords.longitude as number
    } satisfies google.maps.LatLngLiteral
  }, [locationDefferd]);
  return (
    <div className="w-full  rounded-xl border-2 border-gray-500">
      <BucketMap places={places} userLocation={location} />
    </div>
  )
})

export default MapContainer;