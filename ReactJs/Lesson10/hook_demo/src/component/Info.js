import React, { useContext } from "react";
import { ThemeContext } from "./ContextAndUseContext";
function Info() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p className={theme}>texxtasdasdahsjbdjhbasjdbjabsdhgagsvdavshdg</p>
    </div>
  );
}

export default Info;
