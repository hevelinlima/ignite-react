import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';

import Image from "next/image";
import { stripe } from "../lib/stripe"; 
import Stripe from "stripe";
import { GetStaticProps } from "next";
import Link from "next/link";

interface HomeProps{
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: string;
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
          <Link href={`/product/${product.id}`}
          key={product.id} passHref prefetch={false}>
            <Product 
              className="keen-slider__slide"
            >
              <Image src={ product.imageURL} width={528} height={480} alt={product.name} />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link> 
        )
      })}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
        name: product.name,
        id: product.id,
        imageURL: product.images[0],
        price: price && price.unit_amount !== null 
          ? new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(price.unit_amount / 100)
          : 'Preço indisponível',
    };
  });


  return{
    props: {
      products,
    },
    revalidate: 60 * 60 * 2
  }
}