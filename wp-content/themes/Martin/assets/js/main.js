$(function(){

  if((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) > 1){
    $('#desktop-nav').addClass('green destrave header-shrink');
    $('#start-now-button').css('opacity', 1);
    $('#start-now-button').show();
  }else{
    $('#desktop-nav').removeClass('green destrave header-shrink');
    $('#start-now-button').css('opacity', 0);
    $('#start-now-button').hide();
  }

  $(window).scroll(function(){
    var scroll =  window.pageYOffset 
            || document.documentElement.scrollTop  
            || document.body.scrollTop  
            || 0;
    if(scroll > 1){
      $('#desktop-nav').addClass('green destrave header-shrink');
      $('#start-now-button').css('opacity', 1);
      $('#start-now-button').show();
    }else{
      $('#desktop-nav').removeClass('green destrave header-shrink');
      $('#start-now-button').css('opacity', 0);
      $('#start-now-button').hide();
    }

  })
  
  $('.step__error').hide();
  $('.step__error').find('span').html('');

  $('.back-to-top').on('click', function () {
    $("html, body").animate({
      scrollTop: 0
    }, 400);
    if(mobile_menu){
      mobile_menu.close();
    }
  });

  $('.anchor').on('click', function(e){
    e.preventDefault();

    var target = $($(this).attr('href'));
    
    if(target.length < 1){
      return;
    }

    $("html, body").animate({
      scrollTop: target.offset().top - 50
    }, 400);

    if(mobile_menu){
      mobile_menu.close();
    }
  })

  $('.more-button').on('click', function(e){
    e.preventDefault();
   
    var target = $($(this).attr('href'));
    
    if(target.length < 1){
      return;
    }

    $("html, body").animate({
      scrollTop: target.offset().top - 50
    }, 400);
    
  })

  //Modals plugin
  $('.modal').modal();

  //Mobile nav
  $('.sidenav').sidenav({
    closeOnClick: true
  });

	//Materialize plgins
  var mobile_menu = M.Sidenav.getInstance($('#mobile-nav'));
  $('#close-sidenav').on('click', function(){
	  mobile_menu.close();
  });
  //$('#state-select').formSelect();
  
  //Masks
  $('.mask-telephone').mask("(00) 00000-0000");
  $('.mask-cpf').mask("000.000.000-00");
  $('.mask-cep').mask("00000-000");
  $('.mask-card_number').mask("0000-0000-0000-0000");

  //Form Navigation 
  navigation(0);

  //Form Plan selection
  $('.step__plan-select').on('click', function(){
    var checkbox = $(this).find('input');
    var checkboxState = checkbox.prop('checked');

    $('.step__plan-select').removeClass('active');
    $('.step__plan-select').find('input').prop('checked', false);
		
    if(checkbox.length < 1){
      return;
    }

    checkbox.prop('checked', !checkboxState);

    if(checkbox.prop('checked')){
      $(this).addClass('active');
      $('#payment-method').val(checkbox.data('method'));
      $('#select-plan').find(`option[value="${checkbox.data('method')}"]`).prop('checked', true);
    }else{
      $(this).removeClass('active');
    }
    
    if(checkbox.data('method') == 'bank_slip'){
	    $('#step3next').text('Assinar');
    }else{
	    $('#step3next').text('Continuar');
    }

  })
  
  
  var modalSubscribe = M.Modal.getInstance($('#modal1'));
  modalSubscribe.options.dismissible = false;
  modalSubscribe.options.onCloseEnd = function(){
	  if(formProgress >= 4){
		  return;
	  }
	  formProgress = -1;
	  navigation(1);
  }
  var modalClientArea = M.Modal.getInstance($('#client-area'));
  modalClientArea.options.onOpenEnd = function(){
	  openClientArea();
  }

  $('.step__error').hide();

  $('#modal1').submit(function(e){
	  
		e.preventDefault();
	  
		$('#modal1').find('.modal-content').css({'opacity': '0.4'});
		$('body').css({'pointer-events': 'none'});
		$('#loading-form').css({'display': 'flex'});
		
		if($('#payment-method').val() == 'bank_slip'){
			navigation(-1);
		}
			
	  $.ajax({
		  url: $(this).attr('action'),
		  type: "POST",
		  data: $(this).serialize(),
		  success: function(data){
        var response = JSON.parse(data);
        
        if(response.status == "error"){
          $('.step__error').show();
          $('.step__error').find('span').html(response.message);
          if(formProgress == 4){
	          navigation(-1);
          }
        }

        if(response.status == "ok"){
          $('.step__error').hide();
          if(response.payment == "bank_slip"){
	          $('.step__finalization--text').show();
	          var downloadLink =  $('#bank-slip__download');
						downloadLink.attr('href', response.link_bank_slip);
						downloadLink.click();
						setTimeout(function(){window.open(response.link_bank_slip)}, 1500);
						;
          }
          
          var steps = document.getElementsByClassName('step');
	
		  for(let i = 0; i < steps.length; i++){
		    $(steps[i]).hide();
		  }
		  $(steps[steps.length - 1]).show();
		  
        }

		  }
	  }).done(function(data){		  
			$('#modal1').find('.modal-content').css({'opacity': '1'});
			$('body').css({'pointer-events': 'all'});
			$('#loading-form').hide();
	  });
	  
  });
  
  $('#cep').on('change', function(){
	  
	  var uri = $('#template_directory_uri').data('uri');
	  
	  $.ajax({
		  url: `${uri}/ajax/ajax_cep.php`,
		  type: 'POST',
		  data: {cep: $(this).val()}
	  }).done(function(data){
		  var response = JSON.parse(data);
		  
		  if(response.status == 'error'){
			  M.toast({html: response.message,  classes: 'red'});
			  return;
		  }
		  
		  $('#address-line').val(response.data.logradouro);
		  $('#address-city').val(response.data.localidade);
		  $('#state-select').find(`option[value="${response.data.uf}"]`).attr('selected', 'selected').trigger('change');
		  
	  })
  })

  $('html').bind('keypress', function(e)
  {
    if(e.keyCode == 13)
    {
      return false;
    }
  });
})

