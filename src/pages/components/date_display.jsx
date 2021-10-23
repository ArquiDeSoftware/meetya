import React from 'react'

export default function DateDisplay({ date }) {
  var d = new Date(date);
  return (
    <div class='text-center'>
      <p class='mt-2'>⌚ {d.toDateString() }</p>
    </div>
  )
}
