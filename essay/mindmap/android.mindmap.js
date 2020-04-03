if (!window.getI18NString) {
    getI18NString = function (s) {
        return s;
    }
}
function HFlexEdgeUI(edge, graph) {
    Q.doSuperConstructor(this, HFlexEdgeUI, arguments);
}
HFlexEdgeUI.prototype = {
    drawEdge: function (path, fromUI, toUI, edgeType, fromBounds, toBounds) {
        var from = fromBounds.center;
        var to = toBounds.center;
        var cx = (from.x + to.x) / 2;
        var cy = (from.y + to.y) / 2;
//        path.curveTo(from.x, cy, cx, to.y);
        path.curveTo(from.x, from.y, cx, to.y);
    }
}

Q.extend(HFlexEdgeUI, Q.EdgeUI);
window.HFlexEdgeUI = HFlexEdgeUI;
Q.loadClassPath(HFlexEdgeUI, "HFlexEdgeUI");

var graph = new Q.Graph(canvas);
graph.editable = true;
graph.enableDoubleClickToOverview = false;

function createEdge(name, from, to) {
    var edge = graph.createEdge(name, from, to);
    edge.setStyle(Q.Styles.ARROW_TO, Q.Consts.SHAPE_TRIANGLE);
    edge.setStyle(Q.Styles.ARROW_TO_SIZE, 5);
    edge.setStyle(Q.Styles.ARROW_TO_FILL_COLOR, "#444");
    edge.setStyle(Q.Styles.ARROW_TO_STROKE, 1);
    edge.setStyle(Q.Styles.ARROW_TO_STROKE_STYLE, "#444");
    edge.uiClass = HFlexEdgeUI;
}

function createText(text, x, y) {
    var node = graph.createNode(text, x, y);
    node.image = null;
    node.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR, "#2898E0");
    node.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_LINEAR, ['#00d4f9', '#1ea6e6'], null, Math.PI / 2));
    node.setStyle(Q.Styles.LABEL_COLOR, "#FFF");
    node.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(5, 10));
    node.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_MIDDLE);
    node.setStyle(Q.Styles.LABEL_BORDER, 0.5);
    node.setStyle(Q.Styles.LABEL_BORDER_STYLE, "#1D4876");
    node.setStyle(Q.Styles.SELECTION_COLOR, "#0F0");
    return node;
}

function localToGlobal(x, y, canvas) {
    x += window.pageXOffset;
    y += window.pageYOffset;
    var clientRect = canvas.getBoundingClientRect();
    return {x: x + clientRect.left, y: y + clientRect.top};
}

var layouter = new Q.TreeLayouter(graph);
layouter.isLayoutable = function (node, from) {
    return node == ROOT || node.host != null;
}
layouter.vGap = 20;

graph.ondblclick = function (evt) {
    var element = graph.getElementByMouseEvent(evt);
    if (element) {
        return;
    }
    var xy = graph.toLogical(evt);
    var newItem = createText(getI18NString('New Project'), xy.x, xy.y);
    graph.selectionModel.select(newItem);
}

graph.interactionDispatcher.addListener(function (evt) {
    if (evt.data == ROOT) {
        return;
    }
    if (evt.kind == Q.InteractionEvent.ELEMENT_MOVING && evt.data) {
        var node = evt.data;
        var host = findNearNode(node);
        if (node.host == host) {
            return;
        }
        if (node.host) {
            unlinkToParent(node);
        }
        if (host) {
            linkToParent(node, host);
        }
    } else if (evt.kind == Q.InteractionEvent.ELEMENT_MOVE_END && evt.data) {
        layouter.doLayout();
    }
})

