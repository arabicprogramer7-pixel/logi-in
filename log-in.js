


// عناصر
const body = document.getElementById('body');
const container = document.getElementById('contaner');
const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const gg = document.getElementById('gg')
const inppasword = document.getElementById('inppasword')
// Dark mode
darkBtn.addEventListener('click', () => {
    // خلفية البودي
    body.classList.remove('bg-zinc-50');
    body.classList.add('bg-zinc-900');

    // صندوق
    container.classList.remove('bg-white', 'border-blue-500', 'shadow-blue-500/50');
    container.classList.add('bg-neutral-800', 'border-blue-400', 'shadow-emerald-400/50');

    // النصوص داخل الصندوق
    container.querySelectorAll('#titel, #username, #password').forEach(el => {
        el.classList.remove('text-zinc-900');
        el.classList.add('text-slate-100');
    });

    // input borders
    container.querySelectorAll('input').forEach(input => {
        input.classList.remove('border-blue-500', 'focus:border-blue-500');
        input.classList.add('border-teal-300', 'focus:border-teal-300');
        input.classList.remove('text-zinc-900');
        input.classList.add('text-slate-100');
        input.classList.remove('bg-white');
        input.classList.add('bg-neutral-800');
    });
});

// Light mode
lightBtn.addEventListener('click', () => {
    body.classList.remove('bg-zinc-900');
    body.classList.add('bg-zinc-50');

    container.classList.remove('bg-zinc-800', 'border-zinc-700', 'shadow-black/50');
    container.classList.add('bg-white', 'border-blue-500', 'shadow-blue-500/50');

    container.querySelectorAll('#titel, #username, #password').forEach(el => {
        el.classList.remove('text-zinc-100');
        el.classList.add('text-zinc-900');
    });

    container.querySelectorAll('input').forEach(input => {
        input.classList.remove('border-teal-300', 'focus:border-teal-300');
        input.classList.add('border-blue-500', 'focus:border-blue-500');
        input.classList.remove('text-zinc-100');
        input.classList.add('text-zinc-900');
        input.classList.remove('bg-zinc-700');
        input.classList.add('bg-white');
    });
});



function hello() {
    if (gg.value === "❌") { 
        inppasword.type = "text";
        gg.value = "✔";
        gg.innerText = "✔";
    } else if (gg.value === "✔") { 
        inppasword.type = "password";
        gg.value = "❌";
        gg.innerText = "❌";
    }
}










