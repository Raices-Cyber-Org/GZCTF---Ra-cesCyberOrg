﻿using System;

namespace CTFServer.Models.Internal;

/// <summary>
/// 账户策略
/// </summary>
public class AccountPolicy
{
    /// <summary>
    /// 允许用户注册
    /// </summary>
    public bool AllowRegister { get; set; } = true;
    /// <summary>
    /// 注册时直接激活账户
    /// </summary>
    public bool ActiveOnRegister { get; set; } = false;
    /// <summary>
    /// 使用谷歌验证码校验
    /// </summary>
    public bool UseGoogleRecaptcha { get; set; } = true;
    /// <summary>
    /// 注册、更换邮箱、找回密码需要邮件确认
    /// </summary>
    public bool EmailConfirmationRequired { get; set; } = true;
}

public class SmtpConfig
{
    public string? Host { get; set; } = "127.0.0.1";
    public ushort? Port { get; set; } = 587;
    public bool? EnableSsl { get; set; } = true;
}

public class EmailConfig
{
    public string? UserName { get; set; } = string.Empty;
    public string? Password { get; set; } = string.Empty;
    public string? SendMailAddress { get; set; } = string.Empty;
    public SmtpConfig? Smtp { get; set; } = new();
}

public class DockerConfig
{
    public string Uri { get; set; } = string.Empty;
    public string PublicIP { get; set; } = "127.0.0.1";
}

public class RecaptchaConfig
{
    public string? Secretkey { get; set; }
    public string? SiteKey { get; set; }
    public string VerifyAPIAddress { get; set; } = "https://www.recaptcha.net/recaptcha/api/siteverify";
    public float RecaptchaThreshold { get; set; } = 0.5f;
}