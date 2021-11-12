import React, { FC } from 'react';

export interface IMarkerProps {
  lat: number;
  lng: number;
  isActive?: boolean;
  isBestLap?: boolean;
}

const Marker: FC<IMarkerProps> = ({ isActive, isBestLap }) => {
  return (
    <div
      style={{
        width: "3px",
        height: "3px",
        borderRadius: "50%",
        background: isBestLap ? "#21a77d" : "#ed551a",
        opacity: isActive ? "1" : ".3",
      }}
    />
  )
};

export default Marker;
