module.exports = {
    getCancelationDate: (cancelation) => {
        Date.prototype.monthNames = [
          'Jan', 'Feb', 'Mar',
          'Apr', 'May', 'Jun',
          'Jul', 'August', 'Sep',
          'Oct', 'Nov', 'Dec',
        ];
    
        Date.prototype.getMonthName = function () {
          return this.monthNames[this.getMonth()];
        };
        const today = new Date();
        today.setHours(today.getHours() + cancelation);
        return `${today.getMonthName()} ${today.getDate()}`;
    },
    getToday: () => {
        Date.prototype.monthNames = [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'August', 'Sep',
            'Oct', 'Nov', 'Dec',
        ];
        Date.prototype.getMonthName = function () {
            return this.monthNames[this.getMonth()];
          };
          const today = new Date();
          return [today.getMonthName(), today.getDate(), today.getFullYear()];

    },

    getNextMonthYear: (currentMonthYear) => {
      const monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'August', 'Sep',
        'Oct', 'Nov', 'Dec',
      ];
      let nextMonthindex = monthNames.indexOf(currentMonthYear[0]) + 1;
      if(nextMonthindex < monthNames.length) {
        const nextMonth = monthNames[nextMonthindex];
        return [nextMonth, currentMonthYear[1]];
      } else {
        nextMonthindex = nextMonthindex % monthNames.length;
        const nextMonth = monthNames[nextMonthindex];
        return [nextMonth, (Number(currentMonthYear[1]) + 1).toString()]
      }
    },

    getPreviousMonthYear: (currentMonthYear) => {
      const monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'August', 'Sep',
        'Oct', 'Nov', 'Dec',
      ];
      let prevMonthindex = monthNames.indexOf(currentMonthYear[0]) -1;
      if(prevMonthindex >= 0) {
        const prevMonth = monthNames[prevMonthindex];
        return [prevMonth, currentMonthYear[1]];
      } else {
        prevMonthindex = 11;
        const prevMonth = monthNames[prevMonthindex];
        return [prevMonth, (Number(currentMonthYear[1]) -1 ).toString()]
      }
    }
  }
