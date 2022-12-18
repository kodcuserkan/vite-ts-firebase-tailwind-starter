import React from 'react'

const Container: React.FC<{
  animationDuration: number
  isFinished: boolean,
  children: any
}> = ({
  animationDuration,
  children,
  isFinished,
}: {
  animationDuration: number
  isFinished: boolean
  children: any
}) => (
  <div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
)

export default Container
