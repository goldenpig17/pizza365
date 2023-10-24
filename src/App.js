import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

// Import thu vien anh
import anhMon1 from "./assets/images/anh_mon_1.jpg";
import anhMon2 from "./assets/images/anh_mon_2.jpg";
import anhMon3 from "./assets/images/anh_mon_3.jpg";
import anhMon4 from "./assets/images/anh_mon_4.jpg";
import anhMon5 from "./assets/images/anh_mon_5.jpg";
import anhMon6 from "./assets/images/anh_mon_6.jpg";
import anhMon7 from "./assets/images/anh_mon_7.jpg";

import pizzaHawai from "./assets/images/pizza_type_hawai.jpg";
import pizzaHaisan from "./assets/images/pizza_type_hai_san.jpg";
import pizzaThitNuong from "./assets/images/pizza_type_thit_nuong.jpg";

function App() {
  return (
    <div>
      {/*MENU BAR*/}
      <div class="container-fluid" style={{backgroundColor: "yellow"}}>
        <div class="row">
          <div class="col-sm-12">
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav nav-fill w-100">
                  <li class="nav-item active">
                    <a class="nav-link" href="#home">HOME</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#combo">SIZE COMBOS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#type">PIZZA TYPES</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">FORM CONTACT</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/*MAIN CONTENT*/}
      <div class="container" style={{padding: "70px 0px 50px 0px"}}>
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              {/* Title row home */}
              <div class="col-sm-12">
                <h1><b class="text-main">Pizza 365</b></h1>
                <p style={{fontStyle: "italic"}} class="text-second">Truly italian!</p>
              </div>

              {/*Slideshow */}
              <div class="col-sm-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={anhMon1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={anhMon2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={anhMon3} alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={anhMon4} alt="Fourth slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={anhMon5} alt="Fifth slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={anhMon6} alt="Sixth slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={anhMon7} alt="Seventh slide" />
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>

             { /* Title ưu điểm của Quán */}
              <div class="col-sm-12 text-center p-4 mt-4">
                <h2><b class="p-2 border-bottom">Tại sao lại Pizza 365</b></h2>
              </div>

              {/* Content ưu điểm của Quán */}
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-3 p-3 bg-brand-01 text-black border" style={{backgroundColor: "#FFFACD"}}>
                    <h3 class="p-2">Không ngừng cải tiến</h3>
                    <p class="p-2">Cải tiến sản phẩm, chất lượng và trải nghiệm khách hàng luôn là yếu tố tiên quyết trong
                      chiến lược kinh doanh của chúng tôi nhằm thúc đẩy tăng trưởng và trở thành thương hiệu pizza hàng đầu.
                    </p>
                  </div>
                  <div class="col-sm-3 p-3 bg-brand-02 text-black border" style={{backgroundColor: "#FFFFE0"}}>
                    <h3 class="p-2">Trải nghiệm dễ dàng</h3>
                    <p class="p-2">Chúng tôi đơn giản hướng đến việc trở thành thương hiệu của mọi nhà, mọi lúc, mọi nơi.
                    </p>
                  </div>
                  <div class="col-sm-3 p-3 bg-brand-03 text-black border" style={{backgroundColor: "#FFFF00"}}>
                    <h3 class="p-2">Hướng đến sự vượt trội</h3>
                    <p class="p-2">"Vượt trội" không chỉ là một khái niệm lớn. Thay vào đó, giá trị này là cốt lõi trong mỗi
                      con người của chúng tôi, trong mỗi công việc mà họ làm.</p>
                  </div>
                  <div class="col-sm-3 p-3 bg-brand-04 text-black border" style={{backgroundColor: "#FFD700"}}>
                    <h3 class="p-2">Thể hiện đam mê</h3>
                    <p class="p-2">Chúng tôi sẵn lòng hỗ trợ vô điều kiện và linh động điều chỉnh tùy theo thử thách để tìm
                      ra giải pháp.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="combo" class="row">
              {/* Title Size Combos */}
              <div class="col-sm-12 text-center p-4 mt-4">
                <h2><b class="p-1 border-bottom">Menu combo Pizza 365</b></h2>
                <p><span class="p-2">Hãy chọn combo phù hợp với bạn</span></p>
              </div>
              {/* Content các Size Combos */}
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-header bg-main-brand text-white text-center">
                        <h3>S ( Small size)</h3>
                      </div>
                      <div class="card-body text-center">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            Đường kính <b> 20 cm</b>
                          </li>
                          <li class="list-group-item">Sườn nướng <b>2</b></li>
                          <li class="list-group-item">Salad <b>200 gr</b></li>
                          <li class="list-group-item">Nước ngọt <b>2</b></li>
                          <li class="list-group-item">
                            <h1>VND <b>150,000</b></h1>
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer text-center">
                        <button class="btn-green" id="btn-size-small" data-is-selected="N">
                          Chọn
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-header bg-main-brand text-white text-center">
                        <h3>M (Medium size)</h3>
                      </div>
                      <div class="card-body text-center">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            Đường kính <b> 25 cm</b>
                          </li>
                          <li class="list-group-item">Sườn nướng <b>4</b></li>
                          <li class="list-group-item">Salad <b> 300 gr</b></li>
                          <li class="list-group-item">Nước ngọt <b>3</b></li>
                          <li class="list-group-item">
                            <h1>VND <b>200,000</b></h1>
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer text-center">
                        <button class="btn-green" id="btn-size-medium" data-is-selected="N"> Chọn </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-header bg-main-brand text-white text-center">
                        <h3>L ( Large size )</h3>
                      </div>
                      <div class="card-body text-center">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            Đường kính <b> 30 cm</b>
                          </li>
                          <li class="list-group-item">Sườn nướng <b>8</b></li>
                          <li class="list-group-item">Salad <b> 500 gr</b></li>
                          <li class="list-group-item">Nước ngọt <b>4</b></li>
                          <li class="list-group-item">
                            <h1>VND <b>250,000</b></h1>
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer text-center">
                        <button class="btn-green" id="btn-size-large" data-is-selected="N">
                          Chọn </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="type" class="row">
              {/* Title Pizza Type */}
              <div class="col-sm-12 text-center p-4 mt-4">
                <h2><b class="p-2 border-bottom">Chọn loại pizza</b></h2>
              </div>

              {/*Content Pizza Type */}
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card w-100" style={{width: "18rem"}}>
                      <img src={pizzaHawai} class="card-img-top" alt="Pizza Hawai"/>
                      <div class="card-body">
                        <h3>Pizza Hawai</h3>
                        <p>Món ăn thanh đạm</p>
                        <p>
                          Hãy thưởng thức món ăn với phong cách Alo Ha đến từ
                          Hawai.
                        </p>
                        <p>
                          <button class="btn-green" id="btn-type-hawai" data-is-selected="N"
                            > Chọn </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card w-100" style={{width: "18rem"}}>
                      <img src={pizzaHaisan} class="card-img-top" alt="Pizza Hai San"/>
                      <div class="card-body">
                        <h3>Pizza Hải sản</h3>
                        <p>Món ăn đến từ biển</p>
                        <p>
                          Bạn đã thử pizza được chế biến từ nguyên liệu hải sản chưa ?
                        </p>
                        <p>
                          <button class="btn-green" id="btn-type-hai-san" data-is-selected="N"
                           > Chọn </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card w-100" style={{width: "18rem"}}>
                      <img src={pizzaThitNuong} class="card-img-top" alt="Pizza Thit Nuong" />
                      <div class="card-body">
                        <h3>Pizza Bacon</h3>
                        <p>Món ăn đăc biệt</p>
                        <p>
                          Được chế biến từ thịt bacon. Mang đến hương vị mới lạ.
                        </p>
                        <p>
                          <button class="btn-green" id="btn-type-bacon" data-is-selected="N"
                           > Chọn </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="type" class="row">
              {/* Title Drink Select */}
              <div class="col-sm-12 text-center p-4 mt-4">
                <h2><b class="p-2 border-bottom">Chọn loại đồ uống</b></h2>
              </div>

              {/*Content Drink Select*/}
              <div class="col-sm-">
                <label class="col-md-3 col-form-label text-right">Hãy chọn đồ uống bạn yêu thích <span
                  class="text-danger">(*)</span></label>
                <div class="col-md-7">
                  <select id="select-do-uong" class="form-control">
                    <option value="0">-- Chọn đồ uống --</option>
                  </select>
                </div>
              </div>
            </div>
            <div id="contact" class="row">
              {/* Title Form Contact Us */}
              <div class="col-sm-12 text-center p-4 mt-4">
                <h2><b class="p-2 border-bottom">Thông tin đơn hàng</b></h2>
              </div>

             { /* Content Form Contact Us*/}
              <div class="col-sm-12 p-2 jumbotron">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="input-name">Họ và tên</label>
                      <input type="text" class="form-control" id="input-name" placeholder="Họ và tên" />
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="text" class="form-control" id="input-email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                      <label for="input-phone">Điện thoại</label>
                      <input type="text" class="form-control" id="input-phone" placeholder="Điện thoại" />
                    </div>
                    <div class="form-group">
                      <label for="input-address">Địa chỉ</label>
                      <input type="text" class="form-control" id="input-address" placeholder="Địa chỉ" />
                    </div>
                    <div class="form-group">
                      <label for="message">Lời nhắn</label>
                      <input type="text" class="form-control" id="input-message" placeholder="Lời nhắn" />
                    </div>
                    <div class="form-group">
                      <label for="voucher">Mã giảm giá (Voucher ID)</label>
                      <input type="text" class="form-control" id="input-voucher" placeholder="Mã Voucher" />
                    </div>
                    <button type="button" class="btn-green" > Kiểm tra đơn </button>

                  </div>
                </div>
              </div>
              {/*vùng hiển thị thông tin đơn hàng(order)*/}
              <div id="div-container-order" class="container bg-info p-2 jumbotron" style={{display: "none"}}>
                <div id="div-order-infor" class="text-white p-3">thông tin đơn hàng vào đây</div>
                <div class="p-2">
                  <button type="button" class="btn-yellow"> Gửi đơn </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
