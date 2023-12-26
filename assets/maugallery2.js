(function($) {
    $.fn.mauGallery=function(options)
    {options=$.extend($.fn.mauGallery.defaults,options);var tagsCollection=[];return this.each(function()
        {$.fn.mauGallery.methods.createRowWrapper($(this));if(options.lightBox)
            {$.fn.mauGallery.methods.createLightBox($(this),options.lightboxId,options.navigation);}
  $.fn.mauGallery.listeners(options);$(this).children(".gallery-item").each(function(index)
  {$.fn.mauGallery.methods.responsiveImageItem($(this));$.fn.mauGallery.methods.moveItemInRowWrapper($(this));$.fn.mauGallery.methods.wrapItemInColumn($(this),options.columns);var theTag=$(this).data("gallery-tag");if(options.showTags&&theTag!==undefined&&tagsCollection.indexOf(theTag)===-1){tagsCollection.push(theTag);}});if(options.showTags){$.fn.mauGallery.methods.showItemTags($(this),options.tagsPosition,tagsCollection);}
  $(this).fadeIn(500);});};$.fn.mauGallery.defaults={columns:3,lightBox:true,lightboxId:null,showTags:true,tagsPosition:"bottom",navigation:true};$.fn.mauGallery.listeners=function(options){$(".gallery-item").on("click",function(){if(options.lightBox&&$(this).prop("tagName")==="IMG"){$.fn.mauGallery.methods.openLightBox($(this),options.lightboxId);}
  else{return;}});$(".gallery").on("click",".nav-link",$.fn.mauGallery.methods.filterByTag);$(".gallery").on("click",".mg-prev",()=>$.fn.mauGallery.methods.prevImage(options.lightboxId));$(".gallery").on("click",".mg-next",
  ()=>$.fn.mauGallery.methods.nextImage(options.lightboxId));};$.fn.mauGallery.methods={createRowWrapper:function(element){if