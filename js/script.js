// 로그인 버튼 클릭 시 동작
document.getElementById("loginBtn").addEventListener("click", function () {
  const username = document.getElementById("loginUsername").value;
  const profilePic = document.getElementById("loginProfilePic").files[0];

  // 사용자 이름과 프로필 사진이 모두 입력되었는지 확인
  if (username && profilePic) {
    // FileReader를 사용하여 이미지 파일을 URL로 변환
    const reader = new FileReader();
    reader.onload = function (e) {
      // 프로필을 저장
      localStorage.setItem("username", username);
      localStorage.setItem("profilePic", e.target.result);

      // 로그인 폼 숨기기, 게시판 화면 표시
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("board").style.display = "block";

      // 로그인된 프로필 정보 표시
      const userProfile = document.createElement("div");
      userProfile.innerHTML = `<img src="${e.target.result}" alt="Profile" /> <span>${username}</span>`;
      document
        .querySelector(".board")
        .insertBefore(userProfile, document.querySelector(".form"));
    };
    reader.readAsDataURL(profilePic); // 이미지 파일을 URL로 변환
  } else {
    alert("사용자 이름과 프로필 사진을 모두 입력하세요!");
  }
});

// 게시글 작성 버튼 클릭 시 동작
document.getElementById("submitBtn").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const file = document.getElementById("file").files[0];

  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");

  // 제목, 내용, 파일이 모두 입력되었는지 확인
  if (title && content && username && profilePic) {
    const postList = document.getElementById("postList");
    const li = document.createElement("li");

    // 프로필 이미지
    const img = document.createElement("img");
    img.src = profilePic;

    // 게시글 제목
    const postTitle = document.createElement("h3");
    postTitle.textContent = title;

    // 게시글 내용
    const postContent = document.createElement("p");
    postContent.textContent = content;

    // 사용자 이름
    const postUsername = document.createElement("div");
    postUsername.classList.add("username");
    postUsername.textContent = username;

    // 게시글 내용 추가
    li.appendChild(img);
    li.appendChild(postTitle);
    li.appendChild(postContent);
    li.appendChild(postUsername);

    // 파일 첨부 (있다면)
    if (file) {
      const fileLink = document.createElement("a");
      fileLink.href = URL.createObjectURL(file);
      fileLink.textContent = "첨부파일 보기";
      fileLink.target = "_blank";
      li.appendChild(fileLink);
    }

    postList.appendChild(li);

    // 입력 필드 초기화
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("file").value = "";
  } else {
    alert("제목, 내용, 사용자 이름, 프로필 사진을 모두 작성해주세요!");
  }
});
