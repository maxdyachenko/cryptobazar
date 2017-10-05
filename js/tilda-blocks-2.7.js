function t199_showMenu(recid){var el=$("#rec"+recid);el.find('.t199__js__menu').each(function(){var $toggler=el.find('.t199__js__menu-toggler'),$menu=$(this),$body=$('body'),CLASS_MENU='t199__is__menu';$menu.find('.t199__menu-item').each(function(){if($(this).attr('href').indexOf('#')>-1){$(this).on('click',function(e){$body.removeClass(CLASS_MENU)})}});$toggler.on('click',function(e){e.stopPropagation();e.preventDefault();$body.toggleClass(CLASS_MENU)});$(document).on('click',function(){$body.removeClass(CLASS_MENU)});$menu.on('click',function(e){e.stopPropagation()})})}
function t199_positionHeader(recid){var el=$("#rec"+recid);var $header=el.find('.t199__js__header'),isScrolling=!1,CLASS_ACTIVE='t199__is__active';function updateHeader(){isScrolling=!0;if($(window).scrollTop()>0)$header.addClass(CLASS_ACTIVE);else $header.removeClass(CLASS_ACTIVE)}
setInterval(function(){if(isScrolling){isScrolling=!1}},100);$(window).on('scroll',updateHeader)
updateHeader()}
function t199_setPath(pageid){}
function t199_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t199__menu a[href='"+url+"']").addClass("t-active");$(".t199__menu a[href='"+url+"/']").addClass("t-active");$(".t199__menu a[href='"+pathname+"']").addClass("t-active");$(".t199__menu a[href='/"+pathname+"']").addClass("t-active");$(".t199__menu a[href='"+pathname+"/']").addClass("t-active");$(".t199__menu a[href='/"+pathname+"/']").addClass("t-active")}
function t199_checkAnchorLinks(recid){if($(window).width()>=960){var t199_navLinks=$("#rec"+recid+" .t-menu__link-item:not(.tooltipstered)[href*='#']");if(t199_navLinks.length>0){t199_catchScroll(t199_navLinks)}}}
function t199_catchScroll(t199_navLinks){var t199_clickedSectionId=null,t199_sections=new Array(),t199_sectionIdTonavigationLink=[],t199_interval=100,t199_lastCall,t199_timeoutId;t199_navLinks=$(t199_navLinks.get().reverse());t199_navLinks.each(function(){var t199_cursection=t199_getSectionByHref($(this));if(typeof t199_cursection.attr("id")!="undefined"){t199_sections.push(t199_cursection)}
t199_sectionIdTonavigationLink[t199_cursection.attr("id")]=$(this)});t199_updateSectionsOffsets(t199_sections);$(window).bind('resize',t_throttle(function(){t199_updateSectionsOffsets(t199_sections)},200));$('.t199').bind('displayChanged',function(){t199_updateSectionsOffsets(t199_sections)});setInterval(function(){t199_updateSectionsOffsets(t199_sections)},5000);t199_highlightNavLinks(t199_navLinks,t199_sections,t199_sectionIdTonavigationLink,t199_clickedSectionId);t199_navLinks.click(function(){if(!$(this).hasClass("tooltipstered")){t199_navLinks.removeClass('t-active');t199_sectionIdTonavigationLink[t199_getSectionByHref($(this)).attr("id")].addClass('t-active');t199_clickedSectionId=t199_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t199_now=new Date().getTime();if(t199_lastCall&&t199_now<(t199_lastCall+t199_interval)){clearTimeout(t199_timeoutId);t199_timeoutId=setTimeout(function(){t199_lastCall=t199_now;t199_clickedSectionId=t199_highlightNavLinks(t199_navLinks,t199_sections,t199_sectionIdTonavigationLink,t199_clickedSectionId)},t199_interval-(t199_now-t199_lastCall))}else{t199_lastCall=t199_now;t199_clickedSectionId=t199_highlightNavLinks(t199_navLinks,t199_sections,t199_sectionIdTonavigationLink,t199_clickedSectionId)}})}
function t199_updateSectionsOffsets(sections){$(sections).each(function(){var t199_curSection=$(this);t199_curSection.attr("data-offset-top",t199_curSection.offset().top)})}
function t199_getSectionByHref(curlink){var t199_curLinkValue=curlink.attr("href").replace(/\s+/g,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t199_curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t199_curLinkValue.substring(1)+"']")}}
function t199_highlightNavLinks(t199_navLinks,t199_sections,t199_sectionIdTonavigationLink,t199_clickedSectionId){var t199_scrollPosition=$(window).scrollTop(),t199_valueToReturn=t199_clickedSectionId;if(t199_sections.length!=0&&t199_clickedSectionId==null&&t199_sections[t199_sections.length-1].attr("data-offset-top")>(t199_scrollPosition+300)){t199_navLinks.removeClass('t-active');return null}
$(t199_sections).each(function(e){var t199_curSection=$(this),t199_sectionTop=t199_curSection.attr("data-offset-top"),t199_id=t199_curSection.attr('id'),t199_navLink=t199_sectionIdTonavigationLink[t199_id];if(((t199_scrollPosition+300)>=t199_sectionTop)||(t199_sections[0].attr("id")==t199_id&&t199_scrollPosition>=$(document).height()-$(window).height())){if(t199_clickedSectionId==null&&!t199_navLink.hasClass('t-active')){t199_navLinks.removeClass('t-active');t199_navLink.addClass('t-active');t199_valueToReturn=null}else{if(t199_clickedSectionId!=null&&t199_id==t199_clickedSectionId){t199_valueToReturn=null}}
return!1}});return t199_valueToReturn}
function t396_init(recid){var data='';var res=t396_detectResolution();t396_initTNobj();t396_switchResolution(res);t396_updateTNobj();t396_artboard_build(data,recid);$(window).resize(function(){tn_console('>>>> t396: Window on Resize event >>>>');t396_waitForFinalEvent(function(){var ww=$(window).width();var res=t396_detectResolution();var ab=$('#rec'+recid).find('.t396__artboard');t396_switchResolution(res);t396_updateTNobj();t396_ab__renderView(ab);t396_allelems__renderView(ab)},500,'resizeruniqueid'+recid)});$(window).load(function(){var ab=$('#rec'+recid).find('.t396__artboard');t396_allelems__renderView(ab)})}function t396_detectResolution(){var ww=$(window).width();var res;res=1200;if(ww<1200){res=960}if(ww<960){res=640}if(ww<640){res=480}if(ww<480){res=320}return(res)}function t396_initTNobj(){tn_console('func: initTNobj');window.tn={};window.tn.canvas_min_sizes=["320","480","640","960","1200"];window.tn.canvas_max_sizes=["480","640","960","1200",""];window.tn.ab_fields=["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"]}function t396_updateTNobj(){tn_console('func: updateTNobj');window.tn.window_width=parseInt($(window).width());window.tn.window_height=parseInt($(window).height());if(window.tn.curResolution==1200){window.tn.canvas_min_width=1200;window.tn.canvas_max_width=window.tn.window_width}if(window.tn.curResolution==960){window.tn.canvas_min_width=960;window.tn.canvas_max_width=1200}if(window.tn.curResolution==640){window.tn.canvas_min_width=640;window.tn.canvas_max_width=960}if(window.tn.curResolution==480){window.tn.canvas_min_width=480;window.tn.canvas_max_width=640}if(window.tn.curResolution==320){window.tn.canvas_min_width=320;window.tn.canvas_max_width=480}window.tn.grid_width=window.tn.canvas_min_width;window.tn.grid_offset_left=parseFloat((window.tn.window_width-window.tn.grid_width)/2)}var t396_waitForFinalEvent=(function(){var timers={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId="Don't call this twice without a uniqueId"}if(timers[uniqueId]){clearTimeout(timers[uniqueId])}timers[uniqueId]=setTimeout(callback,ms)}})();function t396_switchResolution(res,resmax){tn_console('func: switchResolution');if(typeof resmax=='undefined'){if(res==1200)resmax='';if(res==960)resmax=1200;if(res==640)resmax=960;if(res==480)resmax=640;if(res==320)resmax=480}window.tn.curResolution=res;window.tn.curResolution_max=resmax}function t396_artboard_build(data,recid){tn_console('func: t396_artboard_build. Recid:'+recid);tn_console(data);var ab=$('#rec'+recid).find('.t396__artboard');t396_ab__renderView(ab);ab.find('.tn-elem').each(function(){var item=$(this);if(item.attr('data-elem-type')=='text'){t396_addText(ab,item)}if(item.attr('data-elem-type')=='image'){t396_addImage(ab,item)}if(item.attr('data-elem-type')=='shape'){t396_addShape(ab,item)}if(item.attr('data-elem-type')=='button'){t396_addButton(ab,item)}});$('#rec'+recid).find('.t396__artboard').removeClass('rendering').addClass('rendered')}function t396_ab__renderView(ab){var fields=window.tn.ab_fields;for(var i=0;i<fields.length;i++){t396_ab__renderViewOneField(ab,fields[i])}var ab_min_height=t396_ab__getFieldValue(ab,'height');var ab_max_height=t396_ab__getHeight(ab);var offset_top=0;if(ab_min_height==ab_max_height){offset_top=0}else{var ab_valign=t396_ab__getFieldValue(ab,'valign');if(ab_valign=='top'){offset_top=0}else if(ab_valign=='center'){offset_top=parseFloat((ab_max_height-ab_min_height)/2).toFixed(1)}else if(ab_valign=='bottom'){offset_top=parseFloat((ab_max_height-ab_min_height)).toFixed(1)}else if(ab_valign=='stretch'){offset_top=0;ab_min_height=ab_max_height}else{offset_top=0}}ab.attr('data-artboard-proxy-min-offset-top',offset_top);ab.attr('data-artboard-proxy-min-height',ab_min_height);ab.attr('data-artboard-proxy-max-height',ab_max_height)}function t396_addText(ab,el){tn_console('func: addText');var fields_str='top,left,width,container,axisx,axisy,animtriggerhook,animduration,animoffset,animparallax,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addImage(ab,el){tn_console('func: addImage');var fields_str='img,width,filewidth,fileheight,top,left,container,axisx,axisy,animtriggerhook,animduration,animoffset,animparallax,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);el.find('img').on("load",function(){t396_elem__renderViewOneField(el,'top');if(typeof $(this).attr('src')!='undefined'&&$(this).attr('src')!=''){setTimeout(function(){t396_elem__renderViewOneField(el,'top')},2000)}}).each(function(){if(this.complete)$(this).load()});el.find('img').on('tuwidget_done',function(e,file){t396_elem__renderViewOneField(el,'top')})}function t396_addShape(ab,el){tn_console('func: addShape');var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,animtriggerhook,animduration,animoffset,animparallax,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addButton(ab,el){tn_console('func: addButton');var fields_str='top,left,width,height,container,axisx,axisy,caption,animtriggerhook,animduration,animoffset,animparallax,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);return(el)}function t396_elem__setFieldValue(el,prop,val,flag_render,flag_updateui,res){if(res=='')res=window.tn.curResolution;if(res<1200&&prop!='zindex'){el.attr('data-field-'+prop+'-res-'+res+'-value',val)}else{el.attr('data-field-'+prop+'-value',val)}if(flag_render=='render')elem__renderViewOneField(el,prop);if(flag_updateui=='updateui')panelSettings__updateUi(el,prop,val)}function t396_elem__getFieldValue(el,prop){var res=window.tn.curResolution;var r;if(res<1200){if(res==960){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}if(res==640){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}}if(res==480){r=el.attr('data-field-'+prop+'-res-480-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}}}if(res==320){r=el.attr('data-field-'+prop+'-res-320-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-480-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}}}}}else{r=el.attr('data-field-'+prop+'-value')}return(r)}function t396_elem__renderView(el){tn_console('func: elem__renderView');var fields=el.attr('data-fields');if(!fields){return!1}fields=fields.split(',');for(var i=0;i<fields.length;i++){t396_elem__renderViewOneField(el,fields[i])}}function t396_elem__renderViewOneField(el,field){var value=t396_elem__getFieldValue(el,field);if(field=='left'){value=t396_elem__convertPosition__Local__toAbsolute(el,field,value);el.css('left',parseFloat(value).toFixed(1)+'px')}if(field=='top'){value=t396_elem__convertPosition__Local__toAbsolute(el,field,value);el.css('top',parseFloat(value).toFixed(1)+'px')}if(field=='width'){value=t396_elem__getWidth(el,value);el.css('width',parseFloat(value).toFixed(1)+'px')}if(field=='height'){value=t396_elem__getHeight(el,value);el.css('height',parseFloat(value).toFixed(1)+'px')}if(field=='container'){t396_elem__renderViewOneField(el,'left');t396_elem__renderViewOneField(el,'top')}if(field=='width'||field=='height'||field=='fontsize'||field=='fontfamily'||field=='letterspacing'||field=='fontweight'||field=='img'){t396_elem__renderViewOneField(el,'left');t396_elem__renderViewOneField(el,'top')}}function t396_elem__convertPosition__Local__toAbsolute(el,field,value){value=parseInt(value);if(field=='left'){var el_container,offset_left,el_container_width,el_width;var container=t396_elem__getFieldValue(el,'container');if(container=='grid'){el_container='grid';offset_left=window.tn.grid_offset_left;el_container_width=window.tn.grid_width}else{el_container='window';offset_left=0;el_container_width=window.tn.window_width}var el_leftunits=t396_elem__getFieldValue(el,'leftunits');if(el_leftunits=='%'){value=t396_roundFloat(el_container_width*value/100)}value=offset_left+value;var el_axisx=t396_elem__getFieldValue(el,'axisx');if(el_axisx=='center'){el_width=t396_elem__getWidth(el);value=el_container_width/2-el_width/2+value}if(el_axisx=='right'){el_width=t396_elem__getWidth(el);value=el_container_width-el_width+value}}if(field=='top'){var ab=el.parent();var el_container,offset_top,el_container_height,el_height;var container=t396_elem__getFieldValue(el,'container');if(container=='grid'){el_container='grid';offset_top=parseFloat(ab.attr('data-artboard-proxy-min-offset-top'));el_container_height=parseFloat(ab.attr('data-artboard-proxy-min-height'))}else{el_container='window';offset_top=0;el_container_height=parseFloat(ab.attr('data-artboard-proxy-max-height'))}var el_topunits=t396_elem__getFieldValue(el,'topunits');if(el_topunits=='%'){value=(el_container_height*(value/100))}value=offset_top+value;var el_axisy=t396_elem__getFieldValue(el,'axisy');if(el_axisy=='center'){el_height=t396_elem__getHeight(el);value=el_container_height/2-el_height/2+value}if(el_axisy=='bottom'){el_height=t396_elem__getHeight(el);value=el_container_height-el_height+value}}return(value)}function t396_ab__setFieldValue(ab,prop,val,res){if(res=='')res=window.tn.curResolution;if(res<1200){ab.attr('data-artboard-'+prop+'-res-'+res,val)}else{ab.attr('data-artboard-'+prop,val)}}function t396_ab__getFieldValue(ab,prop){var res=window.tn.curResolution;var r;if(res<1200){if(res==960){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}if(res==640){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}}if(res==480){r=ab.attr('data-artboard-'+prop+'-res-480');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}}}if(res==320){r=ab.attr('data-artboard-'+prop+'-res-320');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-480');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}}}}}else{r=ab.attr('data-artboard-'+prop)}return(r)}function t396_ab__renderViewOneField(ab,field){var value=t396_ab__getFieldValue(ab,field)}function t396_allelems__renderView(ab){tn_console('func: allelems__renderView: abid:'+ab.attr('data-artboard-recid'));ab.find(".tn-elem").each(function(){t396_elem__renderView($(this))})}function t396_ab__filterUpdate(ab){var filter=ab.find('.t396__filter');var c1=filter.attr('data-filtercolor-rgb');var c2=filter.attr('data-filtercolor2-rgb');var o1=filter.attr('data-filteropacity');var o2=filter.attr('data-filteropacity2');if((typeof c2=='undefined'||c2=='')&&(typeof c1!='undefined'&&c1!='')){filter.css("background-color","rgba("+c1+","+o1+")")}else if((typeof c1=='undefined'||c1=='')&&(typeof c2!='undefined'&&c2!='')){filter.css("background-color","rgba("+c2+","+o2+")")}else if(typeof c1!='undefined'&&typeof c2!='undefined'&&c1!=''&&c2!=''){filter.css({background:"-webkit-gradient(linear, left top, left bottom, from(rgba("+c1+","+o1+")), to(rgba("+c2+","+o2+")) )"})}else{filter.css("background-color",'transparent')}}function t396_ab__getHeight(ab,ab_height){if(typeof ab_height=='undefined')ab_height=t396_ab__getFieldValue(ab,'height');ab_height=parseFloat(ab_height);var ab_height_vh=t396_ab__getFieldValue(ab,'height_vh');if(ab_height_vh!=''){ab_height_vh=parseFloat(ab_height_vh);if(isNaN(ab_height_vh)===!1){var ab_height_vh_px=parseFloat(window.tn.window_height*parseFloat(ab_height_vh/100));if(ab_height<ab_height_vh_px){ab_height=ab_height_vh_px}}}return(ab_height)}function t396_hex2rgb(hexStr){var hex=parseInt(hexStr.substring(1),16);var r=(hex&0xff0000)>>16;var g=(hex&0x00ff00)>>8;var b=hex&0x0000ff;return[r,g,b]}String.prototype.t396_replaceAll=function(search,replacement){var target=this;return target.replace(new RegExp(search,'g'),replacement)};function t396_elem__getWidth(el,value){if(typeof value=='undefined')value=parseFloat(t396_elem__getFieldValue(el,'width'));var el_widthunits=t396_elem__getFieldValue(el,'widthunits');if(el_widthunits=='%'){var el_container=t396_elem__getFieldValue(el,'container');if(el_container=='window'){value=parseFloat(window.tn.window_width*parseFloat(parseInt(value)/100))}else{value=parseFloat(window.tn.grid_width*parseFloat(parseInt(value)/100))}}return(value)}function t396_elem__getHeight(el,value){if(typeof value=='undefined')value=t396_elem__getFieldValue(el,'height');value=parseFloat(value);if(el.attr('data-elem-type')=='shape'){var el_heightunits=t396_elem__getFieldValue(el,'heightunits');if(el_heightunits=='%'){var ab=el.parent();var ab_min_height=parseFloat(ab.attr('data-artboard-proxy-min-height'));var ab_max_height=parseFloat(ab.attr('data-artboard-proxy-max-height'));var el_container=t396_elem__getFieldValue(el,'container');if(el_container=='window'){value=parseFloat(ab_max_height*parseFloat(value/100))}else{value=parseFloat(ab_min_height*parseFloat(value/100))}}}else if(el.attr('data-elem-type')=='button'){value=value}else{value=parseFloat(el.innerHeight())}return(value)}function t396_roundFloat(n){n=Math.round(n*100)/100;return(n)}function tn_console(str){if(window.tn_comments==1)console.log(str)}
function t450_showMenu(recid){var el=$('#rec'+recid);$('body').addClass('t450__body_menushowed');el.find('.t450').addClass('t450__menu_show');el.find('.t450__overlay').addClass('t450__menu_show');el.find('.t450__overlay, .t450__close, .t450__list_item, a[href*=#]').click(function(){var url=$(this).attr('href');if(!url||url.substring(0,7)!='#price:'){t450_closeMenu()}});$(document).keydown(function(e){if(e.keyCode==27){$('body').removeClass('t390__body_popupshowed');$('.t390').removeClass('t390__popup_show')}})}
function t450_closeMenu(){$('body').removeClass('t450__body_menushowed');$('.t450').removeClass('t450__menu_show');$('.t450__overlay').removeClass('t450__menu_show')}
function t450_checkSize(recid){var el=$('#rec'+recid).find('.t450');var windowheight=$(window).height()-80;var contentheight=el.find(".t450__top").height()+el.find(".t450__rightside").height();if(contentheight>windowheight){el.addClass('t450__overflowed');el.find(".t450__container").css('height','auto')}}
function t450_appearMenu(recid){var el=$('#rec'+recid);var burger=el.find(".t450__burger_container");burger.each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");var hideoffset=el.attr("data-hideoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.hasClass('t450__beforeready')){el.finish();el.removeClass("t450__beforeready")}}else{el.stop();el.addClass("t450__beforeready")}}
if(hideoffset!=""){if(hideoffset.indexOf('vh')>-1){hideoffset=Math.floor((window.innerHeight*(parseInt(hideoffset)/100)))}
hideoffset=parseInt(hideoffset,10);if($(window).scrollTop()+$(window).height()>=$(document).height()-hideoffset){if(!el.hasClass('t450__beforeready')){el.finish();el.addClass("t450__beforeready")}}else{if(appearoffset!=""){if($(window).scrollTop()>=appearoffset){el.stop();el.removeClass("t450__beforeready")}}else{el.stop();el.removeClass("t450__beforeready")}}}})}
function t450_initMenu(recid){var el=$('#rec'+recid).find('.t450');var hook=el.attr('data-tooltip-hook');if(hook!==''){var obj=$('a[href="'+hook+'"]');obj.click(function(e){t450_closeMenu();t450_showMenu(recid);t450_checkSize(recid);e.preventDefault()})}
$('#rec'+recid).find('.t450__burger_container').click(function(e){t450_closeMenu();t450_showMenu(recid);t450_checkSize(recid)})}
function t570_init(recid){if($(window).width()>750){t570_setMapHeight(recid);$(window).load(function(){t570_setMapHeight(recid)});$(window).resize(function(){t570_setMapHeight(recid)})}}
function t570_setMapHeight(recid){var t570__el=$('#rec'+recid),t570__map=t570__el.find('.t-map');var t570__textwrapper=t570__el.find('.t570__col_text').height();t570__map.css('height',t570__textwrapper)}
function t577_equalHeight(recid){var el=$('#rec'+recid);el.find('.t577').css('visibility','visible');el.find('.t577__textwrapper').css('height','auto');el.find('.t577__descr').css('height','auto');$('#rec'+recid+' .t577__row').each(function(){var highestBox=0;$('.t577__descr',this).each(function(){if($(this).height()>highestBox)highestBox=$(this).height()});if($(window).width()>=960&&$(this).is(':visible')){$('.t577__descr',this).css('height',highestBox)}else{$('.t577__descr',this).css('height',"auto")}});$('#rec'+recid+' .t577__row').each(function(){var highestBox=0;$('.t577__textwrapper',this).each(function(){if($(this).height()>highestBox)highestBox=$(this).height()});if($(window).width()>=960&&$(this).is(':visible')){$('.t577__textwrapper',this).css('height',highestBox)}else{$('.t577__textwrapper',this).css('height',"auto")}})};function t585_init(recid){var el=$('#rec'+recid),toggler=el.find(".t585__header");toggler.click(function(){$(this).toggleClass("t585__opened");$(this).next().slideToggle();if(window.lazy=='y'){t_lazyload_update()}})}