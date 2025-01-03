import { useState, useCallback } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import CartPopup from "./CartPopup";
import { motion } from "framer-motion";

const Cart: React.FC = () => {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleOpen = useCallback(() => setIsOpen(true), []);

  return (
    <>
      <button
        onClick={handleOpen}
        className="relative text-gray-700 hover:text-blue-600 transition"
      >
        <FaShoppingCart size={24} />
        {totalItems > 0 && (
          <motion.span
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {totalItems}
          </motion.span>
        )}
      </button>

      <CartPopup isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default Cart;
