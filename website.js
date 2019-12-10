$(document).ready(() => {

	
    $("#Experience").mouseenter(function(){
        $("#Experience").animate({scrollTop : $(window).height()}, 2000);    
    }).mouseleave(function(){
        $("#Experience").stop();
    });  

	// heading
	$('#name').hide();
	$('#name').fadeIn(2500);


	$('.all-projects').hide();
	$('.all-aboutme').hide();
	$('.all-experience').hide();

	$('#description').hide();
	$('#description').fadeIn(5000);
	$('.info').hide();

	// top bar
	$('.bar').children().on('mouseenter', event => {
		$(event.currentTarget).animate({
			fontSize: '45px'
		});
	}).on('mouseleave', event => {
		$(event.currentTarget).animate({
			fontSize: '30px'
		})
	});

	//sobre min
	$('#Introduction').on('mouseenter', () => {
	$('.all-aboutme').slideDown(800);
	});


	//projects
	$('#Projects').on('mouseenter', () => {
	$('.all-projects').slideDown(800);
	});

	//read more button
	$('.read-more').on('mouseenter', event => {
	$(event.currentTarget).animate({
			fontSize: '25px'
		});
	}).on('mouseleave', event => {
		$(event.currentTarget).animate({
			fontSize: '20px'
		});
	});
	$('.read-more').on('click', function()
    {
    $(this).next().slideToggle(400);
    });

    //video link
	$('.video').on('mouseenter', event => {
	$(event.currentTarget).animate({
			fontSize: '25px'
		});
	}).on('mouseleave', event => {
		$(event.currentTarget).animate({
			fontSize: '20px'
		});
	});


	//experiencia
	$('#Experience').on('mouseenter', () => {
	$('.all-experience').slideDown(800);
	});



	//contact me
	const $button = $('.icon').children();
	$('.facebook').on('mouseenter', () => {
	$('.facebook').animate({
			height: '120px',
			width: '120px'
		});
	}).on('mouseleave', () => {
		$('.facebook').animate({
			height: '100px',
			width: '100px'
		});
	});

		$('.linkedin').on('mouseenter', () => {
	$('.linkedin').animate({
			height: '145px',
			width: '145px'
		});
	}).on('mouseleave', () => {
		$('.linkedin').animate({
			height: '125px',
			width: '125px'
		});
	});

		$('.mail').on('mouseenter', () => {
	$('.mail').animate({
			height: '120px',
			width: '120px'
		});
	}).on('mouseleave', () => {
		$('.mail').animate({
			height: '100px',
			width: '100px'
		});
	});

});