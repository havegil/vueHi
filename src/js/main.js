<script type="text/javascript" src="js/jquery.fullPage.js"></script>
$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	
		
	function disableMW(){
	   $('body').bind("mousewheel", function() {
		return false;
	});
	}

	function enableMW(){
	   $('body').bind("mousewheel", function() {
		return true;
	});
	}
});	


function burgerX(){
	//get pos + width + 15px
	var itemBox = $('.section').offset();	
}

function activateImgSwap(target){
	
	$('.people img').each(function(){
		$(this).mouseover(function(){
			//console.log($(this).attr('src'));
			var imgSrc = $(this).attr('src');
			var strPeep =imgSrc.replace('.jpg', '.gif');
			$(this).prop('src', strPeep) ;
		});
		
		$(this).mouseout(function(){
			//console.log($(this).attr('src'));
			var imgSrc = $(this).attr('src');
			var strPeep =imgSrc.replace('.gif', '.jpg');
			$(this).prop('src', strPeep);
		});
	});
}


	$(document).ready(function() {
		var welcome;
		var navIsOpen = getNavState();
		
		
		/*
		$('.burger-button').click(function(){			
console.log("burger clicked");
			var navStateOpen = getNavState();

			if(!navStateOpen){
				onMenuClosed();
			}else{
				onMenuOpen();
			}
		});
		*/
		
		function getNavState(){
			return navIsOpen = !navIsOpen;
		}
		
		function onMenuOpen(){		
			$('.homepage').css({'height': '100%'});
			
			/**/
			$('.global-nav-background').addClass('global-nav-background--open');
			$('.global-nav-wrapper').addClass('global-nav-wrapper--open');
			$('.global-content-vertical-fix').addClass('global-content-vertical-fix--shrink');
			/**/
			
			$('.global-content-vertical-fix').css({'transform' : 'translateY(200px)'});	
		
		}
		
		function onMenuClosed(){		
			$('.global-content-vertical-fix').removeClass('global-content-vertical-fix--shrink');
			
			/**/
			$('.global-nav-background').removeClass('global-nav-background--open');
			$('.global-nav-wrapper').removeClass('global-nav-wrapper--open');
			$('.global-content-vertical-fix').css({'transform' : 'translateY(0)'});
			/**/
		}
		
		$('#menu-nav li a').add('#fullpage .section a').add('.join_us_wrapper a').click(function (){
			onMenuClosed();					
		});
		

		
							
		
		$('#fullpage').fullpage({
			
			anchors: ['about-us', 'what-we-do', 'meet-us', 'careers', 'contact'],
			/*recordHistory: false,*/
			
			scrollingSpeed: 1000,			
			afterLoad: function(anchorLink, index){
				var loadedSection = $(this);
				var nextSection = loadedSection.next();
				var prevSection = loadedSection.prev();
				
				if(nextSection.hasClass('fp-auto-height') ) {
					var IScroll = nextSection.find('.fp-scrollable').data('iscrollInstance');
					IScroll.scrollTo(0, 0, 0)
				}
				
				if(prevSection.hasClass('fp-auto-height') ) {
					var IScroll = prevSection.find('.fp-scrollable').data('iscrollInstance');
					IScroll.scrollTo(0, IScroll.maxScrollY, 0)
				}
			}
						
		});

							
		
		//prepare nav for interactions
		var menuNavIsOpen = false;
		getNavState();
		
	
	});


