import Mock from 'mockjs';

const getUserInfo = (config: {}) => {
    console.log(config);
    return Mock.mock({
        // 邮箱：
        "email": "@email",
        "brithday":'@date("yyyy-MM-dd")',
        // 颜色
        "color": "@color",
        // name
        "name": "@name",
        "cname": "@cname",
        "img": "@image('100*100','@color')",
        "remark": "@cparagraph(1,1,3)",
        //中国大区
        "cregion": "@region",
        // 省
        "cprovince": "@province",
        //市
        "ccity": "@city",
        //县
        "country": "@county",
        //省市县
        "countrysx": "@county(true)",
        //邮政编码
        "code": "@zip",
        "id":"@id"
    })
}

const updateUserInfo = (config: any) => {
    console.log(config);
    return Mock.mock({ name: "@cname", id: config.id })
}

export { getUserInfo, updateUserInfo }