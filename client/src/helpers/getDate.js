

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
    getDate: () => {
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
          return `${today.getMonthName()} ${today.getDate()}`;

    }
}

