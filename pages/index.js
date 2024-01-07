import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Card1 from "../components/Card1";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Iframe from "react-iframe";
export default function Home() {
  return (
    <MainLayout active="home">
      <div
        style={{
          background: "#000",
          height: "100%",
        }}
      >
        <Header />
        <Section />

        <ContactUs />
        <Footer />
      </div>
    </MainLayout>
  );
}
