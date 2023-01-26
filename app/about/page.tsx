"use client"

import React from 'react';
import { motion } from "framer-motion"
import AboutBox from "@/components/aboutBox";

type Props = {};

export default function Page({}: Props) {
  return <div>
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center my-10 text-5xl text-gray-400 font-mono">ABOUT</h1>
      <motion.div >
        <AboutBox/>
      </motion.div>
    </div>
  </div>;
}
