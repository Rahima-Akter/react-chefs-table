/* eslint-disable react/prop-types */


const CookingTable = ({ cook, handleCurrentlyCooking, currentlyCooking, handleTotalTimeCalory, totalTime, totalCalory }) => {
    return (
        <div>
            <h2 className="font-bold text-center text-3xl mt-6 md:mt-0">Want to cook: {cook.length}</h2>
            <div className="border border-gray-200 w-[95%] mx-auto my-2"></div>
            <div className="overflow-x-scroll">
                <table className="table">
                    <thead>
                        <tr className="text-lg">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cook.map((recipie, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{recipie.dish_name}</td>
                                <td>{recipie.cooking_time} <small>min</small></td>
                                <td>{recipie.total_calories} <small>cal</small></td>
                                <td><button onClick={() => {
                                    handleCurrentlyCooking(recipie.id);
                                    handleTotalTimeCalory(recipie.cooking_time,recipie.total_calories) 
                                    }} className="px-4 py-2 rounded-xl bg-green-700 text-white font-bold hover:bg-green-600 duration-700">preparing</button></td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>

            {/* currently cooking table */}
            <h2 className="font-bold text-center text-3xl mt-10">Currently cooking: {currentlyCooking.length}</h2>
            <div className="border border-gray-200 w-[95%] mx-auto my-2"></div>
            <div className="overflow-x-scroll">
                <table className="table">
                    <thead>
                        <tr className="text-lg">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentlyCooking.map((recipie, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{recipie.dish_name}</td>
                                <td>{recipie.cooking_time} <small>min</small></td>
                                <td>{recipie.total_calories} <small>cal</small></td></tr>

                            )}
                        <tr className="border-none">
                            <td></td>
                            <td></td>
                            <td>total time = {totalTime} <small>min</small></td>
                            <td>total calory = {totalCalory} <small>cal</small></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CookingTable;