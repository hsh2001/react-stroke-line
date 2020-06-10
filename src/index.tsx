import * as React from "react";

export class Coord {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export interface LineProps {
  color?: string;
  width?: number | string;
  from: Coord;
  to: Coord;
}

function getDistance(from: Coord, to: Coord): number {
  return Math.sqrt((from.x - to.x) ** 2 + (from.y - to.y) ** 2);
}

function getDegree(from: Coord, to: Coord): number {
  return (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
}

export const Line: React.FC<LineProps> = ({ from, to, color, width }: LineProps) => {
  if (from.x > to.x) {
    [to, from] = [from, to];
  }

  const style = {
    position: "fixed",
    left: from.x,
    top: from.y,
    width: getDistance(from, to),
    height: width || 1,
    background: color || "black",
    transform: `rotate(${getDegree(from, to)}deg)`,
    transformOrigin: "0px 0px",
  } as const;

  return <div style={style} />;
};

export default Line;
