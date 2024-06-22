import { CartFooter, FooterContent, HomeContainer, ImageFooter, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';

import Image from "next/image";
import { stripe } from "../lib/stripe"; 
import Stripe from "stripe";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { Handbag } from "@phosphor-icons/react";

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
      perView: 'auto',
      spacing: 48,
    }
  })
  return (
    <>
      <Head>
        <title>Início | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return(
            <Link href={`/product/${product.id}`}
            key={product.id} passHref prefetch={false}>
              <Product 
                className="keen-slider__slide"
              >
                <Image src={ product.imageURL} width={496} height={456} alt={product.name} />
                <ImageFooter>
                  <FooterContent>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </FooterContent>
                  <CartFooter>
                    <Handbag size={32} weight="bold" />
                  </CartFooter>
                </ImageFooter>
              </Product>
            </Link> 
          )
        })}
      </HomeContainer>
    </>
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