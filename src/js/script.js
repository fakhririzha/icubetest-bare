$(document).ready(function () {
	$(".browse__carousel").owlCarousel({
		loop: true,
		margin: 40,
		dots: false,
		nav: true,
		responsiveClass: true,
		navText: ["<", ">"],
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			768: {
				items: 3,
				nav: true,
			},
			769: {
				items: 4,
				nav: true,
				loop: false,
			},
		},
	});

	$(".browse__carousel>.owl-nav").prependTo(".browse__carousel");

	$(".playlist__carousel").owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		responsiveClass: true,
		navText: ["<", ">"],
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			768: {
				items: 3,
				nav: true,
				margin: 20,
			},
			769: {
				items: 4,
				nav: true,
				loop: false,
			},
		},
	});

	$(".playlist__carousel>.owl-nav").prependTo(".playlist__carousel");

	$(".sidebar ul li").hover(function () {
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	$(".sidebar ul li").click(function () {
		$(this).parent().addClass("active").siblings().removeClass("active");
	});

	$(".sidebar ul.secondary-sidenav li").hover(function () {
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	$(".sidebar ul.secondary-sidenav li").click(function () {
		$(this).parent().addClass("active").siblings().removeClass("active");
	});

	$(".owl-item img").hover(function () {
		$(this).css("opacity", "90%");
	});
});
