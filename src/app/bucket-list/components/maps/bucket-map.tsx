import { Place } from "@visit-it/app/lib/definitions";
import { AdvancedMarker, Map, Pin, useMap } from '@vis.gl/react-google-maps';
import { memo, useEffect } from 'react';


export interface BucketMapProps {
  userLocation: google.maps.LatLngLiteral,
  places: Array<Place>
}
export const BucketMap = memo(({ userLocation, places }: BucketMapProps) => {
  const bucketMap = useMap();
  useEffect(() => {
    if(!bucketMap) return;
    let bounds: google.maps.LatLngBounds | null = new google.maps.LatLngBounds();
    if(places && places.length > 0){
      places.forEach(place => bounds?.extend(place.geometry.location));
      bucketMap?.fitBounds(bounds);
      if(places.length === 1){
        bucketMap.setZoom(15);
      }
    }
    return () => {
      bounds = null;
    }
  }, [bucketMap, places]);
  return <Map
    style={{ width: '100%', height: '100%' }}
    defaultCenter={userLocation}
    defaultZoom={10}
    gestureHandling={'greedy'}
    disableDefaultUI={true}
    mapId={'bucket-travel'}
  >
    {places.length > 0 && (
      places.map((place: Place, index: number) => {
        return <AdvancedMarker
          position={place.geometry.location}
          title={place.name}
          key={`${place.name}-${index}`}>
          <Pin
            background={'#22ccff'}
            borderColor={'#1e89a1'}
            glyphColor={'#0f677a'} />
        </AdvancedMarker>
      })
    )}
  </Map>

})