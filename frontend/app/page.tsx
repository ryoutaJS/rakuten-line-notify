import { AddButton } from "./components/container/AddButton/AddButton";
import { Header } from "./components/elements/Header/Header";
import { WishList } from "./components/container/WishList/WishList";

export default function Home() {
  return (
    <>
      <Header />
      <WishList />
      <AddButton />
    </>
  );
}