function openClientArea(){
	
	var appUrl = encodeURIComponent( document.location.href );
	var iframePlanos = document.createElement("iframe");
	iframePlanos.setAttribute("frameborder",0);
	iframePlanos.setAttribute("width","100%");
	iframePlanos.setAttribute("height",900);
	iframePlanos.setAttribute("allowtransparency",true);
	iframePlanos.src="https://destrave.superlogica.net/clients/areadocliente?url="+appUrl+"";
	document.getElementById("superlogica_planos_script").appendChild(iframePlanos);
	
}

function navigationNext(e, el){
  el = $(el);

  var invalid = validateStep(el);

  if(invalid){
    $('.step__error').show();
    $('.step__error').find('span').html('Campos inválidos, verifique');
    return;
  }
  
  if(formProgress == 0){
	  saveLead();
  }
  
  $('.step__error').hide();
  $('.step__error').find('span').html('');

  navigation(1);
}
function navigationPrev(e, el){
  el = $(el);

  navigation(-1);
  
}

var formProgress = 0;
function navigation(n){

  var steps = document.getElementsByClassName('step');
	
  formProgress += parseInt(n);

  for(let i = 0; i < steps.length; i++){
    $(steps[i]).hide();
  }

  if(formProgress < 0){
    formProgress = 0;
    $(steps[0]).show();
    return;
  }

  if(formProgress > (steps.length -1)){
    formProgress = steps.length -1;
  }

  if(formProgress == 3){
    if($('#payment-method').val() == 'bank_slip'){
	    $('#modal1').submit();
    }else{
	    if($('#payment-method').val() == ''){
		    $('.step__error').show();
        $('.step__error').find('span').html('Selecione um plano');
				formProgress--;
	    }
    }
  }
  
  if(formProgress == 4){
	$('#modal1').submit();
	$(steps[formProgress - 1]).show();
	return;
  }

  $(steps[formProgress]).show();

}

function validateStep(element){

  var container = element.parents('.step');
  var inputs = container.find('input');
  var selects = container.find('select');

  var error = false;
	
  for(var i = 0; i  < inputs.length; i++){
    if($(inputs[i]).attr('required') == 'required' && ($(inputs[i]).val() == null || $(inputs[i]).val() == '')){
      $(inputs[i]).parents('.form-modal__input').addClass('invalid-field');
      error = true;
    }else{
      $(inputs[i]).parents('.form-modal__input').removeClass('invalid-field');
    }

    if($(inputs[i]).attr('type') == 'email'){
      if(!validateEmail($(inputs[i]).val())){
        $(inputs[i]).parents('.form-modal__input').addClass('invalid-field');
        error = true;
      }else{
        $(inputs[i]).parents('.form-modal__input').removeClass('invalid-field');
      }
    }
    
    if($(inputs[i]).attr('type') == "tel"){
	    if($(inputs[i]).val().length < 15){	
	    	error = true;
        $(inputs[i]).parents('.form-modal__input').addClass('invalid-field');
      }else{

        $(inputs[i]).parents('.form-modal__input').removeClass('invalid-field');
      }
    }
    if($(inputs[i]).attr('type') == "checkbox" && $(inputs[i]).attr('name') == "accept_terms"){
	    if(!$(inputs[i]).prop('checked')){	
	    	error = true;
        $(inputs[i]).parents('.form-modal__input').addClass('invalid-field');
      }else{
        $(inputs[i]).parents('.form-modal__input').removeClass('invalid-field');
      }
    }

    if($(inputs[i]).attr('name') == 'customer[cpf]'){
	    //console.log($(inputs[i]).val());
      if(!validateCpf($(inputs[i]).val())){
        error = true;
        $(inputs[i]).parents('.form-modal__input').addClass('invalid-field');
      }else{

        $(inputs[i]).parents('.form-modal__input').removeClass('invalid-field');
      }
     
    }
  }

  for(var i = 0; i  < selects.length; i++){
    if($(selects[i]).val() == null || $(selects[i]).val() == ''){
      $(selects[i]).parents('.form-modal__input').addClass('invalid-field');
      error = true;
    }else{
      $(selects[i]).parents('.form-modal__input').removeClass('invalid-field');
    }
  }

  return error;
}

