import { IProduct } from "@/src/contexts/CartContext";
import { useCart } from "@/src/hooks/useCart";
import { stripe } from "@/src/lib/stripe";
import { AddToCartButton, ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";

interface ProductProps{
  product: IProduct;
}

export default function Product({ product }: ProductProps){
  const { addToCart, checkProductInCart } = useCart();

  const isProductAlreadyInCart = checkProductInCart(product.id);
 
  return(
    <>
     <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageURL} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1> {product.name} </h1>
          <span> {product.price} </span>
          <p> {product.description} </p>
          <AddToCartButton disabled={isProductAlreadyInCart} onClick={() => {addToCart(product)}}>Colocar na sacola</AddToCartButton>
          
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
  return{
    paths: [
     { params: { id: 'prod_QIDp4IplfRJp8d'}}
    ],
    fallback: true,
  }
} 

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return{
    props: {
      product: {
        name: product.name,
        id: product.id,
        imageURL: product.images[0],
        price: price && price.unit_amount !== null 
          ? new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(price.unit_amount / 100)
          : 'Preço indisponível',
        description: product.description,
        numberPrice: price && price.unit_amount !== null ? price.unit_amount / 100 : 0,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1,  //1 hour
  }
}