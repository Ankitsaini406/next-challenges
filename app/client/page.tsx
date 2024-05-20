'use client';
import { useEffect, useState } from "react";

export default function ClientSide (){

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

    const getUsers = async () => {
      setLoading(true)
      const data = await fetch("https:/dummyjson.com/users");
      if (data) {
        const { users } = await data.json();
        if(users) {
          setLoading(false)
          setUsers(users)
        };
      }
    };

    useEffect(() => {
      getUsers();
    },[])

  return (
    <div style={{height:'100dvh', padding: '1rem'}}>
      <h1 style={{padding: '1rem 0rem'}}>User (Client Side Reanding)</h1>
      {loading && <div>Loading...</div>}
      {!loading && users.map((user: any) => {
        return <li key={user.id}>{user.firstName}</li>;
      })}
    </div>
  );
};