import * as React from "react";

interface Coord {
  x: number;
  y: number;
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

const Line: React.FC<LineProps> = ({ from, to, color, width }: LineProps) => {
  if (from.x > to.x) {
    [to, from] = [from, to];
  }

  const style = React.useMemo(
    () =>
      ({
        position: "fixed",
        left: from.x,
        top: from.y,
        width: getDistance(from, to),
        height: width || 1,
        background: color || "black",
        transform: `rotate(${getDegree(from, to)}deg)`,
        transformOrigin: `${from.x}px ${from.y}px`,
      } as const),
    [from, to, color, width]
  );

  return <div style={style} />;
};

export default Line;
