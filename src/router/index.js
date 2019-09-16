import Login from "../views/login/Login";
import LoginByTel from "../views/login/LoginByTel";
import CheckNum from "../views/login/CheckNum";
import Password from "../views/login/Password";
import SongSheet from "../views/discover/songSheet/SongSheet";
import Home from "../views/Home";

export default [
    {
        path:"/loginByTel",
        title:"手机号登陆",
        component:LoginByTel
    },
    {
        path:"/login",
        title:"登陆",
        component:Login
    },
    {
        path:"/checkNum",
        title:"验证码",
        component:CheckNum
    },
    {
        path:"/password",
        title:"登陆",
        component:Password
    },
    {
        path:"/songSheet",
        title:"歌单",
        component:SongSheet
    }
    ,
    {
        path:"/",
        title:"主页",
        component:Home
    }
]
