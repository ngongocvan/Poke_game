import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button } from "antd";

const styUl = {
  padding: 0,
};

const buttonDes = {
  fontWeight: "bold",
};
const defaultColor = "rgb(30, 41, 59)";
const hoverColor = "rgb(14,165,233)";
export default function Page4() {
  const [hovered, setHovered] = useState(new Array(3).fill(false));
  const [status, setStatus] = useState(new Array(3).fill("new")); // Lưu trạng thái của mỗi li

  // Hàm xử lý khi người dùng bấm nút
  const handleClick = (index) => {
    // Không thực hiện hành động nếu ô đã hoàn thành
    if (status[index] === "complete") return;

    // Chỉ chạy quá trình checking cho li đang được bấm vào
    setStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = "checking";
      return newStatus;
    });

    // Giả lập thời gian chờ 5 giây trước khi chuyển sang trạng thái "complete"
    setTimeout(() => {
      setStatus((prevStatus) => {
        const newStatus = [...prevStatus];
        newStatus[index] = "complete";
        return newStatus;
      });
    }, 1500);
  };

  const handleMouseEnter = (index) => {
    const newHovered = [...hovered];
    newHovered[index] = true;
    setHovered(newHovered);
  };

  const handleMouseLeave = (index) => {
    const newHovered = [...hovered];
    newHovered[index] = false;
    setHovered(newHovered);
  };

  return (
    <div className="container">
      <img src="./img2.png" alt="" />
      <div className="list">
        <ul style={styUl}>
          {[1, 2, 3].map((item, index) => (
            <li
              key={index}
              className="choosen"
              style={{
                backgroundColor: hovered[index] ? hoverColor : defaultColor,
                display: "flex",
                width: "97%",
                height: 60,
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                marginTop: 20,
                cursor: status[index] === "complete" ? "not-allowed" : "pointer",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index)}
            >
              <span style={{ marginLeft: 10 }}>
                {/* Kiểm tra trạng thái của ô */}
                {status[index] === "checking" ? (
                  "Checking..."
                ) : status[index] === "complete" ? (
                  <CheckOutlined style={{ color: "green" }} />
                ) : (
                  item
                )}
              </span>

              <span>Join FUKDUK Channel on Telegram</span>
              <span>
                <ArrowRightOutlined style={{ marginRight: 10 }} />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Button type="primary" style={buttonDes}>
        Start Now
      </Button>
    </div>
  );
}