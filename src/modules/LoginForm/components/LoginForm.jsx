import {Checkbox, Form, Input} from "antd";
import {maxWidth} from "react-styleguidist/lib/client/styles/theme";
import {Button, ShadowBox} from "../../../components";
import {Link, Outlet} from "react-router-dom";
import {Component} from "react";

class LoginForm extends Component{

    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div>
                        <div className='reg__top'>
                            <h2>Log in to your account</h2>
                            <p>Please, enter in to your account</p>
                        </div>
                <ShadowBox>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 20,
                            }}
                        >
                            <Checkbox >Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: maxWidth,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                <Link to='/home'> Log in</Link>
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            Or <Link className='reg__registration' to='/registration'>  Register</Link>
                        </Form.Item>

                    </Form>

                </ShadowBox>
                <Outlet/>
            </div>
        );
    }

}

export default LoginForm;