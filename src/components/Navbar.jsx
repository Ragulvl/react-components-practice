import reactlogo from "../assets/react.svg"
function Navbar() {
    return (
        <nav>
            <img src={reactlogo} alt="React Logo" />
            <h1>ReactFacts</h1>
        </nav>
    )
}
export default Navbar;