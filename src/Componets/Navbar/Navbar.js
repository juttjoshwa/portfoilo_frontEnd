import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { DarkchangeMode, lightchangeMode } from '../../actions'
import DarkmodeImage from "../../asset/dark.png";
import LightmodeImage from "../../asset/Light.png"
import brand from "../../asset/baran.png";
import HomeImg from "../../asset/Home_new.png"
import { Link } from "react-router-dom"
import Contact from "../../asset/contract.png"
import About from "../../asset/about.png"
import "./Nav.css"

const Navbar = () => {

    const handleClickchangedarkmodelightmode = () => {
        if (Change === "light") {
            Change = dispatch(DarkchangeMode())
        }
        else {
            Change = dispatch(lightchangeMode())
        }
    }

    let Change = useSelector(state => state.DarkMode)
    const dispatch = useDispatch()

    const Imagehandlelightmodedarkmode = () => {
        if (Change === "dark") {
            return <img alt='light' style={{
                height: "22px",
                width: "auto"
            }} src={LightmodeImage} />
        }
        else {
            return <img alt='dark' style={{
                height: "22px",
                width: "auto"
            }} src={DarkmodeImage} />
        }

    }

    let Checked

    if (Change === "dark") {
        Checked = "checked";
    }
    else {
        Checked = ""
    }

    const AvatarIcon = {
        filter: " invert(100%) brightness(150%) contrast(150%)"
    }
    let AvatarStyle;
    if (Change === "dark") {
        AvatarStyle = AvatarIcon;
    }

    const darkNavbar = {
        background: "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
    }
    let darkcolor;
    if (Change === "dark") {
        darkcolor = darkNavbar;
    }

    return (
        <div><nav style={darkcolor} className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/"><img alt='logo' style={{
                    height: "6ch",
                    borderRadius: "17px"
                }}
                    className="hoverEffect" src={brand} /></a>
                <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" > <img style={AvatarStyle} alt="home" className='logoimg1 hoverEffect' src={HomeImg} /></Link>
                            {/* <a className="nav-link active" aria-current="page" href="/home"><img style={AvatarStyle} alt="home" className='logoimg1' src={HomeImg} /></a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#email"><img className='logoimg1 hoverEffect' style={AvatarStyle} alt='contact' src={Contact} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about"><img className='logoimg1 hoverEffect' style={AvatarStyle} alt='about' src={About} /></a>
                        </li>
                    </ul>
                    <div style={{ marginLeft: "3px", }} className="form-check form-switch">
                        <input className="form-check-input mt-3" style={{ height: "2px" }} onClick={handleClickchangedarkmodelightmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label style={{
                            marginLeft: "3px",
                            // marginTop : "13px",
                        }} className="form-check-label" htmlFor="flexSwitchCheckDefault">{Imagehandlelightmodedarkmode()}</label>
                    </div>
                </div>
            </div>
        </nav>

        </div>
    )
}

export default Navbar