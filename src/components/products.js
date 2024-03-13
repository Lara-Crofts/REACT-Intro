import React from 'react'

export default function prod(props) {
    return (
      <div>
        <h1><img className="plushie" src={props.image}></img></h1>
        {props.name}<br></br>
        {props.description}<br></br>
        {props.price}<br></br>
        {props.reviews}<br></br>
      </div>
    )
  }

// export default class products extends Component {
//         constructor(props) {

            
//           super(props);

//           this.state = {
//             name: ,
//             description:,
//             image: ,
//             price: ,

//           }
//         }

//   render() {
//     return (
//       <div>
        
//         <h1> hello {props.name}, your favorite hero is {props.heroname}</h1>

//       </div>
//     )
//   }
// }


