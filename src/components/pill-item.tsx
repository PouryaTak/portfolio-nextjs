import React from 'react'

export default function PillItem({data}:{data:any}) {
  return (
    <div
      className="!w-max rounded-full border dark:border-white border-sky-400 px-8 py-2 dark:text-white text-gray-800 transition-all hover:bg-sky-400/10"
    >
      <span className="inline-block text-base dark:font-normal">
        { data.title }
      </span>
    </div>
  
  )
}
