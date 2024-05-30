import { Link } from "react-router-dom";

export default function Header() {


  const Links = [
    {
      name: "Acheter neuve",
      link: "/newcar"
    },
    {
      name: "Acheter occasion",
      link: "/occasioncar"
    },
    {
      name: "Vendre",
      link: "/sellcar"
    },
    {
      name: "Services",
      link: "/services"
    },
    {
      name: "Se connecter",
      link: "/login"
    },
  ]


  return (
    <>
      <section>
        <div className="flex flex-row">
          <div className="flex mr-60">
            <Link to="/">
              <img src="/images/logo/carvantage-logo.png" alt="logo" className="w-60" />
            </Link>
          </div>
          <div>
            <ul className="justify-end md:flex md:items-center md:text-xs sm:flex-row" >
              {
                Links.map((link) => (
                  <li key={link.name} className="p-4">
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
