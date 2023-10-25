import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" style={{ backgroundColor: "yellow" }}>
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav nav-fill w-100">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#home">HOME</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#combo">SIZE COMBOS</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#type">PIZZA TYPES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact">FORM CONTACT</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;