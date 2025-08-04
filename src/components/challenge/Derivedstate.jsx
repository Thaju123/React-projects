import { useState } from "react";



export const Derivedstate = () => {
    
const [users,setUsers]=useState([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Jack", age: 33 },
  { name: "Carlo", age: 28 },
]);
const usercount=users.length;
const sum=users.reduce((acc,cur)=>
  acc=acc+cur.age,0);
const avg=sum/users.length;
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((cur) => (
          <li key={cur.name}>
            {cur.name} is {cur.age} years old
          </li>
        ))}
      </ul>
      <h1>Number of students={usercount}</h1>
        <h1>average of students age={avg}</h1>

    </div>
  );
};
