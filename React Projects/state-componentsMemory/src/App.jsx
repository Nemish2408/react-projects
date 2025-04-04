// STATE COMPONETS MEMORY

// import _default = require("eslint-plugin-react-refresh")

// import { sculptureList } from './assets/Data.jsx';
// import { useState } from "react";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let hasPrev = index > 0;
//   let hasNext = index < sculptureList.length - 1;

//   function handlePrevClick() {
//     if (hasPrev) {
//       setIndex(index - 1);
//     }
//   }

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick(){
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handlePrevClick} disabled = {!hasPrev}>
//         Previous
//       </button>

//       <button onClick={handleNextClick} disabled = {!hasNext}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? "Hide" : "Show"} Details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// dEFINING CLASS COMPONENTS

// import { Component } from "react";

// class Greeting extends Component {
//   render(){
//     return <h1> Hello, {this.props.name}!</h1>
//   }
// }

// export default function App() {
//   return (
//     <>
//       <Greeting name = "Nemish"/>
//       <Greeting name = "Trushil"/>
//       <Greeting name = "Jash"/>
//     </>
//   );
// }

// Adding state to a class component

// import { Component } from "react";

// export default class Counter extends Component {
//   state = {
//     name: 'Taylor',
//     age: 42,
//   };

//   handleNameChange = (e) => {
//     this.setState({
//       name: e.target.value
//     });
//   }

//   handleAgeChange = () => {
//     this.setState({
//       age: this.state.age + 1
//     });
//   };

//   render() {
//     return (
//       <>
//         <input
//         value={this.state.name}
//         onChange={this.handleNameChange}
//         />
//         <br /><br />
//         <button onClick={this.handleAgeChange}>
//           Increment Age
//         </button>

//         <p>Hello, {this.state.name}. You are {this.state.age}. </p>
//       </>
//     );
//   }
// }

// Familiar with props
// import { getImageUrl } from './assets/Utils.jsx';


// export default function Gallary () {
//   return(
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className='profile'>
//         <h2>Maria Skłodowska-Curie</h2>
//         <img className="avatar" src={getImageUrl('99nk6KM')} alt="rosalind-franklin-" width={70} height={70} />
//         <ul>
//           <li>
//             <b>Profession:</b>
//             Phisicist and Chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b> 
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (chemical element)
//           </li>
//         </ul>
//       </section>

//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('YfeOqp2')}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b> 
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   )
// }



// Adding Lifecycle methods to a class

import { useState } from "react";
import ChatRoom from "./assets/lifecycle/ChatRoom.jsx";

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the Chat Room: {' '}

        <select value={roomId} onChange={e => setRoomId(e.target.value)} id="room" name="room">
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show? 'CloseRoom' : 'Open Chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId = {roomId} />}
    </>
  )
}