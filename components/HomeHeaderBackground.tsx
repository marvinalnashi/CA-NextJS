import { ReactFragment } from 'react'

interface HomeHeaderBackgroundProps {
  children: ReactFragment
}

export const HomeHeaderBackground = ({ children }: HomeHeaderBackgroundProps) => {
  return (
    <>
      <div className="outer no-image">{children}</div>
    </>
  )
}
