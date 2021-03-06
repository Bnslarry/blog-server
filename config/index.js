const devMode = process.env.NODE_ENV === 'development'

const config = {
    PORT: 6060, // 启动端口
    ADMIN_GITHUB_LOGIN_NAME: 'bnslarry', // 博主的 github 登录的账户名 user
    GITHUB: {
      client_id: '9294e1411d2e59f3567a',
      client_secret: '0297c4717a50db0924f40dd893395479228a79d0',
      access_token_url: 'https://github.com.cnpmjs.org/login/oauth/access_token',
      fetch_user_url: 'https://api.github.com/user', // 用于 oauth2
      fetch_user: 'https://api.github.com/users/' // fetch user url https://api.github.com/users/gershonv
    },
    EMAIL_NOTICE: {
        // 邮件通知服务
        // detail: https://nodemailer.com/
        enable: false, // 开关
        transporterConfig: {
          host: '',
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: '', // generated ethereal user
            pass: '' // generated ethereal password 授权码 而非 密码
          }
        },
        subject: '您的评论获得新的回复！', // 主题
        text: '您的评论获得新的回复！',
        WEB_HOST: '' // email callback url
      },
      TOKEN: {
        secret: 'yuhui-run-lambert-blog', // secret is very important!
        expiresIn: '720h' // token 有效期
      },
      DATABASE: {
        database: 'blog',
        user: 'root',
        password: 'liuyuhui',
        options: {
          host: '172.81.210.155', // 连接的 host 地址
          port: '3360',
          dialect: 'mysql', // 连接到 mysql
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          },
          define: {
            timestamps: false, // 默认不加时间戳
            freezeTableName: true // 表名默认不加 s
          },
          timezone: '+08:00'
        }
      }
    }

    // 部署的环境变量设置
if (!devMode) {
    console.log('env production....')
  
    // ==== 配置数据库
    config.DATABASE = {
      ...config.DATABASE,
      database: 'blog', // 数据库名
      user: 'root', // 账号
      password: 'liuyuhui' // 密码
    }
  
    // 配置 github 授权
    config.GITHUB.client_id = '9294e1411d2e59f3567a'
    config.GITHUB.client_secret = '0297c4717a50db0924f40dd893395479228a79d0'
  
    // ==== 配置 token 密钥
    config.TOKEN.secret = 'yuhui-run-lambert-blog'
  
    // ==== 配置邮箱
  
    // config.EMAIL_NOTICE.enable = true
    config.EMAIL_NOTICE.transporterConfig.auth = {
      user: '', // generated ethereal user
      pass: '' // generated ethereal password 授权码 而非 密码
    }
    config.EMAIL_NOTICE.WEB_HOST = ''
  }
  
  module.exports = config
