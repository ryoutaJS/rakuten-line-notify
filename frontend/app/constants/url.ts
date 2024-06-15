const env = process.env.NEXT_PUBLIC_ENV;

/**
 * apiを呼び出すURLのオブジェクト
 * @description ローカル環境と本番環境のapiのURLを環境変数によって切り替える
 */
export const ApiUrl = {
  BASE_API_URL:
    env !== "local"
      ? process.env.NEXT_PUBLIC_BASE_API_URL
      : "http://localhost:3000",
};