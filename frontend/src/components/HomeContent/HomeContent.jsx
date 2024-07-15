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
			button: "Voir la Hyundai Tucson",
			link: "/newcar"
		}
	]

	return (
		<>
			<div className="pt-8">
				<div className="p-12 text-center sm:text-right">
					<p className="text-2xl md:text-5xl font-bold">DECOUVREZ VOS PLUS BELLES VOITURES CHEZ <span className="text-orange-500">CARVANTAGE</span></p>
					<p className="text-xl mt-4">CARVANTAGE vous fait découvrir son immense parc automobile allant de 2010 à 2024 passant par des véhicules neufs et d&apos;occasions qui n&apos;attendent q&apos;un cheteur, <span className="font-bold">VOUS !</span></p>
				</div>
				<div className="p-4 bg-slate-300 align-center justify-center text-center">
					<div>
						<div className="flex text-center overflow-x-auto place-content-center">
							<ul className="flex">
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
							<p className="font-bold text-2xl pl-3 pr-3 lg:text-4xl">NOS OFFRES DE VOITURES NEUVES DU MOMENT</p>
							<div>
								<ul className="flex-col p-4 text-center md:grid md:place-content-center md:grid-cols-2 md:gap-2 lg:grid lg:place-content-center lg:gap-2 lg:grid-cols-4">
									{
										NewCar.map((newCar, index) => (
											<li key={index} className="text-center pt-4">
												<img src={newCar.src} alt={newCar.name} className="object-cover h-full w-full md:h-60 lg:h-60" />
												<p className="font-bold pt-4">{newCar.name}</p>
												<p className="pt-4">A partir de {newCar.price}</p>
												<div className="pt-4">
													<Link to={newCar.link}>
														<button className="h-12 w-60 font-bold duration-200 text-white bg-orange-500 hover:bg-black">{newCar.button}</button>
													</Link>
												</div>
											</li>
										))
									} {/**presentation des offres sur les voitures neuves */}
								</ul>
								<Link to="/newcar" className="text-center text-orange-500 flex place-content-center duration-200 hover:text-black hover:space-x-2">
									<div className="float-left">
										<p>Voir toutes les offres</p>
									</div>
									<div className="float-right">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -3 24 24" strokeWidth={2} stroke="currentColor" className="size-4 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
										</svg>
									</div>
								</Link>
							</div>
							<p className="font-bold text-2xl lg:text-4xl pt-8">NOS OFFRES DE VOITURES D&apos;OCCASION DU MOMENT</p>
							<div>
								<ul className="flex-col p-4 text-center md:grid md:place-content-center md:grid-cols-2 md:gap-2 lg:grid lg:place-content-center lg:gap-2 lg:grid-cols-4">
									{
										OccasionCar.map((occasionCar, index) => (
											<li key={index} className="text-center pt-4">
												<img src={occasionCar.src} alt={occasionCar.name} className="object-cover h-full w-full md:h-60 lg:h-60" />
												<p className="font-bold pt-4">{occasionCar.name}</p>
												<p className="pt-4">A partir de {occasionCar.price}</p>
												<div className="pt-4">
													<Link to={occasionCar.link}>
														<button className="h-12 w-60 font-bold duration-200 bg-orange-500 text-white hover:bg-black">{occasionCar.button}</button>
													</Link>
												</div>
											</li>
										))
									} {/**présentation des offres sur les voitures d'occasion */}
								</ul>
								<Link to="/occasioncar" className="text-center text-orange-500 flex place-content-center duration-200 hover:text-black hover:space-x-2">
									<div className="float-left">
										<p>Voir toutes les offres</p>
									</div>
									<div className="float-right">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -3 24 24" strokeWidth={2} stroke="currentColor" className="size-4 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
										</svg>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div>
						<p className="text-center text-xl lg:text-3xl p-12 font-bold">Faites nous confiance pour l&apos;entretien de votre véhicule</p>
						<div className="flex flex-col lg:gap-2 lg:grid lg:grid-cols-2 lg:flex-row lg:place-content-center">
							<div className="w-full lg:float-left">
								<img src="/images/centre-visite-technique.jpg" alt="image d'un centre de visite technique" className="object-cover w-full" />
							</div>
							<div className="text-center p-5 lg:float-right lg:pr-8 lg:flex">
								<p className="text-center items-center justify-center flex">Nous disposons d&apos;un centre de visite technique technique et une équipe de techniciens et de mécaniciens surqualifiés et surentrainés pour intervenir sur n&apos;importe quelle panne que pourrait avoir votre véhicule. Vous pouvez donc nous faire confiance pour des diagnostiques fiables mais aussi pour des interventions et réparations sûres et à faibles coûts.</p>
							</div>
						</div>
					</div>
					<div>
						<p className="text-center p-4 font-bold text-2xl md:text-3xl">Pour vous, une large séléction de marques de voiture pour faciliter votre choix</p>
						<div className="place-content-center">

						</div>
					</div>
				</div>
			</div>
		</>
	)
}
