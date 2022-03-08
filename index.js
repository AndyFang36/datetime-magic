/**
 * @name datetimeMagic
 * @description Make you no longer worry about the conversion of date and time.
 * @version 1.0.0
 * @since 1.0.0
 * @license MPL-2.0
 * */
export const datetimeMagic = {
    /**
     * @param {Date | string} datetime1 A date object or string like "2022-3-8", "2022/3/8"...
     * @param {Date | string} datetime2 A date object or string like "2022-3-8", "2022/3/8"...
     * @return {number} Returns the number of years in the gap.
     */
    yearGap: function (datetime1, datetime2) {
        let gap;
        if (datetime1 instanceof Date) {
            if (datetime2 instanceof Date) {
                gap = datetime1.getFullYear() - datetime2.getFullYear();
            } else {
                gap = datetime1.getFullYear() - new Date(datetime2).getFullYear();
            }
        } else {
            if (datetime2 instanceof Date) {
                gap = new Date(datetime1).getFullYear() - datetime2.getFullYear();
            } else {
                gap = new Date(datetime1).getFullYear() - new Date(datetime2).getFullYear();
            }
        }
        return Math.abs(gap);
    },

    /**
     * @return {string} The return format: Year(s) Day(s) Hour(s) Minute(s) Second(s)
     */
    differ: function (datetime1, datetime2) {

    },

    differToNow: function (datetime) {

    },
}