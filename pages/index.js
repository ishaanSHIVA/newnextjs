import Main from "../components/Main.jsx";
import Sidebar from "../components/SideBar.jsx";

const styles = {
  container: "h-full w-full flex bg-[#fff]",
};
export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Main />
    </div>
  );
}
