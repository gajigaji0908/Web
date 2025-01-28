const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  // 경로를 정확히 맞춰서 설정
  res.sendFile(path.join(__dirname, "public/index.html"));
  console.log("GET 요청 처리 완료");
});

app.listen(port, () => {
  console.log(`서버가 실행 중입니다: http://localhost:${port}`);
});
