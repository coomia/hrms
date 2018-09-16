package com.mis.hrm.util;

import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class HttpClientUtilTest {

    @Test
    public void sendGet() {
        //访问百度
        Assert.assertEquals(200, HttpClientUtil.sendGet("http://www.baidu.com"));

        //没有加载“http://”
        Assert.assertEquals(200, HttpClientUtil.sendGet("www.baidu.com"));

        //以全角空格开头和结尾的ｕｒｌ
        Assert.assertEquals(200,HttpClientUtil.sendGet("　　http://baidu.com　"));

        //传入一串半角空格
        Assert.assertEquals(-1,HttpClientUtil.sendGet("     "));

        //传入一串全角空格
        Assert.assertEquals(-1,HttpClientUtil.sendGet("　　　　　　"));

        //传入一个 null
        Assert.assertEquals(-1,HttpClientUtil.sendGet(null));

        //随便传一串字符
        Assert.assertEquals(404, HttpClientUtil.sendGet("http://www.huimsoft.com/x/x.html"));

        //测试任意字符
        Assert.assertEquals(404,HttpClientUtil.sendGet("ff"));

        Assert.assertEquals(404, HttpClientUtil.sendGet("12221"));

        Assert.assertEquals(-1, HttpClientUtil.sendGet("http://"));

        Assert.assertEquals(200, HttpClientUtil.sendGet("www.ba i du.com"));

    }

    @Test
    public void sendPost() {
        //        验证一个正常的操作
        Assert.assertEquals(200, HttpClientUtil.sendPost("123.207.5.56:8080/bonetest/usersession","{\"code\":0,\"message\":\"密码错误，请重试！\",\"object\":null}"));
//　　　　　验证一个ｕｒｌ不正常的
        Assert.assertEquals(404, HttpClientUtil.sendPost("123.207.fdgshjhgfdfnsdession","dfdsfs"));
//    　　　不想写测试代码了
    }

    @Test
    public void sendPut() {
        //请求一个ｐｕｔ类型的参数
        Assert.assertEquals(200,HttpClientUtil.sendPut("http://httpbin.org/put","HELLO WORLD"));

        //请求一个ｇｅｔ类型的参数
        Assert.assertEquals(302, HttpClientUtil.sendPut("www.baidu.com","123"));
    }

    @Test
    public void sendDelete() {
        Assert.assertEquals(200, HttpClientUtil.sendDelete("http://httpbin.org/delete"));

        Assert.assertEquals(302,HttpClientUtil.sendDelete("www.baidu.com"));
    }
}