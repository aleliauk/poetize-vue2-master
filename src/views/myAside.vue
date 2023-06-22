<template>
  <div>
    <!-- 网站信息 -->
    <div class="card-content1 shadow-box background-opacity card_style" v-animate="'my-animation-zoomln'">
      <div class="hoverBG"></div>
      <div style="position: relative;">
        <el-avatar style="z-index: 11" class="user-avatar" :size="100" :src="webInfo.avatar"></el-avatar>
        <div class="author-status-box">
          <div class="author-status">
            <svg t="1687089422184" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="7186" width="23" height="23">
              <path
                d="M693.8 1014.1c16.5-7.5 23.8-27.1 16.3-43.6L589.3 705.3c-7.5-16.5-27.1-23.8-43.6-16.3s-23.8 27.1-16.3 43.6l120.8 265.2c7.6 16.5 27.1 23.8 43.6 16.3zM212.2 1014.1c-16.5-7.5-23.8-27.1-16.3-43.6l120.8-265.2c7.5-16.5 27.1-23.8 43.6-16.3s23.8 27.1 16.3 43.6L255.8 997.8c-7.5 16.5-27 23.8-43.6 16.3z"
                fill="#37474F" p-id="7187"></path>
              <path d="M453 492.4m-366.9 0a366.9 366.9 0 1 0 733.8 0 366.9 366.9 0 1 0-733.8 0Z" fill="#F44336"
                p-id="7188"></path>
              <path
                d="M453 224.5c-148 0-267.9 119.9-267.9 267.9s120 267.9 267.9 267.9c148 0 267.9-119.9 267.9-267.9S601 224.5 453 224.5z m0 420.1c-84 0-152.1-68.1-152.1-152.1S369 340.4 453 340.4s152.1 68.1 152.1 152.1c0.1 84-68 152.1-152.1 152.1z"
                fill="#FFFFFF" p-id="7189"></path>
              <path
                d="M599.4 716.8l59.4 79.5c10.6-7.2 20.7-14.8 30.4-23l-59.4-79.5c-9.6 8.3-19.7 16-30.4 23zM436 498.2l93.9 125.6c11-6.5 21.2-14.3 30.2-23.3l-97-129.7-27.1 27.4z"
                fill="#E53935" p-id="7190"></path>
              <path d="M560.1 600.5c-9 9-19.2 16.8-30.2 23.3l69.5 93c10.7-7 20.8-14.7 30.4-23.1l-69.7-93.2z"
                fill="#EF9A9A" p-id="7191"></path>
              <path
                d="M766.1 316.5l-102.5-18.1L837.1 125c2.1-2.1 5-3 7.8-2.5l85.6 15.1c7.1 1.3 9.8 10 4.7 15.1L773.9 314c-2 2.1-5 3-7.8 2.5zM813.5 99.9l-15.1-85.6c-1.3-7.1-10-9.8-15.1-4.7L621.9 170.9c-2.1 2.1-3 5-2.5 7.8l18.1 102.5L811 107.8c2-2.1 3-5 2.5-7.9z"
                fill="#37474F" p-id="7192"></path>
              <path
                d="M438.8 501.6c-7-7-7-18.2 0-25.2L858.2 57c7-7 18.2-7 25.2 0s7 18.2 0 25.2L464 501.6c-7 7-18.3 7-25.2 0z"
                fill="#455A64" p-id="7193"></path>
            </svg>
            <span>专注学习中</span>
          </div>
        </div>
      </div>
      <div class="web-name">{{ webInfo.webName }}</div>
      <div>HOLLE，欢迎光临 我的世界🚀</div>
      <div class="web-info">
        <div class="blog-info-box">
          <span>文章</span>
          <span class="blog-info-num">{{ $store.getters.articleTotal }}</span>
        </div>
        <div class="blog-info-box">
          <span>标签</span>
          <span class="blog-info-num">{{ $store.getters.tagsTotal }}</span>
        </div>
        <div class="blog-info-box">
          <span>分类</span>
          <span class="blog-info-num">{{ sortInfo.length }}</span>
        </div>
      </div>
      <a class="collection-btn" @click="showTip()">
        <i class="el-icon-star-off" style="margin-right: 2px;"></i>朋友圈
      </a>
      <div class="blog-info-icons">
        <span title="微信"  @click="toNav('https://file.aleliauk.top/files/Eliauk11678450838394146.jpg')">
          <svg t="1687029204939" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="7150" width="25" height="25">
            <path
              d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
              fill="#00C800" p-id="7151"></path>
            <path
              d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
              fill="#00C800" p-id="7152"></path>
          </svg>
        </span>
        <span title="QQ" @click="toNav('https://res.abeim.cn/api/qq/?qq=1906216170')">
          <svg t="1687029220753" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="7361" width="25" height="25">
            <path
              d="M266.4448 795.5456c-20.0704-36.608-40.0896-73.1648-60.416-110.2848-13.568 16.384-26.1632 33.536-40.8064 48.7424-20.0704 20.8384-33.0752 16.5376-41.1648-11.5712-14.1824-49.4592-3.072-95.8464 20.1728-139.1616 15.7696-29.3888 35.1744-57.1392 55.5008-83.6096 9.9328-12.9536 14.7968-24.3712 14.08-40.8064-1.3824-32.2048 0.2048-64.0512 27.0336-88.7296 5.2736-4.864 4.7104-16.9472 5.376-25.8048C251.904 269.0048 271.872 198.7584 329.9328 146.944c76.8512-68.5568 166.912-89.5488 266.3424-60.2624 97.024 28.5696 156.3648 94.1056 180.5312 191.8976 2.3552 9.6256 3.6352 19.5072 5.4272 29.2352 5.2736 29.0304 4.4032 57.9584 24.7808 85.0432 12.7488 16.9472 8.0896 46.6944 12.5952 70.4512 2.0992 11.0592 4.8128 23.6544 11.6224 31.9488 36.7616 44.8 69.12 92.3648 78.7456 150.3232 4.352 26.1632 1.0752 54.4256-3.328 80.9984-3.9424 23.9104-19.6608 27.2384-37.2224 9.216-15.2576-15.6672-28.3648-33.3824-42.5472-50.2784-20.2752 36.9664-40.3456 73.472-60.5696 110.336 12.2368 8.8064 26.112 16.9984 37.8368 27.5456 41.6256 37.5808 32.256 95.6416-20.8384 112.5376-86.1696 27.392-169.4208 22.2208-246.3232-32.6144-9.5232-6.8096-32.5632-5.632-42.8032 1.3824-79.9232 54.6304-165.2736 59.8528-252.9792 27.8016-44.3904-16.1792-50.8416-71.5776-15.9744-105.8816 11.8784-11.6736 26.6752-20.2752 41.216-31.0784z"
              fill="#2595E8" p-id="7362"></path>
            <path
              d="M831.2832 495.1552c-6.8096-8.2944-9.5232-20.8896-11.6224-31.9488-4.5056-23.7568 0.2048-53.4528-12.5952-70.4512-20.3776-27.0848-19.5072-56.0128-24.7808-84.992-1.792-9.7792-3.072-19.6608-5.4272-29.2352-24.1664-97.792-83.5072-163.2768-180.5312-191.8976-99.4304-29.2864-189.4912-8.2944-266.3424 60.2624C271.9232 198.7072 251.9552 268.9536 246.272 344.2688c-0.6656 8.8576-0.1024 20.9408-5.376 25.8048-26.8288 24.6784-28.416 56.5248-27.0336 88.7296 0.7168 16.4864-4.1472 27.8528-14.08 40.8064-20.3264 26.5216-39.7312 54.2208-55.5008 83.6096-23.2448 43.3152-34.3552 89.7024-20.1728 139.1616 8.0384 28.16 21.0944 32.4096 41.1648 11.5712 14.6432-15.2064 27.1872-32.3584 40.8064-48.7424 20.3264 37.12 40.3456 73.6768 60.416 110.2848-14.5408 10.8032-29.2864 19.4048-41.0624 30.976-17.6128 17.3056-24.6784 39.9872-21.6576 60.3136 26.2656 3.4816 52.992 5.2736 80.2304 5.2736 254.2592 0 472.0128-156.416 562.2784-378.2144-4.9152-6.2464-9.9328-12.4928-15.0016-18.688z"
              fill="#3A9CED" p-id="7363"></path>
            <path
              d="M717.9264 161.2288c-30.464-34.5088-70.8096-59.648-121.6-74.5984-99.4304-29.2864-189.4912-8.2944-266.3424 60.2624C271.9232 198.7072 251.9552 268.9536 246.272 344.2688c-0.6656 8.8576-0.1024 20.9408-5.376 25.8048-26.8288 24.6784-28.416 56.5248-27.0336 88.7296 0.7168 16.4864-4.1472 27.8528-14.08 40.8064-20.3264 26.5216-39.7312 54.2208-55.5008 83.6096-15.9232 29.696-26.112 60.8256-26.4704 93.3376h0.1024c304.0768 0.0512 555.8784-223.5904 600.0128-515.328z"
              fill="#59ADF8" p-id="7364"></path>
            <path
              d="M531.1488 74.5984c-73.8304-5.376-141.4656 19.0464-201.1136 72.2432C271.9232 198.7072 251.9552 268.9536 246.272 344.2688c-0.6656 8.8576-0.1024 20.9408-5.376 25.8048-11.9808 11.008-18.8928 23.4496-22.784 36.7104 142.7968-65.536 255.7952-184.9344 313.0368-332.1856z"
              fill="#6BC2FC" p-id="7365"></path>
          </svg>
        </span>
        <span title="QQ邮箱"  @click="toNav('mailto:1906216170@qq.com')">
          <svg t="1687029232039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="7574" width="25" height="25">
            <path
              d="M586.72 992h-71.04c-8.8 0-16-7.2-16-16V613.76c0-8.8 7.2-16 16-16h71.04c8.8 0 16 7.2 16 16V976c0 8.8-7.2 16-16 16z"
              fill="#629FF9" p-id="7575"></path>
            <path
              d="M284.96 152c-118.56 0-214.72 96-214.72 214.24v351.36h429.28V366.24c0.16-118.24-96-214.24-214.56-214.24z"
              fill="#2166CC" p-id="7576"></path>
            <path
              d="M520.32 632H204.16c-26.56 0-48-21.44-48-48V388.64c0-26.56 21.44-48 48-48h316.16c26.56 0 48 21.44 48 48V584c0 26.56-21.44 48-48 48z"
              fill="#D2E4FF" p-id="7577"></path>
            <path
              d="M568.32 392a51.36 51.36 0 0 0-51.52-51.36H207.68c-28.48 0-51.52 23.04-51.52 51.36v10.72l187.2 98.72c11.84 6.24 25.92 6.24 37.76 0l187.2-98.72v-10.72z"
              fill="#FFFFFF" p-id="7578"></path>
            <path
              d="M740 152h-446.4v0.48c114.56 4.48 206.08 98.4 206.08 213.92v351.36h429.28c28.48 0 51.52-23.04 51.52-51.36V392c0-132.48-107.68-240-240.48-240z"
              fill="#4E8DF6" p-id="7579"></path>
            <path
              d="M860.32 32H688.48c-9.44 0-17.12 7.68-17.12 17.12v351.36a25.744 25.744 0 1 0 51.52 0V117.76h137.44c9.44 0 17.12-7.68 17.12-17.12V49.12c0-9.44-7.68-17.12-17.12-17.12z"
              fill="#2166CC" p-id="7580"></path>
            <path
              d="M912.96 666.24h-36.64c-8.8 0-16-7.2-16-16v-36.64c0-8.8 7.2-16 16-16h36.64c8.8 0 16 7.2 16 16v36.64c0 8.96-7.2 16-16 16z"
              fill="#FFFFFF" p-id="7581"></path>
            <path
              d="M70.4 717.76l-25.28 137.12c-10.08 56.8 28 102.88 84.8 102.88h223.2c56.96 0 111.2-46.08 121.28-102.88l24.16-137.12H70.4z"
              fill="#2974CE" p-id="7582"></path>
          </svg>
        </span>
        <span title="Github"  @click="toNav('https://github.com/aleliauk')">
          <svg t="1687028911142" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="6849" width="25" height="25">
            <path
              d="M512 0C229.283787 0 0.142041 234.942803 0.142041 524.867683c0 231.829001 146.647305 428.553077 350.068189 497.952484 25.592898 4.819996 34.976961-11.38884 34.976961-25.294314 0-12.45521-0.469203-45.470049-0.725133-89.276559-142.381822 31.735193-172.453477-70.380469-172.453477-70.380469-23.246882-60.569859-56.816233-76.693384-56.816234-76.693385-46.493765-32.58829 3.540351-31.948468 3.540351-31.948467 51.356415 3.71097 78.356923 54.086324 78.356923 54.086324 45.683323 80.19108 119.817417 57.072162 148.993321 43.593236 4.649376-33.91059 17.915029-57.029508 32.50298-70.167195-113.675122-13.222997-233.151301-58.223843-233.1513-259.341366 0-57.285437 19.919806-104.163095 52.678715-140.846248-5.246544-13.265652-22.820334-66.626844 4.990615-138.884127 0 0 42.996069-14.076094 140.760939 53.787741 40.863327-11.644769 84.627183-17.445825 128.177764-17.6591 43.465272 0.213274 87.271782 6.014331 128.135109 17.6591 97.679561-67.906489 140.59032-53.787741 140.59032-53.787741 27.938914 72.257282 10.407779 125.618474 5.118579 138.884127 32.844219 36.683154 52.593405 83.560812 52.593405 140.846248 0 201.586726-119.646798 245.990404-233.663158 258.957473 18.341577 16.208835 34.721032 48.199958 34.721032 97.210357 0 70.167195-0.639822 126.7275-0.639823 143.960051 0 14.033439 9.213443 30.370239 35.190235 25.209005 203.250265-69.527373 349.769606-266.123484 349.769605-497.867175C1023.857959 234.942803 794.673558 0 512 0"
              fill="#13227a" p-id="6850"></path>
          </svg>
        </span>
      </div>

    </div>

    <!-- 公告栏 -->
    <div class="shadow-box background-opacity card_style" v-animate="'my-animation-zoomln'">
      <div class="card-content2-title">
        <i class="el-icon-folder-opened card-content2-icon"></i>
        <span>公告栏</span>
      </div>
      <div style="line-height: 40px;" v-for="(notice, index) in $store.state.webInfo.notices" :key="index">
        {{ notice }}
      </div>
    </div>

    <!-- 赞赏 -->
    <!-- <div class="shadow-box-mini background-opacity wow admire-box"
         v-if="!$common.isEmpty(admires)">
      <div style="font-weight: bold;margin-bottom: 20px">🧨赞赏名单</div>
      <div>
        <vue-seamless-scroll :data="admires" style="height: 200px;overflow: hidden">
          <div v-for="(item, i) in admires"
               style="display: flex;justify-content: space-between"
               :key="i">
            <div style="display: flex">
              <el-avatar style="margin-bottom: 10px" :size="36" :src="item.avatar"></el-avatar>
              <div style="margin-left: 10px;height: 36px;line-height: 36px;overflow: hidden;max-width: 80px">
                {{ item.username }}
              </div>
            </div>
            <div style="height: 36px;line-height: 36px">
              {{ item.admire }}元
            </div>
          </div>
        </vue-seamless-scroll>
      </div>
      <div class="admire-btn" @click="showAdmire()">
        赞赏
      </div>
    </div> -->

    <!-- 速览 -->
    <!-- <div v-for="(sort, index) in sortInfo" @click="selectSort(sort)" :key="index"
      :style="{ background: $constant.sortColor[index % $constant.sortColor.length] }"
      class="shadow-box-mini background-opacity wow"
      style="position: relative;cursor: pointer;color: var(--white)">
      <div>速览</div>
      <div class="sort-name">
        {{ sort.sortName }}
      </div>
      <div style="font-weight: bold;margin-top: 15px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden">
        {{ sort.sortDescription }}
      </div>
    </div> -->

    <!-- 分类 -->
    <div class="shadow-box background-opacity wow card_style" v-animate="'my-animation-zoomln'">
      <div class="card-content2-title">
        <svg t="1687089923156" class="icon card-content2-icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="7604" width="25" height="25">
          <path
            d="M847.872 376.4224c-44.9536 0-81.5616-36.5568-81.5616-81.5616s36.5568-81.5616 81.5616-81.5616 81.5616 36.5568 81.5616 81.5616-36.608 81.5616-81.5616 81.5616z m0-122.1632c-22.3744 0-40.6016 18.2272-40.6016 40.6016s18.2272 40.6016 40.6016 40.6016 40.6016-18.2272 40.6016-40.6016-18.2272-40.6016-40.6016-40.6016z"
            fill="#ED98AB" p-id="7605"></path>
          <path
            d="M447.232 340.992l-8.5504-20.4288a60.78464 60.78464 0 0 0-56.064-37.3248H219.648c-52.5312 0-95.1296 42.5984-95.1296 95.1296v423.9872c0 52.5312 42.5984 95.1296 95.1296 95.1296h592.64c52.5312 0 95.1296-42.5984 95.1296-95.1296V473.4464c0-52.5312-42.5984-95.1296-95.1296-95.1296H503.296c-24.5248 0-46.6432-14.6944-56.064-37.3248z"
            fill="#FAC573" p-id="7606"></path>
          <path
            d="M782.5408 381.952s60.1088 32.5632 60.1088 102.0416v318.3616c0 19.0976-13.3632 35.9936-32.1024 39.7312-3.9424 0.768-8.2944 1.2288-13.0048 1.2288H213.504c-34.5088 0-59.9552 5.632-79.7184-29.3888 1.1264 33.9456 11.8784 81.408 125.5424 81.408h574.464l4.096-4.096c37.0176-5.5808 74.3424-26.368 74.3424-103.3216V471.3472c0-49.1008-48.0256-100.9664-129.6896-89.3952z"
            fill="#EF981A" p-id="7607"></path>
          <path
            d="M402.2784 268.2368c12.5952 0 23.9104 7.5776 28.7744 19.1488l23.7568 56.7808a31.14496 31.14496 0 0 0 28.7744 19.1488h328.704c0.8192 0 1.6384 0.1024 2.4576 0.1024V229.9904c0-32.512-26.368-58.88-58.88-58.88h-469.504c-32.512 0-58.88 26.368-58.88 58.88v38.2464h174.7968z"
            fill="#C5DAFF" p-id="7608"></path>
          <path
            d="M704.512 175.1552s44.8512 10.2912 44.8512 60.3136v125.3888h62.9248V268.544c0-57.3952 3.328-102.1952-107.776-93.3888z"
            fill="#9AC0EF" p-id="7609"></path>
          <path
            d="M835.2256 360.1408V229.9904c0-43.7248-35.584-79.36-79.36-79.36h-469.504c-43.7248 0-79.36 35.584-79.36 79.36v33.4336c-57.8048 6.3488-102.912 55.4496-102.912 114.8928v423.9872c0 63.744 51.8656 115.6096 115.6096 115.6096h592.64c63.744 0 115.6096-51.8656 115.6096-115.6096V473.4464c-0.0512-55.9104-39.936-102.656-92.7232-113.3056zM247.9616 229.9904c0-21.1456 17.2032-38.4 38.4-38.4h469.5552c21.1456 0 38.4 17.2032 38.4 38.4v127.8464h-294.912c-13.9264 0-26.4192-8.2944-31.7952-21.1456l-11.52-27.5968c0-0.0512-0.0512-0.0512-0.0512-0.1024l-6.0416-14.4896c-8.0384-19.3024-26.7776-31.744-47.6672-31.744H247.9616v-32.768z m638.976 572.3648c0 41.1648-33.4848 74.6496-74.6496 74.6496H219.648c-41.1648 0-74.6496-33.4848-74.6496-74.6496V378.3168c0-41.1648 33.4848-74.6496 74.6496-74.6496h166.8096c13.9264 0 26.368 8.2944 31.7952 21.1456l17.664 42.24c8.0384 19.3024 26.7776 31.744 47.6672 31.744h328.6528c0.6656 0.0512 1.3312 0.1024 1.9968 0.1024h0.4608c40.0384 1.28 72.2432 34.1504 72.2432 74.496v328.96z"
            fill="#211D38" p-id="7610"></path>
          <path
            d="M771.84 740.864h-214.6304c-11.3152 0-20.48 9.1648-20.48 20.48s9.1648 20.48 20.48 20.48h214.6304c11.3152 0 20.48-9.1648 20.48-20.48s-9.216-20.48-20.48-20.48z"
            fill="#211D38" p-id="7611"></path>
          <path
            d="M157.5936 656.9472a12.8 12.8 0 0 1-12.8-12.8V577.536a12.8 12.8 0 0 1 25.6 0v66.6112c0 7.0656-5.6832 12.8-12.8 12.8zM157.5936 522.5472a12.8 12.8 0 0 1-12.8-12.8V376.9856c0-40.2944 32.768-73.0624 73.0624-73.0624H294.4a12.8 12.8 0 0 1 0 25.6H217.9072c-26.1632 0-47.4624 21.2992-47.4624 47.4624v132.7616a12.8512 12.8512 0 0 1-12.8512 12.8zM405.9136 219.9552H276.4288a12.8 12.8 0 0 1 0-25.6h129.4336a12.8 12.8 0 0 1 0.0512 25.6z"
            fill="#FFFFFF" p-id="7612"></path>
          <path d="M494.8992 219.9552h-32.7168a12.8 12.8 0 0 1 0-25.6h32.7168a12.8 12.8 0 0 1 0 25.6z" fill="#FFFFFF"
            p-id="7613"></path>
          <path
            d="M161.3824 176.2304c-2.2016-4.9152-7.936-7.0656-12.8512-4.9152l-12.3392 5.5296-5.5296-12.3392c-2.2016-4.9152-7.936-7.0656-12.8512-4.9152-4.9152 2.2016-7.0656 7.936-4.9152 12.8l5.5296 12.3392-12.3392 5.5296c-4.9152 2.2016-7.0656 7.936-4.9152 12.8 1.6384 3.584 5.1712 5.7344 8.8576 5.7344 1.3312 0 2.6624-0.256 3.9424-0.8704l12.3392-5.5296 5.5296 12.3392c1.6384 3.584 5.1712 5.7344 8.8576 5.7344 1.3312 0 2.6624-0.256 3.9424-0.8704 4.9152-2.2016 7.0656-7.936 4.9152-12.8L144.1792 194.56l12.3392-5.5296c4.864-2.1504 7.0656-7.8848 4.864-12.8z"
            fill="#E2E5F1" p-id="7614"></path>
          <path
            d="M841.3696 97.8432c-2.2016-4.9152-7.936-7.0656-12.8512-4.9152l-12.3392 5.5296-5.5296-12.3392c-2.2016-4.9152-7.936-7.0656-12.8512-4.9152-4.9152 2.2016-7.0656 7.936-4.9152 12.8l5.5296 12.3392-12.3392 5.5296c-4.9152 2.2016-7.0656 7.936-4.9152 12.8 1.6384 3.584 5.1712 5.7344 8.8576 5.7344 1.3312 0 2.6624-0.256 3.9424-0.8704l12.3392-5.5296 5.5296 12.3392c1.6384 3.584 5.1712 5.7344 8.8576 5.7344 1.3312 0 2.6624-0.256 3.9424-0.8704 4.9152-2.2016 7.0656-7.936 4.9152-12.8l-5.5296-12.3392 12.3392-5.5296c5.0176-2.0992 7.2192-7.8336 5.0176-12.6976z"
            fill="#E2E5F1" p-id="7615"></path>
          <path
            d="M465.2032 668.5184c-2.2016-4.9152-7.936-7.0656-12.8512-4.9152l-12.3392 5.5296-5.5296-12.3392c-2.2016-4.9152-7.936-7.0656-12.8512-4.9152-4.9152 2.2016-7.0656 7.936-4.9152 12.8l5.5296 12.3392-12.3392 5.5296c-4.9152 2.2016-7.0656 7.936-4.9152 12.8 1.6384 3.584 5.1712 5.7344 8.8576 5.7344 1.3312 0 2.6624-0.256 3.9424-0.8704l12.3392-5.5296 5.5296 12.3392c1.6384 3.584 5.1712 5.7344 8.8576 5.7344 1.3312 0 2.6624-0.256 3.9424-0.8704 4.9152-2.2016 7.0656-7.936 4.9152-12.8l-5.5296-12.3392 12.3392-5.5296c5.0176-2.0992 7.2192-7.8336 5.0176-12.6976z"
            fill="#E2E5F1" p-id="7616"></path>
        </svg>
        <span style="vertical-align: middle;">分类</span>
      </div>
      <div v-for="(sort, index) in sortInfo" :key="index" class="post-sort"
        @click="$router.push({ path: '/sort', query: { sortId: sort.id } })">
        <div class="myBetween">
          <span>{{ sort.sortName }}</span>
          <span>{{ sort.countOfSort }}</span>
        </div>
      </div>
    </div>

    <!-- 推荐文章 -->
    <div v-if="!$common.isEmpty(recommendArticles)" class="shadow-box background-opacity wow card_style"
      v-animate="'my-animation-zoomln'">
      <div class="card-content2-title">
        <svg t="1687089676862" class="icon card-content2-icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="7376" width="25" height="25">
          <path
            d="M768.7168 900.8128H265.1136c-73.2672 0-132.6592-59.392-132.6592-132.6592V264.5504c0-73.2672 59.392-132.6592 132.6592-132.6592h503.6032c73.2672 0 132.6592 59.392 132.6592 132.6592v503.6032c0 73.2672-59.392 132.6592-132.6592 132.6592z"
            fill="#FF9797" p-id="7377"></path>
          <path
            d="M628.4288 128.8704s165.632 21.8624 165.632 141.7216v501.2992c0 30.1568-2.6624 107.8272-132.1472 119.8592 91.9552 0 247.04-2.2528 247.04-123.648V297.6768c0-73.1136 14.592-170.2912-280.5248-168.8064z"
            fill="#FC6565" p-id="7378"></path>
          <path
            d="M404.6848 128.8704s-165.632 21.8624-165.632 141.7216v501.2992c0 30.1568 2.6624 107.8272 132.1472 119.8592-91.9552 0-247.04-2.2528-247.04-123.648V297.6768c0-73.1136-14.6432-170.2912 280.5248-168.8064z"
            fill="#FFB8B8" p-id="7379"></path>
          <path
            d="M542.6688 314.4704l46.08 93.3376c4.1984 8.448 12.2368 14.336 21.6064 15.7184l103.0144 14.9504c23.552 3.4304 32.9216 32.3584 15.9232 48.9472l-74.5472 72.6528a28.7232 28.7232 0 0 0-8.2432 25.3952l17.6128 102.5536c4.0448 23.4496-20.5824 41.3184-41.6256 30.2592l-92.1088-48.4352a28.68736 28.68736 0 0 0-26.7264 0l-92.1088 48.4352c-21.0432 11.0592-45.6704-6.8096-41.6256-30.2592l17.6128-102.5536a28.7232 28.7232 0 0 0-8.2432-25.3952L304.64 487.3728c-17.0496-16.5888-7.6288-45.5168 15.9232-48.9472l103.0144-14.9504c9.3696-1.3824 17.408-7.2192 21.6064-15.7184l46.08-93.3376c10.4448-21.2992 40.8576-21.2992 51.4048 0.0512z"
            fill="#FFD16C" p-id="7380"></path>
          <path
            d="M592.0256 412.8768c-1.28-1.5872-2.4064-3.2768-3.2768-5.12l-46.08-93.3376c-10.5472-21.3504-40.9088-21.3504-51.456 0l-46.08 93.3376a28.82048 28.82048 0 0 1-21.6064 15.7184L320.512 438.4256c-23.552 3.4304-32.9216 32.3584-15.9232 48.9472l74.5472 72.6528a28.7232 28.7232 0 0 1 8.2432 25.3952l-17.6128 102.5536c-4.0448 23.4496 20.5824 41.3184 41.6256 30.2592l34.0992-17.92c15.2576-138.752 85.6064-231.6288 146.5344-287.4368z"
            fill="#FFE8C0" p-id="7381"></path>
          <path
            d="M768.7168 106.2912H265.1136c-87.296 0-158.2592 71.0144-158.2592 158.2592v503.6032c0 87.296 71.0144 158.2592 158.2592 158.2592h503.6032c87.296 0 158.2592-71.0144 158.2592-158.2592V264.5504c0-87.2448-71.0144-158.2592-158.2592-158.2592z m107.0592 661.8624c0 59.0336-48.0256 107.0592-107.0592 107.0592H265.1136c-59.0336 0-107.0592-48.0256-107.0592-107.0592V264.5504c0-59.0336 48.0256-107.0592 107.0592-107.0592h503.6032c59.0336 0 107.0592 48.0256 107.0592 107.0592v503.6032z"
            fill="#434A54" p-id="7382"></path>
          <path
            d="M717.0048 413.0816l-102.9632-14.9504a3.1232 3.1232 0 0 1-2.3552-1.6896l-46.08-93.3376c-9.216-18.688-27.8528-30.2592-48.6912-30.2592s-39.4752 11.5712-48.6912 30.2592l-46.08 93.3376a3.1232 3.1232 0 0 1-2.304 1.6896l-103.0144 14.9504c-20.5824 2.9696-37.376 17.152-43.8272 36.9664-6.4512 19.8144-1.1776 41.1136 13.7216 55.6544l74.5472 72.6528c0.7168 0.7168 1.0752 1.7408 0.8704 2.7648l-17.6128 102.5536c-3.5328 20.5312 4.7616 40.8576 21.6064 53.0944 16.8448 12.2368 38.7584 13.824 57.1904 4.1472l92.1088-48.4352c0.9216-0.4608 1.9968-0.4608 2.8672 0l92.1088 48.4352c8.0384 4.1984 16.6912 6.2976 25.2928 6.2976 11.2128 0 22.3232-3.5328 31.8464-10.4448 16.8448-12.2368 25.1392-32.5632 21.6064-53.0944l-17.6128-102.6048c-0.1536-1.024 0.1536-2.048 0.8704-2.7136l74.5472-72.6528c14.8992-14.5408 20.1728-35.84 13.7216-55.6544s-23.0912-33.9456-43.6736-36.9664z m-5.6832 55.9616l-74.5472 72.6528c-12.8 12.4928-18.6368 30.464-15.616 48.0768l17.6128 102.5536c0.1024 0.5632 0.3072 1.8944-1.2288 3.0208-1.536 1.1264-2.7648 0.512-3.2768 0.256l-92.1088-48.4352a54.3744 54.3744 0 0 0-25.2928-6.2464c-8.6528 0-17.3568 2.0992-25.2416 6.2464l-92.1088 48.4352c-0.512 0.256-1.6896 0.8704-3.2768-0.256s-1.3312-2.4576-1.2288-3.0208l17.6128-102.6048c3.0208-17.6128-2.816-35.584-15.616-48.0768L322.5088 469.0432c-0.4096-0.4096-1.3824-1.3312-0.768-3.1744 0.6144-1.8432 1.9456-1.9968 2.5088-2.0992l103.0144-14.9504c17.664-2.56 32.9728-13.6704 40.8576-29.696l46.08-93.3376c0.256-0.512 0.8704-1.7408 2.7648-1.7408s2.5088 1.2288 2.7648 1.7408l46.08 93.3376a54.2208 54.2208 0 0 0 40.8576 29.696l103.0144 14.9504c0.5632 0.1024 1.8944 0.256 2.5088 2.0992 0.512 1.8432-0.4608 2.7648-0.8704 3.1744z"
            fill="#434A54" p-id="7383"></path>
        </svg>
        <span style="vertical-align: middle;">推荐文章</span>
      </div>
      <div class="aside-post-main">
        <div class="aside-post-detail" v-for="(article, index) in recommendArticles" :key="index"
          @click="$router.push({ path: '/article', query: { id: article.id } })" :title="article.articleTitle">
          <div class="aside-post-image">
            <el-image class="my-el-image" :src="article.articleCover" fit="cover" v-animate="'my-animation-imgblur'">
              <div slot="error" class="image-slot">
                <div class="error-aside-image">
                  {{ article.username }}
                </div>
              </div>
            </el-image>
          </div>
          <div style="flex: 1;">
            <div class="aside-post-title">
              {{ article.articleTitle }}
            </div>
            <div class="aside-post-date">
              <i class="iconfont icon-rili"></i>
              {{ article.createTime.slice(0, 10) }}
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- 微信 -->
    <!-- <el-dialog title="赞赏"
               :visible.sync="showAdmireDialog"
               width="25%"
               :append-to-body="true"
               destroy-on-close
               center>
      <div>
        <div class="admire-image"></div>
        <div>
          <div class="admire-content">1、感谢老铁送来的666</div>
          <div class="admire-content">2、如果您有更好的建议和想法，欢迎与我联系！期待您的光临！</div>
        </div>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
