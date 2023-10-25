import { Component } from "react";

class Drink extends Component {
    render() {
        return (
            <>
                <div id="type" className="row">
                    {/* Title Drink Select */}
                    <div className="col-sm-12 text-center p-4 mt-4">
                        <h2><b className="p-2 border-bottom">Chọn loại đồ uống</b></h2>
                    </div>

                    {/*Content Drink Select*/}
                    <div className="col-sm-">
                        <label className="col-md-3 col-form-label text-right">Hãy chọn đồ uống bạn yêu thích <span
                            className="text-danger">(*)</span></label>
                        <div className="col-md-7">
                            <select id="select-do-uong" className="form-control">
                                <option value="0">-- Chọn đồ uống --</option>
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Drink;