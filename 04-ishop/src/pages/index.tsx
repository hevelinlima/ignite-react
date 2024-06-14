import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from "../assets/camisetas/1.png"
import camiseta2 from "../assets/camisetas/2.png"
import camiseta3 from "../assets/camisetas/3.png"
import Image from "next/image";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={ camiseta1 } width={528} height={480} alt="" />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>
      <Product>
        <Image src={ camiseta2 } width={528} height={480} alt="" />

        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
