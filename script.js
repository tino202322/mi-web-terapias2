
// Smooth fallback for browsers without CSS smooth behavior
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Simple form handler (no backend). Replace with your service or WhatsApp link.
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert('¡Gracias! Te responderé pronto, ' + (data.nombre || ''));
    form.reset();
  });
}
