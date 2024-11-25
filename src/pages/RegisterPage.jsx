import { useState } from "react";
import { Button, Form, Input, DatePicker } from "antd";
import { useUserContext } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/sign-process";
import { setAuth } from "../api/axios";

const RegisterPage = () => {
  const { user, setUser } = useUserContext();
  const [receivedData, setReceivedData] = useState();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const setBornDate = (dateString) => {
    setUser({ ...user, bornDate: dateString });
  };

  const register = async () => {
    const data = await signUp(user);
    if (data.status == 200) {
      const token = btoa(`${user.email}:${user.password}`);

      setUser({ ...user, id: data.data.id });
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
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your First Name!",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Born date"
          name="bornDate"
          rules={[
            {
              required: true,
              message: "Please input your Born Date!",
            },
          ]}
        >
          <DatePicker onChange={setBornDate} />
        </Form.Item>

        <Form.Item
          label="Interests"
          name="interests"
          rules={[
            {
              required: true,
              message: "Please input your Interests!",
            },
          ]}
        >
          <Input.TextArea
            onChange={(e) => setUser({ ...user, interests: e.target.value })}
          />
        </Form.Item>

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
          <Button onClick={goToLogin} size="small" type="plain" ghost="true">
            Click to sign in
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={register} htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>

      {receivedData?.status == 401 ? <p>Unable to register</p> : null}
    </div>
  );
};

export default RegisterPage;