// import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  // components: {
  //   vueSeamlessScroll
  // },
  data () {
    return {
      pagination: {
        current: 1,
        size: 5,
        recommendStatus: true
      },
      recommendArticles: [],
      admires: [],
      showAdmireDialog: false,
    }
  },
  computed: {
    webInfo () {
      return this.$store.state.webInfo;
    },
    sortInfo () {
      return this.$store.state.sortInfo;
    }
  },
  created () {
    this.getRecommendArticles();
    this.getAdmire();
  },
  methods: {
    toNav (url) {
      console.log(1111);
      window.open(url, "_blank")
    },
    selectSort (sort) {
      this.$emit("selectSort", sort);
    },
    showAdmire () {
      if (this.$common.isEmpty(this.$store.state.currentUser)) {
        this.$message({
          message: "请先登录！",
          type: "error"
        });
        return;
      }

      this.showAdmireDialog = true;
    },
    getAdmire () {
      this.$http.get(this.$constant.baseURL + "/webInfo/getAdmire")
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            this.admires = res.data;
          }
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: "error"
          });
        });
    },
    getRecommendArticles () {
      this.$http.post(this.$constant.baseURL + "/article/listArticle", this.pagination)
        .then((res) => {
          if (!this.$common.isEmpty(res.data)) {
            this.recommendArticles = res.data.records;
          }
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: "error"
          });
        });
    },
    showTip () {
      this.$router.push({ path: '/social/fcircle' });
    }
  }
}
</script>

