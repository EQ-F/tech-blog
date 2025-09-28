<template>
  <div>
    <div>
      <h1>EQ플 <br />기술 블로그</h1>
    </div>
    <h2>Introduction</h2>
    <div class="info">
      "EQ플을 개발하며 쌓은 경험과 배움을 기록하는 기술 블로그"
    </div>
    <div class="img-container">
      <img
        width="400px"
        alt=" EQ플은 리그오브레전드 플레이 영상을 기반으로, 유저 간의 플레이 논쟁을
      커뮤니티 투표로 판결하는 웹 서비스입니다."
        src="https://private-user-images.githubusercontent.com/40623433/494842306-97929ee2-cf7b-4689-a46f-808bdbe6f25c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTkwNTM5NzMsIm5iZiI6MTc1OTA1MzY3MywicGF0aCI6Ii80MDYyMzQzMy80OTQ4NDIzMDYtOTc5MjllZTItY2Y3Yi00Njg5LWE0NmYtODA4YmRiZTZmMjVjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTI4VDEwMDExM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc5OGI2OTJiYTQzNWRhZTcyZjkxODhjMTQzNmEzNjNjYWVhZmQ4YjYxMGU3MDg3YzlhNzk1N2QyYjdhODk3NmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.CPrgDP33ISBaX4aBRBgV9MKhVsaFlwABrGs2LzDHly4"
      />
      <span class="caption">
        EQ플은 리그오브레전드 플레이 영상을 기반으로, 유저 간의 플레이 논쟁을
        커뮤니티 투표로 판결하는 웹 서비스입니다.</span
      >
    </div>

    <div>
      <a href="#" class="tag">#EQF</a>
      <a href="#" class="tag">#LOL</a>
    </div>
  </div>
</template>

<script></script>

<style>
@import "https://fonts.googleapis.com/css?family=Gugi";

h1 {
  font-family: "Gugi", cursive;
  font-weight: 500;
  border-bottom: 17px solid var(--vp-c-accent-hover);
  word-break: keep-all;
  font-size: 5rem;
}

.tag {
  margin-right: 0.3rem;
}

.info {
  font-weight: 400;
  font-style: oblique;
  /* text-decoration: underline; */
  text-decoration-color: var(--vp-c-text);
  margin: 2rem 0;
}

@media (max-width: 419px) {
  [vp-content] h1 {
    font-size: 3.4rem;
  }
}
</style>
