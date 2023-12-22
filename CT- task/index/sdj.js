// function opensidebar(){

//     const sidebar = document.querySelector('.sidebar-wrapper')
//     console.log(sidebar)
//     if(sidebar.classList.contains("show")){
//       sidebar.style.transform = "translate(-102%)"
//       sidebar.classList.remove("show")
//     } else {
//       sidebar.style.transform = "translate(0)"
//       sidebar.classList.add("show")
//     }

document.querySelector(".threeDots").addEventListener('click', () => {
            
    const sidebar = document.querySelector('.sidebar-wrapper')
    console.log(sidebar)
    if(sidebar.classList.contains("show")){
      sidebar.style.transform = "translate(-102%)"
      sidebar.classList.remove("show")
    } else {
      sidebar.style.transform = "translate(0)"
      sidebar.classList.add("show")
    }
})