import { Layout, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const { Header, Content } = Layout;

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header with Menu */}
      <Header
        style={{ background: "#001529", display: "flex", alignItems: "center" }}
      >
        <div style={{ color: "white", fontSize: "18px", marginRight: "20px" }}>
          Events
        </div>
        <Menu
          theme="dark"
          style={{ minWidth: "1000px" }}
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item
            onClick={() => navigate("/")}
            key="/"
            icon={<HomeOutlined />}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="/events"
            onClick={() => navigate("/events")}
            icon={<UnorderedListOutlined />}
          >
            Events
          </Menu.Item>
          <Menu.Item
            key="/login"
            onClick={() => navigate("/login")}
            icon={<UserOutlined />}
          >
            Login
          </Menu.Item>
          <Menu.Item
            key="/register"
            onClick={() => navigate("/register")}
            icon={<UserAddOutlined />}
          >
            Register
          </Menu.Item>
        </Menu>
      </Header>

      {/* Content Area */}
      <Content style={{ margin: "16px" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
