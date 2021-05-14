import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Gallery.css";
import CloseIcon from "@material-ui/icons/Close";


const Gallery = () => {

    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [openedImg, setOpenedImg] = useState("")
    const url = "https://flaks-image-api-hari.herokuapp.com/static/img/";

    const getImage = (imgSrc) => {
        setOpenedImg(imgSrc)
        setIsOpen(true)
    }

    useEffect(async () => {
        await axios.get("https://flaks-image-api-hari.herokuapp.com/get-images").then((result) => {
            console.log("result : ", result.data)
            setData(result.data)
        }).catch((err) => {
            console.log("error : ", err)
        });
    }, [])
    return (
        <>
            <div className={isOpen ? "model open" : "model"}>
                <img src={openedImg} alt="opened"/>
                <CloseIcon onClick={() => setIsOpen(false)} />
            </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImage(url+item)} >
                            <img src={url+item} style={{ width: "100%" }} alt="pic" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery;
