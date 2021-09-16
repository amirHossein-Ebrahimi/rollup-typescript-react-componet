import React, { useState, useEffect } from 'react'

export interface ContentProps {
  title: string
  destroyDelay?: number
  onDestroy: () => void
}

export const Content = ({
  title,
  destroyDelay = 3000,
  onDestroy,
}: ContentProps) => {
  const [mark, setMark] = useState<boolean>(false)

  useEffect(() => {
    const timerId = setTimeout(onDestroy, destroyDelay)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <button onClick={() => setMark(!mark)}>
      {mark ? <strike>{title}</strike> : <span>{title}</span>}
    </button>
  )
}