function saveLead(){
	var container = $('#lead');
  var fields = container.find('input');
  var data = {};
  
  for(var i = 0; i < fields.length; i++){
	  data[fields[i].name] = $(fields[i]).val();
  }
  
  $.ajax({
	  url: container.data('action'),
	  type: 'POST',
	  data: data
  })
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateCpf(n){

  var numDoc = n.replace(/\D/g, '');

  var cpfsInvalidosConhecidos = [
    '00000000000','11111111111',
    '22222222222','33333333333',
    '44444444444','55555555555',
    '66666666666','77777777777',
    '88888888888','99999999999'			
  ]
  for(let i = 0; i < cpfsInvalidosConhecidos.length; i++){
    if(cpfsInvalidosConhecidos[i] == numDoc){
      return false;
    }
  }
 	
  
  var sum = 0;
  var aux = 0;
  var digits = numDoc.split('');
  var firstDigit = digits[9];
  var secondDigit = digits[10];

  if(digits.length != 11){
    return false;
  }
  for(let i = 10; i > 1; i--){
    sum += digits[aux] * i;
    aux++;
  }
  sum *= 10;

  if(sum % 11 != firstDigit){
    if(sum % 11 == 10){
	    if(firstDigit != 0){
	      return false;
	    }
	  }else{
		  return false;
	  }
  }
  
  sum = 0;
  aux = 0;
  for(let i = 11; i > 1; i--){
    sum += digits[aux] * i;
    aux++;
  }
  sum *= 10;

  if(sum % 11 != secondDigit){
	  if(sum % 11 == 10){
	    if(secondDigit != 0){
	      return false;
	    }
	  }else{
		  return false;
	  }
  }
  
  return true;
}

function selectPlan(e, el) { 
	
	$('.step__plan-select input[type="checkbox"]').prop('checked', false);
	
	var planSelected = $(`.step__plan-select input[data-method='${$(el).data('plan')}']`);
	planSelected.prop('checked', true).trigger('click');
	
}

/*
//aplicar tag (GA pageview) por bloco utilizando localizaçao do scroll
window.onscroll = function() {myFunction()};

function myFunction(){

  var about = $('#about').offset().top;
  var services = $('#services').offset().top;
  var plan = $('#plan').offset().top;
  var subscribe = $('#why-subscribe').offset().top;
  var know = $('#good-know').offset().top;
  var move = $('#move').offset().top;
  
  //conferindo os valores das sections no navegador
  console.log('ValorScroll:'+document.documentElement.scrollTop);
  console.log('ValorSessao Sobre:'+about);
  console.log('ValorSessao Servicos:'+services);
  console.log('ValorSessao Plano:'+plan);
  console.log('ValorSessao Pq Assinar:'+subscribe);
  console.log('ValorSessao O que precisa saber:'+know);
  console.log('ValorSessao O que nos move:'+move);
  
  	if (document.documentElement.scrollTop >= about && document.documentElement.scrollTop < services){
	  //linha de código que vai executar a aplicaçao da tag
	  __gaTracker('send', {'hitType': 'pageview', 'page': 'o-que-fazemos'});
	}
	else if (document.documentElement.scrollTop >= services && document.documentElement.scrollTop < plan){
	  __gaTracker('send', {'hitType': 'pageview', 'page': 'servicos'});
	}
	else if (document.documentElement.scrollTop >= plan && document.documentElement.scrollTop < subscribe){ 
	  __gaTracker('send', {'hitType': 'pageview', 'page': 'plan'});
	}
	else if (document.documentElement.scrollTop >= subscribe && document.documentElement.scrollTop < know){
	  __gaTracker('send', {'hitType': 'pageview', 'page': 'porque-assinar'}); 
	}
	else if (document.documentElement.scrollTop >= know && document.documentElement.scrollTop < move){ 
	  __gaTracker('send', {'hitType': 'pageview', 'page': 'o-que-precisa-saber'});
	}
	else if (document.documentElement.scrollTop >= move){  
	  __gaTracker('send', {'hitType': 'pageview', 'page': 'o-que-nos-move'});
	}
	else {
		return;
	}
}*/