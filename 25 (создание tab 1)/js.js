let tab = document.querySelectorAll('.tab')
tab.forEach(elem =>{
    elem.addEventListener('click' , function(){
        let tabId = this.id.replace('tab', 'content')
        showTab(tabId)
        console.log(tabId)
    })
})
function showTab(tabId){ 
    let content = document.querySelectorAll('.content')
    console.log(content)
    content.forEach(elem =>{
        elem.style.display = 'none'
    })
    const selectTab = document.getElementById(tabId)
    console.log(selectTab)
    selectTab.style.display='block'
    
}