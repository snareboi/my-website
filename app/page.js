'use client' 
import React, { useState } from 'react';


export default function Home() {
  return (
    <>
      <Article />
      <Numbers />
    </>
  );
}




function Article() {
  return (
    <section className="bg-red-400 text-black m-20">
      <div className="p-4">
        <h1 className="font-bold text-2xl">Characters</h1>
        <div className="mt-5 flex-col">
          <h1 className="font-bold">Lonnie Cross</h1>
          <p>Lonnie is a funny, nerdy and avid consumer of everything horror. Even as a child, he was watching YouTube vids he wasn't supposed to and as a result, numb to a lot of disturbing things. He's always begging the group to have horror movie nights, but can never get them to agree.</p>
          <p>He proudly writes a segment in the school paper talking about urban legends around the world and has published countless horror though amateur stories on writing platforms as a hobby. He also is commonly found at the board game club playing Magic or running a horror DnD campaign with his other friend group.</p>
          <p>He was one of the first member of the group and has been thrilled to see it grow over a short period of time into what it is now. Though not the most serious, deeply cares about his friends' wellbeing and is the one organizing hangouts since nothing makes him happier than to see his friends smile and have fun.</p>
        </div>
        <div className="mt-5 flex-col">
          <h1 className="font-bold">Josh Moreno</h1>
          <p>Josh lives by the more serious side, not taking much into the supernatural or fantasy side of the library. Instead, he sticks mostly to to non-fiction and spending his days watching documentaries and reading articles and books about sciencey or social things.</p>
          <p>Though not exactly a workaholic like Alicia, he still does better than most in the group academically and makes sure he is always up to date on the news local, national and international. He's one of the few students who reads the school paper through. He attends hangouts and study sessions equally, but half the time isn't participating or doesn't know what's going on with the friend group. Most of the things the group is collectively into he isn't. He questions why he's even in the group but remembers Lonnie, who was his first high school friend that "founded" the group back in high school. He instead settles with particpating in as much as he can and leaving what he isn't interested in.</p>
        </div>
      </div>
    </section>
  )
}

function Numbers() {
  const [count, updateCount] = useState(0);
  return (
    <div>
      <p>Press buttont to increment this text!</p>
      <button onClick={() => updateCount(count + 1)} className="md:hover:underline">
        Click me
      </button>
      <h1>Monika</h1>
      <p>{count}</p>
    </div>
  )
}

