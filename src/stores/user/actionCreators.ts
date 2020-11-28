import { login } from "../../api/user";

import {
    CHANGE_USER_INFO,
    CHANGE_LOGIN_STATUS
} from "./constants";

export const saveUserInfo = (data: any) => ({
    type: CHANGE_USER_INFO,
    data
});

export const saveLoginStatus = (data: any) => ({
    type: CHANGE_LOGIN_STATUS,
    data
});

export const loginByUserName = (userName:string, password:string) => {
    return (dispatch: (arg0: { type: string; data: any; }) => void) => {
        login(userName, password)
            .then(res => {
                dispatch(saveUserInfo(res));
            })
            .catch(() => {
                console.log("登录失败！");
            });
    };
};
