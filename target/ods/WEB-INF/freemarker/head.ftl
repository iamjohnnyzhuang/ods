<div class="ods-wrapper">
    <nav class="navbar">
        <div class=" navbar-collapse">
            <ul>
                <li class="active"><a href="/gotoIndex">首页</a></li>
            </ul>
            <ul class="navbar-right">
                <li><input type="text" id="searchGroup" placeholder="输入搜索小组的名字"/>
                    <input type="button" id="search" value="搜索小组"/></li>
                <li><a href='#'>${curUser.userName!""}</a></li>
                <li class="message"><a href="javascript:void(0)">消息<span class="badge" id="newsMessageNum"></span></a>

                    <div class="message-show" id="message">
                        <div class="message-triangle"></div>
                        <div class="message-details"></div>
                    </div>
                </li>
                <li><a href="/loginOut">注销</a></li>
            </ul>
        </div>
    </nav>
</div>

