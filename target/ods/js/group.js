$(document).ready(function () {
   $('#changename').click(function(){
       var url = 'changeNickName?newName=' + $('#newname').val() +'&groupId=' +$('#groupid').val();
       $.get(url,function(data){
          if(data==true){
              alert('恭喜您,修改昵称成功!');
          }else
            alert('修改失败!小组中存在重复的昵称');
       });
   });

    $('#addmember').click(function () {
        var url = 'inviteMember?memberName=' + $('#membername').val() + '&groupId=' + $('#groupid').val();
        $.get(url, function (data) {
             if(data==0){
                 alert('已向该用户发送邀请通知,请等待对方回应');
             }else if(data==1) {
                 alert('目标用户已经在小组中,请勿重新邀请!');
             }else
                alert('邀请失败,请检查所输入用户名是否存在!');
        });
    });

    $('#order').submit(function () {
        if(confirm('是否要提交订单,系统将为所有组员发送邮件消息!')){
            //获取订餐类型
            var values = $("[name='ordertype']");
            for(var i=0;i<values.length;i++){
                if(values[i].checked)
                    var orderType = i;
            }
            var url = "createOrder";
            $.post(url,{
                groupId:$('#groupid').val(),
                orderType:orderType,
                orderUrl:$('#orderurl').val(),
                orderMark:$('#ordermark').val()
            },function(data){
                if(data==true)
                    alert('成功向所有组员发送邮件!请耐心等待组员选择!');
                else
                    alert('未知错误,请联系管理员!');
            });
        }
            return false;
    });


});