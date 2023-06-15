<template>
  <div class="body">
    <div class="content">
      <el-image class="img"
                :src="'https://file.aleliauk.top/404/Eliauk2023041022141122.png'"></el-image>
      <p class="text">抱歉！您需要的页面没有找到！</p>
      <button class="btn"
              @click="$router.push('/')">Go Home</button>
    </div>
    <div class="footer">
      <div class="icp">&copy; 2022 {{$store.state.webInfo.webName}}&nbsp;&nbsp;
        <a href="http://beian.miit.gov.cn/"
           target="_blank">{{$store.state.webInfo.icpNumber}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.img {
  width: 700px;
}

.text {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 50px;
}

.btn {
  width: 130px;
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
  color: var(--white);
  background-color: var(--btnColor);
  border: 0;
  cursor: pointer;
}

.icp,
.icp a {
  color: var(--maxGreyFont);
  font-size: 16px;
}

.icp {
  padding-top: 10px;
  padding-bottom: 10px;
}

.icp a {
  text-decoration: none;
  transition: all 0.3s;
}

.icp a:hover {
  color: var(--themeBackground);
}

@media screen and (max-width: 1000px) {
  .img {
    width: 400px;
  }

  .text {
    font-size: 22px;
  }

  .btn {
    width: 120px;
  }
}

@media screen and (max-width: 550px) {
  .img {
    width: 360px;
  }

  .text {
    font-size: 20px;
  }

  .icp,
  .icp a {
    color: var(--maxGreyFont);
    font-size: 14px;
  }
}
</style>