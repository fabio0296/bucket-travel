import { useEffect, useState } from "react"

export type PostionOptions = {
  maximumAge: number,
  timeout: number,
  enableHighAccuracy: boolean
}
const defaultOptions: PositionOptions = {
  maximumAge: 0,
  timeout: Infinity,
  enableHighAccuracy: true,
}

export function useUserLocation(options: PositionOptions = defaultOptions): [GeolocationPosition | null, GeolocationPositionError | null] {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  useEffect(() => {
    let cancelled = false;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!cancelled) {
          console.log('called location');
          setPosition(position);
        }
      },
      (error) => {
        if (!cancelled) {
          console.log(cancelled);
          setError(error)
        }
      },
      options
    );
    return () => {
      cancelled = true;
    }
  }, [options]);
  return [position, error]
}

export function getUserLocation(): Promise<GeolocationPosition | GeolocationPositionError> {
  return new Promise((resolve, reject) => {
    if (!navigator) {
      reject(`Geolocation is not supported`);
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error);
      },
      defaultOptions);
  });
}