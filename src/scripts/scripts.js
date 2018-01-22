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
        $('body').animate({right: '75%'}, 200);
        $('.pa-set-sidebar').show();
        $('.pa-case').show();
        
    });
    $('.pa-case').click(function() {
        $('body').animate({right: '0'}, 200);
        $('.pa-set-sidebar').hide();
        $('.pa-case').hide();
    });
};

$(function () {
    $('.pa-header__nav-inner').each(function () {
        var location = window.location.href
        var link = this.href
        var result = location.match(link);
        if(result != null) {
            $(this).addClass('pa-header__nav-inner-active');
        }
    });
});

$(function () {
    $('.pa-set-sidebar__nav-link_set').each(function () {
        var location = window.location.href
        var link = this.href
        var result = location.match(link);
        if(result != null) {
            $(this).addClass('pa-set-sidebar__nav-link_set-active');
        }
    });
});

$(function () {
    $('.nav-link__nav-inner_footer').each(function () {
        var location = window.location.href
        var link = this.href
        var result = location.match(link);
        if(result != null) {
            $(this).addClass('nav-link__nav-inner_footer-active');
        }
    });
});

$(document).ready(site);
