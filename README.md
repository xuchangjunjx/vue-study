# 自定义报表实现思路

>通过前后端分离-前端展示和数据完全分开。
使用Vue作为前端框架,将常用HTML组件封装成模块,将复杂的前台界面以简单的形式模块化,使用时按需加载既可以。
做到一次封装，重复使用。

## 1.前台到后台还是后台到前台?
>自定义报表之所以称之为自定义,就是在上面都不知道的前提下,通过一系列的操作
达到报表的功能。关键在于2点：1前台展示,2数据来源。

## 2.基于元数据的数据驱动形式

>设计元数据 决定前端展示和数据来源。<br/>
1.我们认为表字段的可以作为前端组件展示,比如一个No我们可以认为是一个input,
一个p_code我们认为是一个select。但是这种方式有一个缺点,所有的东西都是基于元数据,
一变则万变。一个数据无法同时作为多个类型展示。<br>
2.元数据构造查询。报表数据由查询SQL决定，而一个SQL又可以拆分成三部分：
1.select,2.from,3,where. select 部分由数据展示的表格决定,表格的表头即select需要的字段。
from部分则是数据来源的数据库表.where部分则是查询表单决定。

## 3.实现报表
