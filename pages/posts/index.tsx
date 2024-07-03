import Link from 'next/link';
import React from 'react';

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log("data =>", data);
    return {props: {posts: data}};
}

export default function Page({posts}: {posts: any[]}) {

  return (
    <>
    <div> Posts </div>
    {posts.map((val, id) => <Link key={`post-${id}`} href={`posts/${val.id}`}><div>
        {val.id}
    </div></Link>)}
    </> 
  )
}
