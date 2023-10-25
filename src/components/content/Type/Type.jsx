import { Component } from "react";

import pizzaHawai from "../../../assets/images/pizza_type_hawai.jpg";
import pizzaHaisan from "../../../assets/images/pizza_type_hai_san.jpg";
import pizzaThitNuong from "../../../assets/images/pizza_type_thit_nuong.jpg";

class Type extends Component {
    render() {
        return (
            <>
                <div id="type" className="row">
              {/* Title Pizza Type */}
              <div className="col-sm-12 text-center p-4 mt-4">
                <h2><b className="p-2 border-bottom">Chọn loại pizza</b></h2>
              </div>

              {/*Content Pizza Type */}
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card w-100" style={{ width: "18rem" }}>
                      <img src={pizzaHawai} className="card-img-top" alt="Pizza Hawai" />
                      <div className="card-body">
                        <h3>Pizza Hawai</h3>
                        <p>Món ăn thanh đạm</p>
                        <p>
                          Hãy thưởng thức món ăn với phong cách Alo Ha đến từ
                          Hawai.
                        </p>
                        <p>
                          <button className="btn-green" id="btn-type-hawai" data-is-selected="N"
                          > Chọn </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card w-100" style={{ width: "18rem" }}>
                      <img src={pizzaHaisan} className="card-img-top" alt="Pizza Hai San" />
                      <div className="card-body">
                        <h3>Pizza Hải sản</h3>
                        <p>Món ăn đến từ biển</p>
                        <p>
                          Bạn đã thử pizza được chế biến từ nguyên liệu hải sản chưa ?
                        </p>
                        <p>
                          <button className="btn-green" id="btn-type-hai-san" data-is-selected="N"
                          > Chọn </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card w-100" style={{ width: "18rem" }}>
                      <img src={pizzaThitNuong} className="card-img-top" alt="Pizza Thit Nuong" />
                      <div className="card-body">
                        <h3>Pizza Bacon</h3>
                        <p>Món ăn đăc biệt</p>
                        <p>
                          Được chế biến từ thịt bacon. Mang đến hương vị mới lạ.
                        </p>
                        <p>
                          <button className="btn-green" id="btn-type-bacon" data-is-selected="N"
                          > Chọn </button>
                        </p>
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

export default Type;