import swal from "sweetalert";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import SetCookie from "../hooks/SetCookie";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const onSuccess = async(result)=>{
    let usr = {};
    usr.email = result.user.email;
    usr.token = result.user.accessToken;
    if(!result.user.emailVerified){
        swal("Login Failed", "Invalid Credentials", "error");
    }
    SetCookie("usrin", JSON.stringify(usr));
    swal("Success", "Login Successful", "success");
    localStorage.setItem("user", "groot");
    window.location.href="/admin/contacts";
}

const onError=(error)=>{
    console.log(error)
    swal("Login Failed", "Invalid Credentials", "error");
}

export const SignInWithEmail = (user)=>{
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        onSuccess(userCredential);
    })
    .catch((error) => {
        onError(error);
    });
}