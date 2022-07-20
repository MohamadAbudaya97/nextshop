import type { NextPage } from 'next'
type Props = {
  children: React.ReactNode,
  userAgent:string
};
const Admin: NextPage<Props> = ({children,userAgent}:Props) => {
  return (
    <>
    {children}
    </>
  )
}

export default Admin
