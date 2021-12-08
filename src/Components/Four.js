import React from "react";
import profilePic  from './profilePic.jpg';
import '../Components/mainComponents.css';

const Four = (props) => {
  return (
    <>
      {props.details.map((value, id) => {
        return (
          <>
            <div className="main__content__list" >
                <div className="newsContents__list">

                    <div className="newsList">
                        <div key={id} className="newsList__card">
                            <img src={profilePic} alt="profile" />
                            <div className="newsList__card__detail">
                                <h4>{value.body}</h4>
                                <h6 className="text-muted">{value.title}</h6>
                                <small>Mon, 21 Dec 2020 14:57 GMT</small>
                            </div>
                        </div>
                        <div className="newsList__cancel">
                            <i className="cancel__btn bi bi-x-lg"></i>
                        </div>
                    </div>
                </div>

                
            </div>

            {/* <div key={id} className="card p-3 mb-2 ">
              {value.title}
            </div> */}
              
          </>
        );
      })}
        <div className="news__pagination">
          <button className="btn roundedBtn">1</button>
          <button className="btn roundedBtn">2</button>
          <button className="btn roundedBtn">3</button>
        </div>
    </>
  );
};
export default Four;
