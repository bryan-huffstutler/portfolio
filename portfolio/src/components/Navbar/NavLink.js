function NavLink(props) {
    const { divName, linkName, onClick } = props

    return (
        <div>
            <a onClick={onClick} href={divName}>{linkName}</a>
        </div>
    );
}

export default NavLink;