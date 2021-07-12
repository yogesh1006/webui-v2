function toastToggle(id) {
    var bodyToast=document.getElementById(id);
    if(bodyToast.style.display === 'none') {
        bodyToast.style.display = 'block';
    }else {
        bodyToast.style.display = 'none';

    }
 
}


function toggle(id) {
    const sidebar = document.getElementById(id);
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    }
    else {
        sidebar.style.display = 'none';
    }
}
function showSourceCode(id) {
    const imagetoShow = document.getElementById(id);
    if (imagetoShow.style.display === 'none') {
        imagetoShow.style.display = 'block';
    }
    else {
        imagetoShow.style.display = 'none';
    }
}