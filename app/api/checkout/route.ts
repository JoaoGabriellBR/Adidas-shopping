import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import { Product } from "@/types";

const getActiveProducts = async () => {
    const checkProducts = await stripe.products.list();
    const availableProducts = checkProducts.data.filter((product: any) => product.active === true);
    return availableProducts;
}

export async function POST(request: any) {
    const { products } = await request.json();
    const data: Product[] = products;

    let activeProducts = await getActiveProducts();


    try {

        for (const product of data) {
            const stripeProducts = activeProducts.find(
                (stripeProduct: any) =>
                    stripeProduct?.name?.toLowerCase() == product?.name?.toLowerCase()
            )

            if (stripeProducts == undefined) {
                const prod = await stripe.products.create({
                    name: product.name,
                    description: product.description,
                    default_price_data: {
                        unit_amount: product.price * 100,
                        currency: "brl"
                    },
                })
            }
        }


    } catch (error: any) {
        console.log("Erro ao criar um novo produto.", error);
        throw error;
    }


    return NextResponse.json({ url: "/" })

}