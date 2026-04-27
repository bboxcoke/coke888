// ===== Multi-Language Support =====
const LANG = {
  cn: {
    'loading': '加载中...',
    'no_data': '暂无数据',
    'confirm': '确认',
    'cancel': '取消',
    'menu': '菜单',
    'menu_home': '首页',
    'menu_slots': '老虎机',
    'menu_fishing': '捕鱼游戏',
    'menu_deposit': '充值',
    'menu_withdraw': '提现',
    'menu_transactions': '交易记录',
    'menu_promotions': '优惠活动',
    'menu_user': '个人中心',
    'menu_contact': '联系客服',
    'menu_settings': '设置',
    'menu_admin': '后台管理',
    'home': '首页',
    'hot_slots': '热门老虎机',
    'view_all': '查看全部',
    'fishing_games': '捕鱼游戏',
    'arcade_games': '街机游戏',
    'menu_friends': '推荐好友',
    'slots': '老虎机',
    'fishing': '捕鱼游戏',
    'arcade': '街机游戏',
    'deposit': '充值',
    'withdraw': '提现',
    'transactions': '交易记录',
    'promotions': '优惠活动',
    'my_account': '个人中心',
    'contact': '客服',
    'settings': '设置',
    'admin': '后台管理',
    'not_logged_in': '未登录',
    'balance': '余额',
    'login': '登录',
    'logout': '退出登录',
    'register': '注册',
    'username': '用户名',
    'password': '密码',
    'phone': '手机号',
    'enter_username': '请输入用户名',
    'enter_password': '请输入密码',
    'enter_phone': '请输入手机号',
    'forgot_pwd': '忘记密码？',
    'no_account': '还没有账号？立即注册',
    'has_account': '已有账号？立即登录',
    'reg_title': '用户注册',
    'get_code': '获取验证码',
    'set_password': '设置密码',
    'confirm_password': '确认密码',
    'user_info': '用户信息',
    'user_id': '用户ID',
    'reg_time': '注册时间',
    'change_pwd': '修改密码',
    'old_pwd': '旧密码',
    'new_pwd': '新密码',
    'confirm_new_pwd': '确认新密码',
    'change_btn': '修改密码',
    'deposit_title': '在线充值',
    'select_payment': '选择支付方式',
    'amount': '金额',
    'enter_amount': '请输入充值金额',
    'quick_amount': '快速金额',
    'submit_deposit': '提交充值',
    'account_info': '账户信息',
    'recipient': '收款人',
    'account_no': '账号',
    'withdraw_title': '提现',
    'available_balance': '可提现余额',
    'current_turnover': '当前流水',
    'withdraw_amount': '提现金额',
    'select_method': '选择提现方式',
    'submit_withdraw': '提交提现',
    'withdraw_all': '全部提现',
    'all': '全部',
    'order_no': '订单号',
    'method': '方式',
    'status': '状态',
    'time': '时间',
    'pending': '待处理',
    'completed': '已完成',
    'failed': '已失败',
    'view_more': '查看更多',
    'lang_settings': '语言设置',
    'forgot_password_title': '忘记密码',
    'forgot_password_desc': '请输入您的用户名，密码将重置为 888888',
    'forgot_password_btn': '重置密码',
    'forgot_pwd_username_placeholder': '请输入用户名',
    'footer_about': '关于我们',
    'footer_terms': '服务条款',
    'footer_privacy': '隐私政策',
    'footer_copyright': '© 2026 Coke 888. All Rights Reserved.',
    'settings_title': 'Settings',
    'settings_language': 'Language',
    'settings_sound': 'Sound Effects',
    'settings_change_pwd': 'Change Password',
    'settings_old_pwd_label': 'Old Password',
    'settings_old_pwd_placeholder': 'Enter old password',
    'settings_new_pwd_label': 'New Password',
    'settings_new_pwd_placeholder': 'Enter new password',
    'settings_confirm_pwd_label': 'Confirm Password',
    'settings_confirm_pwd_placeholder': 'Re-enter new password',
    'settings_change_btn': 'Change Password',
    'contact_title': 'Contact Us',
    'contact_header_title': 'Online Customer Service',
    'contact_header_desc': '24/7 Always Here For You',
    'contact_tg': 'Telegram',
    'contact_service_hours': 'Service: 24 Hours',
    'promotions_title': 'Promotions',
    'promotions_page_title': 'Promotions',
    'slots_page_title': 'Slots',
    'slots_all': 'All',
    'fishing_page_title': 'Fishing Games',
    'deposit_status_pending': 'Pending',
    'deposit_status_done': 'Completed',
    'deposit_status_failed': 'Failed',
    'forgot_password_title': 'Forgot Password',
    'forgot_password_desc': 'Enter your username, password will be reset to 888888',
    'forgot_password_btn': 'Reset Password',
    'forgot_pwd_username_placeholder': 'Enter username',
    'game_title_slots': 'Slots',
    'game_title_fishing': 'Fishing',
    'game_title_arcade': 'Arcade',
    // Game names
    '财富之王': 'Fortune King',
    '埃及宝藏': 'Egypt Treasure',
    '龙之宝藏': 'Dragon Treasure',
    '超级777': 'Super 777',
    '黄金之路': 'Golden Road',
    '水果乐园': 'Fruit Paradise',
    '海盗宝藏': 'Pirate Treasure',
    '魔法森林': 'Magic Forest',
    '财富轮盘': 'Fortune Wheel',
    '闪电老虎': 'Lightning Tiger',
    '亚洲之虎': 'Asian Tiger',
    '钻石之星': 'Diamond Star',
    '招财进宝': 'Bring Wealth',
    '福禄寿': 'Fortune Longevity',
    '金猴送福': 'Golden Monkey',
    '富贵花开': 'Prosperity Bloom',
    '捕鱼达人': 'Fishing Master',
    '海底世界': 'Underwater World',
    '黄金鱼': 'Golden Fish',
    '深海猎手': 'Deep Sea Hunter',
    '鱼王争霸': 'King Fish Battle',
    '珊瑚宝藏': 'Coral Treasure',
    '鲨鱼攻击': 'Shark Attack',
    '海洋之星': 'Ocean Star',
    '赛车风云': 'Racing Storm',
    '射击高手': 'Shooting Master',
    '水果忍者': 'Fruit Ninja',
    '拳皇争霸': 'King of Fighters',
    '飞机大战': 'Plane War',
    '弹球大师': 'Pinball Master',
    // Game names
    '财富之王': '财富之王',
    '埃及宝藏': '埃及宝藏',
    '龙之宝藏': '龙之宝藏',
    '超级777': '超级777',
    '黄金之路': '黄金之路',
    '水果乐园': '水果乐园',
    '海盗宝藏': '海盗宝藏',
    '魔法森林': '魔法森林',
    '财富轮盘': '财富轮盘',
    '闪电老虎': '闪电老虎',
    '亚洲之虎': '亚洲之虎',
    '钻石之星': '钻石之星',
    '招财进宝': '招财进宝',
    '福禄寿': '福禄寿',
    '金猴送福': '金猴送福',
    '富贵花开': '富贵花开',
    '捕鱼达人': '捕鱼达人',
    '海底世界': '海底世界',
    '黄金鱼': '黄金鱼',
    '深海猎手': '深海猎手',
    '鱼王争霸': '鱼王争霸',
    '珊瑚宝藏': '珊瑚宝藏',
    '鲨鱼攻击': '鲨鱼攻击',
    '海洋之星': '海洋之星',
    '赛车风云': '赛车风云',
    '射击高手': '射击高手',
    '水果忍者': '水果忍者',
    '拳皇争霸': '拳皇争霸',
    '飞机大战': '飞机大战',
    '弹球大师': '弹球大师',
    'settings_title': '设置',
    'settings_language': '语言设置',
    'settings_sound': '音效',
    'settings_change_pwd': '修改密码',
    'settings_old_pwd_label': '原密码',
    'settings_old_pwd_placeholder': '请输入原密码',
    'settings_new_pwd_label': '新密码',
    'settings_new_pwd_placeholder': '请输入新密码',
    'settings_confirm_pwd_label': '确认新密码',
    'settings_confirm_pwd_placeholder': '请再次输入新密码',
    'settings_change_btn': '修改密码',
    'contact_title': '联系客服',
    'contact_header_title': '在线客服',
    'contact_header_desc': '24/7 全天候为您服务',
    'contact_tg': 'Telegram',
    'contact_service_hours': '服务时间: 24小时',
    'promotions_title': '优惠活动',
    'promotions_page_title': '优惠活动',
    'slots_page_title': '老虎机',
    'slots_all': '全部',
    'fishing_page_title': '捕鱼游戏',
    'transactions_title': '交易记录',
    'transactions_tab_all': '全部',
    'transactions_tab_deposit': '充值',
    'transactions_tab_withdraw': '提现',
    'transactions_empty': '暂无交易记录',
    'transactions_empty_btn': '立即充值',
    'nav_home': '首页',
    'nav_promotions': '优惠',
    'nav_deposit': '充值',
    'nav_contact': '客服',
    'nav_user': '我的',
    'online_service': '在线客服',
    'tg_service': 'Telegram客服',
    'service_hours': '客服工作时间: 24/7',
    'about': '关于我们',
    'terms': '服务条款',
    'privacy': '隐私政策',
    'copyright': '版权所有',
    'all_rights': 'Coke 888 保留所有权利',
    'provider': '提供商',
    'play': '开始游戏',
    'login_success': '登录成功！欢迎回来',
    'login_welcome': '欢迎回来',
    'login_subtitle': '请登录您的账户',
    'login_username_label': '用户名',
    'login_username_placeholder': '请输入用户名',
    'login_password_label': '密码',
    'login_password_placeholder': '请输入密码',
    'login_btn': '登录',
    'login_register_link': '还没有账号？立即注册',
    'login_forgot_link': '忘记密码？',
    'reg_success': '🎉 注册成功！',
    'reg_title': '注册新账号',
    'reg_subtitle': '立即加入赢取大奖',
    'reg_phone_label': '手机号',
    'reg_phone_placeholder': '请输入手机号',
    'reg_username_label': '用户名',
    'reg_username_placeholder': '请设置用户名',
    'reg_password_label': '密码',
    'reg_password_placeholder': '请设置密码',
    'reg_confirm_label': '确认密码',
    'reg_confirm_placeholder': '请再次输入密码',
    'reg_code_placeholder': '验证码',
    'reg_get_code': '获取验证码',
    'reg_btn': '注册',
    'reg_login_link': '已有账号？立即登录',
    'pwd_changed': '✅ 密码修改成功',
    'logout_success': '已退出登录',
    'enter_uname_pwd': '请输入用户名和密码',
    'fill_all': '请填写完整信息',
    'pwd_not_match': '两次密码不一致',
    'pwd_min_6': '密码不能少于6位',
    'wrong_uname_pwd': '账号或密码错误',
    'user_frozen': '账号已被冻结',
    'deposit_submitted': '充值申请已提交，等待审核',
    'deposit_title': '在线充值',
    'deposit_balance_label': '账户余额',
    'deposit_status_pending': '待处理',
    'deposit_status_done': '已完成',
    'deposit_status_failed': '已失败',
    'deposit_payment_label': '选择支付方式',
    'deposit_payment_placeholder': '请选择支付方式',
    'deposit_bank': '收款银行',
    'deposit_account': '收款账号',
    'deposit_holder': '收款人',
    'deposit_amount_label': '充值金额',
    'deposit_amount_placeholder': '最少 2,000 MMK',
    'deposit_submit_btn': '提交充值',
    'deposit_screenshot_label': '转账截图',
    'deposit_upload_text': '点击上传转账截图',
    'withdraw_submitted': '提现申请已提交，等待审核',
    'withdraw_title': '提现',
    'withdraw_balance_label': '账户余额',
    'withdraw_turnover_label': '当前流水',
    'withdraw_available_label': '可提现金额',
    'withdraw_method_label': '提现方式',
    'withdraw_method_placeholder': '请选择提现方式',
    'withdraw_account_label': '收款账号',
    'withdraw_account_placeholder': '请输入收款账号',
    'withdraw_amount_label': '提现金额',
    'withdraw_amount_placeholder': '最少 10,000 MMK',
    'withdraw_submit_btn': '提交提现',
    'withdraw_note': '* 提现需完成当前流水要求方可提款',
    'user_balance_label': '账户余额',
    'user_deposit_btn': '充值',
    'user_withdraw_btn': '提现',
    'user_quick_deposit': '充值记录',
    'user_quick_deposit_desc': '快速查看充值历史',
    'user_quick_withdraw': '提现记录',
    'user_quick_withdraw_desc': '快速查看提现历史',
    'user_menu_deposit': '充值',
    'user_menu_withdraw': '提现',
    'user_menu_transactions': '交易记录',
    'user_menu_changepwd': '修改密码',
    'user_menu_bank': '银行卡管理',
    'user_menu_vip': 'VIP等级',
    'user_menu_commission': '佣金系统',
    'user_menu_settings': '设置',
    'user_menu_logout': '退出登录',
    'pwd_reset_to': '密码已重置为 888888，请登录后修改',
    'user_not_found': '用户不存在',
    'lang_switched': '语言已切换为',
    'dashboard': '管理仪表盘',
    'user_mgmt': '用户管理',
    'deposit_mgmt': '充值管理',
    'withdraw_mgmt': '提现管理',
    'total_users': '总用户数',
    'total_deposits': '总充值',
    'total_withdrawals': '总提现',
    'online_now': '当前在线',
    'today_reg': '今日注册',
    'today_dep': '今日充值',
    'today_wit': '今日提现',
    'active_7d': '7日活跃',
    'search': '搜索',
    'approve': '通过',
    'reject': '拒绝',
    'action': '操作',
    'update_balance': '更新余额',
    'enter_new_balance': '输入新余额',
    'balance_updated': '余额已更新',
    'user_status': '用户状态',
    'filter': '筛选',
    'marquee_text': '🎉 欢迎来到Coke888 新人送首充送200%福利',
    'page_title': 'Coke 888 | 最佳线上娱乐',
    'banner1_title': '首存红利',
    'banner1_desc': '首次存款 100% 奖励<br>最高 500,000 MMK',
    'banner1_cta': '立即领取',
    'banner2_title': '每日返水',
    'banner2_desc': '每日最高 1.5% 返水<br>不限游戏种类',
    'banner2_cta': '查看详情',
    'banner3_title': 'VIP俱乐部',
    'banner3_desc': '尊享专属特权<br>更高返水、更快提款',
    'banner3_cta': '升级VIP',
    'hot_games': '热门游戏',
    'poker_games': '扑克游戏',
    'novelty_games': '新奇游戏',
  },
  en: {
    'loading': 'Loading...',
    'no_data': 'No data',
    'confirm': 'Confirm',
    'cancel': 'Cancel',
    'menu': 'Menu',
    'menu_home': 'Home',
    'menu_slots': 'Slots',
    'menu_fishing': 'Fishing',
    'menu_deposit': 'Deposit',
    'menu_withdraw': 'Withdraw',
    'menu_transactions': 'Transactions',
    'menu_promotions': 'Promotions',
    'menu_user': 'My Account',
    'menu_contact': 'Contact Us',
    'menu_settings': 'Settings',
    'menu_admin': 'Admin',
    'home': 'Home',
    'hot_slots': 'Hot Slots',
    'view_all': 'View All',
    'fishing_games': 'Fishing Games',
    'arcade_games': 'Arcade Games',
    'menu_friends': 'Refer Friends',
    'slots': 'Slots',
    'fishing': 'Fishing',
    'arcade': 'Arcade',
    'deposit': 'Deposit',
    'withdraw': 'Withdraw',
    'transactions': 'Transactions',
    'promotions': 'Promotions',
    'my_account': 'My Account',
    'contact': 'Contact Us',
    'settings': 'Settings',
    'admin': 'Admin',
    'not_logged_in': 'Not logged in',
    'balance': 'Balance',
    'login': 'Login',
    'logout': 'Logout',
    'register': 'Register',
    'username': 'Username',
    'password': 'Password',
    'phone': 'Phone',
    'enter_username': 'Enter username',
    'enter_password': 'Enter password',
    'enter_phone': 'Enter phone number',
    'forgot_pwd': 'Forgot password?',
    'no_account': "Don't have an account? Register",
    'has_account': 'Already have an account? Login',
    'reg_title': 'Register',
    'get_code': 'Get Code',
    'set_password': 'Set password',
    'confirm_password': 'Confirm password',
    'user_info': 'User Info',
    'user_id': 'User ID',
    'reg_time': 'Registered',
    'change_pwd': 'Change Password',
    'old_pwd': 'Old Password',
    'new_pwd': 'New Password',
    'confirm_new_pwd': 'Confirm New Password',
    'change_btn': 'Change',
    'deposit_title': 'Deposit',
    'select_payment': 'Select Payment',
    'amount': 'Amount',
    'enter_amount': 'Enter amount',
    'quick_amount': 'Quick Amount',
    'submit_deposit': 'Deposit',
    'account_info': 'Account Info',
    'recipient': 'Recipient',
    'account_no': 'Account No.',
    'withdraw_title': 'Withdraw',
    'available_balance': 'Available',
    'current_turnover': 'Turnover',
    'withdraw_amount': 'Withdraw Amount',
    'select_method': 'Select Method',
    'submit_withdraw': 'Withdraw',
    'withdraw_all': 'Withdraw All',
    'all': 'All',
    'order_no': 'Order No.',
    'method': 'Method',
    'status': 'Status',
    'time': 'Time',
    'pending': 'Pending',
    'completed': 'Completed',
    'failed': 'Failed',
    'view_more': 'View More',
    'lang_settings': 'Language',
    'online_service': 'Online Service',
    'tg_service': 'Telegram',
    'service_hours': '24/7 Customer Service',
    'about': 'About Us',
    'terms': 'Terms',
    'privacy': 'Privacy',
    'copyright': 'Copyright',
    'all_rights': 'Coke 888 All Rights Reserved',
    'provider': 'Provider',
    'play': 'Play',
    'reg_title': 'Register',
    'reg_subtitle': 'Join now and win big prizes',
    'reg_phone_label': 'Phone',
    'reg_phone_placeholder': 'Enter phone number',
    'reg_username_label': 'Username',
    'reg_username_placeholder': 'Set a username',
    'reg_password_label': 'Password',
    'reg_password_placeholder': 'Set a password',
    'reg_confirm_label': 'Confirm Password',
    'reg_confirm_placeholder': 'Re-enter password',
    'reg_code_placeholder': 'Verification code',
    'reg_get_code': 'Get Code',
    'reg_btn': 'Register',
    'reg_login_link': 'Already have an account? Login',
    'login_success': 'Login successful! Welcome back',
    'login_welcome': 'Welcome back',
    'login_subtitle': 'Please login to your account',
    'login_username_label': 'Username',
    'login_username_placeholder': 'Enter username',
    'login_password_label': 'Password',
    'login_password_placeholder': 'Enter password',
    'login_btn': 'Login',
    'login_register_link': "Don't have an account? Register",
    'login_forgot_link': 'Forgot password?',
    'reg_success': '🎉 Registered successfully!',
    'pwd_changed': '✅ Password changed',
    'logout_success': 'Logged out',
    'enter_uname_pwd': 'Enter username and password',
    'fill_all': 'Please fill in all fields',
    'pwd_not_match': 'Passwords do not match',
    'pwd_min_6': 'Password must be at least 6 characters',
    'wrong_uname_pwd': 'Wrong username or password',
    'user_frozen': 'Account has been frozen',
    'deposit_title': 'Deposit',
    'deposit_balance_label': 'Balance',
    'deposit_payment_label': 'Payment Method',
    'deposit_payment_placeholder': 'Select payment method',
    'deposit_bank': 'Bank',
    'deposit_account': 'Account',
    'deposit_holder': 'Recipient',
    'deposit_amount_label': 'Amount',
    'deposit_amount_placeholder': 'Min 2,000 MMK',
    'deposit_submit_btn': 'Submit Deposit',
    'deposit_screenshot_label': 'Transfer Screenshot',
    'deposit_upload_text': 'Upload transfer screenshot',
    'deposit_submitted': 'Deposit submitted, pending approval',
    'withdraw_title': 'Withdraw',
    'withdraw_balance_label': 'Balance',
    'withdraw_turnover_label': 'Turnover',
    'withdraw_available_label': 'Available',
    'withdraw_method_label': 'Method',
    'withdraw_method_placeholder': 'Select method',
    'withdraw_account_label': 'Account',
    'withdraw_account_placeholder': 'Enter account number',
    'withdraw_amount_label': 'Amount',
    'withdraw_amount_placeholder': 'Min 10,000 MMK',
    'withdraw_submit_btn': 'Submit Withdrawal',
    'withdraw_note': '* Turnover requirements must be met before withdrawal',
    'withdraw_submitted': 'Withdrawal submitted, pending approval',
    'user_balance_label': 'Balance',
    'user_deposit_btn': 'Deposit',
    'user_withdraw_btn': 'Withdraw',
    'user_quick_deposit': 'Deposit Records',
    'user_quick_deposit_desc': 'View deposit history',
    'user_quick_withdraw': 'Withdrawal Records',
    'user_quick_withdraw_desc': 'View withdrawal history',
    'user_menu_deposit': 'Deposit',
    'user_menu_withdraw': 'Withdraw',
    'user_menu_transactions': 'Transactions',
    'user_menu_changepwd': 'Change Password',
    'user_menu_bank': 'Bank Card',
    'user_menu_vip': 'VIP Level',
    'user_menu_commission': 'Commission',
    'user_menu_settings': 'Settings',
    'user_menu_logout': 'Logout',
    'pwd_reset_to': 'Password reset to 888888. Please login and change it.',
    'user_not_found': 'User not found',
    'lang_switched': 'Language changed to',
    'dashboard': 'Dashboard',
    'user_mgmt': 'Users',
    'deposit_mgmt': 'Deposits',
    'withdraw_mgmt': 'Withdrawals',
    'total_users': 'Total Users',
    'total_deposits': 'Total Deposits',
    'total_withdrawals': 'Total Withdrawals',
    'online_now': 'Online Now',
    'today_reg': "Today's Registrations",
    'today_dep': "Today's Deposits",
    'today_wit': "Today's Withdrawals",
    'active_7d': '7-Day Active',
    'search': 'Search',
    'approve': 'Approve',
    'reject': 'Reject',
    'action': 'Action',
    'update_balance': 'Update Balance',
    'enter_new_balance': 'Enter new balance',
    'balance_updated': 'Balance updated',
    'user_status': 'Status',
    'filter': 'Filter',
    'marquee_text': '🎉 Welcome to Coke888 New users get 200% bonus on first deposit',
    'page_title': 'Coke 888 | Best Online Casino',
    'banner1_title': 'First Deposit Bonus',
    'banner1_desc': '100% First Deposit Bonus<br>Up to 500,000 MMK',
    'banner1_cta': 'Claim Now',
    'banner2_title': 'Daily Rebate',
    'banner2_desc': 'Up to 1.5% Daily Rebate<br>All Games Included',
    'banner2_cta': 'View Details',
    'banner3_title': 'VIP Club',
    'banner3_desc': 'Exclusive VIP Privileges<br>Higher Rebate, Faster Withdrawal',
    'banner3_cta': 'Upgrade VIP',
    'hot_games': 'Hot Games',
    'poker_games': 'Poker Games',
    'novelty_games': 'Novelty Games',
  },
  mm: {
    'loading': 'ဝန်ဆောင်နေသည်...',
    'no_data': 'ဒေတာမရှိပါ',
    'confirm': 'အတည်ပြု',
    'cancel': 'ပယ်ဖျက်',
    'menu': 'မီနူး',
    'menu_home': 'မူလစာမျက်နှာ',
    'menu_slots': 'စလော့ဂိမ်း',
    'menu_fishing': 'ငါးဖမ်းဂိမ်း',
    'menu_deposit': 'ငွေသွင်း',
    'menu_withdraw': 'ငွေထုတ်',
    'menu_transactions': 'ငွေလွှဲမှတ်တမ်း',
    'menu_promotions': 'ပရိုမိုးရှင်း',
    'menu_user': 'ကိုယ်ပိုင်စာမျက်နှာ',
    'menu_contact': 'ဆက်သွယ်ရန်',
    'menu_settings': 'ဆက်တင်',
    'menu_admin': 'စီမံခန့်ခွဲရေး',
    'home': 'ပင်မ',
    'hot_slots': 'လူကြိုက်များစလော့',
    'view_all': 'အားလုံးကြည့်ရန်',
    'fishing_games': 'ငါးဖမ်းဂိမ်းများ',
    'arcade_games': 'အာကိတ်ဂိမ်းများ',
    'menu_friends': 'သူငယ်ချင်းများဖိတ်ရန်',
    'slots': 'စလော့ဂိမ်း',
    'fishing': 'ငါးဖမ်းဂိမ်း',
    'arcade': 'အာကိတ်ဂိမ်း',
    'deposit': 'ငွေသွင်း',
    'withdraw': 'ငွေထုတ်',
    'transactions': 'ငွေလွှဲမှတ်တမ်း',
    'promotions': 'ပရိုမိုးရှင်း',
    'my_account': 'အကောင့်',
    'contact': 'အက်မင်',
    'settings': 'ဆက်တင်',
    'admin': 'စီမံခန့်ခွဲရေး',
    'not_logged_in': 'အကောင့်မဝင်ရသေး',
    'balance': 'လက်ကျန်',
    'login': 'အကောင့်ဝင်ရန်',
    'logout': 'ထွက်ရန်',
    'register': 'စာရင်းသွင်းရန်',
    'username': 'အသုံးပြုသူအမည်',
    'password': 'စကားဝှက်',
    'phone': 'ဖုန်းနံပါတ်',
    'enter_username': 'အသုံးပြုသူအမည်ထည့်ပါ',
    'enter_password': 'စကားဝှက်ထည့်ပါ',
    'enter_phone': 'ဖုန်းနံပါတ်ထည့်ပါ',
    'forgot_pwd': 'စကားဝှက်မေ့နေပါသလား?',
    'no_account': 'အကောင့်မရှိသေးဘူးလား? စာရင်းသွင်းပါ',
    'has_account': 'အကောင့်ရှိပြီးသားလား? အကောင့်ဝင်ရန်',
    'reg_title': 'စာရင်းသွင်းရန်',
    'get_code': 'ကုဒ်ရယူရန်',
    'set_password': 'စကားဝှက်သတ်မှတ်ပါ',
    'confirm_password': 'စကားဝှက်အတည်ပြု',
    'user_info': 'အသုံးပြုသူအချက်အလက်',
    'user_id': 'အသုံးပြုသူအိုင်ဒီ',
    'reg_time': 'စာရင်းသွင်းသည့်နေ့',
    'change_pwd': 'စကားဝှက်ပြောင်းရန်',
    'old_pwd': 'စကားဝှက်ဟောင်း',
    'new_pwd': 'စကားဝှက်အသစ်',
    'confirm_new_pwd': 'စကားဝှက်အသစ်အတည်ပြု',
    'change_btn': 'ပြောင်းလဲရန်',
    'deposit_title': 'ငွေသွင်းရန်',
    'select_payment': 'ငွေပေးချေမှုရွေးပါ',
    'amount': 'ပမာဏ',
    'enter_amount': 'ပမာဏထည့်ပါ',
    'quick_amount': 'အမြန်ပမာဏ',
    'submit_deposit': 'ငွေသွင်းရန်',
    'account_info': 'အကောင့်အချက်အလက်',
    'recipient': 'လက်ခံသူ',
    'account_no': 'အကောင့်နံပါတ်',
    'withdraw_title': 'ငွေထုတ်',
    'available_balance': 'ထုတ်နိုင်သောလက်ကျန်',
    'current_turnover': 'လည်ပတ်ငွေ',
    'withdraw_amount': 'ငွေထုတ်ပမာဏ',
    'select_method': 'ငွေထုတ်နည်းရွေးပါ',
    'submit_withdraw': 'ငွေထုတ်ရန်',
    'withdraw_all': 'အားလုံးထုတ်',
    'all': 'အားလုံး',
    'order_no': 'မှာယူမှုနံပါတ်',
    'method': 'နည်းလမ်း',
    'status': 'အခြေအနေ',
    'time': 'အချိန်',
    'pending': 'ဆောင်ရွက်ဆဲ',
    'completed': 'ပြီးစီး',
    'failed': 'မအောင်မြင်',
    'view_more': 'ပိုမိုကြည့်ရှုရန်',
    'lang_settings': 'ဘာသာစကား',
    'online_service': 'အွန်လိုင်းဝန်ဆောင်မှု',
    'tg_service': 'တယ်လီဂရမ်',
    'service_hours': '၂၄နာရီဝန်ဆောင်မှု',
    'about': 'ကျွန်ုပ်တို့အကြောင်း',
    'terms': 'ဝန်ဆောင်မှုစည်းမျဉ်း',
    'privacy': 'ကိုယ်ရေးအချက်အလက်မူဝါဒ',
    'copyright': 'မူပိုင်ခွင့်',
    'all_rights': 'Coke 888 မူပိုင်ခွင့်အားလုံး',
    'provider': 'ဝန်ဆောင်မှုပေးသူ',
    'play': 'ကစားရန်',
    'reg_title': 'စာရင်းသွင်းရန်',
    'reg_subtitle': 'ချက်ချင်းပူးပေါင်းပြီး ဆုကြီးများရယူပါ',
    'reg_phone_label': 'ဖုန်းနံပါတ်',
    'reg_phone_placeholder': 'ဖုန်းနံပါတ်ထည့်ပါ',
    'reg_username_label': 'အသုံးပြုသူအမည်',
    'reg_username_placeholder': 'အသုံးပြုသူအမည်ထည့်ပါ',
    'reg_password_label': 'စကားဝှက်',
    'reg_password_placeholder': 'စကားဝှက်ထည့်ပါ',
    'reg_confirm_label': 'စကားဝှက်အတည်ပြု',
    'reg_confirm_placeholder': 'စကားဝှက်ပြန်ထည့်ပါ',
    'reg_code_placeholder': 'အတည်ပြုကုဒ်',
    'reg_get_code': 'ကုဒ်ရယူရန်',
    'reg_btn': 'စာရင်းသွင်းရန်',
    'reg_login_link': 'အကောင့်ရှိပြီးသားလား? အကောင့်ဝင်ရန်',
    'login_success': 'အကောင့်ဝင်ရန် အောင်မြင်',
    'login_welcome': 'ပြန်လည်ကြိုဆိုပါတယ်',
    'login_subtitle': 'သင့်အကောင့်သို့ဝင်ရောက်ပါ',
    'login_username_label': 'အသုံးပြုသူအမည်',
    'login_username_placeholder': 'အသုံးပြုသူအမည်ထည့်ပါ',
    'login_password_label': 'စကားဝှက်',
    'login_password_placeholder': 'စကားဝှက်ထည့်ပါ',
    'login_btn': 'အကောင့်ဝင်ရန်',
    'login_register_link': 'အကောင့်မရှိသေးဘူးလား? စာရင်းသွင်းပါ',
    'login_forgot_link': 'စကားဝှက်မေ့နေပါသလား?',
    'reg_success': '🎉 စာရင်းသွင်းခြင်း အောင်မြင်',
    'pwd_changed': '✅ စကားဝှက်ပြောင်းလဲခြင်း အောင်မြင်',
    'logout_success': 'ထွက်ရန် အောင်မြင်',
    'enter_uname_pwd': 'အသုံးပြုသူအမည်နှင့် စကားဝှက်ထည့်ပါ',
    'fill_all': 'အချက်အလက်အားလုံးဖြည့်ပါ',
    'pwd_not_match': 'စကားဝှက်များတူညီမှုမရှိပါ',
    'pwd_min_6': 'စကားဝှက်အနည်းဆုံး ၆လုံး',
    'wrong_uname_pwd': 'အသုံးပြုသူအမည် သို့မဟုတ် စကားဝှက်မှားနေပါသည်',
    'user_frozen': 'အကောင့်ကို ပိတ်ထားပါသည်',
    'deposit_title': 'ငွေသွင်းရန်',
    'deposit_balance_label': 'လက်ကျန်',
    'deposit_payment_label': 'ငွေပေးချေမှုရွေးပါ',
    'deposit_payment_placeholder': 'ငွေပေးချေမှုရွေးပါ',
    'deposit_bank': 'ဘဏ်',
    'deposit_account': 'အကောင့်',
    'deposit_holder': 'လက်ခံသူ',
    'deposit_amount_label': 'ပမာဏ',
    'deposit_amount_placeholder': 'အနည်းဆုံး ၂,၀၀၀ MMK',
    'deposit_submit_btn': 'ငွေသွင်းရန်',
    'deposit_screenshot_label': 'ငွေလွှဲဖန်သားပြင်ဓာတ်ပုံ',
    'deposit_upload_text': 'ငွေလွှဲဖန်သားပြင်ဓာတ်ပုံတင်ရန်',
    'deposit_submitted': 'ငွေသွင်းရန် တင်ပြပြီးပြီ၊ စောင့်ဆိုင်းပါ',
    'withdraw_title': 'ငွေထုတ်',
    'withdraw_balance_label': 'လက်ကျန်',
    'withdraw_turnover_label': 'လည်ပတ်ငွေ',
    'withdraw_available_label': 'ထုတ်နိုင်သောလက်ကျန်',
    'withdraw_method_label': 'ငွေထုတ်နည်း',
    'withdraw_method_placeholder': 'ငွေထုတ်နည်းရွေးပါ',
    'withdraw_account_label': 'အကောင့်',
    'withdraw_account_placeholder': 'အကောင့်နံပါတ်ထည့်ပါ',
    'withdraw_amount_label': 'ပမာဏ',
    'withdraw_amount_placeholder': 'အနည်းဆုံး ၁၀,၀၀၀ MMK',
    'withdraw_submit_btn': 'ငွေထုတ်ရန်',
    'withdraw_note': '* ငွေထုတ်ရန်အတွက် လည်ပတ်ငွေသတ်မှတ်ချက်ပြည့်မီရန် လိုအပ်ပါသည်',
    'withdraw_submitted': 'ငွေထုတ်ရန် တင်ပြပြီးပြီ၊ စောင့်ဆိုင်းပါ',
    'user_balance_label': 'လက်ကျန်',
    'user_deposit_btn': 'ငွေသွင်း',
    'user_withdraw_btn': 'ငွေထုတ်',
    'user_quick_deposit': 'ငွေသွင်းမှတ်တမ်း',
    'user_quick_deposit_desc': 'ငွေသွင်းမှတ်တမ်းကြည့်ရန်',
    'user_quick_withdraw': 'ငွေထုတ်မှတ်တမ်း',
    'user_quick_withdraw_desc': 'ငွေထုတ်မှတ်တမ်းကြည့်ရန်',
    'user_menu_deposit': 'ငွေသွင်း',
    'user_menu_withdraw': 'ငွေထုတ်',
    'user_menu_transactions': 'မှတ်တမ်း',
    'user_menu_changepwd': 'စကားဝှက်ပြောင်း',
    'user_menu_bank': 'ဘဏ်ကတ်',
    'user_menu_vip': 'VIP အဆင့်',
    'user_menu_commission': 'ကော်မရှင်',
    'user_menu_settings': 'ဆက်တင်',
    'user_menu_logout': 'ထွက်ရန်',
    'pwd_reset_to': 'စကားဝှက်ကို 888888 သို့ ပြန်လည်သတ်မှတ်ပြီးပါပြီ',
    'user_not_found': 'အသုံးပြုသူမရှိပါ',
    'lang_switched': 'ဘာသာစကားပြောင်းလဲပြီးပါပြီ',
    'dashboard': 'ဒက်ရှ်ဘုတ်',
    'user_mgmt': 'အသုံးပြုသူများ',
    'deposit_mgmt': 'ငွေသွင်းစီမံခန့်ခွဲမှု',
    'withdraw_mgmt': 'ငွေထုတ်စီမံခန့်ခွဲမှု',
    'total_users': 'စုစုပေါင်းအသုံးပြုသူ',
    'total_deposits': 'စုစုပေါင်းငွေသွင်း',
    'total_withdrawals': 'စုစုပေါင်းငွေထုတ်',
    'online_now': 'လက်ရှိအွန်လိုင်း',
    'today_reg': 'ယနေ့စာရင်းသွင်း',
    'today_dep': 'ယနေ့ငွေသွင်း',
    'today_wit': 'ယနေ့ငွေထုတ်',
    'active_7d': '၇ရက်လှုပ်ရှားမှု',
    'search': 'ရှာဖွေ',
    'approve': 'အတည်ပြု',
    'reject': 'ငြင်းပယ်',
    'action': 'လုပ်ဆောင်ချက်',
    'update_balance': 'လက်ကျန်ပြင်ဆင်ရန်',
    'enter_new_balance': 'လက်ကျန်အသစ်ထည့်ပါ',
    'balance_updated': 'လက်ကျန်ပြင်ဆင်ပြီးပါပြီ',
    'user_status': 'အခြေအနေ',
    'filter': 'စစ်ထုတ်',
    'forgot_password_title': 'စကားဝှက်မေ့နေပါသလား',
    'forgot_password_desc': 'သင့်အသုံးပြုသူအမည်ထည့်ပါ၊ စကားဝှက်ကို 888888 သို့ပြန်လည်သတ်မှတ်ပါမည်',
    'forgot_password_btn': 'စကားဝှက်ပြန်လည်သတ်မှတ်ရန်',
    'forgot_pwd_username_placeholder': 'အသုံးပြုသူအမည်ထည့်ပါ',
    'footer_about': 'ကျွန်ုပ်တို့အကြောင်း',
    'footer_terms': 'ဝန်ဆောင်မှုစည်းမျဉ်း',
    'footer_privacy': 'ကိုယ်ရေးအချက်အလက်မူဝါဒ',
    'footer_copyright': '© 2026 Coke 888. မူပိုင်ခွင့်အားလုံး',
    'settings_title': 'ဆက်တင်',
    'settings_language': 'ဘာသာစကား',
    'settings_sound': 'အသံ',
    'settings_change_pwd': 'စကားဝှက်ပြောင်းရန်',
    'settings_old_pwd_label': 'စကားဝှက်အဟောင်း',
    'settings_old_pwd_placeholder': 'စကားဝှက်အဟောင်းထည့်ပါ',
    'settings_new_pwd_label': 'စကားဝှက်အသစ်',
    'settings_new_pwd_placeholder': 'စကားဝှက်အသစ်ထည့်ပါ',
    'settings_confirm_pwd_label': 'စကားဝှက်အတည်ပြု',
    'settings_confirm_pwd_placeholder': 'စကားဝှက်အသစ်ပြန်ထည့်ပါ',
    'settings_change_btn': 'စကားဝှက်ပြောင်းရန်',
    'contact_title': 'ဆက်သွယ်ရန်',
    'contact_header_title': 'အွန်လိုင်းဖောက်သည်ဝန်ဆောင်မှု',
    'contact_header_desc': '၂၄နာရီ အဆင်သင့်ရှိ',
    'contact_tg': 'တယ်လီဂရမ်',
    'contact_service_hours': 'ဝန်ဆောင်မှု: ၂၄နာရီ',
    'promotions_title': 'ပရိုမိုးရှင်းများ',
    'promotions_page_title': 'ပရိုမိုးရှင်းများ',
    'slots_page_title': 'စလော့ဂိမ်းများ',
    'slots_all': 'အားလုံး',
    'fishing_page_title': 'ငါးဖမ်းဂိမ်းများ',
    'deposit_status_pending': 'စောင့်ဆိုင်း',
    'deposit_status_done': 'ပြီးဆုံး',
    'deposit_status_failed': 'မအောင်မြင်',
    'game_title_slots': 'စလော့ဂိမ်း',
    'game_title_fishing': 'ငါးဖမ်းဂိမ်း',
    'game_title_arcade': 'အာကိတ်ဂိမ်း',
    'marquee_text': '🎉 Coke888 မှကြိုဆိုပါတယ် ပထမဆုံးငွေသွင်းလျှင် ၂၀၀% ဘောနပ်စ်',
    'page_title': 'Coke 888 | အကောင်းဆုံးအွန်လိုင်းကာစီနို',
    'banner1_title': 'ပထမအကြိမ်ငွေသွင်းဘောနပ်စ်',
    'banner1_desc': 'ပထမအကြိမ်ငွေသွင်း 100% ဘောနပ်စ်<br>အများဆုံး ၅၀၀,၀၀၀ MMK',
    'banner1_cta': 'ယခုရယူရန်',
    'banner2_title': 'နေ့စဉ်ပြန်အမ်းငွေ',
    'banner2_desc': 'နေ့စဉ် ၁.၅% အထိပြန်အမ်း<br>ဂိမ်းအားလုံးပါဝင်',
    'banner2_cta': 'အသေးစိတ်ကြည့်ရန်',
    'banner3_title': 'VIP ကလပ်',
    'banner3_desc': 'သီးသန့် VIP အခွင့်ထူးများ<br>မြင့်မားသောပြန်အမ်းငွေ၊ အမြန်ငွေထုတ်',
    'banner3_cta': 'VIP အဆင့်မြှင့်ရန်',
    'hot_games': 'လူကြိုက်များဂိမ်းများ',
    'poker_games': 'ဖဲဂိမ်းများ',
    'novelty_games': 'ထူးထူးခြားခြားဂိမ်းများ',
  },
  th: {
    'loading': 'กำลังโหลด...',
    'no_data': 'ไม่มีข้อมูล',
    'confirm': 'ยืนยัน',
    'cancel': 'ยกเลิก',
    'menu': 'เมนู',
    'menu_home': 'หน้าแรก',
    'menu_slots': 'สล็อต',
    'menu_fishing': 'เกมตกปลา',
    'menu_deposit': 'ฝากเงิน',
    'menu_withdraw': 'ถอนเงิน',
    'menu_transactions': 'ประวัติ',
    'menu_promotions': 'โปรโมชั่น',
    'menu_user': 'บัญชีของฉัน',
    'menu_contact': 'ติดต่อเรา',
    'menu_settings': 'ตั้งค่า',
    'menu_admin': 'จัดการ',
    'home': 'หน้าแรก',
    'hot_slots': 'สล็อตยอดนิยม',
    'view_all': 'ดูทั้งหมด',
    'fishing_games': 'เกมตกปลา',
    'arcade_games': 'เกมอาเขต',
    'menu_friends': 'แนะนำเพื่อน',
    'slots': 'สล็อต',
    'fishing': 'เกมตกปลา',
    'arcade': 'เกมอาเขต',
    'deposit': 'ฝากเงิน',
    'forgot_password_title': 'ลืมรหัสผ่าน',
    'forgot_password_desc': 'กรุณากรอกชื่อผู้ใช้ รหัสผ่านจะถูกรีเซ็ตเป็น 888888',
    'forgot_password_btn': 'รีเซ็ตรหัสผ่าน',
    'forgot_pwd_username_placeholder': 'กรุณากรอกชื่อผู้ใช้',
    'footer_about': 'เกี่ยวกับเรา',
    'footer_terms': 'ข้อกำหนดบริการ',
    'footer_privacy': 'นโยบายความเป็นส่วนตัว',
    'footer_copyright': '© 2026 Coke 888. สงวนลิขสิทธิ์.',
    'game_title_slots': 'สล็อต',
    'game_title_fishing': 'เกมตกปลา',
    'game_title_arcade': 'เกมอาเขต',
    'deposit_status_pending': 'รอดำเนินการ',
    'deposit_status_done': 'เสร็จสิ้น',
    'deposit_status_failed': 'ล้มเหลว',
    // Game names
    '财富之王': 'เจ้าแห่งโชค',
    '埃及宝藏': 'สมบัติอียิปต์',
    '龙之宝藏': 'สมบัติมังกร',
    '超级777': 'ซุปเปอร์ 777',
    '黄金之路': 'ทางทองคำ',
    '水果乐园': 'สวนผลไม้',
    '海盗宝藏': 'สมบัติโจรสลัด',
    '魔法森林': 'ป่าเวทมนตร์',
    '财富轮盘': 'วงล้อโชคลาภ',
    '闪电老虎': 'เสือสายฟ้า',
    '亚洲之虎': 'เสือเอเชีย',
    '钻石之星': 'ดาวเพชร',
    '招财进宝': 'นำโชคมา',
    '福禄寿': 'โชคลาภอายุยืน',
    '金猴送福': 'ลิงทองคำ',
    '富贵花开': 'รุ่งเรืองเบ่งบาน',
    '捕鱼达人': 'ปรมาจารย์ตกปลา',
    '海底世界': 'โลกใต้ทะเล',
    '黄金鱼': 'ปลาทอง',
    '深海猎手': 'นักล่าทะเลลึก',
    '鱼王争霸': 'ศึกชิงราชาปลา',
    '珊瑚宝藏': 'สมบัติปะการัง',
    '鲨鱼攻击': 'ฉลามโจมตี',
    '海洋之星': 'ดาวทะเล',
    '赛车风云': 'พายุแข่งรถ',
    '射击高手': 'มือปราบแม่นปืน',
    '水果忍者': 'นักดาบผลไม้',
    '拳皇争霸': 'จ้าวนักสู้',
    '飞机大战': 'สงครามเครื่องบิน',
    '弹球大师': 'พินบอลมาสเตอร์',
    'settings_title': 'ตั้งค่า',
    'settings_language': 'ภาษา',
    'settings_sound': 'เสียงประกอบ',
    'settings_change_pwd': 'เปลี่ยนรหัสผ่าน',
    'settings_old_pwd_label': 'รหัสผ่านเดิม',
    'settings_old_pwd_placeholder': 'กรุณากรอกรหัสผ่านเดิม',
    'settings_new_pwd_label': 'รหัสผ่านใหม่',
    'settings_new_pwd_placeholder': 'กรุณากรอกรหัสผ่านใหม่',
    'settings_confirm_pwd_label': 'ยืนยันรหัสผ่าน',
    'settings_confirm_pwd_placeholder': 'กรุณากรอกรหัสผ่านอีกครั้ง',
    'settings_change_btn': 'เปลี่ยนรหัสผ่าน',
    'contact_title': 'ติดต่อเรา',
    'contact_header_title': 'บริการลูกค้าออนไลน์',
    'contact_header_desc': '24/7 พร้อมให้บริการคุณ',
    'contact_tg': 'เทเลแกรม',
    'contact_service_hours': 'เวลาบริการ: 24 ชั่วโมง',
    'promotions_title': 'โปรโมชั่น',
    'promotions_page_title': 'โปรโมชั่น',
    'slots_page_title': 'สล็อต',
    'slots_all': 'ทั้งหมด',
    'fishing_page_title': 'เกมตกปลา',
    'transactions_title': 'ประวัติธุรกรรม',
    'promotions': 'โปรโมชั่น',
    'my_account': 'บัญชีของฉัน',
    'contact': 'ติดต่อเรา',
    'settings': 'ตั้งค่า',
    'admin': 'จัดการ',
    'not_logged_in': 'ยังไม่ได้เข้าสู่ระบบ',
    'balance': 'ยอดคงเหลือ',
    'login': 'เข้าสู่ระบบ',
    'logout': 'ออกจากระบบ',
    'register': 'สมัครสมาชิก',
    'username': 'ชื่อผู้ใช้',
    'password': 'รหัสผ่าน',
    'phone': 'เบอร์โทร',
    'enter_username': 'กรุณากรอกชื่อผู้ใช้',
    'enter_password': 'กรุณากรอกรหัสผ่าน',
    'enter_phone': 'กรุณากรอกเบอร์โทร',
    'forgot_pwd': 'ลืมรหัสผ่าน?',
    'no_account': 'ยังไม่มีบัญชี? สมัครเลย',
    'has_account': 'มีบัญชีแล้ว? เข้าสู่ระบบ',
    'reg_title': 'สมัครสมาชิก',
    'get_code': 'รับรหัส',
    'set_password': 'ตั้งรหัสผ่าน',
    'confirm_password': 'ยืนยันรหัสผ่าน',
    'user_info': 'ข้อมูลผู้ใช้',
    'user_id': 'รหัสผู้ใช้',
    'reg_time': 'วันที่สมัคร',
    'change_pwd': 'เปลี่ยนรหัสผ่าน',
    'old_pwd': 'รหัสผ่านเก่า',
    'new_pwd': 'รหัสผ่านใหม่',
    'confirm_new_pwd': 'ยืนยันรหัสผ่านใหม่',
    'change_btn': 'เปลี่ยน',
    'deposit_title': 'ฝากเงิน',
    'select_payment': 'เลือกชำระเงิน',
    'amount': 'จำนวนเงิน',
    'enter_amount': 'กรุณากรอกจำนวน',
    'quick_amount': 'จำนวนด่วน',
    'submit_deposit': 'ฝาก',
    'account_info': 'ข้อมูลบัญชี',
    'recipient': 'ผู้รับ',
    'account_no': 'เลขบัญชี',
    'withdraw_title': 'ถอนเงิน',
    'available_balance': 'ยอดที่ถอนได้',
    'current_turnover': 'ยอดเทิร์นโอเวอร์',
    'withdraw_amount': 'จำนวนเงินถอน',
    'select_method': 'เลือกวิธีถอน',
    'submit_withdraw': 'ถอนเงิน',
    'withdraw_all': 'ถอนทั้งหมด',
    'all': 'ทั้งหมด',
    'order_no': 'เลขออเดอร์',
    'method': 'วิธี',
    'status': 'สถานะ',
    'time': 'เวลา',
    'pending': 'รอดำเนินการ',
    'completed': 'เสร็จสิ้น',
    'failed': 'ล้มเหลว',
    'view_more': 'ดูเพิ่มเติม',
    'lang_settings': 'ภาษา',
    'online_service': 'บริการออนไลน์',
    'tg_service': 'Telegram',
    'service_hours': 'บริการ 24 ชม.',
    'about': 'เกี่ยวกับเรา',
    'terms': 'ข้อกำหนด',
    'privacy': 'นโยบายความเป็นส่วนตัว',
    'copyright': 'สงวนลิขสิทธิ์',
    'all_rights': 'Coke 888 สงวนลิขสิทธิ์',
    'provider': 'ผู้ให้บริการ',
    'play': 'เล่น',
    'reg_title': 'สมัครสมาชิก',
    'reg_subtitle': 'ร่วมตอนนี้ลุ้นรางวัลใหญ่',
    'reg_phone_label': 'เบอร์โทร',
    'reg_phone_placeholder': 'กรอกเบอร์โทร',
    'reg_username_label': 'ชื่อผู้ใช้',
    'reg_username_placeholder': 'ตั้งชื่อผู้ใช้',
    'reg_password_label': 'รหัสผ่าน',
    'reg_password_placeholder': 'ตั้งรหัสผ่าน',
    'reg_confirm_label': 'ยืนยันรหัสผ่าน',
    'reg_confirm_placeholder': 'ป้อนรหัสผ่านอีกครั้ง',
    'reg_code_placeholder': 'รหัสยืนยัน',
    'reg_get_code': 'รับรหัส',
    'reg_btn': 'สมัครสมาชิก',
    'reg_login_link': 'มีบัญชีแล้ว? เข้าสู่ระบบ',
    'login_success': 'เข้าสู่ระบบสำเร็จ',
    'login_welcome': 'ยินดีต้อนรับกลับ',
    'login_subtitle': 'กรุณาเข้าสู่ระบบ',
    'login_username_label': 'ชื่อผู้ใช้',
    'login_username_placeholder': 'กรุณากรอกชื่อผู้ใช้',
    'login_password_label': 'รหัสผ่าน',
    'login_password_placeholder': 'กรุณากรอกรหัสผ่าน',
    'login_btn': 'เข้าสู่ระบบ',
    'login_register_link': 'ยังไม่มีบัญชี? สมัครเลย',
    'login_forgot_link': 'ลืมรหัสผ่าน?',
    'reg_success': '🎉 สมัครสมาชิกสำเร็จ',
    'pwd_changed': '✅ เปลี่ยนรหัสผ่านสำเร็จ',
    'logout_success': 'ออกจากระบบสำเร็จ',
    'enter_uname_pwd': 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน',
    'fill_all': 'กรุณากรอกข้อมูลให้ครบ',
    'pwd_not_match': 'รหัสผ่านไม่ตรงกัน',
    'pwd_min_6': 'รหัสผ่านอย่างน้อย 6 ตัว',
    'wrong_uname_pwd': 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
    'user_frozen': 'บัญชีถูกระงับ',
    'deposit_title': 'ฝากเงิน',
    'deposit_balance_label': 'ยอดคงเหลือ',
    'deposit_payment_label': 'เลือกชำระเงิน',
    'deposit_payment_placeholder': 'เลือกวิธีการชำระเงิน',
    'deposit_bank': 'ธนาคาร',
    'deposit_account': 'บัญชี',
    'deposit_holder': 'ผู้รับ',
    'deposit_amount_label': 'จำนวนเงิน',
    'deposit_amount_placeholder': 'ขั้นต่ำ 2,000 MMK',
    'deposit_submit_btn': 'ฝากเงิน',
    'deposit_screenshot_label': 'สลิปโอน',
    'deposit_upload_text': 'อัปโหลดสลิปโอน',
    'deposit_submitted': 'คำขอฝากถูกส่งแล้ว รอดำเนินการ',
    'withdraw_title': 'ถอนเงิน',
    'withdraw_balance_label': 'ยอดคงเหลือ',
    'withdraw_turnover_label': 'ยอดเทิร์น',
    'withdraw_available_label': 'ยอดที่ถอนได้',
    'withdraw_method_label': 'วิธีถอน',
    'withdraw_method_placeholder': 'เลือกวิธีถอน',
    'withdraw_account_label': 'บัญชี',
    'withdraw_account_placeholder': 'กรอกเลขบัญชี',
    'withdraw_amount_label': 'จำนวนเงิน',
    'withdraw_amount_placeholder': 'ขั้นต่ำ 10,000 MMK',
    'withdraw_submit_btn': 'ถอนเงิน',
    'withdraw_note': '* ต้องทำยอดเทิร์นโอเวอร์ให้ครบก่อนถอน',
    'withdraw_submitted': 'คำขอถอนถูกส่งแล้ว รอดำเนินการ',
    'user_balance_label': 'ยอดคงเหลือ',
    'user_deposit_btn': 'ฝาก',
    'user_withdraw_btn': 'ถอน',
    'user_quick_deposit': 'ประวัติฝาก',
    'user_quick_deposit_desc': 'ดูประวัติการฝาก',
    'user_quick_withdraw': 'ประวัติถอน',
    'user_quick_withdraw_desc': 'ดูประวัติการถอน',
    'user_menu_deposit': 'ฝาก',
    'user_menu_withdraw': 'ถอน',
    'user_menu_transactions': 'ประวัติ',
    'user_menu_changepwd': 'เปลี่ยนรหัส',
    'user_menu_bank': 'บัญชีธนาคาร',
    'user_menu_vip': 'ระดับ VIP',
    'user_menu_commission': 'ค่าคอมมิชชั่น',
    'user_menu_settings': 'ตั้งค่า',
    'user_menu_logout': 'ออกจากระบบ',
    'pwd_reset_to': 'รีเซ็ตรหัสผ่านเป็น 888888',
    'user_not_found': 'ไม่พบผู้ใช้',
    'lang_switched': 'เปลี่ยนภาษาเป็น',
    'dashboard': 'แดชบอร์ด',
    'user_mgmt': 'ผู้ใช้',
    'deposit_mgmt': 'จัดการการฝาก',
    'withdraw_mgmt': 'จัดการการถอน',
    'total_users': 'ผู้ใช้ทั้งหมด',
    'total_deposits': 'ยอดฝากทั้งหมด',
    'total_withdrawals': 'ยอดถอนทั้งหมด',
    'online_now': 'ออนไลน์ตอนนี้',
    'today_reg': 'สมัครวันนี้',
    'today_dep': 'ฝากวันนี้',
    'today_wit': 'ถอนวันนี้',
    'active_7d': 'เคลื่อนไหว 7 วัน',
    'search': 'ค้นหา',
    'approve': 'อนุมัติ',
    'reject': 'ปฏิเสธ',
    'action': 'ดำเนินการ',
    'update_balance': 'อัปเดตยอดเงิน',
    'enter_new_balance': 'ป้อนยอดเงินใหม่',
    'balance_updated': 'อัปเดตยอดเงินแล้ว',
    'user_status': 'สถานะ',
    'filter': 'กรอง',
    'marquee_text': '🎉 ยินดีต้อนรับสู่ Coke888 ฝากครั้งแรกรับโบนัส 200%',
    'page_title': 'Coke 888 | คาสิโนออนไลน์ที่ดีที่สุด',
    'banner1_title': 'โบนัสฝากครั้งแรก',
    'banner1_desc': 'ฝากครั้งแรก 100% โบนัส<br>สูงสุด 500,000 MMK',
    'banner1_cta': 'รับเลย',
    'banner2_title': 'เงินคืนรายวัน',
    'banner2_desc': 'เงินคืนรายวันสูงสุด 1.5%<br>รวมทุกเกม',
    'banner2_cta': 'ดูรายละเอียด',
    'banner3_title': 'VIP คลับ',
    'banner3_desc': 'สิทธิพิเศษ VIP<br>เงินคืนสูงกว่า ถอนเร็วขึ้น',
    'banner3_cta': 'อัปเกรด VIP',
    'hot_games': 'เกมยอดนิยม',
    'poker_games': 'เกมไพ่',
    'novelty_games': 'เกมแปลกใหม่',
  }
};

