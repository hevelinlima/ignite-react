import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';

import Image from "next/image";
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";

import camiseta1 from "../assets/camisetas/1.png"
import camiseta2 from "../assets/camisetas/2.png"
import camiseta3 from "../assets/camisetas/3.png"
import Stripe from "stripe";

interface HomeProps{
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: number | null;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return(
          <Product key={product.id} className="keen-slider__slide">
            <Image src={ product.imageURL} width={528} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return{
        name: product.name,
        id: product.id,
        imageURL: product.images[0],
        price: price.unit_amount !== null ? price.unit_amount / 100 : null,
    }
  })

  return{
    props: {
      products,
    }
  }
}