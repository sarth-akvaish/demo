import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-blue-50  ">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link href='/'><div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl"><button class=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded ">Shoppeal</button></span>
          </div></Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href='/'><div className="mr-5 hover:text-gray-900">Home</div></Link>
            <Link href='/products'><div className="mr-5 hover:text-gray-900">Products</div></Link>
            <Link href='/about'><div className="mr-5 hover:text-gray-900">About</div></Link>
            <Link href='/contact'><div className="mr-5 hover:text-gray-900">Contact</div></Link>
            <Link href='/login'><div className="mr-5 text-blue-500 hover:text-blue-900">Login</div></Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar