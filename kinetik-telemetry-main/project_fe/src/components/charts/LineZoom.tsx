import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea, ResponsiveContainer, Legend
} from "recharts";
import Button from 'react-bootstrap/Button';

// Example from: https://codesandbox.io/s/highlight-zomm-line-chart-v77bt

const initialState = {
  data: [],
  left: "dataMin",
  right: "dataMax",
  refAreaLeft: "",
  refAreaRight: "",
  top: "dataMax+10",
  bottom: "dataMin-10",
  top2: "dataMax+10",
  bottom2: "dataMin-10",
  animation: true
};

export default class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...initialState,
      data: props.chartData,
    };
  }

  getAxisYDomain: any = (
      from: number,
      to: number,
      ref: string,
      offset: number
  ) => {
    const refData: any[] = this.props.chartData.slice(from - 1, to);
    let [bottom, top] = [refData[0][ref], refData[0][ref]];

    refData.forEach((d) => {
      if (d[ref] > top) top = d[ref];
      if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
  };

  zoom() {
    let { refAreaLeft, refAreaRight } = this.state;
    const { data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      this.setState(() => ({
        refAreaLeft: "",
        refAreaRight: ""
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = this.getAxisYDomain(refAreaLeft, refAreaRight, "lap", 20);
    const [bottom2, top2] = this.getAxisYDomain(
        refAreaLeft,
        refAreaRight,
        "bestLap",
        20
    );

    this.props.onZoom();

    this.setState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2
    }));
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+10",
      bottom: "dataMin-10",
      top2: "dataMax+10",
      bottom2: "dataMin-10"
    }));
  }

  render() {
    const {
      data,
      left,
      right,
      refAreaLeft,
      refAreaRight,
      top,
      bottom,
      top2,
      bottom2
    } = this.state;

    const {
      chartData,
      height,
      xDataKey,
      xLabel,
      yLabel,
      isLegendHidden,
    } = this.props;

    console.log(this.state);

    return (
        <div className="highlight-bar-charts" style={{ userSelect: "none" }}>
          <Button
            type="button"
            size="sm"
            variant="primary"
            className="mt-3"
            onClick={this.zoomOut.bind(this)}
            style={{ marginLeft: "50px" }}
          >
            Zoom Out
          </Button>
          <ResponsiveContainer width="100%" height={height} className="mt-3" >
            <LineChart
              data={data}
              onMouseDown={(e: any) =>
                this.setState({ refAreaLeft: e.activeLabel })
              }
              onMouseMove={(e: any) =>
                this.state.refAreaLeft &&
                this.setState({ refAreaRight: e.activeLabel })
              }
              // eslint-disable-next-line react/jsx-no-bind
              onMouseUp={this.zoom.bind(this)}
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              {
                !isLegendHidden &&
                <Legend verticalAlign="top" align="right" height={50} iconType="square" iconSize={10} />
              }
              <XAxis
                allowDataOverflow
                domain={[left, right]}
                type="number"
                dataKey={xDataKey}
                height={40}
                tick={{ fontSize: "12px" }}
                tickCount={10}
                label={{ value: xLabel, angle: 0, position: 'insideBottom', fontSize: '14px' }}
              />
              <YAxis
                allowDataOverflow
                domain={[bottom, top]}
                // type="number"
                width={45}
                tick={{ fontSize: "12px" }}
                tickCount={10}
                label={{ value: yLabel, angle: -90, position: 'insideLeft', fontSize: '14px' }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="lap"
                name="Lap"
                dot={false}
                stroke="#fc8d62"
                animationDuration={300}
              />
              <Line
                type="monotone"
                dataKey="bestLap"
                name="Best lap"
                dot={false}
                stroke="#66c2a5"
                animationDuration={300}
              />
              {refAreaLeft && refAreaRight ? (
                <ReferenceArea
                  x1={refAreaLeft}
                  x2={refAreaRight}
                  strokeOpacity={0.3}
                />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
    );
  }
}
