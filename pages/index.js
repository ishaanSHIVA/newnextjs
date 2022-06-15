const styles = {
  container: "h-full w-full flex bg-[#fff]",
};
export default function Home() {
  // import Main from "../components/Main.jsx";
  import Sidebar from "../components/SideBar.jsx";

  return (
    <div className={styles.container}>
      <h1>HI</h1>
      <Sidebar />
      {/* <Main /> */}
    </div>
  );
}
