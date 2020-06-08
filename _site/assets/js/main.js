var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(function() {
  $("section h1, section h2, section h3").each(function(){
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  sectionHeight();

  $('img').on('load', sectionHeight);
});



function highlight(pub) {
    pub.style.border = "1px #778899 solid";
    pub.style.padding = "3px 3px 3px 3px";
    pub.style.background = "#CCDDEE";
}

function lowlight(pub) {
    pub.style.border = "none";
    pub.style.padding = "none";
    pub.style.background = "none";
}

function toggleInfos(pub, item) {
  var publi = document.getElementById(pub);
  var bibtex = document.getElementById(pub+"_bibtex");
  var abstract = document.getElementById(pub+"_abstract");

  if(item=='bibtex') {
    if(bibtex.style.display == 'none') {
      bibtex.style.display = 'block';
      highlight(publi);
    } else {
      bibtex.style.display = 'none';
      lowlight(publi);
    }
    abstract.style.display = 'none';
  }

  if(item=='abstract') {
    if(abstract.style.display == 'none') {
      abstract.style.display = 'block';
      highlight(publi);
    } else {
      abstract.style.display = 'none';
      lowlight(publi);
    }
    bibtex.style.display = 'none';
  }
}
