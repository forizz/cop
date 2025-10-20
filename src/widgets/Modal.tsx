import React, { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  backdropClassName?: string;
}

function Modal({
  children,
  open,
  onClose,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className = "",
  backdropClassName = "",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleGlobalClick = (event: MouseEvent) => {
      if (
        closeOnBackdropClick &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        onClose
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("click", handleGlobalClick);
    document.addEventListener("keydown", handleKeyDown);

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("click", handleGlobalClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, closeOnBackdropClick, closeOnEscape]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-zinc-600/30 backdrop-blur-sm ${backdropClassName}`}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={`relative max-h-[90vh] max-w-[90vw] overflow-auto ${className}`}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export { Modal };