let currentLang = localStorage.getItem('coke888_lang') || 'cn';

function t(key) {
  return LANG[currentLang] && LANG[currentLang][key] ? LANG[currentLang][key] : LANG['cn'][key] || key;
}

function setLanguage(lang) {
  if (!LANG[lang]) return;
  currentLang = lang;
  localStorage.setItem('coke888_lang', lang);
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Apply translations via data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  // Translate <title>
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) titleEl.textContent = t('page_title');
  showToast(t('lang_switched') + ' ' + {cn:'🇨🇳中文',en:'🇬🇧English',mm:'🇲🇲မြန်မာ',th:'🇹🇭ไทย'}[lang]);
}

/* ===== Header Language Toggle ===== */
function toggleLangMenu() {
  const dd = document.getElementById('langDropdown');
  if (dd) dd.classList.toggle('show');
}

function switchLang(lang) {
  setLanguage(lang);
  const dd = document.getElementById('langDropdown');
  if (dd) dd.classList.remove('show');
}

// Close lang dropdown on outside click
document.addEventListener('click', function(e) {
  const sw = document.querySelector('.header-lang-switcher');
  if (sw && !sw.contains(e.target)) {
    const dd = document.getElementById('langDropdown');
    if (dd) dd.classList.remove('show');
  }
});

