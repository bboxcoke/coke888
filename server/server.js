const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');

// ===== Setup =====
const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET='coke888_secret_key_2026';
const DB_PATH = path.join(__dirname, 'coke888.db');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

let db;

// ===== Database Init =====
function initDatabase(SQL) {
  let buffer;
  try {
    buffer = fs.readFileSync(DB_PATH);
  } catch (e) {
    buffer = null;
  }

  const db = buffer ? new SQL.Database(buffer) : new SQL.Database();

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      phone TEXT DEFAULT '',
      balance REAL DEFAULT 0,
      status TEXT DEFAULT '正常',
      vip_level TEXT DEFAULT '普通',
      created_at TEXT DEFAULT (datetime('now','localtime'))
    );
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS deposits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      username TEXT NOT NULL,
      amount REAL NOT NULL,
      method TEXT DEFAULT 'KBZ Pay',
      status TEXT DEFAULT '待处理',
      created_at TEXT DEFAULT (datetime('now','localtime'))
    );
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS withdrawals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      username TEXT NOT NULL,
      amount REAL NOT NULL,
      method TEXT DEFAULT '',
      account TEXT DEFAULT '',
      account_name TEXT DEFAULT '',
      status TEXT DEFAULT '待处理',
      created_at TEXT DEFAULT (datetime('now','localtime'))
    );
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS promotions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT DEFAULT '',
      type TEXT DEFAULT '红利',
      status TEXT DEFAULT '进行中',
      start_date TEXT DEFAULT (date('now')),
      end_date TEXT DEFAULT (date('now','+30 days')),
      created_at TEXT DEFAULT (datetime('now','localtime'))
    );
  `);

  // Seed if empty
  const count = db.exec("SELECT COUNT(*) as c FROM users");
  if (count.length === 0 || count[0].values[0][0] === 0) {
    const adminHash = bcrypt.hashSync('admin888', 10);
    const cokeHash = bcrypt.hashSync('123456', 10);
    db.run("INSERT INTO users (id, username, password, phone, balance, status, vip_level) VALUES (1, 'admin', ?, '0911111111', 0, '管理员', 'VIP')", [adminHash]);
    db.run("INSERT INTO users (id, username, password, phone, balance, status, vip_level) VALUES (2, 'coke', ?, '0912345678', 175800, '正常', 'VIP')", [cokeHash]);
    db.run("INSERT INTO users (id, username, password, phone, balance, status, vip_level) VALUES (3, 'test01', ?, '0912345671', 125800, '正常', '普通')", [cokeHash]);
    db.run("INSERT INTO users (id, username, password, phone, balance, status, vip_level) VALUES (4, 'kingfish', ?, '0912345672', 560000, '正常', 'VIP')", [cokeHash]);
    db.run("INSERT INTO users (id, username, password, phone, balance, status, vip_level) VALUES (5, 'lucky777', ?, '0912345673', 25000, '冻结', '普通')", [cokeHash]);
    db.run("INSERT INTO users (id, username, password, phone, balance, status, vip_level) VALUES (6, 'golden888', ?, '0912345674', 890000, '正常', 'VIP')", [cokeHash]);

    db.run("INSERT INTO deposits (id, user_id, username, amount, method, status, created_at) VALUES (1, 2, 'coke', 50000, 'KBZ Pay', '已完成', '2026-04-24 10:30')");
    db.run("INSERT INTO deposits (id, user_id, username, amount, method, status, created_at) VALUES (2, 3, 'test01', 100000, 'Wave Pay', '已完成', '2026-04-24 09:15')");
    db.run("INSERT INTO deposits (id, user_id, username, amount, method, status, created_at) VALUES (3, 4, 'kingfish', 200000, 'KBZ Pay', '已完成', '2026-04-23 16:45')");
    db.run("INSERT INTO deposits (id, user_id, username, amount, method, status, created_at) VALUES (4, 6, 'golden888', 500000, 'Bank Transfer', '已完成', '2026-04-23 14:20')");
    db.run("INSERT INTO deposits (id, user_id, username, amount, method, status, created_at) VALUES (5, 2, 'coke', 30000, 'Wave Pay', '已完成', '2026-04-22 11:30')");
    db.run("INSERT INTO deposits (id, user_id, username, amount, method, status, created_at) VALUES (6, 5, 'lucky777', 50000, 'KBZ Pay', '待处理', '2026-04-24 08:00')");
    db.run("INSERT INTO deposits (id, user_id, username, amount, method, status, created_at) VALUES (7, 3, 'test01', 80000, 'Wave Pay', '待处理', '2026-04-24 07:45')");
    db.run("INSERT INTO deposits (id, user_id, username, amount, method, status, created_at) VALUES (8, 4, 'kingfish', 150000, 'KBZ Pay', '已失败', '2026-04-22 10:30')");

    db.run("INSERT INTO withdrawals (id, user_id, username, amount, account, account_name, status, created_at) VALUES (1, 6, 'golden888', 300000, '0912345674', 'Golden Win', '已完成', '2026-04-24 10:00')");
    db.run("INSERT INTO withdrawals (id, user_id, username, amount, account, account_name, status, created_at) VALUES (2, 4, 'kingfish', 100000, '0912345672', 'King Fish', '已完成', '2026-04-23 15:30')");
    db.run("INSERT INTO withdrawals (id, user_id, username, amount, account, account_name, status, created_at) VALUES (3, 2, 'coke', 50000, '0912345678', 'Coke Player', '已完成', '2026-04-22 09:00')");
    db.run("INSERT INTO withdrawals (id, user_id, username, amount, account, account_name, status, created_at) VALUES (4, 3, 'test01', 200000, '0912345671', 'Test User', '待处理', '2026-04-24 11:20')");
    db.run("INSERT INTO withdrawals (id, user_id, username, amount, account, account_name, status, created_at) VALUES (5, 6, 'golden888', 500000, '0912345674', 'Golden Win', '待处理', '2026-04-24 12:00')");
    db.run("INSERT INTO withdrawals (id, user_id, username, amount, account, account_name, status, created_at) VALUES (6, 5, 'lucky777', 30000, '0912345673', 'Lucky Seven', '已失败', '2026-04-23 14:10')");

    db.run("INSERT INTO promotions (id, title, description, type, status, start_date, end_date) VALUES (1, '首存100%红利', '首次存款即可获得100%奖励，最高500,000 MMK！新用户专享超大福利！', '红利', '进行中', '2026-04-01', '2026-05-01')");
    db.run("INSERT INTO promotions (id, title, description, type, status, start_date, end_date) VALUES (2, '每日返水1.5%', '每天自动返水，不限游戏种类。流水越高返水越多，上不封顶！', '返水', '进行中', '2026-03-15', '2026-06-15')");
    db.run("INSERT INTO promotions (id, title, description, type, status, start_date, end_date) VALUES (3, 'VIP专属特权', '升级VIP享受更高返水比例、专属客服、生日礼金、更快捷的提款服务。', 'VIP', '进行中', '2026-01-01', '2026-12-31')");
    db.run("INSERT INTO promotions (id, title, description, type, status, start_date, end_date) VALUES (4, '推荐好友奖励', '邀请好友注册并充值，您可获得好友首充金额的20%作为推荐奖金！', '推荐', '进行中', '2026-02-01', '2026-08-01')");
    db.run("INSERT INTO promotions (id, title, description, type, status, start_date, end_date) VALUES (5, '周末加码活动', '每周六日充值额外加赠10%奖金，与日常优惠可叠加使用！', '红利', '即将开始', '2026-04-26', '2026-05-26')");
    db.run("INSERT INTO promotions (id, title, description, type, status, start_date, end_date) VALUES (6, '转盘抽奖', '每日消费满50,000 MMK可获一次转盘抽奖机会，最高赢取1,000,000 MMK！', '活动', '进行中', '2026-03-01', '2026-07-01')");
  }

  saveDB(db);
  return db;
}

function saveDB(database) {
  const data = database.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
}

// Helper: run a query and return rows
function queryAll(sql, params = []) {
  const stmt = db.prepare(sql);
  if (params.length > 0) stmt.bind(params);
  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

function queryOne(sql, params = []) {
  const rows = queryAll(sql, params);
  return rows.length > 0 ? rows[0] : null;
}

function run(sql, params = []) {
  db.run(sql, params);
  saveDB(db);
}

// ===== Middleware =====
function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: '未登录' });
  }
  try {
    const decoded = jwt.verify(header.split(' ')[1], JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Token无效' });
  }
}

function adminMiddleware(req, res, next) {
  authMiddleware(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: '需要管理员权限' });
    }
    next();
  });
}

// ===== User API =====

app.post('/api/user/change-password', authMiddleware, (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) return res.status(400).json({ error: '参数不足' });
  if (newPassword.length < 6) return res.status(400).json({ error: '密码不能少于6位' });
  
  const user = queryOne('SELECT password FROM users WHERE id = ?', [req.user.id]);
  if (!user) return res.status(404).json({ error: '用户不存在' });
  if (!bcrypt.compareSync(oldPassword, user.password)) return res.status(400).json({ error: '原密码错误' });
  
  const hash = bcrypt.hashSync(newPassword, 10);
  run('UPDATE users SET password = ? WHERE id = ?', [hash, req.user.id]);
  res.json({ success: true, message: '密码修改成功' });
});

app.post('/api/register', (req, res) => {
  const { username, password, phone } = req.body;
  if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' });
  const existing = queryOne('SELECT id FROM users WHERE username = ?', [username]);
  if (existing) return res.status(400).json({ error: '用户名已存在' });

  const hash = bcrypt.hashSync(password, 10);
  run('INSERT INTO users (username, password, phone, balance) VALUES (?, ?, ?, 0)', [username, hash, phone || '']);
  const user = queryOne('SELECT id, username, phone, balance, status, vip_level, created_at FROM users WHERE username = ?', [username]);
  const token = jwt.sign({ id: user.id, username: user.username, role: 'user' }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ success: true, user, token });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' });
  const user = queryOne('SELECT * FROM users WHERE username = ?', [username]);
  if (!user) return res.status(400).json({ error: '用户不存在' });
  if (!bcrypt.compareSync(password, user.password)) return res.status(400).json({ error: '密码错误' });
  if (user.status === '冻结') return res.status(403).json({ error: '账号已被冻结' });

  const role = user.username === 'admin' ? 'admin' : 'user';
  const token = jwt.sign({ id: user.id, username: user.username, role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({
    success: true,
    user: { id: user.id, username: user.username, phone: user.phone, balance: user.balance, status: user.status, vip_level: user.vip_level, created_at: user.created_at },
    token, role
  });
});

app.get('/api/user/profile', authMiddleware, (req, res) => {
  const user = queryOne('SELECT id, username, phone, balance, status, vip_level, created_at FROM users WHERE id = ?', [req.user.id]);
  if (!user) return res.status(404).json({ error: '用户不存在' });
  res.json({ success: true, user });
});

// ===== Transaction API =====

app.post('/api/deposit', authMiddleware, (req, res) => {
  const { amount, method } = req.body;
  if (!amount || amount <= 0) return res.status(400).json({ error: '充值金额无效' });
  run("INSERT INTO deposits (user_id, username, amount, method, status) VALUES (?, ?, ?, ?, '待处理')", [req.user.id, req.user.username, amount, method || 'KBZ Pay']);
  res.json({ success: true, message: '充值申请已提交，等待审核' });
});

app.post('/api/withdraw', authMiddleware, (req, res) => {
  const { amount, account, account_name } = req.body;
  if (!amount || amount <= 0) return res.status(400).json({ error: '提现金额无效' });
  const user = queryOne('SELECT balance FROM users WHERE id = ?', [req.user.id]);
  if (user.balance < amount) return res.status(400).json({ error: '余额不足' });
  run("INSERT INTO withdrawals (user_id, username, amount, account, account_name, status) VALUES (?, ?, ?, ?, ?, '待处理')", [req.user.id, req.user.username, amount, account || '', account_name || '']);
  res.json({ success: true, message: '提现申请已提交，等待审核' });
});

app.get('/api/transactions', authMiddleware, (req, res) => {
  const deposits = queryAll("SELECT id, amount, method, status, created_at, 'deposit' as type FROM deposits WHERE user_id = ? ORDER BY created_at DESC", [req.user.id]);
  const withdrawals = queryAll("SELECT id, amount, account, status, created_at, 'withdraw' as type FROM withdrawals WHERE user_id = ? ORDER BY created_at DESC", [req.user.id]);
  const all = [...deposits, ...withdrawals].sort((a, b) => b.created_at.localeCompare(a.created_at));
  res.json({ success: true, transactions: all });
});

// ===== Admin API =====

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' });
  const user = queryOne('SELECT * FROM users WHERE username = ?', [username]);
  if (!user || user.username !== 'admin') return res.status(400).json({ error: '管理员账号不存在' });
  if (!bcrypt.compareSync(password, user.password)) return res.status(400).json({ error: '密码错误' });
  const token = jwt.sign({ id: user.id, username: user.username, role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
  res.json({ success: true, token });
});

app.get('/api/admin/stats', adminMiddleware, (req, res) => {
  const totalUsers = queryOne("SELECT COUNT(*) as c FROM users WHERE username != 'admin'").c;
  const totalDeposits = queryOne("SELECT COALESCE(SUM(amount), 0) as t FROM deposits WHERE status = '已完成'").t;
  const totalWithdrawals = queryOne("SELECT COALESCE(SUM(amount), 0) as t FROM withdrawals WHERE status = '已完成'").t;
  const todayReg = queryOne("SELECT COUNT(*) as c FROM users WHERE date(created_at) = date('now','localtime') AND username != 'admin'").c;
  const todayDep = queryOne("SELECT COALESCE(SUM(amount), 0) as t FROM deposits WHERE status = '已完成' AND date(created_at) = date('now','localtime')").t;
  const todayWit = queryOne("SELECT COALESCE(SUM(amount), 0) as t FROM withdrawals WHERE status = '已完成' AND date(created_at) = date('now','localtime')").t;
  const active7 = queryOne("SELECT COUNT(DISTINCT user_id) as c FROM (SELECT user_id FROM deposits WHERE date(created_at) >= date('now','-7 days','localtime') UNION SELECT user_id FROM withdrawals WHERE date(created_at) >= date('now','-7 days','localtime'))").c;

  res.json({
    success: true,
    stats: {
      totalUsers, totalDeposits, totalWithdrawals,
      onlineNow: Math.floor(Math.random() * 20) + 10,
      todayReg, todayDep, todayWit, active7
    }
  });
});

app.get('/api/admin/users', adminMiddleware, (req, res) => {
  const { search } = req.query;
  let sql = "SELECT id, username, phone, balance, status, vip_level, created_at FROM users WHERE username != 'admin'";
  const params = [];
  if (search) {
    sql += ' AND (username LIKE ? OR phone LIKE ?)';
    params.push(`%${search}%`, `%${search}%`);
  }
  sql += ' ORDER BY id ASC';
  res.json({ success: true, users: queryAll(sql, params) });
});

app.get('/api/admin/deposits', adminMiddleware, (req, res) => {
  const { status } = req.query;
  let sql = 'SELECT d.*, u.balance as user_balance FROM deposits d JOIN users u ON d.user_id = u.id';
  const params = [];
  if (status && status !== '全部状态') {
    sql += ' WHERE d.status = ?';
    params.push(status);
  }
  sql += ' ORDER BY d.created_at DESC';
  res.json({ success: true, deposits: queryAll(sql, params) });
});

app.get('/api/admin/withdrawals', adminMiddleware, (req, res) => {
  const { status } = req.query;
  let sql = 'SELECT w.*, u.balance as user_balance FROM withdrawals w JOIN users u ON w.user_id = u.id';
  const params = [];
  if (status && status !== '全部状态') {
    sql += ' WHERE w.status = ?';
    params.push(status);
  }
  sql += ' ORDER BY w.created_at DESC';
  res.json({ success: true, withdrawals: queryAll(sql, params) });
});

app.get('/api/admin/promotions', adminMiddleware, (req, res) => {
  res.json({ success: true, promotions: queryAll('SELECT * FROM promotions ORDER BY id ASC') });
});

app.post('/api/admin/approve', adminMiddleware, (req, res) => {
  const { id, type } = req.body;
  if (!id || !type) return res.status(400).json({ error: '参数不足' });

  if (type === 'deposit') {
    const dep = queryOne("SELECT * FROM deposits WHERE id = ? AND status = '待处理'", [id]);
    if (!dep) return res.status(400).json({ error: '充值记录不存在或已处理' });
    run("UPDATE deposits SET status = '已完成' WHERE id = ?", [id]);
    run('UPDATE users SET balance = balance + ? WHERE id = ?', [dep.amount, dep.user_id]);
    return res.json({ success: true, message: '充值已通过' });
  }

  if (type === 'withdraw') {
    const wit = queryOne("SELECT * FROM withdrawals WHERE id = ? AND status = '待处理'", [id]);
    if (!wit) return res.status(400).json({ error: '提现记录不存在或已处理' });
    const user = queryOne('SELECT balance FROM users WHERE id = ?', [wit.user_id]);
    if (user.balance < wit.amount) return res.status(400).json({ error: '用户余额不足' });
    run("UPDATE withdrawals SET status = '已完成' WHERE id = ?", [id]);
    run('UPDATE users SET balance = balance - ? WHERE id = ?', [wit.amount, wit.user_id]);
    return res.json({ success: true, message: '提现已通过' });
  }

  res.status(400).json({ error: '未知类型' });
});

app.post('/api/admin/reject', adminMiddleware, (req, res) => {
  const { id, type } = req.body;
  if (!id || !type) return res.status(400).json({ error: '参数不足' });
  const table = type === 'deposit' ? 'deposits' : 'withdrawals';
  run(`UPDATE ${table} SET status = '已失败' WHERE id = ? AND status = '待处理'`, [id]);
  res.json({ success: true, message: '已拒绝' });
});

app.post('/api/admin/user-status', adminMiddleware, (req, res) => {
  const { userId, status } = req.body;
  if (!userId || !status) return res.status(400).json({ error: '参数不足' });
  run("UPDATE users SET status = ? WHERE id = ? AND username != 'admin'", [status, userId]);
  res.json({ success: true, message: `用户状态已更新为 ${status}` });
});

app.post('/api/admin/update-balance', adminMiddleware, (req, res) => {
  const { userId, amount } = req.body;
  if (!userId || amount === undefined) return res.status(400).json({ error: '参数不足' });
  run('UPDATE users SET balance = ? WHERE id = ? AND username != ?', [parseFloat(amount), userId, 'admin']);
  res.json({ success: true, message: '余额已更新' });
});

// ===== Forgot Password =====
app.post('/api/forgot-password', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: '请输入用户名' });
  const user = queryOne('SELECT id FROM users WHERE username = ?', [username]);
  if (!user) return res.status(404).json({ error: '用户不存在' });
  // Reset password to default
  const hash = bcrypt.hashSync('888888', 10);
  run('UPDATE users SET password = ? WHERE id = ?', [hash, user.id]);
  res.json({ success: true, message: '密码已重置为 888888' });
});

// ===== Start =====
async function start() {
  const SQL = await initSqlJs();
  db = initDatabase(SQL);
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 Coke 888 API Server running!`);
    console.log(`📱 Open http://localhost:${PORT}`);
    console.log(`🔑 Admin: admin / admin888`);
    console.log(`🔑 Test user: coke / 123456\n`);
  });
}

start().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
