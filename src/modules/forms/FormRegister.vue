<script setup>
import { useStore } from "../../store/store.js";
import { reactive, ref } from "vue";
import { getData, METHODS } from "../../utils/http.js";
import Button from "@/modules/UiKit/elements/Button.vue";

const store = useStore();

// Данные пользователя
const userData = reactive({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
// Флаг загрузки
const loading = ref(false);

// Функция авторизации
function register() {
  loading.value = true;

  getData("/admin/auth/register", METHODS.POST, {
    fullName: userData.fullName,
    email: userData.email,
    password: userData.password,
    confirm_password: userData.confirmPassword,
  }).then((response) => {
    if (response.success) {
      // router.push
    } else {
      // display error
    }
  });
}
</script>

<template>
  <div class="wrapper-form">
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
            Стань частью музыкального сообщества
          </h2>
          <p class="form__slogan-login">
            Уже есть аккаунт?
            <span @click="$router.push('/auth')">Войти на сайт</span>
          </p>
        </div>

        <div class="form__worksheet">
          <form>
            <div class="form__worksheet-choice">
              <input type="radio" id="mus" name="role" value="mus" />
              <label class="form__worksheet-choise-label" for="mus">
                Я музыкант
              </label>

              <label class="form__worksheet-choise-label" for="fan">
                <input type="radio" id="fan" name="role" value="fan" />
                Я поклонник
              </label>
            </div>

            <label class="form__worksheet-label">
              <input
                class="form__worksheet-input"
                type="text"
                placeholder="Имя и фамилия"
              />
            </label>

            <label class="form__worksheet-label">
              <input
                class="form__worksheet-input"
                type="email"
                placeholder="Электорнная почта"
              />
            </label>
            <label class="form__worksheet-label">
              <input
                class="form__worksheet-input"
                type="password"
                placeholder="Пароль"
              />
            </label>
            <label class="form__worksheet-label">
              <input
                class="form__worksheet-input"
                type="password"
                placeholder="Повторите пароль"
              />
            </label>
            <div class="form__worksheet-checkbox --last">
              <input type="checkbox" id="agree" />
              <label for="agree">Согласен с правилами и условиями</label>
            </div>
            <button class="form__worksheet-btn btn-color" type="button">
              Зарегистрируйтесь
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>