// ===== Game Data =====
// 厂商试玩平台入口（方案2 - 跳转外链）
// Pragmatic Play 游戏的 symbol 映射
const PP_SYMBOLS = {
  '超级777': 'vs20olympgate',
  '财富轮盘': 'vs20sugarrush',
  '福禄寿':   'vs20starlight',
  '赛车风云': 'vs20doghouse',
  '弹球大师': 'vs10ladywolf',
  '深海猎手': 'vs20fruitswx',
  '冰封奇缘': 'vs20chicken',
  '黄金骑士': 'vs10goldentitan',
  '暗影刺客': 'vs20ninja',
  '星际迷航': 'vs10alien',
  '花果山':   'vs20monkey',
  '黄金国':   'vs20eldorado',
  '甜蜜派对': 'vs20fruitparty',
  '深海猎渔': 'vs20olympx',
  '捕鱼达人': 'vs20fruitsw',
  '弹球':     'vswayslions',
  '打地鼠':   'vswaysrabbits',
  // 新增游戏
  '大赢家':   'vs20bigbass',
  '狂野西部': 'vswildwest',
  '火凤凰':   'vs20phoenix',
  '丛林之王': 'vs20lion',
  '甜蜜丰收': 'vs20candystars',
  '龙之宝珠': 'vs20dragons',
  '狼人月':   'vswayswolves',
  '玛雅宝藏': 'vs20mayan',
  '功夫战士': 'vs20kungfu',
  '埃及之王': 'vsegypt',
  '财富熊猫': 'vs20pandagold',
  '海盗王':   'vs20pirate',
  '龙火':     'vswaysdragon',
  '圣夜礼物': 'vs10xmasgift',
  '舞龙舞狮': 'vs20liondance',
  '幸运兔':   'vs20rabbit',
  '黄金猴子': 'vswaysmonkey',
  '甜心炸弹': 'vs10honeypot',
  '雷神之锤': 'vs20thor',
  '万圣节':   'vs20halloween',
  '魔术师':   'vs20magician',
  '忍者大师': 'vs20ninja',
  '深海之谜': 'vs20ocean',
  '火山爆发': 'vs20volcano',
  '北极熊':   'vs20polar',
  '牛仔':     'vs20cowboy',
  '青蛙王子': 'vs20frog',
  '太空入侵': 'vs20space',
};

