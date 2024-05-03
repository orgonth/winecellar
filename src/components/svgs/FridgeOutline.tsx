import * as React from 'react';
import Svg, { SvgProps, G, Rect, Path, Line, Circle } from 'react-native-svg';

type FridgeProps = SvgProps & { rows: number; cols: number };

const FridgeOutline = (props: FridgeProps) => {
  const space = 4;
  const radius = 1.5;

  const h = (props.rows + 1) * space - radius;
  const w = (props.cols + 1) * space - radius;

  const baseXShift = w - 31.724 - 0.017;
  const baseYShift = h - 55.709;

  const Rack = (cols: number, rows: number) => {
    const places = [];

    for (let indexWidth = 0; indexWidth < rows; indexWidth++) {
      for (let indexHeight = 0; indexHeight < cols; indexHeight++) {
        places.push(
          <Circle
            key={`${indexWidth}-${indexHeight}`}
            cx={radius + (indexWidth + 0.5) * space}
            cy={radius + (indexHeight + 0.5) * space}
            r={radius}
          />,
        );
      }
    }
    return places;
  };

  return (
    <Svg width="50%" height="50%" viewBox={`0 0 ${w + 1} 61.275`} {...props}>
      <G transform="translate(-80.525 -87.67)">
        <Rect
          width={w}
          height={h}
          x={81.054}
          y={88.198}
          ry={0.686}
          fill="none"
          stroke="#000"
          strokeLinejoin="round"
          strokeMiterlimit={4}
        />
        <Path
          d="M83.01 143.917v4.498h3.402l1.191-1.914h.936"
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          transform={`translate(-0.017 ${baseYShift})`}
        />
        <Path
          d="M110.855 143.917v4.498h-3.402l-1.19-1.914h-.936"
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          transform={`translate(${baseXShift} ${baseYShift})`}
        />
        <Line
          x1="88.539"
          y1="146.501"
          x2={105.327 + baseXShift}
          y2="146.501"
          stroke="#000"
          strokeWidth="1"
          transform={`translate(-.017 ${baseYShift})`}
        />
      </G>
      <G>{Rack(props.rows, props.cols)}</G>
    </Svg>
  );
};
export default FridgeOutline;
