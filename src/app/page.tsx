"use client";
import { signOut, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import React from "react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <div className={styles.page}>HomePage</div>
        <Button variant="contained" onClick={() => signOut()}>
          Logout
        </Button>
      </>
    );
  } else {
    return (
      <div className={styles.page}>
        <Button variant="contained" href="/signin">
          Login
        </Button>
      </div>
    );
  }
}