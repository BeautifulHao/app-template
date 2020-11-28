import Mock from 'mockjs';
import { getUserInfo,updateUserInfo } from './user'

Mock.mock(/\/api\/getUserInfo/, "get", getUserInfo)
Mock.mock(/\/api\/updateUserInfo/, "post", updateUserInfo)

export default Mock;