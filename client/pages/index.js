import img1 from "../public/images/1.jpg";
import img2 from "../public/images/5.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className=" body-font">
        <div className="lg:w-6/6 ">
          <div className="h-96 overflow-hidden">
            <Image alt="content" src={img1} />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img2} />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Our Way of Teaching</h1>
               
                <p className="leading-relaxed mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum nobis id quaerat earum, quasi necessitatibus nemo, cupiditate in, est vitae provident voluptatibus! Quas, tempora nobis fugiat nesciunt dolorum debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, architecto? Ab nisi hic neque porro autem quas, cumque aperiam officia aspernatur accusamus corporis ex, nulla reiciendis consectetur maxime iusto velit?</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                 
                
                </div>
                <div className="flex">
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Learn More</button>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
