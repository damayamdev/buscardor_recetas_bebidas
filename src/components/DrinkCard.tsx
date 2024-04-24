import { useAppStore } from "../stores/useAppStore";
import type { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
  const selectRecipe = useAppStore((state) => state.selectRecipe);

  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img
          className="hover:scale-125 transition-transform hover:rotate-2"
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
        />
      </div>
      <div className="p-5">
        <h5 className="text-2xl truncate font-black">{drink.strDrink}</h5>
        <button
        onClick={() => selectRecipe(drink.idDrink)}
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
          type="button"
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;
