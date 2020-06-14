# react-stroke-line

React library for stroke lines.

# Install 

```bash
npm i react-stroke-line
```

# Quick start

App.jsx
```jsx
import React from "react";
import Line from "react-stroke-line";

function App() {
  return (
    <>
      <Line 
        from={{ x: 100, y: 100 }} 
        to={{ x: 0, y: 0 }} 
      />
    </>
  );
}

export default App;
```

# Usage

## Line (default export)

```jsx
import Line from "react-stroke-line";

<Line 
    from={{x: 0, y: 0}} 
    // (required) start point of line: object. {x: number, y: number}
    to={{x: 1000, y: 100}} 
    // (required) end point of line: object. {x: number, y: number}

    color="white"
    color="#fff"
    // (optional) color of line: string

    width={1}
    width="1rem"
    // (optional) width of line: string or number, default is 1.
/>

// fun fact: Even if the start and end points are changed, the output is the same.
```

## Coord

```jsx
import Line, { Coord } from "react-stroke-line";

// the coordinate of point. first and second paramater is number.
const start = new Coord(0, 1); // { x: 0, y: 1 }
const end = new Coord(100, 101); // { x: 100, y: 101 }

<Line from={start} to={end} />
```

## LineProps (Only TypeScript)

```tsx
import Line, { LineProps } from "react-stroke-line";

interface MyLineProps extends LineProps {
    // your props...
}
```

# License

MIT

# Contributors

- [@hsh2001](https://github.com/hsh2001)