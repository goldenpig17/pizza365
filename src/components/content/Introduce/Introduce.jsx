import { Component } from "react";
// Import thu vien anh
import anhMon1 from "../../../assets/images/anh_mon_1.jpg";
import anhMon2 from "../../../assets/images/anh_mon_2.jpg";
import anhMon3 from "../../../assets/images/anh_mon_3.jpg";
import anhMon4 from "../../../assets/images/anh_mon_4.jpg";
import anhMon5 from "../../../assets/images/anh_mon_5.jpg";
import anhMon6 from "../../../assets/images/anh_mon_6.jpg";
import anhMon7 from "../../../assets/images/anh_mon_7.jpg";


class Introduce extends Component {
    render() {
        return (
            <>
                <div className="row">
                    {/* Title row home */}
                    <div className="col-sm-12">
                        <h1><b className="text-main">Pizza 365</b></h1>
                        <p style={{ fontStyle: "italic" }} className="text-second">Truly italian!</p>
                    </div>

                    {/*Slideshow */}
                    <div className="col-sm-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={anhMon1} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={anhMon2} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={anhMon3} alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={anhMon4} alt="Fourth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={anhMon5} alt="Fifth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={anhMon6} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={anhMon7} alt="Seventh slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    { /* Title ưu điểm của Quán */}
                    <div className="col-sm-12 text-center p-4 mt-4">
                        <h2><b className="p-2 border-bottom">Tại sao lại Pizza 365</b></h2>
                    </div>

                    {/* Content ưu điểm của Quán */}
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-3 p-3 bg-brand-01 text-black border" style={{ backgroundColor: "#FFFACD" }}>
                                <h3 className="p-2">Không ngừng cải tiến</h3>
                                <p className="p-2">Cải tiến sản phẩm, chất lượng và trải nghiệm khách hàng luôn là yếu tố tiên quyết trong
                                    chiến lược kinh doanh của chúng tôi nhằm thúc đẩy tăng trưởng và trở thành thương hiệu pizza hàng đầu.
                                </p>
                            </div>
                            <div className="col-sm-3 p-3 bg-brand-02 text-black border" style={{ backgroundColor: "#FFFFE0" }}>
                                <h3 className="p-2">Trải nghiệm dễ dàng</h3>
                                <p className="p-2">Chúng tôi đơn giản hướng đến việc trở thành thương hiệu của mọi nhà, mọi lúc, mọi nơi.
                                </p>
                            </div>
                            <div className="col-sm-3 p-3 bg-brand-03 text-black border" style={{ backgroundColor: "#FFFF00" }}>
                                <h3 className="p-2">Hướng đến sự vượt trội</h3>
                                <p className="p-2">"Vượt trội" không chỉ là một khái niệm lớn. Thay vào đó, giá trị này là cốt lõi trong mỗi
                                    con người của chúng tôi, trong mỗi công việc mà họ làm.</p>
                            </div>
                            <div className="col-sm-3 p-3 bg-brand-04 text-black border" style={{ backgroundColor: "#FFD700" }}>
                                <h3 className="p-2">Thể hiện đam mê</h3>
                                <p className="p-2">Chúng tôi sẵn lòng hỗ trợ vô điều kiện và linh động điều chỉnh tùy theo thử thách để tìm
                                    ra giải pháp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Introduce;