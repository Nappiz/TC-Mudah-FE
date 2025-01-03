import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import Portal from "./Portal";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            key="overlay"
          >
            <motion.div
              className="bg-white w-full sm:w-96 h-full sm:h-auto p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              onClick={(e) => e.stopPropagation()}
              key="content"
            >
              {/* Header CartPopup */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black">Your Cart</h2>
                <button onClick={onClose} className="text-black hover:text-gray-800">
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Konten CartPopup */}
              {cartItems.length === 0 ? (
                <p className="text-black">Your cart is empty.</p>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                        <p className="text-blue-600">Rp {item.price.toLocaleString()}</p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="p-1 bg-red-600 rounded-md hover:bg-gray-300"
                          >
                            <FaMinus />
                          </button>
                          <span className="mx-2 text-black">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="p-1 bg-blue-500 rounded-md hover:bg-gray-300"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-black">
                      Total: Rp{" "}
                      {cartItems
                        .reduce((acc, item) => acc + item.price * item.quantity, 0)
                        .toLocaleString()}
                    </h3>
                    <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default CartPopup;
