
import React from 'react'


export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    const postIds = data.map((item: {
        postId: string;
    } & {
        [key: string]: any;
    }) => ({params: {postId: item.id.toString()}}
    ))

    return {paths: postIds, fallback: false}
}

export async function getStaticProps({params}: {params: {postId: string}}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${parseInt(params.postId)}`);
    const data = await response.json();
    console.log("data =>", data);
    return { props: { postDetails: data} };
}

export default function Page(props: { postDetails: {title: string}}) {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params}`);
    // const data = await response.json();
    console.log("data 1=>", props.postDetails.title);

  return (
    <div>Post Detail {props.postDetails.title}</div>
  )
}
