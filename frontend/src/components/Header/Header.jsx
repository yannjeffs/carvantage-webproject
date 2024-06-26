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
          <div className="flex">
            <Link to="/">
              <img src="/images/logo/carvantage-logo.png" alt="logo" className="w-60 flex" />
            </Link>
          </div>
          <div className="container-fluid">
            <ul className="sm:justify-end lg:flex md:items-center sm:flex-row" >
              {
                Links.map((link) => (
                  <li key={link.name} className="duration-200 hover:text-orange-500 hover:border-b-4 border-orange-500">
                    <Link to={link.link}>
                      <button className="pl-6 pr-6 pt-3 pb-3">{link.name}</button>
                    </Link>
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