<style scoped>
.card-content1 {
  position: relative;
  background: var(--webInfoBg) no-repeat;
  background-size: 100%;
  /* animation: gradientBG 10s ease infinite; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /*color: var(--white);*/
  overflow: hidden;
}

.card-content1 .hoverBG {
  position: absolute;
  top: 20px;
  width: 100%;
  height: 100%;
}

.card-content1:hover .hoverBG {
  background: url('https://file.aleliauk.top/files/snow.gif');
}


.card-content1 .user-avatar {
  animation: huxi_light 4s ease-in-out infinite;
  z-index: 10;
}

.author-status-box {
  position: absolute;
  bottom: 0;
  left: calc(100% - 28px);
  width: 28px;
  height: 28px;
  border: 1px solid #d0d7de;
  border-radius: 2em;
  background-color: #f8f8f8f8;
  transition: 0.4s;
  overflow: hidden;
}

.author-status-box:hover {
  width: 95px;
}

.author-status-box .author-status {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 5px;
}

.author-status-box .author-status span {
  width: 0;
  font-size: 12px;
  height: 100%;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: 0.4s;
}

.author-status-box:hover .author-status span {
  width: 95px;
  margin-left: 4px;
}

.web-name {
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
}

.web-info {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.blog-info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.blog-info-num {
  margin-top: 12px;
}

.collection-btn {
  position: relative;
  margin-top: 15px;
  background: var(--lightGreen);
  cursor: pointer;
  width: 65%;
  height: 35px;
  border-radius: 1rem;
  text-align: center;
  line-height: 35px;
  color: var(--white);
  overflow: hidden;
  z-index: 1;
  margin-bottom: 20px;
}

.collection-btn::before {
  background: var(--gradualRed);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  transform: scaleX(0);
  transform-origin: 0;
  transition: transform 0.5s ease-out;
  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  border-radius: 1rem;
  z-index: -1;
}

.collection-btn:hover::before {
  transform: scaleX(1);
}

.blog-info-icons {
  z-index: 1000;
}

.blog-info-icons span {
  margin: 0 10px;
}

.blog-info-icons span:hover svg {
  animation: joggle 2s linear infinite;
}

.card-content2-title {
  font-size: 18px;
  margin-bottom: 20px;
}

.card-content2-icon {
  color: var(--red);
  margin-right: 5px;
  animation: scale 1s ease-in-out infinite;
  vertical-align: middle;
}

.aside-post-main .aside-post-detail {
  padding: 6px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
}

.aside-post-main .aside-post-detail:nth-child(1) {
  padding-top: 0;
}

.aside-post-main .aside-post-detail:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.aside-post-detail {
  display: flex;
  cursor: pointer;
}

.aside-post-image {
  width: 65px;
  height: 65px;
  /* border-radius: 0.2rem; */
  margin-right: 10px;
  overflow: hidden;
}

::v-deep .my-el-image .el-image__inner {
  transition: all 1s;
}

::v-deep .my-el-image:hover .el-image__inner {
  transform: scale(1.2);
}

.error-aside-image {
  background: var(--themeBackground);
  color: var(--white);
  padding: 10px;
  text-align: center;
  width: 100%;
  height: 100%;
}

.aside-post-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: color .3s;
  /* white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; */
}

