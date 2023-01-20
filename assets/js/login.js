/*if(window.location.pathname == '/'){
    console.log('route');
    $login = $('#login')
    console.log($login);
    $login.click(function(e){
        window.location.href = "http://localhost:3000/home"
         
    })


}*/
import { Jwt } from "jsonwebtoken"
const {sign} = Jwt

function pageRedirect(){
    window.location.href = "http://localhost:3000/home"
}
const btn = document.getElementById('login')
const form = document.getElementById('login-form')
const data = new FormData(form)
btn.addEventListener('click' , (e)=>{
    const email = document.getElementById('email').value
    const pwd = document.getElementById('pwd').value
    if(email === 'admin@gmail.com' && pwd === 'admin' ){
        const user = {
            email : email , 
            pwd : pwd
        }
        Jwt.sign({user} , 'secretkey' , (err , token)=>{
            // res.json({
            //     token 
            // })
            const Token = {token}
            localStorage.setItem('token' , JSON.stringify(Token))
        })
        e.preventDefault()
        pageRedirect()
    }else{
        e.preventDefault()
        console.log("pwd or email not valid");
    }
})