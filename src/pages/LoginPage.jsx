import { useState } from "react";
import { Button, Form, Input } from "antd";
import { signIn } from "../api/sign-process";
import { useUserContext } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../api/axios";

const LoginPage = () => {
  const { user, setUser } = useUserContext();
  const [receivedData, setReceivedData] = useState();
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  const login = async () => {
    console.log("Email", user.email);
    console.log("Password", user.password);
    const token = btoa(`${user.email}:${user.password}`);
    const data = await signIn(token);

    if (data.status == 200) {
      setUser({ ...user, token: token });
      setAuth(token);
      navigate("/");
    }

    setReceivedData(data);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button onClick={goToRegister} size="small" type="plain" ghost="true">
            Click to sign up
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={login} htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>

      {receivedData?.status == 401 ? <p>Unable to login</p> : null}
    </div>
  );
};

export default LoginPage;
