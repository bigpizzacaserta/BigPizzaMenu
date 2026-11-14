// Evidenzia nella barra in alto la sezione che si sta guardando
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.tabs a'));
  var sezioni = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  var bar = document.querySelector('.tabs-inner');
  var fab = document.querySelector('.fab');
  var hero = document.querySelector('.hero');
  var attivo = null;

  function aggiorna() {
    var soglia = window.innerHeight * 0.3;
    var corrente = null;
    sezioni.forEach(function (s, i) {
      if (s && s.getBoundingClientRect().top <= soglia) corrente = links[i];
    });
    // in fondo alla pagina: ultima sezione
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) corrente = links[links.length - 1];

    if (corrente !== attivo) {
      if (attivo) attivo.classList.remove('attivo');
      if (corrente) {
        corrente.classList.add('attivo');
        bar.scrollTo({ left: corrente.offsetLeft - 16, behavior: 'smooth' });
      }
      attivo = corrente;
    }

    // il pulsante "Ordina" compare dopo l'intestazione
    fab.classList.toggle('nascosto', hero.getBoundingClientRect().bottom > 0);
  }

  window.addEventListener('scroll', aggiorna, { passive: true });
  window.addEventListener('resize', aggiorna);
  aggiorna();
})();

// Evidenzia negli orari il giorno di oggi
(function () {
  var oggi = String(new Date().getDay());
  document.querySelectorAll('.orari tr[data-giorni]').forEach(function (tr) {
    if (tr.getAttribute('data-giorni').split(',').indexOf(oggi) !== -1) tr.classList.add('oggi');
  });
})();