.aside-post-title:hover {
  color: var(--themeColor)
}

.aside-post-date {
  margin-top: 5px;
  /* margin-bottom: 20px; */
  color: var(--greyFont);
  font-size: 12px;
}

.post-sort {
  border-radius: 1rem;
  margin-bottom: 15px;
  line-height: 30px;
  transition: all 0.3s;
}

.post-sort:hover {
  background: var(--themeColor);
  padding: 0 15px;
  cursor: pointer;
  color: var(--white);
}

.sort-name {
  font-weight: bold;
  font-size: 25px;
  margin-top: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sort-name:after {
  top: 105px;
  width: 22px;
  left: 26px;
  height: 2px;
  background: var(--white);
  content: "";
  border-radius: 1px;
  position: absolute;
}

.admire-box {
  background: var(--springBg) center center / cover no-repeat;
  padding: 25px;
  animation: hideToShow 1s ease-in-out;
  margin-top: 40px;
}

.admire-btn {
  padding: 13px 15px;
  background: var(--maxLightRed);
  border-radius: 3rem;
  color: var(--white);
  width: 100px;
  user-select: none;
  cursor: pointer;
  text-align: center;
  margin: 20px auto 0;
  transition: all 1s;
}

.admire-btn:hover {
  transform: scale(1.2);
}

.admire-image {
  margin: 0 auto 10px;
  height: 150px;
  width: 150px;
  background: var(--admireImage) center center / cover no-repeat;
}

.admire-content {
  font-size: 12px;
  color: var(--maxGreyFont);
  line-height: 1.5;
  margin: 5px;
}
</style>
