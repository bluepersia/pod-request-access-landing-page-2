
const input = document.getElementById ('cta__input');
const form = document.getElementById ('cta__form');

form.addEventListener ('submit', submit);


function submit (e)
{
    e.preventDefault ();

    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test (input.value))
    {
        form.classList.remove ('invalid');
        return;
    }

    form.classList.add ('invalid');
    form.getElementById ('cta__input-error').textContent = 'Must be a valid email';
}