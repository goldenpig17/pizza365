import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-light p-3">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            <h4 className="m-2">Footer</h4>
                            <a className="btn bg-main-brand text-black m-3"><i className="fa fa-arrow-up mr-2"></i>To the top</a>
                            <div className="m-2">
                                <i className="fa fa-facebook-official text-main"></i>
                                <i className="fa fa-instagram text-main"></i>
                                <i className="fa fa-snapchat text-main"></i>
                                <i className="fa fa-pinterest-p text-main "></i>
                                <i className="fa fa-twitter text-main"></i>
                                <i className="fa fa-linkedin text-main"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;