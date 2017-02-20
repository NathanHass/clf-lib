import example from './example-module';
import $ from 'jquery';

example.announce();

$(".sg__example").each(function(){
  var $this = $(this);
  var html = $this.html();
  var $code = $this.closest('.sg__item').find('.js-code-block');
  html = html.replace(/</g, "&lt;");
  html = html.replace(/>/g, "&gt;");
  html = html.trim();
  $code.html(html);
});

prettyPrint();


$('.js-toggle-code').on('click', function() {
  let $this = $(this);
  let $thisSgItem = $this.closest('.sg__item');

  $thisSgItem.toggleClass('code-is-visible');
  $this.text($thisSgItem.hasClass('code-is-visible') ? 'Hide Code' : 'View Code');
});
