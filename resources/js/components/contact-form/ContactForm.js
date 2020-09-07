import React, {useState} from 'react';
import "./contact-form.scss";
import {Alert, Form, Input} from 'antd';
import axiosInstance from "../../config/axios-instance";
const { TextArea } = Input;
const ContactFormWrapped = (props) => {
    const [alert, setAlert] = useState(false);
    const { getFieldDecorator } = props.form;
    const handleSubmit = (event,values) => {
        event.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                    let url ="contact";
                    axiosInstance({
                        method: "post",
                        url: url,
                        data: data
                    }).then(res =>{
                        setAlert(true);
                        setTimeout(() => {
                            setAlert(false);
                        }, 5000);
                    });
            }else {
                console.log(err);
            }
        });
    };

    const handlClose = () => {
        setAlert(false);
    };


    return (
        <div className={"contact-form"}>
            <h1 className={"blue-txt"}>Avez vous des question
                ou une suggestion ?</h1>
                <Form onSubmit={handleSubmit} className="login-form">
                    <div className="form-items">
                        <div className="left">
                            <Form.Item>
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: 'Tapez votre nom svp!' }],
                                })(
                                    <Input
                                        placeholder="Nom et prénom"

                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true,type:"email", message: 'Tapez votre email svp!' }],
                                })(
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('phone', {
                                    rules: [{ required: true, message: 'Tapez votre numéro de téléphone svp!' }],
                                })(
                                    <Input
                                        type="number"
                                        placeholder="Numéro Tel"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="right">
                            <Form.Item>
                                {getFieldDecorator('message', {
                                    rules: [{ required: true, message: 'Message' }],
                                })(
                                    <TextArea placeholder={"Message"} rows={6} />,
                                )}

                            </Form.Item>
                        </div>
                    </div>
                    {alert === true? <Alert
                        message="Merci de nous contacter."
                        description="Vous êtes très important pour nous, toutes les informations reçues resteront toujours confidentielles. Nous vous contacterons dès que nous examinerons votre message."
                        closable
                        style={{marginTop : '20px',marginBottom : '20px'}}
                        type="success"
                        onClose={handlClose}
                        showIcon
                    />:''
                    }
                <Form.Item>
                    <button className="btn-link-filled" type="submit">Envoyer</button>
                </Form.Item>
                </Form>
        </div>
    );
};
const ContactForm = Form.create({ name: 'contact_form' })(ContactFormWrapped);
export default ContactForm;
