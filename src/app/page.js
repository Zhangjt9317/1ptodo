import Image from "next/image";
// import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function Home() {
  return (
    <main>
      <Button title="hello">hello</Button>
    </main>
  );
}
