function NavbarElement({link, value}){
    return (
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href={link}>{value}</a>
        </li>
    )
}

export default NavbarElement