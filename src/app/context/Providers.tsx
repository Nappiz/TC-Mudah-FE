// src/app/context/Providers.tsx

"use client";

import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      {children}
      <ToastContainer />
    </AuthProvider>
  );
};

export default Providers;
