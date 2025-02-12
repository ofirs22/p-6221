import React from "react";
import { CartList } from "@/components/cart/CartList";
import { CartSummary } from "@/components/cart/CartSummary";

const Index = () => {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="flex items-stretch gap-[30px] flex-wrap">
        <CartSummary />
        <CartList />
      </div>
    </main>
  );
};

export default Index;
