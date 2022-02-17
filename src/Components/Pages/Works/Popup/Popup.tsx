import React from "react";
import "./Popup.scss";
import CloseIcon from '@mui/icons-material/Close';

interface popup {
    contentPopup: any,
    isOpen: boolean,
    handleClose: any;
}

const Popup: React.FC<popup> = ({ contentPopup, isOpen, handleClose }) => {
    return <div className="popup" style={{
        visibility: isOpen ? "visible" : "hidden",
        opacity: isOpen ? 1 : 0,
    }}>
        <div className="popup-wrapper">
            <div className="popup-header">
                <div className="x-btn">
                    <CloseIcon onClick={handleClose} className="icon-close" />
                </div>
            </div>

            <div className="popup-content">
                <div className="scroll-inner">
                    {contentPopup?.video ? <div className="main-video">
                        <iframe
                            id="iMovie"
                            title="mainVideo"
                            name="movieFrame"
                            width={"100%"}
                            height={"100%"}
                            src={contentPopup?.video}
                            frameBorder="0"
                        />
                    </div> : <></>}
                    {contentPopup?.imgShow ? <div className="main-design">
                        <img src={contentPopup?.imgShow} alt="" />
                    </div> : <></>}


                    <div className="over-view">
                        <div className="type">{contentPopup?.desc}</div>
                        <div className="company">{contentPopup?.partners}</div>
                    </div>
                    <div className="contact-works">
                        <a href="mailto:loocreative@playlooc.com" >Contact us</a>
                    </div>
                </div>

            </div>
        </div>
    </div>;
};

export default Popup;;