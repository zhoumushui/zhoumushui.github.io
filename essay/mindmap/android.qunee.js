if (!window.getI18NString) {
    getI18NString = function (s) {
        return s;
    }
}
$(function () {
    var Colors = {
        blue: "#2898E0",
        yellow: "#fcfb9b",
        red: "#E21667",
        dark: "#1D4876",
        gray: "#888"
    }
    var Styles = Q.Styles;
    var Defaults = Q.Defaults;
    Defaults.FONT_FAMILY = "Verdana, sans-serif";
    Defaults.FONT_STYLE = "lighter";
    Defaults.ANIMATION_MAXTIME = 1500;
    Defaults.SELECTION_TOLERANCE = 1;
    var version = Q.version;
    //Q.DefaultStyles[Q.Styles.SHAPE_FILL_COLOR] = null;
    Q.DefaultStyles[Q.Styles.SHAPE_FILL_COLOR] = Q.toColor(0xCCCCCCCC);

    Q.addCSSRule(".maximize", "position: fixed;top: 0px;bottom: 0px;right: 0px;left: 0px;z-index: 1030;height: auto !important;");
//utils
    function byId(id) {
        return document.getElementById(id);
    }

    function getHash() {
        return decodeURI(window.location.hash.replace(/^#\/?/, "")) || "MindMap";
    }

//demos
    var demos = {
        "Basic Demos": [
            {
                name: "MindMap",
                jsfile: "../essay/mindmap/android.mindmap.js"
            }
        ]
    }

    var currentDemo;
    var lastHash;
    var ajdusting = false;

    var canvas = byId("canvas");
    var code_panel = byId("code_panel");

    var demoTree = new Q.DemoTree(demos, byId("demo_list"));
    var demoMap = demoTree.itemMap;

    Object.defineProperties(window, {
        currentDemo: {
            get: function () {
                return currentDemo;
            }
        },
        graph: {
            get: function () {
                return currentDemo && currentDemo.demoInstance
                    && currentDemo.demoInstance.graph;
            }
        }
    });

    var toolbar = Q.createToolbar(window.graph, byId("toolbar"));

    window.addEventListener("hashchange", function () {
        if (window.location.hash !== lastHash) {
            showDemo(getHash());
        }
    }, false);

    // showDemo(getHash());
    showDemo("MindMap");

    ///actions
    $('#btnRunCode').click(function () {
        var code_panel = byId("code_panel");
        var code = code_panel.getValue();
        clearGraph(currentDemo);
        runCode(code);
    })
    $('#about').click(function () {
        showDialog(Q.name, "Version - " + Q.version +
            "<br />Publish Date - " + Q.publishDate +
            "<br />" + Q.about +
            "<br />" + Q.copyright);
    });

    var json_code_panel = document.getElementById("json_code_panel");

    var overview = new Q.Overview(byId('overview'));
    $('#btnOverview').click(function () {
        var visible = !overview.visible;
        overview.setVisible(visible);
        overview.setGraph(visible ? window.graph : null);
    })
    $('#btnJSONClose').click(function () {
        showJSONPanel(false);
    });

//load demo
    var menu = new Q.PopupMenu();

    function runCode(code) {
        if (!currentDemo) {
            return;
        }
        try {
            currentDemo.demoInstance = eval("new function(canvas, Q){\n"
                + code
                + "\ntry{if(graph){this.graph = graph; this.graph.name=currentDemo.name;}\nif(destroy){this.destroy=destroy;}\n}catch(error){}\n"
                + "}(canvas, Q || Qunee);");
            var graph = window.graph;
            if (graph) {
                graph.onkeydown = function (evt) {
                    if (Q.isMetaKey(evt) && evt.keyCode == 70) {
                        Q.stopEvent(evt);
                        focusSearchInput();
                    }
                }
                graph.popupmenu = menu;
                toolbar.setGraph(graph);
            }
            overview.setGraph(overview.visible ? graph : null);
        } catch (error) {
            showError(error);
        }
    }

    function focusSearchInput() {
        $("#search_input").focus();
    }

    function clearGraph(demo) {
        if (!demo.demoInstance) {
            return;
        }
        Q.log("unloadDemo - " + demo.name);
        if (demo.demoInstance.destroy instanceof Function) {
            try {
                demo.demoInstance.destroy();
            } catch (error) {
                delete demo.demoInstance;
                showError(error);
            }
        }
        if (demo.demoInstance.graph) {
            try {
                demo.demoInstance.graph.destroy();
            } catch (error) {
                delete demo.demoInstance.graph;
                delete demo.demoInstance;
                showError(error);
            }
            delete demo.demoInstance.graph;
        }
        delete demo.demoInstance;
    }

// http://stackoverflow.com/questions/3523091/dynamically-loading-javascript-files-and-load-completion-events
    function loadDemo(callBack) {
        if (Q.isArray(currentDemo)) {
            currentDemo.jsfile = "./js/list-demo.js";
        }
        if (!currentDemo.jsfile) {
            callBack();
            return;
        }
        if (currentDemo.code) {
            Q.log("loadDemo - " + currentDemo.name);
            runCode(currentDemo.code);
            callBack();
            if (code_panel.setValue) {
                code_panel.setValue(currentDemo.code);
            } else {
                code_panel.value = currentDemo.code;
            }
            return;
        }
        var demo = currentDemo;
        if (demo.jsfile) {
            Q.loadURL(demo.jsfile + "?v=" + version + (Q.isIE ? Q.randomInt(1000) : ''), function (req) {
                var code = req.responseText;
                if (!code) {
                    return;
                }
                demo.code = code;
                if (demo != currentDemo) {
                    return;
                }
                loadDemo(callBack);
            }, showError, null, false);
            return;
        }
    }

    function unloadDemo(demo) {
        canvas.innerHTML = "";
        code_panel.textContent = "";
        hideDialog();
        if (!demo.demoInstance) {
            return;
        }
        if (demo.demoInstance.graph) {
            var graph = demo.demoInstance.graph;
            var viewport = graph.viewportBounds;
            var scale = graph.scale / 1.6;
            var clip = new Q.Rect(viewport.cx, viewport.cy);
            clip.grow(150 / scale, 200 / scale);
            var imageInfo = graph.exportImage(graph.scale, clip);
            demo.image = imageInfo.data;
        }

        clearGraph(demo);
    }

    function showDemoMask(show) {
        //show mask
        var className = show === false ? "mask" : "mask active";
        var mask_panel = byId("mask_panel");
        mask_panel.className = className;
        if (Q.isIE || document.body.style["pointer-events"] === undefined) {
            var display = show === false ? "none" : "block";
            mask_panel.style.display = display;
        }
    }

    function showDemo(name, callback) {
        var demo = demoMap[name];
        if (!demo) {
            name = "Hello ZMS";
            demo = demoMap[name];
        }
        if (ajdusting || demo == currentDemo) {
            if (callback) {
                callback();
            }
            return false;
        }
        ajdusting = true;

        var oldDemo = currentDemo;
        currentDemo = demo;

        showDemoMask();
        if (oldDemo) {
            unloadDemo(oldDemo);
        }
        var parent = currentDemo.parent;
        for (var n in demoMap) {
            $(demoMap[n].dom).removeClass("active");
        }
        if (currentDemo) {
            $(currentDemo.dom).addClass("active");
            if (parent && parent.dom) {
                $(parent.dom).addClass("active");
            }
        }
        if (name) {
            lastHash = window.location.hash = "#" + name;
        }
        if (!currentDemo) {
            ajdusting = false;
            showDemoMask(false);
            return false;
        }
        setTimeout(function () {
            var afterLoad = function () {
                showDemoMask(false);
                if (callback) {
                    callback();
                }
            }
            loadDemo(function () {
                ajdusting = false;
                if (window.graph) {
                    window.graph.callLater(afterLoad, this, 100);
                } else {
                    afterLoad();
                }
            });
        }, 100);
    }

//dialog
    function showError(error) {
        if (Q.isString(error)) {
            showDialog("Error", error);
            return;
        }
        if (error.stack) {
            showDialog(error.message, error.stack);
        }
    }

    function showDialog(title, content) {
        if (content === undefined) {
            content = title;
            title = null;
        }
        $("#q-message .modal-title").html(title || getI18NString('Message'));
        $("#q-message .modal-body").html(content);
        $('#q-message').modal("show");
    }

    function hideDialog() {
        $('#q-message').modal("hide");
    }

    var list = $("#demo_list").find('li');
    var searchInput = Q.createButton({
        id: 'demo_search_input',
        placeholder: 'Search Demo', iconClass: 'q-icon toolbar-search', type: 'search',
        oninput: function (evt) {
            var value = evt.target.value;
            if (value) {
                var reg = new RegExp(value, 'i');
            }
            Q.forEach(list, function (li) {
                var name = li.data.name;
                if (!value) {
                    li.style.display = '';
                    $(li).removeClass('disabled');
                    return;
                }
                var match = reg.test(name);
                if (match) {
                    $(li).removeClass('disabled');
                } else {
                    $(li).addClass('disabled');
                }
                if (match || Q.isArray(li.data)) {
                    li.style.display = '';
                } else {
                    li.style.display = 'none';
                }
            })
        },
        search: function (value, info) {
            if (!value) {
                return;
            }
            var result = [];
            var reg = new RegExp(value, 'i');
            Q.forEach(list, function (li) {
                var name = li.data.name;
                if (reg.test(name)) {
                    result.push(li);
                }
            })
            return result;
        }, select: function (li) {
            showDemo(li.data.name);
        }
    });
    searchInput.style.width = '100%';
    document.getElementById('demo_search').appendChild(searchInput);
});

$(function () {
    var scrollAtTop;

    function checkScroll() {
        var atTop = $(window).scrollTop() < 20;
        if (scrollAtTop === atTop) {
            return;
        }
        scrollAtTop = atTop;
        if (scrollAtTop) {
            $('header').removeClass('scroll');
        } else {
            $('header').addClass('scroll');
        }
    }

    $(window).scroll(function (evt) {
        checkScroll();
    });
    checkScroll();
})


if (window.navigator.userAgent.indexOf('Chrome/49.0.2623.87')) {
    window.addEventListener('focus', function () {
        if (!window.graph) {
            return;
        }
        var canvasPanel = graph.canvasPanel;
        canvasPanel.style.width = '99%';
        graph.updateViewport();
        setTimeout(function () {
            canvasPanel.style.width = null;
            graph.updateViewport();
        }, 1000)
    }, false);
}
