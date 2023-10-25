import { Component } from "react";
import Introduce from "./Introduce/Introduce";
import Type from "./Type/Type";
import Size from "./Size/Size";
import Drink from "./Drink/Drink";
import Form from "./Form/Form";


class Content extends Component {
    render() {
        return (
            <>
                <div className="container" style={{ padding: "70px 0px 50px 0px" }}>
                    <div className="row">
                        <div className="col-sm-12">
                            <Introduce/>
                            <Size/>
                            <Type/>
                            <Drink/>
                            <Form/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Content;