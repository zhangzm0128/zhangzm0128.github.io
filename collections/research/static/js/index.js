window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

document.addEventListener('DOMContentLoaded', function() {
    var bibtex_div = document.getElementById('bibtex');
    var text_div = document.getElementById('text_cite');

    var BibtexButton = document.getElementById('BibtexButton');
	var TextButton = document.getElementById('TextButton');

    function SwapBib() {
		bibtex_div.style.display = 'block';
		text_div.style.display = 'none';

		BibtexButton.classList.toggle('is-selected');
		BibtexButton.classList.toggle('is-dark');
		BibtexButton.classList.remove('is-light');

		TextButton.classList.remove('is-selected');
		TextButton.classList.remove('is-dark');
		TextButton.classList.toggle('is-light');
    }
	function SwapText() {
		bibtex_div.style.display = 'none';
		text_div.style.display = 'block';

		TextButton.classList.toggle('is-selected');
		TextButton.classList.toggle('is-dark');
		TextButton.classList.remove('is-light');

		BibtexButton.classList.remove('is-selected');
		BibtexButton.classList.remove('is-dark');
		BibtexButton.classList.toggle('is-light');
    }

    BibtexButton.addEventListener('click', SwapBib);
	TextButton.addEventListener('click', SwapText);
});

function formatNumber(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

document.addEventListener('DOMContentLoaded', function() {
    var busuanziValueElement = document.getElementById('busuanzi_value_site_pv');

    if (busuanziValueElement) {
        var value = parseFloat(busuanziValueElement.textContent);

        if (value >= 1000000) {
            busuanziValueElement.textContent = formatNumber(value / 1000000) + 'M';
        } else if (value >= 1000) {
            busuanziValueElement.textContent = formatNumber(value / 1000) + 'K';
        }
    }
});

