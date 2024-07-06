import { itemsInCart } from '@/store';
import { CartCookiesClient } from '@/utils';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';

export const CartCounter = () => {
  const $itemsInCart = useStore(itemsInCart);

  useEffect(() => {
    const cart = CartCookiesClient.getCart();
    itemsInCart.set(cart.length);
  }, []);

  return (
    <a href="/cart" className="relative inline-block">
      {$itemsInCart > 0 && (
        <span className="absolute -top-2 -right-2 flex justify-center items-center bg-blue-600 text-white text-xs rounded-full w-5 h-5">
          {$itemsInCart}
        </span>
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 512 512"
      >
        <path
          fill="black"
          d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32m224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32"
        ></path>
      </svg>
    </a>
  );
};
