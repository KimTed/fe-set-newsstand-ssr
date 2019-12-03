import ListNews from "./pages/NewsSection/MyPressList/index.js";
import Hello from "./pages/Hello.js";

const routes = [
    {
      path: "/",
      component:ListNews,
      exact:true,
      initData : true,
    },
    {
      path: "/list",
      component:ListNews,
      exact:false,
      initData: true,
    },
    {
      path: "/hello",
      component: Hello,
      exact:false,
      initData: false,
    },
];

export default routes;