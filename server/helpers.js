module.exports = {
  // get the current date in "20200501" format
  formatDate: (today) => {
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, 0);
    const day = today.getDate().toString().padStart(2, 0);
    const date = year + month + day;
    return date;
  },

};
