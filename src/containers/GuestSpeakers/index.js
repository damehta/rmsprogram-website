import React from 'react'
import '../style.css';
import Speaker from '../../components/Speaker';
import data from '../../data/GuestSpeakersData.json';

/**
* @author
* @function GuestSpeakers
**/


const GuestSpeakers = (props) => {
//   return(
//         <section className="container">
//              {data.data.map(item => <Speaker key = {data.id} value={data.author} /> )}
//              {data.map(item => <Speaker key = {item} value={item} /> )}
//          </section>
// 

// return (
//     <div className="row">
//         <div className="col-md-6">
//             {this.props.result.slice(0,secondColumnStart).map(item => item.value)}
//         </div>
//         <div className="col-md-6">
//             {this.props.result.slice(secondColumnStart).map(item => item.value)}                
//         </div>
//     </div>
// );
//   )

  // const secondColumnStart = Math.floor(data.length / 2);
  
  const arr1 = data.map((item) => {
    return (
      <div className="postContainer">
        <section>
            <Speaker {...item} />
        </section>
      </div>
    )
  }); 

  return(
    <div className="twoCol">{arr1}</div>
   );

}

export default GuestSpeakers