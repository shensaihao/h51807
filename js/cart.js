"use strict";require(["config"],function(){require(["jquery","header","template","ceiling","booNavigation","footer","jquerycookie"],function(h,t,n){new Promise(function(t,i){h("header").load("/html/component/header.html",function(){t()}),h("footer").load("/html/component/footer.html")}).then(function(){h("header").ceiling("xiding")}).then(function(){h("#booNavigation").booNavigation({slideSpeed:600,fadeSpeed:400,delay:500})}).then(function(){t.login()}).then(function(){var t=[];h.cookie("cart")&&(t=JSON.parse(h.cookie("cart")));var i=n("cart_template",{cart_data:t});h("#allProduct").html(i);var c=0;function o(){c=0,h(".s_xiaoji").each(function(){c+=parseInt(h(this).html())}),h(".sum_price").html(c)}function r(){h(".s_xiaoji").each(function(){var t=h(this).parents(".cart_pro_item").find(".pro_number").html(),i=h(this).parents(".cart_pro_item").find(".cart_pro_prices").html();h(this).html(t*i)})}r(),o();var a=0;h(".pro_sub").click(function(){if(a=parseInt(h(this).next().html()),--a<1)a=1;else{h(this).next().html(a);var e=JSON.parse(h.cookie("cart")),n=h(this).attr("data-id");e.forEach(function(t,i){t.id==n&&(e[i].num=a)}),h.cookie("cart",JSON.stringify(e),{path:"/",expires:7});var t=h(this).parents(".cart_pro_item").find("input");console.log(t[0]),t[0].checked?(r(),o()):r()}}),h(".pro_add").click(function(){a=parseInt(h(this).prev().html()),a++,h(this).prev().html(a);var e=JSON.parse(h.cookie("cart")),n=h(this).attr("data-id");e.forEach(function(t,i){t.id==n&&(e[i].num=a)}),h.cookie("cart",JSON.stringify(e),{path:"/",expires:7}),h(this).parents(".cart_pro_item").find("input")[0].checked?(r(),o()):r()});var e=h("#allProduct input").length;h("#allInput").change(function(){this.checked?(h("#allProduct input").each(function(){this.checked=!0}),e=h("#allProduct input").length,r(),o()):(h("#allProduct input").each(function(){this.checked=!1}),e=0,h(".sum_price").html(0),c=0)}),h("#allProduct input").each(function(){h(this).change(function(){console.log(this);var t=parseInt(h(this).parents(".cart_pro_item").find(".s_xiaoji").html());this.checked?(e++,c+=parseInt(t)):(e--,c=h(".sum_price").html()-t),h(".sum_price").html(c),e===h("#allProduct input").length?h("#allInput")[0].checked=!0:h("#allInput")[0].checked=!1})}),h(".remove").click(function(){if(confirm("确定删除吗？")){var t=h(this).parents(".cart_pro_item");t.hide();var i=t.find(".s_xiaoji").html();if(t.find(".cart_pro_thumb").find("input")[0].checked){c-=i,h(".sum_price").html(c);var e=JSON.parse(h.cookie("cart")),n=h(this).attr("data-id");e.forEach(function(t,i){t.id==n&&e.splice(i,1)}),t.remove(),h.cookie("cart",JSON.stringify(e),{path:"/",expires:7}),console.log(h.cookie("cart"))}}})}).then(function(){})})});