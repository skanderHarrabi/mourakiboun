import React, {useState} from "react";
import "./news-lettre-block.scss";
import {Input, Alert, Radio} from "antd";
import BlueFacebookBig from "../svg/BlueFacebookBig";
import BlueYoutubeBig from "../svg/BlueYoutubeBig";
import axiosInstance from "../../config/axios-instance";
const { Search } = Input;
const NewsLettreBlock = () => {
    const [alert, setAlert] = useState(false);
    const [alertErr, setAlertErr] = useState(false);
    const handleEnter = value => {
        const data = {
          email : value
        };
        let url ="newsletter";
        axiosInstance({
            method: "post",
            url: url,
            data: data
        }).then(res =>{
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 5000);
        }).catch(err =>{
            setAlertErr(true);
            setTimeout(() => {
                setAlertErr(false);
            }, 5000);
        });
      console.log(value);
    };
    const handlClose = () => {
        setAlert(false);
    };
    const handlCloseErr= () => {
        setAlertErr(false);
    };

  return (
    <div className={"news-lettre-block"}>
      <div className="content-block-full-with">
        <div className="content-container">
          <div className="newslettre-flex">
            <div className="left">
              <h1 className={"blue-txt"}>
                {" "}
                INSCRIVEZ-VOUS À NOTRE NEWSLETTER !
              </h1>
              <p className={"blue-txt"}>
                Inscrivez-vous gratuitement à la Newsletter pour bénéficier des
                nouveautés.
              </p>
                <h2 className={"h2-small"}>Vous êtes:</h2>

                <div className="radio-group">
                    <Radio.Group>
                    <Radio value={"Média"}>Média</Radio>
                    <Radio value={"ong"}>ONG</Radio>
                    <Radio value={"Citoyen"}>Citoyen</Radio>
                    <Radio value={"Politique"}>Politique</Radio>
                    </Radio.Group>
                </div>
              <div className="input-container">
                <Search
                  placeholder="Votre adresse e-mail"
                  enterButton="S’inscrire"
                  onSearch={handleEnter}
                  size="large"
                  onChange={value => console.log(value)}
                />
                  {alert === true? <Alert
                      message="Je vous remercie!"
                      description="Vous êtes maintenant inscrit à notre newsletter où vous pourrez recevoir des nouvelles ."
                      closable
                      style={{marginTop : '20px'}}
                      type="success"
                      onClose={handlClose}
                      showIcon
                  />:''
                  }
                  {alertErr === true? <Alert
                      message="Desolé!"
                      description="vous êtes déjà inscrit ."
                      closable
                      style={{marginTop : '20px'}}
                      type="error"
                      onClose={handlCloseErr}
                      showIcon
                  />:''
                  }
              </div>
            </div>
            <div className="right">
              <h1 className={"blue-txt"}>
                {" "}
                Suivez-nous sur les réseaux sociaux
              </h1>
                <div className="socials">
                    <a target={"_blank"} href="https://www.facebook.com/Mourakiboun/"><BlueFacebookBig/></a>
                    <a target={"_blank"} href="https://www.youtube.com/user/Mourakiboun"><BlueYoutubeBig/></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLettreBlock;
