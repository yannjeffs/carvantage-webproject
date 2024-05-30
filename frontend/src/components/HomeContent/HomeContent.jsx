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

  return (
    <>
      <div className="pt-8">
        <div className="p-12 text-center sm:text-right">
          <p className="text-5xl font-bold">DECOUVREZ VOS PLUS BELLES VOITURES CHEZ <span className="text-orange-500">CARVANTAGE</span></p>
          <p className="text-xl mt-4">CARVANTAGE vous fait découvrir son immense parc automobile allant de 2010 à 2024 passant par des véhicules neufs et d&apos;occasions qui n&apos;attendent q&apos;un cheteur, <span className="font-bold">VOUS !</span></p>
        </div>
        <div>
          <div className="bg-slate-300 align-center justify-center text-center">
            <div className="text-center">
              <ul className="flex flex-row">
                {
                  Stickers.map((sticker) => (
                    <li key={sticker.description}>
                      <img src={sticker.src} className="float-left" />
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
            
          </div>
        </div>
      </div>
    </>
  )
}
