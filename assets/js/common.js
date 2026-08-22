$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('a.abstract').click(function() {
    $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
  });
  $('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
  });
  $('a').removeClass('waves-effect waves-light');

  // Close the mobile nav menu after tapping a link. Previously this happened
  // implicitly on full-page navigation; the merged home page now jumps to an
  // in-page #anchor instead, which doesn't collapse the menu on its own.
  $('#navbarNav .nav-link').on('click', function () {
    if ($('#navbarNav').hasClass('show')) {
      $('#navbarNav').collapse('hide');
    }
  });

  // bootstrap-toc
  function buildTocSidebar() {
    if($('#toc-sidebar').length){
      var navSelector = "#toc-sidebar";
      var $myNav = $(navSelector);
      $myNav.empty(); // clear a previous build before rebuilding (safe to call again)
      Toc.init($myNav);
      $("body").scrollspy({
        target: navSelector,
      });
    }
  }
  buildTocSidebar();

  // When a page is restored from the browser's back/forward cache (e.g. the
  // user visits another tab, then hits Back), the browser reuses the DOM
  // snapshot from before instead of re-running scripts -- $(document).ready
  // does not fire again, so the sidebar never rebuilds and can be left
  // showing whatever partial state it was in when the user navigated away.
  // pageshow with event.persisted true is the signal for that restore.
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      buildTocSidebar();
    }
  });

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });
});

