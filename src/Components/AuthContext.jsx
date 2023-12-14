import { createContext, useState } from "react";

export const AppContext = createContext();

const AuthContext = ({ children }) => {



    const [phone, setPhone] = useState("")
    const [user1, setUser1] = useState(null)
    const [checkOtp, setCheckOtp] = useState(null)
    const [showMedia, setShowMedia] = useState(false)
    const [isSticky, setSticky] = useState(false);
    const [verifyOtp, setVerifyOtp] = useState(['', '', '', '', '', '']);
    const [storeOtp, setStoreOtp] = useState("")
    const [hideNav, setHideNav] = useState(false)
    const [checkSignupLogin, setCheckSignupLogin] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [logOut, setLogOut] = useState(1)
    const [user, setUser] = useState({
        fullName: "",
        mobileNo: phone,
        email: "",
        password: "",
        confirm_password: "",
        accepted: false,
    })
    const [allUserDetails, setAllUserDetails] = useState([])
    const [successLoginCode, setSuccessLoginCode] = useState(null)
    const [loginUser, setLoginUser] = useState({
        mobileNo: "",
        password: ""
    })
    // console.log(allUserDetails)

    return (
        <AppContext.Provider value={{
            storeOtp, setStoreOtp, phone, setPhone, user1, setUser1, checkOtp, setCheckOtp, showMedia, setShowMedia, verifyOtp, setVerifyOtp,
            isSticky, setSticky, hideNav, setHideNav, checkSignupLogin, setCheckSignupLogin, showSuccessModal, setShowSuccessModal, logOut, setLogOut
            , user, setUser, allUserDetails, setAllUserDetails, successLoginCode, setSuccessLoginCode, loginUser, setLoginUser
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AuthContext