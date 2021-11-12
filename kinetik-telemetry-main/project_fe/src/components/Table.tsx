import React, { FC } from 'react';
import Table from 'react-bootstrap/Table';
import Marker from "./map/Marker";

interface ITableProps {
  markers: any[];
}

const TableComponent: FC<ITableProps> = ({ markers }) => {

  return (
    <>
      <h1>Table</h1>
      <div style={{ display: "inline-block" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>velocity</td>
              <td>state_of_charge</td>
              <td>temp_for_controller</td>
              <td>temp_for_motor</td>
              <td>latitude</td>
              <td>longitude</td>
            </tr>
          </thead>
          <tbody>
            {/*{*/}
            {/*  markers.map((data: any) => {*/}
            {/*    return <tr>*/}
            {/*      <td>{data.velocity}</td>*/}
            {/*      <td>{data.state_of_charge}</td>*/}
            {/*      <td>{data.temp_for_controller}</td>*/}
            {/*      <td>{data.temp_for_motor}</td>*/}
            {/*      <td>{data.latitude}</td>*/}
            {/*      <td>{data.longitude}</td>*/}
            {/*    </tr>*/}
            {/*  })*/}
            {/*}*/}
            <tr>
              <td>3</td>
              <td>92</td>
              <td>40</td>
              <td>44</td>
              <td>43.234368186193336</td>
              <td>27.965641609908474</td>
            </tr>
            <tr>
              <td>3</td>
              <td>92</td>
              <td>40</td>
              <td>44</td>
              <td>43.234368186193336</td>
              <td>27.965641609908474</td>
            </tr>
            <tr>
              <td>3</td>
              <td>92</td>
              <td>40</td>
              <td>44</td>
              <td>43.234368186193336</td>
              <td>27.965641609908474</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TableComponent;