function atLeft(bounds1, bounds2) {
    if (bounds1.right < bounds2.x) {
        return true;
    }
    if (bounds1.x > bounds2.right) {
        return false;
    }
}
function findNearNode(node) {
    if (node == ROOT) {
        return null;
    }
    var x = node.x;
    var y = node.y;

    var rootBounds = graph.getUIBounds(ROOT);
    var uiBounds = graph.getUIBounds(node);

    var inLeft = atLeft(uiBounds, rootBounds);
    if (inLeft === undefined) {
        if (Q.calculateDistance(x, y, ROOT.x, ROOT.y) > 300) {
            return null;
        }
        return ROOT;
    }

    var nearNode, xDistance;

    graph.forEachVisibleUI(function (ui) {
        var data = ui.data;
        if (!(data instanceof Q.Node) || data == ROOT || data == node || data.isFollow(node)) {
            return;
        }
        var dataAtROOTLeft = data.x < ROOT.x;
        if (dataAtROOTLeft != inLeft) {
            return;
        }
        var dy = Math.abs(y - data.y);
        var dx = Math.abs(x - data.x);
        if (dy < 20 && (xDistance === undefined || xDistance > dx)) {
            xDistance = dx;
            nearNode = data;
        }
    })
    if (!nearNode || xDistance > 200) {
        if (node.host && Q.calculateDistance(x, y, node.host.x, node.host.y) > 300) {
            return null;
        }
        return node.host;
    }
    while (nearNode && inLeft !== atLeft(uiBounds, graph.getUIBounds(nearNode))) {
        nearNode = nearNode.host;
    }
    return nearNode;
}

