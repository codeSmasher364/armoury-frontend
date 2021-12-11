import { useParams } from "react-router-dom";
import "../components/Directors/Directors.css"
import Container from '@mui/material/Container';
import CardImg from "../Assets/cardimg.jpg"

function Details() {
    let { details } = useParams();
    console.log(details)

    return (
        <>
            <div className="details_container">
                <div className="content_div">
                    <h4 className="content_heading">WILLIAM WILLAMSON</h4>
                    <p className="content_text">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content or a typeface without relying on meaningful content.
                    </p>
                </div>
                <div className="card_div">
                    <div className="card_box">
                        <img src={CardImg} className="card_box_img" alt="logo" />
                        <div className="card_text_div">
                            <h6 className="card_heading">UNICEF</h6>
                            <p className="card_text_p">I am sister</p>
                        </div>
                   </div>
                    <div className="card_box">
                        <img src={CardImg} className="card_box_img" alt="logo" />
                        <div className="card_text_div">
                            <h6 className="card_heading">UNICEF</h6>
                            <p className="card_text_p">I am sister</p>
                        </div>
                   </div>
                    <div className="card_box">
                        <img src={CardImg} className="card_box_img" alt="logo" />
                        <div className="card_text_div">
                            <h6 className="card_heading">UNICEF</h6>
                            <p className="card_text_p">I am sister</p>
                        </div>
                   </div>
                    <div className="card_box">
                        <img src={CardImg} className="card_box_img" alt="logo" />
                        <div className="card_text_div">
                            <h6 className="card_heading">UNICEF</h6>
                            <p className="card_text_p">I am sister</p>
                        </div>
                   </div>
                    <div className="card_box">
                        <img src={CardImg} className="card_box_img" alt="logo" />
                        <div className="card_text_div">
                            <h6 className="card_heading">UNICEF</h6>
                            <p className="card_text_p">I am sister</p>
                        </div>
                   </div>
                    <div className="card_box">
                        <img src={CardImg} className="card_box_img" alt="logo" />
                        <div className="card_text_div">
                            <h6 className="card_heading">UNICEF</h6>
                            <p className="card_text_p">I am sister</p>
                        </div>
                   </div>
                    <div className="card_box">
                        <img src={CardImg} className="card_box_img" alt="logo" />
                        <div className="card_text_div">
                            <h6 className="card_heading">UNICEF</h6>
                            <p className="card_text_p">I am sister</p>
                        </div>
                   </div>
                    <div className="card_box">
                        <img src={CardImg} className="card_box_img" alt="logo" />
                        <div className="card_text_div">
                            <h6 className="card_heading">UNICEF</h6>
                            <p className="card_text_p">I am sister</p>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Details
