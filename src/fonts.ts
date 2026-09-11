import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const avenir = localFont({
  src: [
    {
      path: "./assets/fonts/Avenir-LT-55-Roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Avenir-LT-55-Roman.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/Avenir-LT-55-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./assets/fonts/Avenir-LT-55-Oblique.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./assets/fonts/Avenir-LT-85-Heavy.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/Avenir-LT-85-Heavy.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/Avenir-LT-85-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./assets/fonts/Avenir-LT-85-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./assets/fonts/Avenir-LT-86-Heavy-Oblique.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./assets/fonts/Avenir-LT-86-Heavy-Oblique.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./assets/fonts/Avenir-LT-86-Heavy-Oblique.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./assets/fonts/Avenir-LT-86-Heavy-Oblique.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});