import { AddButton } from "./components/container/AddButton/AddButton";
import { Header } from "./components/elements/Header/Header";
import { ItemsCard } from "./components/container/ItemsCard/ItemsCard";

export default function Home() {
  return (
    <>
      <Header />
      <ItemsCard />
      <AddButton />
    </>
  );
}