///init datas
var datas = {
    name: 'Android',
    // DIRECTION_RIGHT, DIRECTION_LEFT, DIRECTION_CENTER
    // DIRECTION_BOTTOM, DIRECTION_TOP, DIRECTION_MIDDLE
    parentChildrenDirection: Q.Consts.DIRECTION_MIDDLE,
    // LAYOUT_TYPE_EVEN, LAYOUT_TYPE_EVEN_HORIZONTAL, LAYOUT_TYPE_EVEN_VERTICAL, LAYOUT_TYPE_TWO_SIDE
    layoutType: Q.Consts.LAYOUT_TYPE_TWO_SIDE,
    children: [
        {
            name: '自定义UI',
            children: [
                {name: 'Measure->Layout->Draw'},
                {
                    name: '工具类',
                    children: [
                        {name: 'ViewDragHelper'},
                        {name: 'ViewConfiguration'}, // 基础参数工具类
                        {name: 'VelocityTracker'}, // 手势速率工具类
                        {name: 'GestureDetector'}, // 手势工具类
                        {name: 'Palette'} // 调色板
                    ]
                }, {
                    name: '热门组件',
                    children: [
                        {name: '流式布局'},
                        {name: 'RecyclerView时间轴'},
                        {name: 'PullToRefresh'}, // 下拉刷新
                    ]
                },
                {name: '事件传递'}

            ]
        },
        {
            name: 'Debug\nOptimize',
            children: [
                {name: 'ADB'},
                {name: 'TraceView'},
                {name: 'HEAP'},
                {name: 'Monkey'},
                {
                    name: 'UI优化',
                    children: [
                        {name: 'HierarchyViewer'},
                        {name: 'LINT'}
                    ]
                },
                {
                    name: 'OOM',
                    children: [
                        {name: 'MAT'},
                        {name: 'onLowMemory, onTrimMemory'},
                        {
                            name: 'Bitmap内存优化', // 微信图片终极压缩方案问题
                            children: [
                                {name: '缩放'},
                                {name: '缓存'},
                                {name: '重用'},
                                {name: 'PNG压缩'}
                            ]
                        }
                    ]
                }, {
                    name: 'ANR',
                    children: [{name: 'data/anr'}]
                }, {
                    name: '电量',
                    children: [
                        {name: 'WakeLock'},
                        {name: 'battery-historian'}
                    ]
                }
            ]
        },
        {
            name: 'NDK',
            children: [
                {name: 'JNI'},
                {name: 'C++'}
            ]
        }, {
            name: '网络',
            children: [
                {name: 'Batching批处理'},
                {name: 'Prefetching预取'},
                {name: 'GCMNetworkManager'},
                {name: 'Network Traffic Tool'}
            ]
        },
        {
            name: '动画',
            children: [
                {name: '属性动画'},
                {
                    name: 'MaterialDesign动画',
                    children: [
                        {name: 'Touch feedback'}, // 触摸反馈
                        {name: 'Reveal effect'}, // 揭露效果
                        {name: 'Activity transitions'}, // Activity转换效果
                        {name: 'Curved motion'}, // 曲线运动
                        {name: 'View state changes'}, // 视图状态改变
                        {
                            name: 'Animate Vector Drawables',  // 矢量动画
                            children: [{name: 'SVG'}]
                        },
                        {name: 'GIF动画引擎'}
                    ]
                }
            ]
        },
        {
            name: '绘图',
            children: [
                {
                    name: 'Paint',
                    children: [
                        {name: 'BitmapShader'}, // 位图渲染
                        {name: 'LinearGradient'}, // 线性渲染
                        {name: 'RadialGradient'}, // 环形渲染
                        {name: 'ComposeShader'} // 组合渲染
                    ]
                },
                {name: 'Xfermode'},
                {
                    name: '滤镜',
                    children: [
                        {name: 'BlurMaskFilter'},
                        {name: 'EmbossMaskFilter'}
                    ]
                },
                {
                    name: '颜色通道过滤',
                    children: [
                        {name: 'ColorMatrixColorFilter'}, // 颜色矩阵过滤
                        {name: 'LightingColorFilter'}, // 曝光颜色过滤
                        {name: 'PorterDuffColorFilter'}, // 图层混合颜色过滤
                    ]
                },
                {
                    name: 'Canvas',
                    children: [
                        {name: '区域切割'},
                        {name: '变换:translate,scale,rotate,skew'},
                        {name: 'save和restore'},
                        {name: '离屏缓冲'},
                        {name: 'PorterDuffColorFilter'}, // 图层混合颜色过滤
                        {
                            name: 'Path',
                            children: [{name: 'PathMeasure'}]
                        }
                    ]
                },
                {name: 'SurfaceView'}
            ]
        },
        {
            name: 'MaterialDesign',
            children: [
                {name: 'NavigationView+DrawerLayout'}, // 主流侧滑实现
                {name: 'CardView'},
                {name: '自定义Behavior'},
                {name: 'Snackbar,Toolbar'},
                {name: 'FloatingActionButton联动动画'},
                {name: 'CoordinatorLayout,CollapsingToolbarLayout'},
                {name: '百分比布局'},
                {name: '沉浸式设计'}
            ]
        },
        {
            name: '应用分发',
            children: [
                {name: 'aapt资源文件打包原理'},
                {name: 'resources_arsc二进制结构'},
                {name: 'Proguard混淆'},
                {name: 'Lint工具优化，极限压缩'}
            ]
        }
    ]
}

function createItem(data, parent, level) {
    if (Q.isArray(data)) {
        var children = data;
        for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i];
            createItem(child, parent, level);
        }
        return;
    }
    var node = createText(data.name); // AZ:node name
    node.tooltipType = "text";
    node.data = data;
    level = level || 0;
    node.level = level;
    if (parent) {
        linkToParent(node, parent);
    }
    node.parentChildrenDirection = data.parentChildrenDirection;
    node.layoutType = data.layoutType;

    if (data.children) {
        createItem(data.children, node, level + 1);
    }
    return node;
}

function linkToParent(node, parent) {
    node.host = parent;
    return createEdge(parent, node);
}
function unlinkToParent(node) {
    node.host = null;
    node.forEachInEdge(function (edge) {
        graph.graphModel.remove(edge);
    });
}

var ROOT = createItem(datas);
ROOT.setStyle(Q.Styles.LABEL_FONT_SIZE, 20);
ROOT.setStyle(Q.Styles.LABEL_SIZE, new Q.Size(80, 60));

graph.callLater(function () {
    layouter.doLayout();
    graph.zoomToOverview();
})
