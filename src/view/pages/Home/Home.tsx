import {useEffect} from "react";
import {Product} from "../../common/product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProduct} from "../../../slices/productsSlice.ts";

export function Home() {

    // const [products,setProducts]= useState <ProductData[]>([])

  const dispatch =  useDispatch<AppDispatch>();

  const  {list} =useSelector((state:RootState) => state.products);





    useEffect(() => {

        dispatch(getAllProduct())
    }, []);
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-5 mb-5">
            {
                list.map((product)=>(
                <Product key={product.id} data={product}/>
                ))
            }




        </div>


    );
}
