import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from "styled-components";

const Header = styled.h1`
  color: red;
`;

const Home: NextPage = () => {
  return (
      <Header>Radhe Radhe</Header>
  )

}

export default Home
