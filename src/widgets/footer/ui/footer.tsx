import "./footer.scss"

export const Footer = () => {
    function getCurrentYear() {
        return new Date().getFullYear();
    }

    return(
        <footer className="footer">
            <div className="footer__copyright">
                &copy; Все права защищены {getCurrentYear()} год.
            </div>
        </footer>
    )
}
