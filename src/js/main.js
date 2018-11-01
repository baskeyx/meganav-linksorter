'use strict';
window.linkSorter = (function(){
    var v = "1.8.3"; // jquery version
    // check prior inclusion and version
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
        script.onload = script.onreadystatechange = function(){
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                loadJQUI();
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        loadJQUI();
    }

    function loadJQUI() {
        var done = false;
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
        script.onload = script.onreadystatechange = function(){
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                init();
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
        // stylesheet
        var jqst=document.createElement('link');
        jqst.rel='stylesheet';
        jqst.media='all';
        jqst.href='https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css';
        document.getElementsByTagName('head')[0].appendChild(jqst);
    }

    function init(){
        (window.bookmarklet = function(){
            console.log('Meganav Link Sorting Helper initiliased...')

            function onDrop() {
                console.log('Dropped')
                var targetTable = $('.row-fluid.editable.active-el form table tbody');
                var rows = targetTable.find('tr')
                rows.each(function(i){
                    var el = $(this);
                    var html = el.html();
                    // update html
                    html = html.replace(/Content_.*?_/g,'Content_'+i+'_');
                    html = html.replace(/Content\[.*?\]/g,'Content['+i+']');
                    el.html(html)
                    // set order hidden input values
                    var order = el.find('td').first().find('input.text-box').prev();
                    if (order.length){
                        order.val(i+1);
                    }
                })
            }

            $('.module-preview .baseline').live('click',function(e){
                var targetTable = $('.row-fluid.editable.active-el form table tbody');
                targetTable.sortable({
                    axis: 'y',
                    items: 'tr',
                    cursor: 'move',
                    update: function(item) {
                        onDrop()
                    }
                })
            })

            $('input[type=submit]').live('click', function(){
                setTimeout(function(){
                    var targetTable = $('.row-fluid.editable.active-el form table tbody');
                    targetTable.sortable({
                        axis: 'y',
                        items: 'tr',
                        cursor: 'move',
                        update: function(item) {
                            onDrop()
                        }
                    })
                },2000)
            })

        })()
    }

})();
