import MyPageSit from "./sit";
import MyPageProd from "./prod";

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev';

const MyPage = isDev ? MyPageSit : MyPageProd;

export default MyPage;