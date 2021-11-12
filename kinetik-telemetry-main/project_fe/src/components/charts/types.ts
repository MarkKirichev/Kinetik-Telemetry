export interface IData {
  name: string;
  index: number;
  lap: number;
  bestLap: number;
}

export interface IRechartsProps {
  data: IData[];
  height: number;
  xDataKey: string;
  xLabel: string;
  yLabel: string;
  isLegendHidden?: boolean;
}
