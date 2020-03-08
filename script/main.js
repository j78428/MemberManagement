// JavaScript Document

$(document).ready(function(e) {


    /****** ToolTip 觸發 ******/
    $("[data-toggle='tooltip']").tooltip();


    /****** 弹出框功能初始化 ******/
    $(function() {
        $('[data-toggle="popover"]').popover();
    });




    /*********** sort icon設定 ***********/

    /*-----搜尋結果用-----*/
    $(".result_table button.sort_change").click(function(e) {
        var sort_status = $(this).val();
        if (sort_status == 0) {
            $(".result_table button.sort_change").removeClass("sorting_asc");
            $(".result_table button.sort_change").removeClass("sorting_desc");
            $(".result_table button.sort_change").val(0);
            $(this).addClass("sorting_asc");
            $(this).val(1);
        } else if (sort_status == 1) {
            $(this).removeClass("sorting_asc");
            $(this).addClass("sorting_desc");
            $(this).val(2);
        } else if (sort_status == 2) {
            $(this).addClass("sorting_asc");
            $(this).removeClass("sorting_desc");
            $(this).val(1);
        }

    });




    /************ 開/關批次處理功能區塊 ************/

    /*----- 公司明細 - 群組批次處理 ----*/
    
    /*單一選擇*/
    $(".item_list .check_item").change(function(e) {
        var checked = false;
        $('.item_list .check_item').each(function() {
            if ($(this).prop('checked') == true) {
                checked = true;
            }
        });

        if (checked) {
            $(".item_list .function_block").fadeIn(30);
            $(".member_item_list .mask").fadeIn();
        } else {
            $(".item_list .function_block").fadeOut(30);
            $('#GroupItemAll').prop('checked', false);
            $(".member_item_list .mask").fadeOut();
        }
    });
    /*選擇全部*/
    $('#GroupItemAll').on('click', function() {
            $('.item_list .check_item').prop('checked', $('#GroupItemAll').prop('checked'));

            if ($('#GroupItemAll').prop('checked')) {
                $(".item_list .function_block").fadeIn(30);
                $(".member_item_list .mask").fadeIn();
            } else {
                $(".item_list .function_block").fadeOut(30);
                $(".member_item_list .mask").fadeOut();
            }
        })
        /*取消選取*/
    $('.function_block .btn_cancel_all').on('click', function() {
        $('.item_list .check_item').prop('checked', false);
        $(".item_list .function_block").fadeOut(30);
        $('#GroupItemAll').prop('checked', false);
        $(".member_item_list .mask").fadeOut();
    })





    /*----- 公司明細 - 會員批次處理 ----*/

    /*單一選擇*/
    $(".member_item_list .check_item").change(function(e) {
        var checked = false;
        $('.member_item_list .check_item').each(function() {
            if ($(this).prop('checked') == true) {
                checked = true;
            }
        });

        if (checked) {
            $(".member_item_list .function_block").fadeIn(50);
            $(".item_list .mask").fadeIn();
        } else {
            $(".member_item_list .function_block").fadeOut(50);
            $('#CheckAll').prop('checked', false);
            $(".item_list .mask").fadeOut();
        }
    });
    /*選擇全部*/
    $('#CheckAll').on('click', function() {
            $('.member_item_list .check_item').prop('checked', $('#CheckAll').prop('checked'));

            if ($('#CheckAll').prop('checked')) {
                $(".member_item_list .function_block").fadeIn(50);
                $(".item_list .mask").fadeIn();
            } else {
                $(".member_item_list .function_block").fadeOut(50);
                $(".item_list .mask").fadeOut();
            }
        })
        /*取消選取*/
    $('.function_block .btn_cancel_all').on('click', function() {
        $('.member_item_list .check_item').prop('checked', false);
        $(".member_item_list .function_block").fadeOut(50);
        $('#CheckAll').prop('checked', false);
        $(".item_list .mask").fadeOut();
    })




    /****** 編輯表單 - 更多欄位 顯示/隱藏 *******/
    $(".show_field").click(function() {

        var block_status = $(this).siblings(".other_field").css("display");
        var control_block = $(this).siblings(".other_field");

        if (block_status == "none") {
            $(control_block).slideDown();
            $(this).text("隱藏更多欄位");
        } else {
            $(control_block).slideUp();
            $(this).text("顯示更多欄位");
        }
    });



    /************ 關閉提示訊息 ************/
    $(".remove_notice").click(function(e) {
        $(this).parents(".notice_box").fadeOut(200);
    });







    /************ 偵測視窗高度 ************/
    var Window_h = $(window).height();
    var CompnayCommon_h = 66 + 57 + 25;
    var MemberCommon_h = 50 + 57 + 25;
    var MemberBlock_h = Window_h - MemberCommon_h;
    var CompanyBlock_h = Window_h - CompnayCommon_h;

    
    /* 公司信用額度表 */
    var CompanyDealsTable_h = CompanyBlock_h - 50 - 68 - 22;
    $(".company_content .deals_item_list").css("min-height", CompanyBlock_h);
    $(".company_content .deals_item_list .table_body").css("min-height", CompanyMembersTable_h);
    $(window).resize(function() {
        var Window_h = $(window).height();
        var CompanyBlock_h = Window_h - CompnayCommon_h;
        var CompanyDealsTable_h = CompanyBlock_h - 50 - 68 - 22;
        $(".company_content .deals_item_list").css("min-height", CompanyBlock_h);
        $(".company_content .deals_item_list .table_body").css("min-height", CompanyMembersTable_h);
    });



    /* 公司銀行列表 */
    var CompanyBankTable_h = CompanyBlock_h - 45 - 49;
    $(".company_content .bank_item_list").css("min-height", CompanyBlock_h);
    $(".company_content .bank_item_list .table_body").css("min-height", CompanyMembersTable_h);
    $(window).resize(function() {
        var Window_h = $(window).height();
        var CompanyBlock_h = Window_h - CompnayCommon_h;
        var CompanyBankTable_h = CompanyBlock_h - 45 - 49;
        $(".company_content .bank_item_list").css("min-height", CompanyBlock_h);
        $(".company_content .bank_item_list .table_body").css("min-height", CompanyMembersTable_h);
    });

    /* 公司信用卡列表 */
    var CreditCardTable_h = CompanyBlock_h - 45 - 49;
    $(".company_content .credit_card_list").css("min-height", CompanyBlock_h);
    $(".company_content .credit_card_list .table_body").css("min-height", CompanyMembersTable_h);
    $(window).resize(function() {
        var Window_h = $(window).height();
        var CompanyBlock_h = Window_h - CompnayCommon_h;
        var CreditCardTable_h = CompanyBlock_h - 45 - 49;
        $(".company_content .credit_card_list").css("min-height", CompanyBlock_h);
        $(".company_content .credit_card_list .table_body").css("min-height", CompanyMembersTable_h);
    });



    /* 公司會員群組表 */
    var CompanyGroupTable_h = CompanyBlock_h - 54;
    $(".company_content .item_list").css("min-height", CompanyBlock_h);
    $(".company_content .item_list .group_list").css("min-height", CompanyGroupTable_h);
    $(window).resize(function() {
        var Window_h = $(window).height();
        var CompanyBlock_h = Window_h - CompnayCommon_h;
        var CompanyGroupTable_h = CompanyBlock_h - 54;
        $(".company_content .item_list").css("min-height", CompanyBlock_h);
        $(".company_content .item_list .group_list").css("min-height", CompanyGroupTable_h);
    });


    /* 公司會員列表 */
    var CompanyMembersTable_h = CompanyBlock_h - 50 - 63 - 41;
    $(".company_content .member_item_list").css("min-height", CompanyBlock_h);
    $(".company_content .member_item_list .table_body").css("min-height", CompanyMembersTable_h);
    $(window).resize(function() {
        var Window_h = $(window).height();
        var CompanyBlock_h = Window_h - CompnayCommon_h;
        var CompanyMembersTable_h = CompanyBlock_h - 50 - 63 - 41;
        $(".company_content .member_item_list").css("min-height", CompanyBlock_h);
        $(".company_content .member_item_list .table_body").css("min-height", CompanyMembersTable_h);
    });




    /* 會員來往紀錄表 */
    var MemberRecordTable_h = MemberBlock_h - 50 - 36;
    $(".member_content .record_item_list").css("min-height", MemberBlock_h);
    $(".member_content .record_item_list .table_body").css("min-height", MemberRecordTable_h);
    $(window).resize(function() {
        var Window_h = $(window).height();
        var MemberBlock_h = Window_h - MemberCommon_h;
        var MemberRecordTable_h = MemberBlock_h - 50 - 36;
        $(".member_content .record_item_list").css("min-height", MemberBlock_h);
        $(".member_content .record_item_list .table_body").css("min-height", MemberRecordTable_h);
    });


});


/****** datepicker setting *******/
$.datepicker.regional['zh-TW'] = {
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    prevText: "上月",
    nextText: "次月",
    weekHeader: "週"
};
//將預設語系設定為中文
$.datepicker.setDefaults($.datepicker.regional["zh-TW"]);

$(function() {
    $(".birthday").datepicker({
        maxDate: '0',
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        yearRange: "-150:+0"
    });
    $("#StartDate1").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        onClose: function(selectedDate) {
            $("#ToDate").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#EndDate1").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        onClose: function(selectedDate) {
            $("#FromDate").datepicker("option", "maxDate", selectedDate);
        }
    });
    $(".valid_date").datepicker({
        minDate: '0',
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy/mm/dd'
    });
});

function initPassportValid(){
    $(".valid_date").datepicker({
        minDate: '0',
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy/mm/dd'
    });
}