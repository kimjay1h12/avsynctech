import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Card1 from "../components/Card1";
export default function Home() {
  return (
    <MainLayout>
      <div
        style={{
          background: "#000",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        <Header />

        <Card1 />
        <Card
          title=" Have Access to Safe,
Smart and Secure life"
          mt={6}
          subtitle="Integer netus mollis sed id arcu diam maximus pellentesque
faucibus hac ultricies. Commodo proin eu tristique enim si.
Cras magna fermentum himenaeos conubia accumsan 
suspendisse congue tristique. Fermentum est sapien rhoncus 
quis quam velit."
          button1=" Discover"
          src="/img/left.png"
          but2visiblity="none"
        />
      </div>
    </MainLayout>
  );
}
