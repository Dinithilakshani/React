
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";



type productProps = {
    data: ProductData
}
const images: Record<string, string>= import.meta.glob('../../../assets/products/*',
    {eager:true, import:'default'});
export function Product( { data }: productProps) {

    //console.log(images)
    // console.log(`../../../assets/products/${data.image}`)
    const image =    images[`../../../assets/products/${data.image}`];

    const dispath = useDispatch<AppDispatch>()
    console.log(image);

    //
    const item = useSelector((state: RootState)=> state.cart.items.find((cartItem) => cartItem.product.id === data.id));
    const addToCart = ()=>{
        dispath(addItemToCart(data))



    }
    return (
        <div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-5 mb-5">


                {/* Product 1 */}
                <div className="w-32 h-52 bg-white border border-gray-500 p-2 flex flex-col items-center hover:rotate-5 ">
                    <img className="h-[110px] w-[120px]" src={image } alt="Bottle" />
                    <div className="flex items-center mt-1">
                        <h3 className="text-black text-[16px]">
                            {data.name}
                        </h3>

                        <div className="bg-yellow-300 ml-2 px-2 py-[1px] rounded-lg">
                            <h3 className="text-[12px]">{data.price} <small className="text-[7px]">{data.currency}</small></h3>
                        </div>
                    </div>
                    {
                        item ? (
                            <ModifyCart data={
                           {product:data }}/>
                        ): (
                            <button className="w-full mt-2 p-1 bg-black text-white text-[15px] border border-gray-500"
                                    onClick={addToCart}>
                                Add to Cart
                            </button>
                        )
                    }

                </div>
            </div>
        </div>
    );
}
