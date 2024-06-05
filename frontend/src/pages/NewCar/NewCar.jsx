export default function NewCar() {
  const brands = [
    {
      name: "Audi",
      imageUrl: "/brands/audi.svg"
    },
    {
      name: "BMW",
      imageUrl: "/brands/bmw.svg"
    },
    {
      name: "Citroën",
      imageUrl: "/brands/citroen.svg"
    },
    {
      name: "Mercedes",
      imageUrl: "/brands/mercedes.svg"
    },
    {
      name: "Nissan",
      imageUrl: "/brands/nissan.svg"
    },
    {
      name: "Opel",
      imageUrl: "/brands/opel.svg"
    },
    {
      name: "Peugeot",
      imageUrl: "/brands/peugeot.svg"
    },
    {
      name: "Renault",
      imageUrl: "/brands/renault.svg"
    },
    {
      name: "Suzuki",
      imageUrl: "/brands/suzuki.svg"
    },
    {
      name: "Volkswagen",
      imageUrl: "/brands/volkswagen.svg"
    }
  ]

  return (
    <>
      <div>
        <div className="flex flex-col p-4 font-bold text-xl md:text-2xl lg:text-3xl">
          <p className="text-center">Sélectionnez la marque qui vous intéresse parmi celles présentées ci-dessous :</p>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}
