import React from 'react'
import { Footer, Header, MainSlider } from ".";
const submenu = [
    {
      menuImg : "image/interior-img-2.jpg",
      title : "Mordern Sofa Set"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      title : "MORDEN 3 SEATER SOFA"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      title : "MORDEN SOFA CHAIRS"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      title : "SECTIONAL SOFA"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      title : "WINGCHAIRS"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      title : "CHALISE LOUNGE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      title : "OTTOMON"
    },
  ]
  


export default function SeatingFurniture(props) {
  return (
  <>
    <Header/>
    
    <div className=" bg-white container sm:mb-5 lg:mb-10">
        <div className="mx-auto max-w-2xl  px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h1 className="text-center mb-5 font-bold text-4xl">
              Furniture Categories
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-y-8 lg:gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {submenu.map((data) => {
              return (
                <div className="hover:border-2 hover:border-[#4a6021] p-2 rounded-md ">
                  <a href="#" className="">
                    <div className="aspect-w-1 h-[857] w-full overflow-hidden rounded-sm bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={data.menuImg}
                        alt=""
                        className="h-full w-full object-cover object-center "
                      />
                    </div>
                    <div className="mt-2 py-2 items-center   bg-slate-200 rounded-sm">
                      <h3 className="text-center text-sm ml-2 font-medium ">
                        {data.title}
                      </h3>
                      
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
<Footer/>
  </>
  );
}