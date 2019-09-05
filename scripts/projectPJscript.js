function update(argument) {
	$("iframe").contents().find("html").html(
		"<html><head><style type='text/css'>"
		+$("#csspanel").val()+
		"</style></head><body>"
		+$("#htmlpanel").val()+
		"</body></html>"
	);	
	document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
};

$(".button").hover(function(){
	$(this).addClass("highlightedbutton");
},
function(){
	$(this).removeClass("highlightedbutton");
});

$(".button").click(function(){
	$(this).toggleClass("active");
	$(this).removeClass("highlightedbutton");
	var panelid = $(this).attr("id")+"panel";
	$("#"+panelid).toggleClass("hidden");
	var activepanel=4-$(".hidden").length;
	$(".panel").width(($(window).width()/activepanel) - 10);

});

$(".panel").width(($(window).width()/2) - 10);

$("textarea").height($(window).height() - $("#header").height()-30);

$("iframe").height($(window).height() - $("#header").height()-30);

$("iframe").contents().find("html").html($("#htmlpanel").val());

update();

$("textarea").on('change keyup paste',function () {
	update();
});