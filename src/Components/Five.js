import React from "react";
import newsImg from "./newsimg.jpg";

const Five = (props) => {
  return (
    <>
      {props.details.map((value, id) => {
        return (
          // <div style={{ display: "flex", gap: "5rem" }} key={id}>
          //   <div className="card" style={{ width: "18rem" }} >
          //     <div className="card-body">{value.title}</div>
          //   </div>
          // </div>
            
              
              <div className="newsContents__detail">
                  <div className="newsDetail" key={props.id}>

                      <div className="newsDetail__card" style={{ position:"static" }}>
                          <div className="newsDetail__cancel">
                              <i className="cancel__btn bi bi-x-lg"></i>
                          </div>
                          <div className="newsDetail__details">
                            <h5>{value.body.length > 50 ?`${value.body.substring(0, 50)}...` : value.body} </h5>
                            <p>{value.title.length > 20 ?`${value.title.substring(0, 20)}...` : value.title} </p>
                            <small>Mon, 21 Dec 2020 14:57 GMT</small>
                            <div style={{ position:"relative" , bottom:'-27px !important' }}>
                            <img  src={newsImg} alt="news"/>
                            </div>
                            
                          </div>
                      </div>

                  </div>
              </div>
          
        );
      })}

    </>
  );
};
export default Five;
