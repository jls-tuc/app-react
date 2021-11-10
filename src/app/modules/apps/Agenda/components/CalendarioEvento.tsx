import React from 'react'



export const CalendarioEvento = (event: any) => {
  console.log(`evento`, event.event)

  const { title, user } = event.event;

  return (
    <div>
      <span>{title}</span>
      <strong> - {user.name}</strong>
    </div>
  )
}
/* const CalendarioEvento = (
  event: Object,
  start: any,
  end: any,
  isSelected: boolean
) => {
  console.log(`Estados: `, event, start, end, isSelected)
  const style = {
    backgroundColor: '#367CF7',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white'
  }
  return {
    style
  }
} */