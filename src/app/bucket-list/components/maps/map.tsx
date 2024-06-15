"use client"
import { Map } from '@vis.gl/react-google-maps';

export default function MapContainer() {
  console.log('rendering');
  return <Map
      style={{ width: '100%', height: '100%' }}
      defaultCenter={{ lat: 22.54992, lng: 0 }}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
}