function submitPost() {
  // 제목과 내용 가져오기
  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;

  // 제목과 내용이 비어있지 않으면 게시글 추가
  if (title && content) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    const postTitle = document.createElement("h3");
    postTitle.textContent = title;
    postContainer.appendChild(postTitle);

    const postContent = document.createElement("p");
    postContent.textContent = content;
    postContainer.appendChild(postContent);

    // 게시글 목록에 추가
    document.getElementById("postsList").appendChild(postContainer);

    // 폼 비우기
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
  } else {
    alert("제목과 내용을 모두 입력하세요.");
  }
}
