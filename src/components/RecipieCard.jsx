import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

const RecipieCard = ({ card, handleWantToCook }) => {

    const { img, dish_name, little_dish_description, length_of_ingredients, list_of_ingredients, cooking_time, total_calories } = card

    return (
        <div className="card card-compact bg-base-100  border-2">
            <figure className="h-[220px] p-3">
                <img
                    src={img}
                    alt={dish_name} className="rounded-md w-full h-full object-cover" />
            </figure>
            <div className="card-body flex flex-col flex-grow">
                <div className="space-y-3">
                    <h2 className="card-title lg:text-3xl text-2xl font-bold">{dish_name}</h2>
                    <p className="opacity-60">{little_dish_description}</p>
                </div>
                <div className="border my-2"></div>
                <div className="">
                    <h3 className="font-bold text-lg">Ingredients: {length_of_ingredients}</h3>
                    <div className="ml-3 mt-2">
                        {
                            list_of_ingredients.map((list, idx) => <li className="font-semibold opacity-80" key={idx}>{list}</li>)
                        }
                    </div>
                </div>
                <div className="border my-2"></div>
                <div className="flex justify-between mx-3">
                    <div className="flex gap-1 items-center font-semibold text-lg">
                        <IoTimeOutline className="text-xl font-bold text-black" />
                        <p>{cooking_time} Minutes</p>
                    </div>
                    <div className="flex gap-1 items-center font-semibold text-lg">
                        <FaFire className="text-xl font-bold text-black" />
                        <p>{total_calories} Calories</p>
                    </div>
                </div>
                <div className="mt-auto w-full">
                    <button onClick={() => handleWantToCook(card)} className="btn bg-green-700 text-white font-bold hover:bg-transparent hover:text-black hover:border-black px-4 py-2 my-2 text-lg w-full duration-700">Want to cook</button>
                </div>
            </div>
        </div>
    );
};

export default RecipieCard;
