import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DisplayPassword from "../Components/DisplayPassword";

const Home: NextPage = () => {
  return (
      <>
         <DisplayPassword />
      </>
  )

}

export default Home
