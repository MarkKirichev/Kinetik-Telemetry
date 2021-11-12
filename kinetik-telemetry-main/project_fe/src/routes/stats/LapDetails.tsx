import React, { FC, useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import { api } from 'utils/apiThunks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormRange from 'components/form/FormRange';
import Map from 'components/map/Map';
import Marker from 'components/map/Marker';
import LineChartComponent from 'components/charts/LineChart';
import LineZoom from 'components/charts/LineZoom';

interface ILapDetails {
  lapId: number;
  sessionId: number;
}

interface ILapFragmentProps {
  velocity: number;
  rpm: number;
  tps: number;
  state_of_charge: number;
  temp_for_motor: number;
  temp_for_controller: number;
  latitude: string;
  longitude: string;
}

const LapDetails: FC<ILapDetails> = ({ lapId, sessionId }) => {
  const [fragment, setFragment] = useState<number[]>([1]);

  // Reset fragment on lap change
  useEffect(() => {
    setFragment([1]);
  }, [lapId]);

  // Fetch lap fragments
  const { isLoading: isLoadingLap, error: errorLap, data: dataLap } = useQuery(
    ['lap-fragments', { lapId }],
    () => api.get(`/lap-fragments?lap_id=${lapId}`)
  );

  // Fetch BEST lap fragments
  const { isLoading: isLoadingBestLap, error: errorBestLap, data: dataBestLap } = useQuery(
      ['best-lap', { sessionId }],
      () => api.get(`/sessions/${sessionId}/bestlap`)
  );

  if (isLoadingLap || isLoadingBestLap) return <p>Loading</p>;

  if (errorLap || errorBestLap) return <p>Error</p>;

  const handleFragmentChange = (val: number[]) => {
    setFragment(val)
  }

  const renderMap = () => {
    // Use in case of range
    // const mapData = dataLap.slice(fragment[0] - 1, fragment[1])
    return (
      <div style={{ height: '40vh', width: '100%', margin: "0 auto" }}>
        <Map center={{ lat: 43.233990, lng: 27.965691 }} zoom={17}>
          {
            dataLap.map((data: any, index: number) => {
              return <Marker
                key={index}
                lat={data.latitude}
                lng={data.longitude}
                isActive={
                  data.latitude === dataLap[fragment[0] - 1].latitude &&
                  data.longitude === dataLap[fragment[0] - 1].longitude
                }
                // Use in case of range
                // isActive={mapData.find((d: any) => d === data)}
              />
            })
          }
          {
            dataBestLap.lap_fragments.map((data: any, index: number) => {
              return <Marker
                  key={index}
                  lat={data.latitude}
                  lng={data.longitude}
                  isActive={
                    dataBestLap.lap_fragments[fragment[0] - 1] &&
                    data.latitude === dataBestLap.lap_fragments[fragment[0] - 1].latitude &&
                    data.longitude === dataBestLap.lap_fragments[fragment[0] - 1].longitude
                  }
                  isBestLap
                  // Use in case of range
                  // isActive={mapData.find((d: any) => d === data)}
              />
            })
          }
        </Map>
      </div>
    )
  }

  const buildData = (type: 'velocity' | 'tps' | 'rpm' | 'state_of_charge' | 'temp_for_motor' | 'temp_for_controller') => {
    if (!lapId) return [];

    const fragmentsData = dataLap.map((d: ILapFragmentProps, index: number) => ({
      name: `Lap ${lapId}`,
      index: index + 1,
      lap: d[type],
      bestLap: dataBestLap.lap_fragments[index] ? dataBestLap.lap_fragments[index][type] : 0,
    }));

    return fragmentsData;
  }

  return (
    <>
      <Container fluid>
        <Row className="mt-4">
          <Col xs={12} md={4}>
            <h3>Map</h3>
            {
              lapId
                ? renderMap()
                : <div style={{ height: '40vh', width: '100%', margin: "0 auto" }}>
                  <Map center={{ lat: 43.233990, lng: 27.965691 }} zoom={17} />
                </div>
            }

          </Col>
          <Col xs={12} md={8} className="mb-5">
            <h3 style={{ marginLeft: "50px" }}>Fragments</h3>
            <FormRange
              step={1}
              min={1}
              max={lapId ? dataLap.length : 10}
              value={[1]}
              // Use in case of range
              // value={lapId ? [1, dataLap.length] : [1, 10]}
              isDisabled={!lapId}
              onChange={handleFragmentChange}
              lapId={lapId}
              onResetRange={() => setFragment([1, dataLap.length])}
            />
            {
              lapId
                ? <>
                  <LineZoom
                    chartData={buildData('velocity')}
                    height={360}
                    xDataKey="index"
                    xLabel="index"
                    yLabel="velocity"
                    onZoom={() => setFragment([1])}
                  />
                  <LineZoom
                    chartData={buildData('rpm')}
                    height={300}
                    xDataKey="index"
                    xLabel="index"
                    yLabel="rpm"
                    onZoom={() => setFragment([1])}
                    isLegendHidden
                  />
                  <LineZoom
                    chartData={buildData('tps')}
                    height={300}
                    xDataKey="index"
                    xLabel="index"
                    yLabel="tps"
                    onZoom={() => setFragment([1])}
                    isLegendHidden
                  />
                  <LineZoom
                    chartData={buildData('state_of_charge')}
                    height={300}
                    xDataKey="index"
                    xLabel="index"
                    yLabel="state_of_charge"
                    onZoom={() => setFragment([1])}
                    isLegendHidden
                  />
                  <LineZoom
                    chartData={buildData('temp_for_motor')}
                    height={300}
                    xDataKey="index"
                    xLabel="index"
                    yLabel="temp_for_motor"
                    onZoom={() => setFragment([1])}
                    isLegendHidden
                  />
                  <LineZoom
                    chartData={buildData('temp_for_controller')}
                    height={300}
                    xDataKey="index"
                    xLabel="index"
                    yLabel="temp_for_controller"
                    onZoom={() => setFragment([1])}
                    isLegendHidden
                  />
                  {/*<LineChartComponent*/}
                  {/*  data={buildData('velocity')}*/}
                  {/*  height={360}*/}
                  {/*  xDataKey="index"*/}
                  {/*  xLabel="index"*/}
                  {/*  yLabel="velocity"*/}
                  {/*/>*/}
                  {/*<LineChartComponent*/}
                  {/*  data={buildData('rpm')}*/}
                  {/*  height={300}*/}
                  {/*  xDataKey="index"*/}
                  {/*  xLabel="index"*/}
                  {/*  yLabel="rpm"*/}
                  {/*  isLegendHidden*/}
                  {/*/>*/}
                  {/*<LineChartComponent*/}
                  {/*  data={buildData('tps')}*/}
                  {/*  height={300}*/}
                  {/*  xDataKey="index"*/}
                  {/*  xLabel="index"*/}
                  {/*  yLabel="tps"*/}
                  {/*  isLegendHidden*/}
                  {/*/>*/}
                </>
                : null
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LapDetails;
