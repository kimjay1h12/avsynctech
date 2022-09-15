import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <MainLayout>
      <div
        style={{
          background: "#000",
          height: "100%",
          width: "100vw",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <Typography color="#fff">juufuf</Typography>
      </div>
    </MainLayout>
  );
}
