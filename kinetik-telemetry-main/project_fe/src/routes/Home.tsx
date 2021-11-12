import React, { useState, useEffect } from 'react';
import { useQueryClient } from 'react-query'
import Map from 'components/map/Map';
import Marker from 'components/map/Marker';
import Table from 'components/Table';

const View = () => {
  const [markers, setMarkers] = useState<any[]>([]);
  const queryClient = useQueryClient()

  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:5002')
    websocket.onopen = () => {
      console.log('connected')
    }
    websocket.onmessage = (event) => {
      const data: any = JSON.parse(event.data)
      setMarkers(old => [...old, data]);
      const queryKey = ['markers']
      queryClient.invalidateQueries(queryKey)
    }

    return () => {
      websocket.close()
    }
  }, [queryClient])

  return (
    <>
      <h1>Map</h1>
      <div style={{ height: '60vh', width: '60%', margin: "0 auto" }}>
        <Map center={{ lat: 43.233990, lng: 27.965691 }} zoom={18}>
          {
            markers.map((data: any) => {
              return <Marker
                lat={data.latitude}
                lng={data.longitude}
              />
            })
          }
        </Map>
      </div>
      <Table markers={markers} />
    </>
  );
};

export default View;
