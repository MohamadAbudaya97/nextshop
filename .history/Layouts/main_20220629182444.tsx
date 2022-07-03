import type { NextPage } from 'next'
interface LayoutProps {
   children: React.ReactNode;
}
const Main: NextPage = ({children}:LayoutProps) => {
  return (
    <>
    {children}
    </>
  )
}

export default Main
