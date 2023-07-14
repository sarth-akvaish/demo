import Card from "@/components/Card"
import Link from "next/link";

const products = (props) => {
  return (
    <div className="m-12">
      <p className="text-3xl text-center mb-4">Popular Courses </p>
      {props.products.data.map((item) => {
        return (
          <div class="m-5">

            <div class="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
              <Link href={`/product/${item.attributes.slug}`} class="col-span-2 text-left text-gray-600 hover:text-gray-700" >
                <div class="group relative h-full w-full overflow-hidden">
                  <img src={item.attributes.img_url} alt="" class="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125" />
                  
                </div>
              </Link>
              <div class="col-span-3 flex flex-col space-y-3 pr-8 text-left">
                <Link href={`/product/${item.attributes.slug}`} class="mt-3 overflow-hidden text-2xl font-semibold"> {item.attributes.title}</Link>
                <p class="overflow-hidden text-sm">{item.attributes.description}</p>
                <div class="text-lg font-bold text-gray-500 hover:text-gray-700">{item.attributes.author}</div>

                <div class="flex flex-col text-gray-700 sm:flex-row">
                  <div class="flex h-fit space-x-2 text-sm font-medium">
                    
                  </div>
                  <Link href={`/product/${item.attributes.slug}`} class="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-600 text-white sm:ml-auto">Rs.{item.attributes.price} /- </Link>
                </div>
              </div>
            </div>


          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  let a = await fetch("http://localhost:1337/api/products");
  let products = await a.json();
  // console.log(products); 
  return {
    props: { products: products },
  }
}


export default products
