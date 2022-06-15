import React from "react";
import { useContext } from "react";
import { AmazonContext } from "../context/Amazon.context";
import Cards from "./Cards";

const styles = {
  container:
    "h-full w-full flex flex-column mt-[50px]  pr-[50px] overflow-hidden",
  recentTitle: "text-2xl font-bold text-center mb0[20px] text-center mt-[40px]",
  recentTransactionList: `flex flex-col`,
  transactionCard: `
  flex justify-between mb-[20px] p-[30px] bg-[#42667e] 
  text-white rounded-xl shadow-xl font-bold gap-[20px]
  `,
};

const Main = () => {
  return (
    <div className={styles.container}>
      <Cards />
      {/* <Header />
          <Featured /> */}
    </div>
  );
};

export default Main;
