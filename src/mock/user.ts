import Mock from 'mockjs';

const getUserInfo = (config: {}) => {
    console.log(config);
    return Mock.mock({ name: "@cname" })
}

const updateUserInfo = (config: any) => {
    console.log(config);
    return Mock.mock({ name: "@cname", id: config.id })
}

export { getUserInfo, updateUserInfo }