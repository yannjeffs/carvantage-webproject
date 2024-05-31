export default function HomeContent() {
  const Stickers = [
    {
      src: "/stickers/vehicules-en-stock.svg",
      description: "Plus de 15 000 véhicules en stock et plus de 10 marques"
    },
    {
      src: "/stickers/premier-reseau.svg",
      description: "1er réseau de distribution de véhicules au Cameroun"
    },
    {
      src: "/stickers/entretien-reparation.svg",
      description: "Entretien & réparation de votre véhicule"
    },
    {
      src: "/stickers/achat-en-ligne.svg",
      description: "Achat en ligne et livraison à domicile"
    }
  ]

  const OccasionCar = [
    {
      name: "Honda CR-V 2020 AWD",
      src: "/images/occasion_car_image/2020-Honda-CRV.jpg",
      price: "19 000 000 F CFA"
    },
    {
      name: "Mercedes C300 4Matic 2012",
      src: "/images/occasion_car_image/mercedes-C300-4matic-2012.jpg",
      price: "15 500 000 F CFA"
    },
    {
      name: "Nissan Qashqai 2018",
      src: "/images/occasion_car_image/nissan-qashqai-2018.jpg",
      price: "16 000 000 F CFA"
    },
    {
      name: "Toyota RAV4 2016 AWD Limited",
      src: "/images/occasion_car_image/toyota-RAV4-2016.jpg",
      price: "17 000 000 F CFA"
    }
  ]

  const NewCar = [
    {
      name: "BMW 540i 2022",
      src: "/images/new_car_image/540i-bmw.jpg",
      price: "28 000 000 F CFA"
    },
    {
      name: "Mercedes GLE 4Matic 2022",
      src: "/images/new_car_image/2021_mercedes-benz_gle.jpg",
      price: "45 000 000 F CFA"
    },
    {
      name: "Kia Sportage 2022",
      src: "/images/new_car_image/2022-Kia-Sportage.jpg",
      price: "40 000 000 F CFA"
    },
    {
      name: "Hyundai Tucson 2021",
      src: "/images/new_car_image/hyundai-tucson-2021.jpeg",
      price: "32 000 000 F CFA"
    }
  ]

  return (
    <>
      <div className="pt-8">
        <div className="p-12 text-center sm:text-right">
          <p className="text-5xl font-bold">DECOUVREZ VOS PLUS BELLES VOITURES CHEZ <span className="text-orange-500">CARVANTAGE</span></p>
          <p className="text-xl mt-4">CARVANTAGE vous fait découvrir son immense parc automobile allant de 2010 à 2024 passant par des véhicules neufs et d&apos;occasions qui n&apos;attendent q&apos;un cheteur, <span className="font-bold">VOUS !</span></p>
        </div>
        <div className=" p-4 bg-slate-300 align-center justify-center text-center">
          <div>
            <div className="text-center">
              <ul className="flex flex-row">
                {
                  Stickers.map((sticker) => (
                    <li key={sticker.description}>
                      <img src={sticker.src} className="float-left w-12" />
                      <p style={{ fontSize: "15px" }}>{sticker.description}</p>
                    </li>
                  ))
                }
              </ul> {/**liste d'images */}
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-center text-2xl pt-8">Pour vous, nous avons plusieurs offres de voitures neuves et d&apos;occasions à vous proposer :</p>
            <div className="text-center pt-8">
              <p className="font-bold text-4xl">NOS OFFRES DE VOITURES NEUVES DU MOMENT</p>
              <div>
                <ul className="flex flex-row p-4">
                  {
                    NewCar.map((newCar) => (
                      <li key={newCar.src}>
                        <img src={newCar.src} alt={newCar.name} className="object-cover w-100  h-100 p-2" />
                        <p>A partir de {newCar.price}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
