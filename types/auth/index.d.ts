interface loginOP {
  name: string;
  password: string;
  captcha: string;
  captchaId: string;
}

interface LoginRES {
  token: string;
  user: any;
}
