(function () {
  var t = document.getElementById('js-mobile-toggle');
  var nav = document.getElementById('mobile-nav');
  if (t && nav) t.addEventListener('click', function () { nav.classList.toggle('show'); });
})();
