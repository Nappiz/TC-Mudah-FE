import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const existingPortal = document.getElementById("portal-root");
    if (existingPortal) {
      setPortalElement(existingPortal);
    } else {
      const el = document.createElement("div");
      el.id = "portal-root";
      document.body.appendChild(el);
      setPortalElement(el);
    }
    setMounted(true);

    return () => {
    };
  }, []);

  if (!mounted || !portalElement) return null;

  return createPortal(children, portalElement);
};

export default Portal;
