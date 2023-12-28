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
                    images: [ product.images[0].url ],
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


    activeProducts = await getActiveProducts();
    let stripeItems: any = [];

    for (const product of data) {
        const stripeProducts = activeProducts.find(
            (prod: any) => prod?.name?.toLowerCase() == product?.name?.toLowerCase()
        )

        if (stripeProducts) {
            stripeItems.push({
                price: stripeProducts?.default_price,
                quantity: product?.quantity || 1
            })
        }
    }

    const session = await stripe.checkout.sessions.create({
        line_items: stripeItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    })

    return NextResponse.json({ url: session.url })
}