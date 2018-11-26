$(document).ready(function () {
    function share() {
        if ($(".post-share").length) {
            $(".post-share").share({
                disabled: ['douban', 'diandian'],
                wechatQrcodeTitle: "WeChat Scan",
                wechatQrcodeHelper: "<p>WeChat scan, share in the upper right corner</p>",
                source: "HellCatVN Blog"
            });
        }
    }
    share();
    function aplayerInitialize() {
        $.ajax({
            url: "../music.json",
            success: function (e) {
                const ap = new APlayer({
                    container: document.getElementById("aplayer"),
                    mini: true,
                    fixed: true,
                    autoplay: false,
                    loop: "all",
                    order: "random",
                    preload: "auto",
                    volume: 0.7,
                    mutex: true,
                    listFolded: false,
                    listMaxHeight: "320px",
                    lrcType: 3,
                    music: e
                });
            }
        });
    }
    aplayerInitialize();
    $(".fancybox").fancybox();
})