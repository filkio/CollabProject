//функция для обработки формы регистрации
function valid(form)//функция получает форму
{
//в переменные получаем данные из объекта form
let name = form.Name.value;
let email = form.EMail.value;
let pass = form.pass.value;
let pass2 = form.pass2.value;
let sex = form.state.value;
//fail для ошибок
let fail = "";
//регулярное выражение для проверки, что строка - это почта
let regular = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
//булева константа с функцией, для проверки на пробелы
const CheckSpaces = (str) => str.trim() == "";
//Проверяем валидность данных
if(CheckSpaces(name))
{
    fail+="Пустое имя\n";
}
else if(name.length < 4)
{
    fail+="Имя должно быть больше 3 символов\n";
}
if(CheckSpaces(email))
{
    fail+="Пустая почта\n";
}
else if(regular.test(email) === false)
{
    fail+="Неправильно введена почта\n";
}
if (pass.length < 8)
{
    fail+="Пароль должен составлять 8 и более символов\n";
}
if (pass!==pass2)
{
    fail+="Пароли не совпадают\n";
}

if (fail!=="")
{
    alert(fail);
}
else            //иначе TODO: это отпрвляется на сервер. (php/Go/asp.net)
{
document.getElementById("form").style.display = "none";
document.getElementById("ty").style.display = "block";
}
}

//функция для обработки формы входа
function valid2(form)
{
let email = form.EMail.value;
let pass = form.pass.value;

let fail = "";
let regular = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
const CheckSpaces = (str) => str.trim() == "";

if(CheckSpaces(email))
{
    fail+="Пустая почта\n";
}
else if(regular.test(email) === false)
{
    fail+="Неправильно введена почта\n";
}
if (pass.length < 8)
{
    fail+="Пароль должен составлять 8 и более символов\n";
}


if (fail!=="")
{
    alert(fail);
}
else            //иначе TODO: это отпрвляется на сервер. (php/Go/asp.net)
{
window.location = "index.html";
}
}