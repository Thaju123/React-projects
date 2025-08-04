import seriesdata from "../api/seriesdata.json"

import { Lists } from "./Lists";

const Netflix = () => {
  return (
           <ul className="grid grid-two-cols grid-three-cols">
      {
        seriesdata.map((cur) => {
          return(
          <Lists key={cur.id} cur={cur}/>  
         ) })
      }
    </ul>
  );
};

export default Netflix;
