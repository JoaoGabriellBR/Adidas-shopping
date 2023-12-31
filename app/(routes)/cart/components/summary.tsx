"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import { useCart } from "@/hooks/createCustomStore";
import { Loader2 } from "lucide-react";

const Summary = () => {
  const [loading, setLoading] = useState(false);
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    setLoading(true);
    try {
      const checkoutUrl = `${process.env.NEXT_PUBLIC_URL}/api/checkout`
      await fetch(checkoutUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ products: items })
      }).then((response) => {
        return response.json();
      }).then((response) => {
        console.log(response)
        if (response.url) {
          window.location.href = response.url;
        }
      })
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Resumo do pedido</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Total</div>
          <p>R$ {totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={!items.length}
        className="w-full mt-6"
      >
        {loading ? (
          <div className="flex flex-row justify-center items-center">
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            Redirecionando
          </div>
        ) : "Pagamento"}
      </Button>
    </div>
  );
};

export default Summary;
