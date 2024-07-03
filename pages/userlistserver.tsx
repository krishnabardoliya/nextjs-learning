import React from 'react';

export default function UserListServer({users}: {users: any[]}) {
  return (
    <>
    <div>UserList</div>
    {(users || []).map(value => 
      <div key={value.id}>{value.name}</div>
    )}
    </>
  )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log("data =>", data);
    return {props: {users: data}};
}
