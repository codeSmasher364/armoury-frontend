import { useState } from "react";
import "../components/Directors/Directors.css";

function Directors() {
  const [num, setNum] = useState(1);
  const data = [
    { number: 1, title: "MR YANKEY", delay: 50 },
    { number: 2, title: "BEN PERRY", delay: 60 },
    { number: 3, title: "OTIS DOMINIQUE", delay: 70 },
    { number: 4, title: "MR DOMINIQUE", delay: 80 },
    { number: 5, title: "OTIS YANKEY", delay: 90 },
    { number: 6, title: "PERRY YANKEY",  delay: 100 },
    { number: 7, title: "MR YANKEY",  delay: 110 },
    { number: 8, title: "BEN PERRY",  delay: 120 },
    { number: 9, title: "OTIS DOMINIQUE",  delay: 130},
  ];

  const handleClick = (number) => {
    setNum(number);
  };

  return (
    <>
      <div className="wrapper_div">
        <div className="outer_div">
        {
            data.map(value => {
              return (
                <div className={num === value.number ? "active_container" : "inActive_container"}>
                  <p className={num===value.number ? "active_name" : "inActive_name"} onClick={()=>handleClick(value.number)}>{value.title}</p>
                </div>
                )
              })
          }

        </div>
     </div>
    </>
  );
}

export default Directors;