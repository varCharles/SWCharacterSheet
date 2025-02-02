"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { useModal } from "@/contexts/ModalContext";

export const Modal = () => {
  const { isModalOpen, closeModal, modalContent } = useModal();
  if (!isModalOpen) return null;
  return (
    <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-1 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-4 sm:w-full sm:max-w-sm  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={() => closeModal()}
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>X
              </button>
            </div>
            {modalContent}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

// Total: 16
// Dice Rolls: [6, 1, 3, 2]
// Wild Die Breakdown: [4]
