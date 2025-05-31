import Bottle from '../../../assets/products/img.png';
import Bottle2 from '../../../assets/products/img_3.png';
import Bottle3 from '../../../assets/products/img_2.png'
import Bottle4 from '../../../assets/products/img_1.png'


import {useEffect, useState} from "react";
import {Product} from "../../common/product/Product.tsx";


type ProductData= {
    id:number,
    name: string,
    price:string,
    currency: string,
    image: string
}
export function Home() {

    const [products,setProducts]= useState <ProductData[]>([])
    useEffect(() => {
        const FetchData = async ()=>{
            try{
                const response =  await fetch('./product-data.json')
                const jsonData = await response.json();
                //console.log(jsonData)
                setProducts(jsonData);
                //console.log(products);

            }catch (error) {
             console.log(error)
            }

        }
  FetchData()
    }, []);
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-5 mb-5">
            {
                products.map((product)=>(
                <Product key={product.id} data={product}/>
                ))
            }




        </div>


    );
}
