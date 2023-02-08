function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en'){
      $("#enTranslator").css('color', '#f4623a');
      $("#idTranslator").css('color', '#212529');
    } 
    if(lng == 'id'){
      $("#idTranslator").css('color', '#f4623a');
      $("#enTranslator").css('color', '#212529');
    }
}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (Khmer) with attribute lng-tag
  $("#idTranslator").click(function(){
    translate('id', 'lng-tag');
  });
});