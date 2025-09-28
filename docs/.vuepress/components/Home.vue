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
        src="https://private-user-images.githubusercontent.com/40623433/494836435-3dfe69bf-a412-4be7-96a5-f9d3651354a6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTkwNTAxMDEsIm5iZiI6MTc1OTA0OTgwMSwicGF0aCI6Ii80MDYyMzQzMy80OTQ4MzY0MzUtM2RmZTY5YmYtYTQxMi00YmU3LTk2YTUtZjlkMzY1MTM1NGE2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTI4VDA4NTY0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTczMWU1NTdiNTJiMDQyNjk2N2EwNGFlNmU3NWQ5NzA4ZjIzYzRjYWMxYmY3ZGZkNmI1ZGZhZmRhOWFjYzFmZWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UOaclWrwnej4Ub1QHwDgtWN1ZFQKaq9CElhFPm16elk"
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
