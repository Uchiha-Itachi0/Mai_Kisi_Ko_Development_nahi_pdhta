import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DisplayPassword from "../Components/DisplayPassword";
import Button from "../Components/Button";
import Range from "../Components/Range";
import CheckBox from "../Components/CheckBox";
import DifficultyMeter from "../Components/DifficultyMeter";

const Home: NextPage = () => {
  return (
      <>
          <DifficultyMeter />
          {/*<CheckBox />*/}
          {/*<Range />*/}
          {/*<Button />*/}
         {/*<DisplayPassword />*/}
      </>
  )

}

export default Home
