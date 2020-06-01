import * as React from "react";
import * as renderer from "react-test-renderer";
import Line from "..";

test("component testing", () => {
  renderer.create(<Line from={{ x: 10, y: 10 }} to={{ x: 100, y: 100 }} />);
});
