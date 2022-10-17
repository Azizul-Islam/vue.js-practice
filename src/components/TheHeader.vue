<template>
    <div class="header">
        <div>
            <input type="text" class="header_search" placeholder="Search...">
        </div>
        <div class="avatar_wrapper">
            <div class="avatar">A</div>
        </div>
    </div>
</template>

<style>
    .header{
        padding: 9px 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
    }
    .header_search{
        width: 555px;
    }
    .header a{
        color: rgb(233,168,27);
    }
    .avatar-wrapper{
        position: relative;
    }
    .avatar{
        width: 33px;
        height: 33px;
        background-color: rgb(48, 15, 15);
        border-radius: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
    }
</style>