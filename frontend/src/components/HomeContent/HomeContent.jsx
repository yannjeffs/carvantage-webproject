import { Link } from "react-router-dom"

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
      price: "19 000 000 F CFA",
      button: "Voir la Honda CR-V",
      link: "/occasioncar"
    },
    {
      name: "Mercedes C300 4Matic 2012",
      src: "/images/occasion_car_image/mercedes-C300-4matic-2012.jpg",
      price: "15 500 000 F CFA",
      button: "Voir la Mercedes C300",
      link: "/occasioncar"
    },
    {
      name: "Nissan Qashqai 2018",
      src: "/images/occasion_car_image/nissan-qashqai-2018.jpg",
      price: "16 000 000 F CFA",
      button: "Voir la Nissan Qashqai",
      link: "/occasioncar"
    },
    {
      name: "Toyota RAV4 2016 AWD Limited",
      src: "/images/occasion_car_image/toyota-RAV4-2016.jpg",
      price: "17 000 000 F CFA",
      button: "Voir la Toyota RAV4",
      link: "/occasioncar"
    }
  ]

  const NewCar = [
    {
      name: "BMW 540i 2022",
      src: "/images/new_car_image/540i-bmw.jpg",
      price: "30 000 000 F CFA",
      button: "Voir la BMW 540i",
      link: "/newcar"
    },
    {
      name: "Mercedes GLE 4Matic 2022",
      src: "/images/new_car_image/2021_mercedes-benz_gle.jpg",
      price: "45 000 000 F CFA",
      button: "Voir la Mercedes GLE",
      link: "/newcar"
    },
    {
      name: "Kia Sportage 2022",
      src: "/images/new_car_image/2022-Kia-Sportage.jpg",
      price: "40 000 000 F CFA",
      button: "Voir la KIA Sportage",
      link: "/newcar"
    },
    {
      name: "Hyundai Tucson 2021",
      src: "/images/new_car_image/hyundai-tucson-2021.jpeg",
      price: "32 000 000 F CFA",
      button : "Voir la Hyundai Tucson",
      link: "/newcar"
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
              </ul> {/**liste de stickers */}
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-center text-2xl pt-8">Pour vous, nous avons plusieurs offres de voitures neuves et d&apos;occasions à vous proposer :</p>
            <div className="text-center pt-8">
              <p className="font-bold text-4xl">NOS OFFRES DE VOITURES NEUVES DU MOMENT</p>
              <div>
                <ul className="flex-row p-4 text-center grid place-content-center gap-2 grid-cols-4">
                  {
                    NewCar.map((newCar, index) => (
                      <li key={index} className="text-center">
                        <img src={newCar.src} alt={newCar.name} className="object-cover h-60" />
                        <p className="font-bold pt-4">{newCar.name}</p>
                        <p className="pt-4">A partir de {newCar.price}</p>
                        <div className="pt-4">
                          <Link to={newCar.link}>
                            <button className="h-12 w-60 duration-200 bg-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">{newCar.button}</button>
                          </Link>
                        </div>
                      </li>
                    ))
                  } {/**presentation des offres sur les voitures neuves */}
                </ul>
              </div>
              <p className="font-bold text-4xl pt-8">NOS OFFRES DE VOITURES D&apos;OCCASION DU MOMENT</p>
              <div>
                <ul className="flex-row p-4 text-center grid place-content-center gap-2 grid-cols-4">
                  {
                    OccasionCar.map((occasionCar, index) => (
                      <li key={index} className="text-center">
                        <img src={occasionCar.src} alt={occasionCar.name} className="object-cover h-60" />
                        <p className="font-bold pt-4">{occasionCar.name}</p>
                        <p className="pt-4">A partir de {occasionCar.price}</p>
                        <div className="pt-4">
                          <Link to={occasionCar.link}>
                            <button className="h-12 w-60 duration-200 bg-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">{occasionCar.button}</button>
                          </Link>
                        </div>
                      </li>
                    ))
                  } {/**présentation des offres sur les voitures d'occasion */}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center text-2xl p-12">Etant donné qur nous savons l&apos;intérêt que vous attachez pour votre voiture, nous vous aidons à l&apos;entretenir pour une meilleure durabilité</p>
            <div className="gap-2 grid grid-cols-2 flex-row place-content-center">
              <div className="float-left">
                <img src="/images/centre-visite-technique.jpg" alt="image d'un centre de visite technique" className="object-cover" style={{ width: "40rem"}} />
              </div>
              <div className="float-right pr-8">
                <p className="text-center items-center justify-center">Nous disposons d&apos;un centre de visite technique technique et une équipe de techniciens surqualifiés et surentrainés pour pouvoir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
