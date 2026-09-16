(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // Contact form: builds a pre-filled email (static site, no backend)
  var form = document.getElementById('contact-form');
  if (form) {
    var errorEl = document.getElementById('form-error');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var company = form.company.value.trim();
      var message = form.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      [form.name, form.email, form.message].forEach(function (f) { f.classList.remove('invalid'); });
      var invalid = [];
      if (!name) invalid.push(form.name);
      if (!emailOk) invalid.push(form.email);
      if (!message) invalid.push(form.message);
      if (invalid.length) {
        invalid.forEach(function (f) { f.classList.add('invalid'); });
        errorEl.hidden = false;
        invalid[0].focus();
        return;
      }
      errorEl.hidden = true;

      var subject = 'Enquiry from ' + name + (company ? ' (' + company + ')' : '');
      var body = 'Name: ' + name + '\nEmail: ' + email + (company ? '\nBusiness / website: ' + company : '') + '\n\n' + message;
      window.location.href = 'mailto:elinaagnaeva@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
