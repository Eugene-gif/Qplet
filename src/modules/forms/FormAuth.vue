<script setup>
import {useStore} from "@/store/store.js";
import {reactive, ref} from "vue";
import Button from "@/modules/UiKit/elements/Button.vue";

const store = useStore();

// Данные пользователя
const userData = reactive({
  email: '',
  password: '',
});
// Флаг загрузки
const loading = ref(false);

// Функция авторизации
function logIn() {
  loading.value = true;

  store.userLogin(userData.email, userData.password)
      .then((res) => {
        if (res.success) {
          // router.push || close dialog
        } else {
          // display error
        }
      }).finally(() => loading.value = false);
}
</script>

<template>
  <div class="wrapper-form auth">
    <div class="form">
      <div class="form__header">
        <h3 class="form__header-title">QPlet</h3>
        <button class="form__header-close" @click="$router.push('/')">
          Закрыть
        </button>
      </div>

      <div class="form__content">
        <div class="form__slogan">
          <h2 class="form__slogan-title">
            Войди на сайт, участвуй в жизни сообщества
          </h2>
          <p class="form__slogan-login">
            Нет аккаунта?
            <span @click="$router.push('/register')">Зарегистрируйся!</span>
          </p>
        </div>

        <div class="form__worksheet">
          <h3 class="form__worksheet-title">Войти с помощью логина и пароля</h3>
          <form>
            <label class="form__worksheet-label">
              <input
                class="form__worksheet-input"
                type="email"
                placeholder="Логин или эл. почта"
              />
            </label>
            <label class="form__worksheet-label --last">
              <input
                class="form__worksheet-input --inner-el"
                type="password"
                placeholder="Пароль"
              />
              <span @click="$router.push('/reset')">Забыли?</span>
            </label>
            <!-- <button class="form__worksheet-btn btn-color" type="button">
              Войти на сайт
            </button> -->
            <Button label="Войти на сайт"/>
          </form>
          <div class="form__social">
            <p class="form__social-text">Или войди используя соц. сети:</p>
            <div class="form__social-links">
              <a class="form__social-link">
                <img src="@/assets/img/icons/facebook.svg" alt="logo-facebook" />
              </a>
              <a class="form__social-link">
                <img src="@/assets/img/icons/instagram.svg" alt="logo-instagram" />
              </a>
              <a class="form__social-link">
                <img src="@/assets/img/icons/youtube.svg" alt="logo-youtube" />
              </a>
              <a class="form__social-link">
                <img src="@/assets/img/icons/tiktok.svg" alt="logo-tiktok" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .wrapper-form {
//   overflow: auto;
//   // max-width: 1920px;
//   position: fixed;
//   background-color: var(--bg-color);
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: 10;
//   // padding: 45px 200px 120px 200px;
//   background-color: var(--bg-color);
//   padding: 5vh 10vw;
// }
// .form {
//   max-width: 1920px;
//   margin: 0 auto;
//   &__header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 112px;
//     &-title {
//       font-weight: 700;
//       font-size: 27px;
//       line-height: 32px;
//       cursor: default;
//     }
//     &-close {
//       font-weight: 700;
//       line-height: 21px;
//       font-size: 18px;
//       color: inherit;
//       background-color: transparent;
//       color: #808080;
//       border: none;
//       cursor: pointer;
//       padding: 10px;
//       padding-right: 35px;
//       position: relative;
//       &::before,
//       &::after {
//         content: " ";
//         width: 25px;
//         height: 3px;
//         background-color: #808080;
//         position: absolute;
//         top: 45%;
//         right: 0;
//         border-radius: 8px;
//       }
//       &::before {
//         transform: rotate(45deg);
//       }
//       &::after {
//         transform: rotate(-45deg);
//       }
//     }
//   }

//   &__content {
//     display: flex;
//     gap: 222px;
//   }

//   &__slogan-title {
//     // @include title-large-text;
//     // font-weight: 700;
//     // font-size: 96px;
//     // line-height: 105px;
//     max-width: 790px;
//     width: 100%;
//     margin-bottom: 282px;
//   }

//   &__slogan-login {
//     font-weight: 500;
//     font-size: 22px;
//     line-height: 28px;
//     span {
//       font-weight: 700;
//       cursor: pointer;
//       text-decoration: underline;
//       &:hover {
//         text-decoration: none;
//       }
//     }
//   }

//   &__worksheet-title {
//     font-weight: 700;
//     font-size: 22px;
//     line-height: 27px;
//     margin-bottom: 40px;
//   }

//   &__worksheet {
//     form {
//       max-width: 507px;
//       width: 100%;
//       display: flex;
//       flex-direction: column;
//     }

//     &-label {
//       // display: flex;
//       position: relative;
//       margin-bottom: 30px;
//       &.--last {
//         margin-bottom: 50px;
//       }
//       span {
//         position: absolute;
//         top: 50%;
//         transform: translate(-100%, -45%);
//         cursor: pointer;
//         padding: 10px 0 10px 5px;
//       }
//     }

//     &-input {
//       padding: 25px 10px 25px 0;
//       &.--inner-el {
//         padding-right: 60px;
//       }
//       width: 100%;
//       border: none;
//       border-bottom: 1px solid #fff;
//       color: #fff;
//       font-weight: 500;
//       line-height: 21px;
//       font-size: 18px;
//       background-color: transparent;
//       position: relative;
//       &:placeholder-shown {
//         color: #808080;
//       }
//       &:focus {
//         outline: none;
//         border-bottom: 2px solid #fff;
//       }
//     }
//     &-btn {
//       padding: 15px 20px;
//       font-size: 22px;
//       font-weight: 700;
//       line-height: 27px;
//       color: #fff;
//       // background: linear;
//       border-radius: 22px;
//       border: none;
//       max-width: 330px;
//       height: 80px;
//       width: 100%;
//       background: linear-gradient(
//         84.57deg,
//         #ba24d7 -3.09%,
//         #5d2de6 28.41%,
//         #0030e8 59.91%,
//         #3a98ff 101.19%
//       );
//       cursor: pointer;
//       &:active {
//         box-shadow: inset 0 0 5px 0;
//       }
//     }
//   }
//   &__social {
//     margin-top: 120px;
//     &-text {
//       font-weight: 700;
//       font-size: 22px;
//       line-height: 26px;
//       margin-bottom: 32px;
//     }
//     &-links {
//       display: flex;
//       gap: 35px;
//     }
//     &-link {
//       width: 80px;
//       height: 80px;
//       border: 1px solid #fff;
//       border-radius: 22px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       cursor: pointer;
//       &:active {
//         box-shadow: inset 0 0 5px 0;
//       }
//     }
//   }
// }
</style>