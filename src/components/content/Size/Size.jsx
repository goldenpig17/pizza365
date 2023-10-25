import { Component } from "react";

class Size extends Component {
    render() {
        return (
            <>
                <div id="combo" className="row">
                    {/* Title Size Combos */}
                    <div className="col-sm-12 text-center p-4 mt-4">
                        <h2><b className="p-1 border-bottom">Menu combo Pizza 365</b></h2>
                        <p><span className="p-2">Hãy chọn combo phù hợp với bạn</span></p>
                    </div>
                    {/* Content các Size Combos */}
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-header bg-main-brand text-white text-center">
                                        <h3>S ( Small size)</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                Đường kính <b> 20 cm</b>
                                            </li>
                                            <li className="list-group-item">Sườn nướng <b>2</b></li>
                                            <li className="list-group-item">Salad <b>200 gr</b></li>
                                            <li className="list-group-item">Nước ngọt <b>2</b></li>
                                            <li className="list-group-item">
                                                <h1>VND <b>150,000</b></h1>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer text-center">
                                        <button className="btn-green" id="btn-size-small" data-is-selected="N">
                                            Chọn
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-header bg-main-brand text-white text-center">
                                        <h3>M (Medium size)</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                Đường kính <b> 25 cm</b>
                                            </li>
                                            <li className="list-group-item">Sườn nướng <b>4</b></li>
                                            <li className="list-group-item">Salad <b> 300 gr</b></li>
                                            <li className="list-group-item">Nước ngọt <b>3</b></li>
                                            <li className="list-group-item">
                                                <h1>VND <b>200,000</b></h1>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer text-center">
                                        <button className="btn-green" id="btn-size-medium" data-is-selected="N"> Chọn </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-header bg-main-brand text-white text-center">
                                        <h3>L ( Large size )</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                Đường kính <b> 30 cm</b>
                                            </li>
                                            <li className="list-group-item">Sườn nướng <b>8</b></li>
                                            <li className="list-group-item">Salad <b> 500 gr</b></li>
                                            <li className="list-group-item">Nước ngọt <b>4</b></li>
                                            <li className="list-group-item">
                                                <h1>VND <b>250,000</b></h1>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer text-center">
                                        <button className="btn-green" id="btn-size-large" data-is-selected="N">
                                            Chọn </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Size;