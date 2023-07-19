
import Link from "next/link";
import { parseCookies } from "nookies";

const products = (props) => {
  // console.log(props.data);
  return (
    <div className="m-12">
      <p className="text-3xl text-center mb-4">Popular Courses </p>
       {props.products.data.map((item) => {
        return (
          <div className="m-5">

            <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
              <Link href={`/product/${item.attributes.slug}`} className="col-span-2 text-left text-gray-600 hover:text-gray-700" >
                <div className="group relative h-full w-full overflow-hidden">
                  <img src={item.attributes.img_url} alt="" className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125" />

                </div>
              </Link>
              <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
                <Link href={`/product/${item.attributes.slug}`} className="mt-3 overflow-hidden text-2xl font-semibold"> {item.attributes.title}</Link>
                <p className="overflow-hidden text-sm">{item.attributes.description}</p>
                <div className="text-lg font-bold text-gray-500 hover:text-gray-700">{item.attributes.author}</div>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                <div className="flex flex-col text-gray-700 sm:flex-row">
                  <div className="flex h-fit space-x-2 text-sm font-medium">

                  </div>
                  <Link href={`/product/${item.attributes.slug}`} className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-600 text-white sm:ml-auto">Rs. {item.attributes.price} /- </Link>
                </div>
              </div>
            </div>


          </div>
        )
      })}
    </div>
  )
}

// export async function getServerSideProps(context) {
//   let a = await fetch("http://localhost:1337/api/products");
//   let products = await a.json();
//   // console.log(products); 
//   return {
//     props: { products: products },
//   }
// }

export async function getServerSideProps(context) {


  // const logininfo = {
  //   identifier: 'test',
  //   password: 'testkartahu'
  // }

  // const login = await fetch("http://localhost:1337/api/auth/local", {
  //   method: "POST",
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(logininfo)
  // })

  // const login_response = await login.json();

  const jwt = parseCookies(context).jwt;

  let a = await fetch("http://localhost:1337/api/products",{
    headers : {
      Authorization : `Bearer ${jwt}`
    }
  });
  let products = await a.json();
  return {
    props: {
      products: products
    },
  }
}

export default products
