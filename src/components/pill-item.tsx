import React from 'react'

export default function PillItem({data}:{data:any}) {
  return (
    <div
      className="!w-max rounded-full border border-white px-8 py-2 text-white transition-all hover:bg-amber-400/10"
      style={{opacity: data.score /10}}
    >
      <span className="inline-block text-base">
        { data.title }
      </span>
    </div>
  
  )
}
