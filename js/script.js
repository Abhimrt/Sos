//  =======================navbar========================== //
let nav =document.getElementById("navbar");
let  opennav=document.getElementById("openNav");
let  closenav=document.getElementById("closeNav");
function openNav(){
    nav.style.right="0"; 
}
function closeNav(){
    nav.style.right="-50vw"; 
}








const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener(
        'click', () => {
            panels.forEach(panel => {
                panel.classList.remove('active');
            })
            panel.classList.add('active')
        }
    )
})