const username ="Risty"
const password ="12345678"

function auth() {
    let userinput = document.getElementById('username').value
    let passwordinput =document.getElementById('password').value

    if(userinput == username && passwordinput == password){
        alert(" Login Berhasil")
        form.submit()
    } else {
        alert("Login Gagal! ")
    
    }

}