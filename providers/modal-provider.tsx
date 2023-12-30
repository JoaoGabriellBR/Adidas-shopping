"use client";

import { useEffect, useState } from "react";
import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <PreviewModal />
};

export default ModalProvider;
