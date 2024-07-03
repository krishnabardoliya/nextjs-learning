import React, { useEffect, useState } from 'react';

export default function UserListClient() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log("data =>", data);
    setData(data);
    }

    getData();
  },[])
  return (
    <>
    <div>UserList</div>
    {(data || []).map(value => 
      <div key={value.id}>{value.name}</div>
    )}
    </>
    
  )
}
