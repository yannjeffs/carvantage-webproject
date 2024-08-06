import { Link } from "react-router-dom"

export default function NewCar() {
  const Brands = [
    {
      name: "Audi",
      imageUrl: "/brands/audi.svg",
      link: "/newcar/audi"
    },
    {
      name: "BMW",
      imageUrl: "/brands/bmw.svg",
      link: "/bmw"
    },
    {
      name: "Citroën",
      imageUrl: "/brands/citroen.svg",
      link: "/citroen"
    },
    {
      name: "Hyundai",
      imageUrl: "/brands/hyundai.svg",
      link: "/hyundai"
    },
    {
      name: "Mercedes",
      imageUrl: "/brands/mercedes.svg",
      link: "/mercedes"
    },
    {
      name: "Nissan",
      imageUrl: "/brands/nissan.svg",
      link: "/nissan"
    },
    {
      name: "Opel",
      imageUrl: "/brands/opel.svg",
      link: "/opel"
    },
    {
      name: "Peugeot",
      imageUrl: "/brands/peugeot.svg",
      link: "/newcar/peugeot"
    },
    {
      name: "Renault",
      imageUrl: "/brands/renault.svg",
      link: "/newcar/renault"
    },
    {
      name: "Suzuki",
      imageUrl: "/brands/suzuki.svg",
      link: "/suzuki"
    },
    {
      name: "Toyota",
      imageUrl: "/brands/toyota.svg",
      link: "/toyota"
    },
    {
      name: "Volkswagen",
      imageUrl: "/brands/volkswagen.svg",
      link: "/volkswagen"
    }
  ]

  return (
    <>
      <div>
        <div className="flex flex-col p-4">
          <p className="text-center font-bold text-xl md:text-2xl lg:text-3xl">Sélectionnez la marque qui vous intéresse parmi celles présentées ci-dessous :</p>
          <div className="place-content-center">
            <ul className="flex-col p-4 text-center md:grid md:grid-cols-2 md:gap-4 lg:grid lg:place-content-center lg:gap-2 lg:grid-cols-4">
              {
                Brands.map((brands, index) => (
                  <Link key={index} className="md:border-2 p-4">
                    <li key={index} className="none p-6 border-2 md:border-none">
                      <img src={brands.imageUrl} alt={brands.name} className=" w-40 place-content-center object-cover lg:float-left" />
                      <p className="font-bold text-xl md:text-2xl lg:float-right">{brands.name}</p>
                    </li>
                  </Link>
                ))
              }
            </ul>
          </div>
          <Link to="/newcar" className="text-center text-orange-500 flex place-content-center duration-200 hover:text-black hover:space-x-2">
            <div className="float-left">
              <p>Tout afficher</p>
            </div>
            <div className="float-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -3 24 24" strokeWidth={2} stroke="currentColor" className="size-4 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
