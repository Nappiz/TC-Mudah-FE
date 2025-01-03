import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaCartPlus, FaCheckCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface Props {
  item: Item;
}

const ItemCard: React.FC<Props> = ({ item }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        <p className="mt-2 text-gray-600">{item.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 font-bold">
            Rp {item.price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition relative"
          >
            <FaCartPlus className="mr-2" /> Add to Cart
            <AnimatePresence>
              {isAdded && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1"
                >
                  <FaCheckCircle />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCard;
