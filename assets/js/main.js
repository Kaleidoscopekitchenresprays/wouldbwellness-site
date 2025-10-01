
// Optional: open Fresha in a modal <dialog> by turning links with data-fresha into iframes.
(function(){
  const links = document.querySelectorAll('a[data-fresha]');
  if(!links.length) return;
  const dlg = document.createElement('dialog');
  dlg.style.width='min(900px, 96vw)';
  dlg.style.height='min(720px, 92vh)';
  dlg.style.padding='0';
  dlg.style.border='1px solid #243251';
  dlg.innerHTML = '<iframe title="Fresha booking" style="width:100%;height:100%;border:0"></iframe><form method="dialog" style="position:absolute;top:8px;right:8px"><button class="btn secondary">Close</button></form>';
  document.body.appendChild(dlg);
  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      dlg.querySelector('iframe').src = a.href;
      dlg.showModal();
    });
  });
})();
