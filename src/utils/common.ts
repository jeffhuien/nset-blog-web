import Color from "color";
export function changeColor(newThemeColor: string) {
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty(`--el-color-primary`, newThemeColor);
  rootStyle.setProperty(`--el-color-primary-dark-2`, newThemeColor);

  for (let i = 1; i < 10; i++) {
    rootStyle.setProperty(`--el-color-primary-light-${i}`, `${Color(newThemeColor).alpha(1 - i * 0.1)}`);
  }
}
