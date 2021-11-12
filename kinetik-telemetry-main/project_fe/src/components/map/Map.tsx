import React, { FC, ReactNode } from 'react';
import GoogleMapReact from 'google-map-react';
import { IMarkerProps } from './Marker'

interface IMapProps {
  center: IMarkerProps;
  zoom: number;
  children?: ReactNode;
}

const Map: FC<IMapProps> = ({
  center,
  zoom,
  children,
}) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDnsrK-_l5YHEglvI6FSRiIJKa9_doX0z8" }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      {children}
    </GoogleMapReact>
  );
};

export default Map;
