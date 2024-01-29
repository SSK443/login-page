loginpage=()=>{
  if(username.value==''||password.value==''){
    alert('please filling the fill')

  }
  else{
    user=username.value
    localStorage.setItem('user',user)
    window.location='dashboard.html'
    alert(' login successful')
  }
}