import Color from "color";
import dayjs from "dayjs";
export function changeColor(newThemeColor: string) {
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty(`--el-color-primary`, newThemeColor);
  rootStyle.setProperty(`--el-color-primary-dark-2`, newThemeColor);

  for (let i = 1; i < 10; i++) {
    rootStyle.setProperty(`--el-color-primary-light-${i}`, `${Color(newThemeColor).alpha(1 - i * 0.1)}`);
  }
}

export function getFieldData(obj: Record<string, field>) {
  return Object.fromEntries(
    Object.keys(obj).map(key => {
      return [key, obj[key as keyof field].value];
    })
  );
}

export const custom_formatDate = (date: string, formatStr?: string) => {
  if (formatStr) {
    return dayjs(date).format(formatStr);
  } else {
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
  }
};