const GAME_IMAGES = {
  slots: [
    { name: '超级777', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20olympgate.webp' },
    { name: '财富轮盘', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20sugarrush.webp' },
    { name: '福禄寿',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20starlight.webp' },
    { name: '赛车风云', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20doghouse.webp' },
    { name: '弹球大师', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs10ladywolf.webp' },
    { name: '深海猎手', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20fruitswx.webp' },
    { name: '冰封奇缘', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20chicken.webp' },
    { name: '黄金骑士', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs10goldentitan.webp' },
    { name: '暗影刺客', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20ninja.webp' },
    { name: '星际迷航', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs10alien.webp' },
    { name: '花果山',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20monkey.webp' },
    { name: '黄金国',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20eldorado.webp' },
    { name: '甜蜜派对', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20fruitparty.webp' },
    // 新增老虎机
    { name: '大赢家',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20bigbass.webp' },
    { name: '狂野西部', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vswildwest.webp' },
    { name: '火凤凰',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20phoenix.webp' },
    { name: '丛林之王', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20lion.webp' },
    { name: '甜蜜丰收', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20candystars.webp' },
    { name: '龙之宝珠', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20dragons.webp' },
    { name: '狼人月',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vswayswolves.webp' },
    { name: '玛雅宝藏', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20mayan.webp' },
    { name: '功夫战士', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20kungfu.webp' },
    { name: '埃及之王', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vsegypt.webp' },
    { name: '财富熊猫', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20pandagold.webp' },
    { name: '海盗王',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20pirate.webp' },
    { name: '龙火',     provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vswaysdragon.webp' },
    { name: '圣夜礼物', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs10xmasgift.webp' },
    { name: '舞龙舞狮', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20liondance.webp' },
    { name: '幸运兔',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20rabbit.webp' },
    { name: '黄金猴子', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vswaysmonkey.webp' },
    { name: '甜心炸弹', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs10honeypot.webp' },
    { name: '雷神之锤', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20thor.webp' },
    { name: '万圣节',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20halloween.webp' },
    { name: '深海之谜', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20ocean.webp' },
    { name: '北极熊',   provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20polar.webp' },
    { name: '青蛙王子', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20frog.webp' },
    { name: '太空入侵', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20space.webp' },
  ],
  fish: [
    { name: '深海猎渔', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20olympx.webp' },
    { name: '捕鱼达人', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vs20fruitsw.webp' },
  ],
  arcade: [
    { name: '弹球',  provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vswayslions.webp' },
    { name: '打地鼠', provider: 'PP', img: 'https://cdn.myanmarshankoeme.com/build/assets/img/bf688/pp/vswaysrabbits.webp' },
  ],
};

// ===== Fallback Image =====
// 使用 BOLE Gaming 的精美游戏图片作为 fallback（全部可访问）
const BOLE_BG_IMAGES = [
  'https://demo.bolegaming.com/main/assets/gameImg/slotfzsn.png',
  'https://demo.bolegaming.com/main/assets/gameImg/twone.png',
  'https://demo.bolegaming.com/main/assets/gameImg/zjh.png',
  'https://demo.bolegaming.com/main/assets/gameImg/baccarat.png',
  'https://demo.bolegaming.com/main/assets/gameImg/blackjack.png',
  'https://demo.bolegaming.com/main/assets/gameImg/dzmj.png',
  'https://demo.bolegaming.com/main/assets/gameImg/fish.png',
  'https://demo.bolegaming.com/main/assets/gameImg/jdnn.png',
  'https://demo.bolegaming.com/main/assets/gameImg/brnn.png',
  'https://demo.bolegaming.com/main/assets/gameImg/fsc.png',
  'https://demo.bolegaming.com/main/assets/gameImg/lhwar.png',
  'https://demo.bolegaming.com/main/assets/gameImg/jdbaccarat.png',
  'https://demo.bolegaming.com/main/assets/gameImg/hldz.png',
  'https://demo.bolegaming.com/main/assets/gameImg/hldz.png',
  'https://demo.bolegaming.com/main/assets/gameImg/ddz.png',
  'https://demo.bolegaming.com/main/assets/gameImg/paodekuai.png',
];

function getFallbackImg(index) {
  return BOLE_BG_IMAGES[index % BOLE_BG_IMAGES.length];
}



// ===== Game Card Creation =====
function createGameCard(game, index) {
  const url = `https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=${PP_SYMBOLS[game.name] || 'vs20olympgate'}&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99`;
  const providerLabel = game.provider || 'PP';
  const fallbackImg = getFallbackImg(index);
  const imgSrc = game.img || fallbackImg;
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="game-card-link"><div class="game-card"><div class="img-wrap"><img src="${imgSrc}" alt="${game.name}" onerror="this.src='${fallbackImg}'" loading="lazy"></div><div class="game-name">${game.name}<span class="game-provider">${providerLabel}</span></div></div></a>`;
}

// ===== Render All Game Lists =====
function renderBoleList(containerId, games) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  if (games.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-dice"></i><p>暂无游戏</p></div>`;
    return;
  }
  grid.innerHTML = games.map((g, i) => createGameCard(g, i)).join('');
}

function renderSlotList() {
  const grid = document.getElementById('slotListContainer') || document.getElementById('slotGamesList');
  grid.innerHTML = GAME_IMAGES.slots.map((g, i) => createGameCard(g, i)).join('');
}

function renderFishList() {
  const grid = document.getElementById('fishListGrid') || document.getElementById('fishGamesList');
  grid.innerHTML = GAME_IMAGES.fish.map((g, i) => createGameCard(g, i)).join('');
}

function renderNoveltyList() {
  const grid = document.getElementById('noveltyGamesList');
  if (!grid) return;
  grid.innerHTML = GAME_IMAGES.arcade.map((g, i) => createGameCard(g, i)).join('');
}

// 首页分类预览
function renderHomeSlots() {
  const grid = document.getElementById('homeSlotGames');
  if (!grid) return;
  const allSlots = GAME_IMAGES.slots.map((g, i) => createGameCard(g, i));
  grid.innerHTML = allSlots.slice(0, 12).join('');
}

function renderHomeFish() {
  const grid = document.getElementById('homeFishGames');
  if (!grid) return;
  grid.innerHTML = GAME_IMAGES.fish.map((g, i) => createGameCard(g, i)).slice(0, 4).join('');
}

function renderHomePoker() {
  const grid = document.getElementById('homePokerGames');
  if (!grid) return;
  // 扑克游戏无可用游戏
  grid.innerHTML = '';
  // 隐藏扑克板块标题
  const section = grid.closest('.game-section');
  if (section) section.style.display = 'none';
}

function renderHomeNovelty() {
  const grid = document.getElementById('homeNoveltyGames');
  if (!grid) return;
  const ppArcade = GAME_IMAGES.arcade.map((g, i) => createGameCard(g, i));
  grid.innerHTML = ppArcade.slice(0, 4).join('');
}

// 热门游戏页：从所有游戏随机取24个填满网格
function renderHotGames() {
  const grid = document.getElementById('hotGamesList');
  if (!grid) return;
  const allGames = [
    ...GAME_IMAGES.slots,
    ...GAME_IMAGES.fish,
    ...GAME_IMAGES.arcade,
  ];
  // Fisher-Yates 洗牌
  const shuffled = [...allGames];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const count = Math.min(24, shuffled.length);
  grid.innerHTML = shuffled.slice(0, count).map((g, i) => createGameCard(g, i)).join('');
}

// ===== SPA Router =====
function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target page
  const target = document.querySelector(`.page[data-page="${page}"]`);
  if (target) target.classList.add('active');
  
  // Update bottom nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Show/hide marquee based on page
  const marquee = document.querySelector('.marquee-bar');
  if (marquee) {
    marquee.style.display = page === 'home' ? 'flex' : 'none';
  }
  
  // Render dynamic content on page entry
  if (page === 'slots') renderSlotList();
  if (page === 'fishing') renderFishList();
  if (page === 'novelty') renderNoveltyList();
  if (page === 'promotions') renderPromotions();
  if (page === 'hot') renderHotGames();
  if (page === 'user') { updateUserPage(); fetchUserProfile(); }
  if (page === 'deposit' || page === 'withdraw') { updateBalanceDisplays(); fetchUserProfile(); }
  if (page === 'transactions') { cachedTransactions = null; renderTransactions('all'); }

  // Init games when navigating to game pages
  initGamesOnNavigate(page);
}

// ===== Go Back =====
function goBack() {
  navigateTo('home');
}

// ===== Carousel =====
let currentSlide = 0;
const totalSlides = 3;
let autoSlideInterval;

function goToSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.indicator');
  slides.forEach(s => s.classList.remove('active'));
  indicators.forEach(i => i.classList.remove('active'));
  currentSlide = (index + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(nextSlide, 4000);
}
function stopAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
}

// ===== Menu =====
function toggleMenu() {
  document.getElementById('sideMenuOverlay').classList.toggle('open');
  document.getElementById('sideMenu').classList.toggle('open');
}

// ===== Login / Auth =====
async function handleLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  if (!username || !password) {
    showToast('请输入用户名和密码');
    return;
  }
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (!data.success || !data.token) {
      showToast('账号或密码错误');
      return;
    }
    localStorage.setItem('userToken', data.token);
    localStorage.setItem('phoenix_user', JSON.stringify(data.user || { username }));
    updateAuthUI();
    navigateTo('home');
    showToast('登录成功！欢迎回来');
    // Fetch fresh profile
    fetchUserProfile();
  } catch (err) {
    showToast('登录失败: ' + err.message);
  }
}

async function handleRegister() {
  const username = document.getElementById('regUsername').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  
  if (!username || !phone || !password) {
    showToast('请填写完整信息');
    return;
  }
  if (password !== confirm) {
    showToast('两次密码不一致');
    return;
  }
  if (password.length < 6) {
    showToast('密码不能少于6位');
    return;
  }
  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, phone }),
    });
    const data = await res.json();
    if (!data.success) {
      showToast(data.error || '注册失败');
      return;
    }
    localStorage.setItem('userToken', data.token);
    localStorage.setItem('phoenix_user', JSON.stringify(data.user || { username, phone }));
    updateAuthUI();
    navigateTo('home');
    showToast('🎉 注册成功！');
  } catch (err) {
    showToast('注册失败: ' + err.message);
  }
}

let codeTimer = null;
function sendCode() {
  const btn = document.querySelector('.btn-code');
  if (btn.disabled) return;
  showToast('验证码已发送到您的手机');
  let count = 60;
  btn.disabled = true;
  btn.textContent = `${count}s`;
  codeTimer = setInterval(() => {
    count--;
    btn.textContent = `${count}s`;
    if (count <= 0) {
      clearInterval(codeTimer);
      btn.disabled = false;
      btn.textContent = '获取验证码';
    }
  }, 1000);
}

// ===== Auth UI Updates =====
function updateAuthUI() {
  const userData = localStorage.getItem('phoenix_user');
  const headerGuest = document.getElementById('headerGuest');
  const headerUser = document.getElementById('headerUser');
  const balanceEl = document.getElementById('userBalanceHeader');
  const balanceDisplay = document.getElementById('balanceDisplay');
  
  if (userData) {
    const user = JSON.parse(userData);
    // Show logged-in UI, hide guest UI
    headerGuest.style.display = 'none';
    headerUser.style.display = 'flex';
    balanceEl.style.display = 'flex';
    balanceDisplay.textContent = formatBalance(user.balance || 0);
    
    // Side menu
    document.getElementById('sideUserName').textContent = user.username;
    document.getElementById('sideUserBalance').textContent = `余额: ${formatBalance(user.balance || 0)} MMK`;
    
    // User page
    document.getElementById('userNameDisplay').textContent = user.username;
    document.getElementById('userPhoneDisplay').textContent = user.phone || '-';
    document.getElementById('userBalanceAmount').textContent = formatBalance(user.balance || 0) + ' MMK';
  } else {
    // Show guest UI, hide logged-in UI
    headerGuest.style.display = 'flex';
    headerUser.style.display = 'none';
    balanceEl.style.display = 'none';
    
    document.getElementById('sideUserName').textContent = t('not_logged_in');
    document.getElementById('sideUserBalance').textContent = t('balance') + ': 0 MMK';
  }
}

function updateUserPage() {
  updateAuthUI();
}

function updateBalanceDisplays() {
  const userData = localStorage.getItem('phoenix_user');
  const balance = userData ? JSON.parse(userData).balance || 0 : 0;
  const formatted = formatBalance(balance) + ' MMK';
  // 同步更新所有余额显示
  const headerBalance = document.getElementById('balanceDisplay');
  if (headerBalance) headerBalance.textContent = formatBalance(balance);
  document.getElementById('depBalance').textContent = formatted;
  document.getElementById('withBalance').textContent = formatted;
  document.getElementById('withAvailable').textContent = formatBalance(Math.min(balance, balance * 0.8)) + ' MMK';
  document.getElementById('withCurrentTurnover').textContent = formatBalance(Math.floor(balance * 2.5)) + ' MMK';
  // 同时更新侧边栏和用户页
  document.getElementById('userBalanceAmount').textContent = formatted;
  document.getElementById('sideUserBalance').textContent = `余额: ${formatBalance(balance)} MMK`;
}

function handleLogout() {
  localStorage.removeItem('phoenix_user');
  localStorage.removeItem('userToken');
  cachedTransactions = null;
  updateAuthUI();
  navigateTo('home');
  showToast('已退出登录');
}

// ===== Fetch user profile from backend =====
async function fetchUserProfile() {
  try {
    const token = localStorage.getItem('userToken');
    if (!token) return;
    const res = await fetch('/api/user/profile', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success && data.user) {
      const userData = JSON.parse(localStorage.getItem('phoenix_user') || '{}');
      userData.balance = data.user.balance;
      userData.phone = data.user.phone || userData.phone;
      localStorage.setItem('phoenix_user', JSON.stringify(userData));
      updateAuthUI();
      updateBalanceDisplays();
    }
  } catch (e) {
    // silent fallback to cached
  }
}

// ===== Deposit =====
const DEPOSIT_ACCOUNTS = {
  KBZ: { bank: 'KBZ Pay', account: '09987654321', holder: 'Coke 888 Entertainment' },
  Wave: { bank: 'Wave Money', account: '09987654322', holder: 'Coke 888 Entertainment' },
};

function updateDepositAccount() {
  const type = document.getElementById('depPaymentType').value;
  const info = document.getElementById('depAccountInfo');
  if (!type || !DEPOSIT_ACCOUNTS[type]) {
    info.style.display = 'none';
    return;
  }
  const acc = DEPOSIT_ACCOUNTS[type];
  document.getElementById('depBankName').textContent = acc.bank;
  document.getElementById('depBankAccount').textContent = acc.account;
  document.getElementById('depBankHolder').textContent = acc.holder;
  info.style.display = 'block';
}

function setDepAmount(amt) {
  document.getElementById('depAmount').value = amt;
}

function setWithAmount(amt) {
  document.getElementById('withAmount').value = amt;
}

async function handleDeposit(event) {
  if (event) event.preventDefault();
  const type = document.getElementById('depPaymentType').value;
  const amount = document.getElementById('depAmount').value;
  if (!type) { showToast('请选择支付方式'); return; }
  if (!amount || amount < 2000) { showToast('充值金额至少 2,000 MMK'); return; }
  
  try {
    const token = localStorage.getItem('userToken');
    if (!token) { showToast('请先登录'); return; }
    const res = await fetch('/api/deposit', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseInt(amount), method: type === 'KBZ' ? 'KBZ Pay' : 'Wave Pay' })
    });
    const data = await res.json();
    if (!data.success) {
      showToast(data.error || '充值失败');
      return;
    }
    showToast(`✅ 充值提交成功！${formatBalance(parseInt(amount))} MMK 等待审核`);
  } catch (err) {
    showToast('充值失败: ' + err.message);
  }
  document.getElementById('depAmount').value = '';
  document.getElementById('depPaymentType').value = '';
  document.getElementById('depAccountInfo').style.display = 'none';
}

async function handleWithdraw() {
  const type = document.getElementById('withPaymentType').value;
  const account = document.getElementById('withAccountNumber').value.trim();
  const amount = document.getElementById('withAmount').value;
  
  if (!type) { showToast('请选择提现方式'); return; }
  if (!account) { showToast('请输入收款账号'); return; }
  if (!amount || amount < 10000) { showToast('提现金额至少 10,000 MMK'); return; }
  
  try {
    const token = localStorage.getItem('userToken');
    if (!token) { showToast('请先登录'); return; }
    const res = await fetch('/api/withdraw', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseInt(amount), account, account_name: account, method: type === 'KBZ' ? 'KBZ Pay' : 'Wave Pay' })
    });
    const data = await res.json();
    if (!data.success) {
      showToast(data.error || '提现失败');
      return;
    }
    showToast(`✅ 提现申请已提交！${formatBalance(parseInt(amount))} MMK 将在2小时内处理`);
  } catch (err) {
    showToast('提现失败: ' + err.message);
  }
  document.getElementById('withAmount').value = '';
}

// ===== Transactions =====
const SAMPLE_TRANSACTIONS = [
  { type: 'deposit', status: '已完成', amount: 50000, date: '2026-04-24 10:30', balance: 125800 },
  { type: 'deposit', status: '已完成', amount: 100000, date: '2026-04-23 15:20', balance: 75800 },
  { type: 'withdraw', status: '已完成', amount: 20000, date: '2026-04-22 09:10', balance: -24200 },
  { type: 'deposit', status: '已完成', amount: 50000, date: '2026-04-21 14:00', balance: 95800 },
  { type: 'withdraw', status: '处理中', amount: 30000, date: '2026-04-20 11:45', balance: -30000 },
  { type: 'withdraw', status: '已完成', amount: 50000, date: '2026-04-19 16:30', balance: -50000 },
];

let cachedTransactions = null;

function switchTransTab(el, filter) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderTransactions(filter);
}

async function fetchTransactions() {
  try {
    const token = localStorage.getItem('userToken');
    if (!token) return;
    const res = await fetch('/api/transactions', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success && data.transactions) {
      cachedTransactions = data.transactions;
    }
  } catch (e) {
    // silent
  }
}

async function renderTransactions(filter) {
  const container = document.getElementById('transList');
  container.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> 加载中...</div>';
  
  if (!cachedTransactions) {
    await fetchTransactions();
  }
  
  let filtered = filter === 'all' ? cachedTransactions || [] : (cachedTransactions || []).filter(t => t.type === filter);
  
  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><i class="fas fa-receipt"></i><p>暂无交易记录</p><button onclick="navigateTo('deposit')" class="btn btn-primary btn-sm">立即充值</button></div>`;
    return;
  }
  
  container.innerHTML = filtered.map(t => `
    <div class="trans-item">
      <div class="trans-row">
        <span class="trans-type ${t.type}">${t.type === 'deposit' ? '充值' : '提现'}</span>
        <span class="trans-status">${t.status}</span>
      </div>
      <div class="trans-row">
        <span class="trans-amount ${t.type}">${t.type === 'deposit' ? '+' : '-'}${formatBalance(t.amount)}</span>
        <span class="trans-date">${t.date || t.created_at}</span>
      </div>
    </div>
  `).join('');
}

// ===== Promotions =====
const PROMOTIONS = [
  { title: '首存100%红利', desc: '首次存款即可获得100%奖励，最高500,000 MMK！新用户专享超大福利！', icon: 'fa-gift', color: '#e94560' },
  { title: '每日返水1.5%', desc: '每天自动返水，不限游戏种类。流水越高返水越多，上不封顶！', icon: 'fa-percent', color: '#3498db' },
  { title: 'VIP专属特权', desc: '升级VIP享受更高返水比例、专属客服、生日礼金、更快捷的提款服务。', icon: 'fa-crown', color: '#f39c12' },
  { title: '推荐好友奖励', desc: '邀请好友注册并充值，您可获得好友首充金额的20%作为推荐奖金！', icon: 'fa-users', color: '#2ecc71' },
  { title: '周末加码活动', desc: '每周六日充值额外加赠10%奖金，与日常优惠可叠加使用！', icon: 'fa-calendar-week', color: '#9b59b6' },
  { title: '转盘抽奖', desc: '每日消费满50,000 MMK可获一次转盘抽奖机会，最高赢取1,000,000 MMK！', icon: 'fa-spinner', color: '#e67e22' },
];

function renderPromotions() {
  const grid = document.getElementById('promoGrid');
  grid.innerHTML = PROMOTIONS.map((p, i) => `
    <div class="promo-card">
      <div class="promo-img" style="background: linear-gradient(135deg, ${p.color}, ${p.color}88)">
        <i class="fas ${p.icon}"></i>
      </div>
      <div class="promo-body">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      </div>
      <div class="promo-cta" onclick="showToast('活动详情即将上线')">立即参与</div>
    </div>
  `).join('');
}

// ===== Settings ===== =====
async function changePassword() {
  const old = document.getElementById('oldPassword').value;
  const newPwd = document.getElementById('newPassword').value;
  const confirm = document.getElementById('confirmPassword').value;
  
  if (!old || !newPwd || !confirm) { showToast('请填写完整'); return; }
  if (newPwd !== confirm) { showToast('两次密码不一致'); return; }
  if (newPwd.length < 6) { showToast('密码不能少于6位'); return; }
  
  try {
    const token = localStorage.getItem('userToken');
    if (!token) { showToast('请先登录'); return; }
    const res = await fetch('/api/user/change-password', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ oldPassword: old, newPassword: newPwd })
    });
    const data = await res.json();
    if (!data.success) {
      showToast(data.error || '修改失败');
      return;
    }
    showToast('✅ 密码修改成功');
  } catch (err) {
    showToast('修改失败: ' + err.message);
  }
  document.getElementById('oldPassword').value = '';
  document.getElementById('newPassword').value = '';
  document.getElementById('confirmPassword').value = '';
}

// setLanguage is now defined above in the i18n section

// ===== Modal (backwards compat) =====
function showLogin() { navigateTo('login'); }
function closeLogin() { document.getElementById('loginModal').style.display = 'none'; }
function showService() { document.getElementById('serviceModal').style.display = 'flex'; }
function closeService() { document.getElementById('serviceModal').style.display = 'none'; }

// ===== Forgot Password =====
function showForgotPwdModal() {
  document.getElementById('forgotPwdModal').style.display = 'flex';
}
function closeForgotPwdModal() {
  document.getElementById('forgotPwdModal').style.display = 'none';
}
async function handleForgotPassword() {
  const username = document.getElementById('forgotPwdUsername').value.trim();
  if (!username) { showToast(t('enter_uname_pwd')); return; }
  try {
    const res = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });
    const data = await res.json();
    if (!data.success) {
      showToast(data.error || t('user_not_found'));
      return;
    }
    showToast(t('pwd_reset_to'));
    closeForgotPwdModal();
    document.getElementById('forgotPwdUsername').value = '';
  } catch (err) {
    showToast(t('user_not_found') + ': ' + err.message);
  }
}

// Old modal handlers (from original code)
document.addEventListener('click', (e) => {
  if (e.target === document.getElementById('loginModal')) closeLogin();
  if (e.target === document.getElementById('serviceModal')) closeService();
  if (e.target === document.getElementById('forgotPwdModal')) closeForgotPwdModal();
});

// ===== Toast =====
function showToast(msg) {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
    const style = document.createElement('style');
    style.textContent = `
      .toast-notification {
        position: fixed; top: 60px; left: 50%; transform: translateX(-50%);
        background: var(--bg-secondary); color: var(--text-primary);
        padding: 12px 24px; border-radius: var(--radius-sm);
        border: 1px solid var(--border-color); z-index: 9999;
        font-size: 14px; box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        opacity: 0; transition: all 0.3s ease; max-width: 90%; text-align: center;
        pointer-events: none;
      }
      .toast-notification.show { opacity: 1; transform: translateX(-50%) translateY(0); }
    `;
    document.head.appendChild(style);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Utility =====
function formatBalance(n) {
  return Number(n).toLocaleString('en-US');
}

// ===== Scroll Top Button =====
document.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (window.scrollY > 400) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
});

// ===== Keyboard =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('sideMenuOverlay').classList.contains('open')) toggleMenu();
  }
});

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderHomeSlots();
  renderHomeFish();
  renderHomePoker();
  renderHomeNovelty();
  
  // Carousel
  startAutoSlide();
  document.querySelectorAll('.indicator').forEach(el => {
    el.addEventListener('click', () => { goToSlide(parseInt(el.dataset.index)); stopAutoSlide(); startAutoSlide(); });
  });
  const carouselPrev = document.getElementById('carouselPrev');
  if (carouselPrev) carouselPrev.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); stopAutoSlide(); startAutoSlide(); });
  const carouselNext = document.getElementById('carouselNext');
  if (carouselNext) carouselNext.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); stopAutoSlide(); startAutoSlide(); });
  
  // Hover pause
  const carousel = document.querySelector('.banner-carousel');
  if (carousel) { carousel.addEventListener('mouseenter', stopAutoSlide); carousel.addEventListener('mouseleave', startAutoSlide); }
  
  // Side menu toggle (via overlay only — menu button removed)
  document.getElementById('sideMenuOverlay').addEventListener('click', toggleMenu);
  
  // Update auth UI
  updateAuthUI();
  
  // Init i18n - apply saved language
  setLanguage(currentLang);
});

// =============================================
