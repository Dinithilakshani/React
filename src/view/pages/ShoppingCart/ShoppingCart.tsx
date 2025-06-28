import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";

export function ShoppingCart() {
  const {items} = useSelector((state:RootState) => state.cart)
    return (
        <div className="flex justify-center items-center px-4">
            <div className="w-full max-w-screen-2xl border border-blue-500">
                <table className="min-w-full border-collapse">
                    <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="text-xs font-semibold border-blue-500 border p-2">Id</th>
                        <th className="text-xs font-semibold border-blue-500 border p-2">Name</th>
                        <th className="text-xs font-semibold border-blue-500 border p-2">Unit Price</th>
                        <th className="text-xs font-semibold border-blue-500 border p-2">Qty</th>
                        <th className="text-xs font-semibold border-blue-500 border p-2">Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="border-blue-500 border px-2 bg-blue-400">
                                <p className="text-center text-sm text-white">No Item Display!</p>
                            </td>
                        </tr>
                    ) : (
                        items.map((item, index) => (
                            <tr
                                key={item.product.id}
                                className={`${index % 2 === 0 ? "bg-blue-500" : "bg-blue-300 hover:bg-blue-400"} border border-blue-500`}
                            >
                                <td className="text-xs border-blue-500 border p-2">{item.product.id}</td>
                                <td className="text-xs border-blue-500 border p-2">{item.product.name}</td>
                                <td className="text-xs border-blue-500 border p-2">
                                    {item.product.price} {item.product.currency}
                                </td>
                                <td className="text-xs border-blue-500 border p-2">{item.itemcount}</td>
                                <td className="text-xs border-blue-500 border p-2">
                                    {item.product.price * item.itemcount} {item.product.currency}
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
