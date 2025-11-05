// 入口脚本：绑定事件、操作 DOM、做本地持久化
import './style.css';

const countEl = document.getElementById('count');
const btn = document.getElementById('btn');

// 1) 从本地存储恢复计数（刷新不丢）
let count = Number(localStorage.getItem('count') || 0);
countEl.textContent = count;

// 2) 点击 +1，更新 UI，并写回本地存储
btn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
  localStorage.setItem('count', String(count));
}, { passive: true });

// 3) 可选：调试输出，打开浏览器控制台能看到
console.log('当前计数：', count);