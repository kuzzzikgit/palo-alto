$(document).ready(function () {
    retriveData();
});

function retriveData() {
    var dataSource = './mockapi/getAllArticles.json';
    jQuery.getJSON(dataSource, renderDataVisualsTemplate);
};

function renderDataVisualsTemplate(data){
    renderHandlebarsTemplate('./article.hbs', '#articles', data);
};

function getTemplateAjax(path, callback) {
    var source, template;
    jQuery.ajax({
        url: path,
        success: function (data) {
            source = data;
            template = Handlebars.compile(source);
            if (callback) callback(template);
        }
    });
};

function renderHandlebarsTemplate(withTemplate,inElement,withData){
    getTemplateAjax(withTemplate, function(template) {
        jQuery(inElement).html(template(withData));
    })
};

var site = function() {
    $('.set').click(function() {
        $('.pa-set-sidebar').animate({right: '0'}, 200);
        $('body').animate({right: '300px'}, 200);
        $('.pa-case').animate({right: '300'}, 200);
        $('.pa-case').show();
    });
};

    $('.pa-case').click(function(){
        $('.pa-set-sidebar').animate({right: "-250px"}, 200);
        $('body').animate({right: "0px"}, 200);
        $('.pa-case').css({right: "0px"});
        $('.pa-case').hide();
    })
 
$(document).ready(site);
