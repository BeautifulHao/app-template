import Mock from 'mockjs';
import { getUserInfo,updateUserInfo } from './user'

Mock.mock(/\/api\/login/, "post", getUserInfo)
Mock.mock(/\/api\/updateUserInfo/, "post", updateUserInfo)

export default Mock;