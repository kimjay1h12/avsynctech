import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";
import Card from "../components/HeaderCard";
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
      </div>
    </MainLayout>
  );
}
