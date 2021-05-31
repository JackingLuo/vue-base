/**
 * 公共工具方法
 */
// 日期转换
  formatDate = date => {
    date = date instanceof Date ? date : new Date(date);
    const add0 = m => {
      return m < 10 ? `0${m}` : m;
    };
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const mm = date.getMinutes();
    const s = date.getSeconds();
    return `${y}-${add0(m)}-${add0(d)} ${add0(h)}:${add0(mm)}:${add0(s)}`;
  };