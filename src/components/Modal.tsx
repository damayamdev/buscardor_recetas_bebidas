import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAppStore } from "../stores/useAppStore";
import type { Recipe } from "../types";

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectedRecipe = useAppStore((state) => state.selectedRecipe);
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite);
  const favoriteExists = useAppStore((state) => state.favoriteExists);

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let index = 1; index < 6; index++) {
      const ingredient =
        selectedRecipe[`strIngredient${index}` as keyof Recipe];
      const measure = selectedRecipe[`strMeasure${index}` as keyof Recipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={ingredient} className="text-lg font-normal">
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {selectedRecipe.strDrink}
                  </Dialog.Title>
                  <img
                    className="mx-auto w-96"
                    src={selectedRecipe.strDrinkThumb}
                    alt={`Imagen de ${selectedRecipe.strDrink}`}
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Ingredientes y Cantidades
                  </Dialog.Title>
                  {renderIngredients()}
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Instrucciones
                  </Dialog.Title>
                  <p className="text-lg">{selectedRecipe.strInstructions}</p>
                  <div className="mt-5 flex justify-between gap-4">
                    <button
                      onClick={closeModal}
                      className="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                      type="button"
                    >
                      Cerrar
                    </button>
                    <button
                      onClick={() => handleClickFavorite(selectedRecipe)}
                      className="w-full rounded p-3 font-bold uppercase text-white shadow bg-orange-400 hover:bg-orange-500"
                      type="button"
                    >
                      {favoriteExists(selectedRecipe.idDrink)
                        ? "Eliminar Favorito"
                        : "Agregar a Favoritos"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}