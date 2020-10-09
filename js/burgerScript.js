let hide = true;

function showMenu()
{
    const first = document.getElementById("nav1");
    const second = document.getElementById("nav2");
    if(hide)
    {
        first.style.display = "block";
        second.style.display = "block";
        hide = false;
    }
    else
    {
        first.style.display = "none";
        second.style.display = "none";
        hide = true;
    }
}