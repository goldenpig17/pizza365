import { Component } from "react";

class Form extends Component {
    render() {
        return (
            <>
                <div id="contact" className="row">
                    {/* Title Form Contact Us */}
                    <div className="col-sm-12 text-center p-4 mt-4">
                        <h2><b className="p-2 border-bottom">Thông tin đơn hàng</b></h2>
                    </div>

                    { /* Content Form Contact Us*/}
                    <div className="col-sm-12 p-2 jumbotron">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Họ và tên</label>
                                    <input type="text" className="form-control" id="input-name" placeholder="Họ và tên" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" id="input-email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label>Điện thoại</label>
                                    <input type="text" className="form-control" id="input-phone" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <input type="text" className="form-control" id="input-address" placeholder="Địa chỉ" />
                                </div>
                                <div className="form-group">
                                    <label>Lời nhắn</label>
                                    <input type="text" className="form-control" id="input-message" placeholder="Lời nhắn" />
                                </div>
                                <div className="form-group">
                                    <label>Mã giảm giá (Voucher ID)</label>
                                    <input type="text" className="form-control" id="input-voucher" placeholder="Mã Voucher" />
                                </div>
                                <button type="button" className="btn-green" > Kiểm tra đơn </button>

                            </div>
                        </div>
                    </div>
                    {/*vùng hiển thị thông tin đơn hàng(order)*/}
                    <div id="div-container-order" className="container bg-info p-2 jumbotron" style={{ display: "none" }}>
                        <div id="div-order-infor" className="text-white p-3">thông tin đơn hàng vào đây</div>
                        <div className="p-2">
                            <button type="button" className="btn-yellow"> Gửi đơn </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Form;