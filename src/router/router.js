import {
  createWebHistory,
  createRouter,
  createMemoryHistory,
} from "vue-router";

const baseUrl = import.meta.env.BASE_URL;
const history = import.meta.env.SSR
  ? createMemoryHistory(baseUrl)
  : createWebHistory(baseUrl);

// Основной макет страницы
const BaseLayout = () => import("../layouts/BaseLayout.vue");
// Дочерние роуты основного макета
const HomePage = () => import("../modules/HomePage.vue");
// Страница не найденного роута
const NotFound = () => import("../modules/NotFound.vue");
// Форма Регистрации
const FormRegister = () => import("../modules/forms/FormRegister.vue");
// Форма Авторизации
const FormAuth = () => import("../modules/forms/FormAuth.vue");
//Ui-Kit
const UiKit = () => import("../modules/UiKit/UiKit.vue");


const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "base",
      redirect: "/home",
      component: BaseLayout,
      children: [
        {
          path: "home",
          name: "home",
          component: HomePage,
        },
        {
          path: "explore",
          name: "explore",
          component: BaseLayout,
        },
        {
          path: "/uikit",
          name: "UiKit",
          component: UiKit,
        },
      ],
    },
    {
      path: "/auth",
      name: "FormAuth",
      component: FormAuth,
    },
    {
      path: "/register",
      name: "FormRegister",
      component: FormRegister,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
