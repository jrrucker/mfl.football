jQuery(document).ready(function() {
    $("th.divpct").text("Div %"), $("th.all_play_wlt").text("All-Play"), $("th.h2hpct").text("%"), 
    $(".myfantasyleague_menu > label span").html('<span class="top-bun"></span><span class="burger"></span><span class="double-burger"></span><span class="bottom-bun"></span>'), 
    $(".reportnavigation:contains('Hint:')").removeClass().addClass("alert alert-info"), 
    $(".reportnavigation:contains('Weekly NFL Injury Status is in this color.')").hide(), 
    $("#body_board_show .page-wrapper").wrapInner('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>'), 
    $("#body_board_show .page-wrapper .addCaption").prepend("<caption><span>Message Board Topics</span></caption>"), 
    $("#body_board_show table span.nav").appendTo("#body_board_show #container-wrap .addCaption caption:first"), 
    $("#body_board_show table th.messageboardbar").eq(1).remove(), $("#body_board_show table caption").eq(1).remove(), 
    $(".playoffbracket").addClass("report"), $(".report").wrap("<div class='report-wrapper'></div>"), 
    $("#outerMFLScoreboardDiv .report-wrapper .report,#lineup-form .report-wrapper .report,#body_board_show .report-wrapper .report-wrapper .report").unwrap(), 
    $(".report-wrapper .report-wrapper .report").unwrap(), $(".myfantasyleague_menu > ul").append('<li class="has-sub sub-default" id="slide-menu-login"><a>Login</a><b aria-haspopup="true" aria-controls="p50"></b><input id="sub50" type="checkbox"><label for="sub50"><span></span></label><ul id="p50"></ul></li>'), 
    $(document).ready(function() {
        var a = baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=WELCOME";
        jQuery.ajax({
            url: a,
            success: function(a) {
                jQuery(a).find("#welcome td a").each(function() {
                    jQuery("#slide-menu-login ul").append('<li><a class="no-sub" href="' + jQuery(this).attr("href") + '">' + $(this).text() + "</a></li>");
                });
            },
            async: !0
        });
    }), $("#body_options_52 td[colspan='3'] table > td").filter(function() {
        var a = $(this).html();
        if ("" == a || " " == a) return !0;
    }).addClass("empty"), $("#message_board_summary caption span").text("Message Board Summary"), 
    $("#owner_activity caption span").text("Owner Activity"), $("#next_weeks_fantasy_schedule caption span").text("H2H Matchups"), 
    $("#last_weeks_fantasy_results caption span").text("H2H Results"), $("#fantasy_recap caption span").text("Game Of The Week Recap"), 
    $("#fantasy_preview caption span").text("Game Of The Week Preview"), $('.commish-link[href*="0000"]').text("Commish"), 
    $(".homepagemodule#trades").text().match([ -8 ]) && $(".homepagemodule#trades").effect("pulsate", {
        times: 3
    }, 5e3), $(".leaguehistorymodule, #Customdraft_makepick, #Customdraft_messages,#Customdraft_draftpicks,#Customdraft_profile,#Customdraft_rostertable").addClass("report-wrapper");
}), jQuery(".tabbed-reports li").on("click", function(a) {
    $(".reports-content>." + a.target.classList[0]).show().siblings().hide();
});

var selector = ".tabbed-reports li";

jQuery(selector).on("click", function() {
    $(this).parent().find("li").removeClass("active"), $(this).parent().find("li").removeClass("current"), 
    $(this).addClass("active");
});