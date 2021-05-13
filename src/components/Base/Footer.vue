<template>
  <div class="footer">
    <div class="logo">
      <img :src="require('@/assets/img/dobro_logo.svg')" alt="" />
    </div>
    <div class="text">
      <div class="text_2">
        <span>Это футер</span>
      </div>
    </div>

    <div class="social">
      <a
        href="https://github.com/AndreyKudinov63"
        target="_blank"
        rel="noopener noreferrer"
        class="github"
      >
        <div class="img">
          <img :src="require('@/assets/img/GitHub-Mark-64px.png')" alt="" />
        </div>
      </a>

      <a
        href="https://twitter.com/andrey__kudinov"
        target="_blank"
        rel="noopener noreferrer"
        class="twitter"
      >
        <div class="img">
          <img :src="require('@/assets/img/twitter.svg')" alt="" />
        </div>
      </a>
      <a
        href="https://gitlab.com/andreykudinov"
        target="_blank"
        rel="noopener noreferrer"
        class="gitlab"
      >
        <div class="img">
          <img :src="require('@/assets/img/gitlab.svg')" alt="" />
        </div>
      </a>
      <a
        href="https://instagram.com/andrey__kudinov"
        target="_blank"
        rel="noopener noreferrer"
        class="instagram"
      >
        <div class="img">
          <img :src="require('@/assets/img/instagram.png')" alt="" />
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  /* background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
     rgb(122, 0, 209) 0%,
    rgba(76, 0, 130) 100%
  );
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%); */
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  box-shadow: inset 0 0 10px #000000;
}
.text {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  line-height: 18px;
}
.img {
  width: 30px;
  height: 30px;
  margin-left: 5px;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.text_1 {
  margin-bottom: 5px;
}
.text_2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  color: #0a467e;
}
.social {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  position: absolute;
  right: 20px;
  row-gap: 8px;
  column-gap: 3px;
}
@media (max-width: 768px) {
  .social {
    right: 50%;
    bottom: 5px;
    transform: translateX(50%);
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
    padding: 0 5px;
  }
  .githab {
    order: 1;
  }
  .gitlab {
    order: 2;
  }
  .twitter {
    order: 3;
    grid-column: -2/-3;
  }
  .instagram {
    order: 4;
    grid-column: -1/-2;
  }
}
.social .img {
  width: 20px;
  height: 20px;
  transition: 0.3s ease;
}
.social .img:hover {
  transform: scale(1.2);
}
.logo {
  position: absolute;
  bottom: 15px;
  height: 70px;
  width: 100%;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  margin-bottom: -5px;
}
</style>
