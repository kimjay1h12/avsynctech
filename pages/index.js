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

          backgroundSize: "cover",
        }}
      >
        <Header />
        <Typography color="#fff" mt={100}>
          juufuf
        </Typography>
      </div>
    </MainLayout>
  );
}
