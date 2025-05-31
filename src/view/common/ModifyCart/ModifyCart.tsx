import {useEffect, useState} from "react";
import type {CartItem} from "../../../Model/CartItem.ts";

interface ModifyCart {
    data : any;
}

export const itemsList:CartItem[]= [];

export function ModifyCart({data}:ModifyCart) {
    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {
      const exitingItem =  itemsList.find(item=>item.product.id === data.product.id)

        if(exitingItem){
            exitingItem.itemcount = itemCount;
        } else {
            itemsList.push(
                {
                    product:data.product,
                    itemcount:itemCount
                }
            )
        }

        console.log(itemsList);
    }, [itemCount,data]);
    const decreaseItemCount = () => {
        setItemCount((prevValue) =>
            prevValue > 1 ? prevValue - 1 : (alert("Item count can't be less than 1"), prevValue)
        );
    };

    const increaseItemCount = () => {
        setItemCount((prevCount) => prevCount + 1);
    };

    return (
        <div className="w-full flex justify-center mt-3">
            <div className="flex items-center bg-black text-white px-3 py-1 rounded-full shadow-lg gap-3">
                <button
                    className="bg-gray-800 hover:bg-gray-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold"
                    onClick={decreaseItemCount}
                >
                    -
                </button>
                <span className="text-sm font-semibold">{itemCount}</span>
                <button
                    className="bg-gray-800 hover:bg-gray-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold"
                    onClick={increaseItemCount}
                >
                    +
                </button>
            </div>
        </div>
    );
}
