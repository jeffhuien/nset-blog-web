import router from "@/router";

const routerViews = import.meta.glob("/src/views/**/*.vue", {
  eager: true,
  import: "default",
});

const generatorRouter = (views: any) => {
  const routes: any = [];
  for (const key in views) {
    let namePath = key.split("/views")[1];
    let path = namePath.replace(".vue", "").replace("index", "");
    let name = path
      .replace(/^\/|\/$/g, "")
      .replace(/\//g, ".")
      .replace("index", "");
    console.log(views[key]);

    const route = {
      path,
      name,
      component: views[key],
    };
    routes.push(route);
  }
  return routes;
};

export const setupAutoRouter = () => {
  let t = generatorRouter(routerViews);
  const autoRouters = [];
  for (let index = 0; index < t.length; index++) {
    const element = t[index];
    router.addRoute("home", element);
    autoRouters.push(element);
  }
  return autoRouters;
};
