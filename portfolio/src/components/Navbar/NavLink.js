function NavLink(props) {
    const { divName, linkName } = props
    return (
        <div>
            <a href={divName}>{linkName}</a>
        </div>
    );
}

export default NavLink;