import React from 'react'
import '../index.css'
export default function TodoList({ todos, handleDelete, handleUpdate ,handleComplete }) {
    
    return (
        <div className='todolist'>

            {
                todos.map((todo, index) => (
                    <div key={index} className='container'>&nbsp;&nbsp;
                        <input type='checkbox' className='ckeckbox'  onClick={()=>handleComplete(todo.id)}/>&nbsp;&nbsp;&nbsp;
                        <span>{todo.title}</span>
                        <div>
                            <button className='edit' onClick={() => handleUpdate(todo.id)}>Edit</button>&nbsp; &nbsp;
                            <button className='delete' onClick={() => handleDelete(todo.id)}>Delete</button>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}
// import "./styles.css";

// export default function App() {
//   const petrolbunk = {
//     totallimit: 500,
//     petrolamount: 0,
//     litres: 0,
//     no_of_vehicles: 0,

//     fill(petrollitre) {
//       const updateLitres = this.litres + petrollitre;
//       this.litres = updateLitres;
//       console.log(`No.of Litres filled: ${this.litres}`);

//       const petrolLimit = this.totallimit - petrollitre;
//       this.totallimit = petrolLimit;
//       console.log(`Total Limit of Petrol remaining: ${this.totallimit} litres`);

//       const Vehicles = this.no_of_vehicles + 1;
//       this.no_of_vehicles = Vehicles;
//       console.log(`No of vehicles filled: ${this.no_of_vehicles}`);

//       const Amount = this.petrolamount + petrollitre * 100;
//       this.petrolamount = Amount;

//       console.log(`Amount : Rs.${this.petrolamount}`);

//       console.log("New Entry");
//     }
//   };

//   petrolbunk.fill(5);
//   petrolbunk.fill(2);

//   petrolbunk.fill(10);
//   return (
//     <>
//       <center>
//         <h3>Petrol Bunk </h3>
//       </center>
//       <div className="App" style={{ display: "flex" }}>
//         <hr />
//         <p>
//           Petrol Amount <br />
//           <br />
//           {petrolbunk.petrolamount}
//         </p>
//         <hr />
//         <p>
//           Petrol Limit <br />
//           <br />
//           {petrolbunk.totallimit}
//         </p>
//         <hr />
//         <p>
//           No.of Vehicles <br />
//           <br />
//           {petrolbunk.no_of_vehicles}
//         </p>
//         <hr />
//         <p>
//           Petrol Litres <br />
//           <br />
//           {petrolbunk.litres}
//         </p>
//         <hr />
//       </div>
//     </>
//   );
// }



// import "./styles.css";

// export default function App() {
//   const petrolbunk = {
//     totallimit: 500,
//     petrolamount: 0,
//     litres: 0,
//     no_of_vehicles: 0,

//     fill(petrollitre) {
//       if(this.totallimit>0){

      
//       console.log("Updated Details");
//       const updateLitres = this.litres + petrollitre;
//       this.litres = updateLitres;
//       console.log(`No.of Litres filled: ${this.litres}`);

//       const petrolLimit = this.totallimit - petrollitre;
//       this.totallimit = petrolLimit;
//       console.log(`Total Limit of Petrol remaining: ${this.totallimit} litres`);

//       const Vehicles = this.no_of_vehicles + 1;
//       this.no_of_vehicles = Vehicles;
//       console.log(`No of vehicles filled: ${this.no_of_vehicles}`);

//       const Amount = this.petrolamount + petrollitre * 100;
//       this.petrolamount = Amount;

//       console.log(`Amount : Rs.${this.petrolamount}`);
//       }
//     }
//   };

//   petrolbunk.fill(5);
//   petrolbunk.fill(2);
 

//   petrolbunk.fill(10);
//   return (
//     <>
//       <center>
//         <h3>Petrol Bunk Details </h3>
//       </center>
//       <hr />
//       <div className="App" style={{ display: "flex" }}>
//         <hr />
//         <p>
//           Petrol Amount <br />
//           <br />
//           {petrolbunk.petrolamount}
//         </p>
//         <hr />
//         <p>
//           Petrol Limit <br />
//           <br />
//           {petrolbunk.totallimit}
//         </p>
//         <hr />
//         <p>
//           No.of Vehicles <br />
//           <br />
//           {petrolbunk.no_of_vehicles}
//         </p>
//         <hr />
//         <p>
//           Petrol Litres <br />
//           <br />
//           {petrolbunk.litres}
//         </p>
//         <hr />
//       </div>
//     </>
//   );
// }
