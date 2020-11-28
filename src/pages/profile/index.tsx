import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../../stores/user/actionCreators";
import { withRouter } from "react-router-dom";

const Profile = (props: any) => {
    const { userInfo = {}, LoginByUserDispatch } = props;
    const getUser = () => {
        LoginByUserDispatch("hello", "world")
    }
    return (
        <div>
            {userInfo.cname}
            <button onClick={getUser}>Login</button>
        </div>
    );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state: any) => ({
    userInfo: state.getIn(["user", "userInfo"])
});

// 映射dispatch到props上
const mapDispatchToProps = (dispatch: any) => {
    return {
        LoginByUserDispatch(userName: string, password: string) {
            dispatch(actionCreators.loginByUserName(userName, password));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(withRouter(Profile)));
