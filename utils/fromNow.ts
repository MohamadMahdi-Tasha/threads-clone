// Exporting a function as default that returns time of date from now
export default function fromNow(date,
                 nowDate:any = Date.now(),
                 rft = new Intl.RelativeTimeFormat(undefined, {
                     numeric: "auto"
                 })
) {
    // Variables
    const secondNumber:number = 1000;
    const minuteNumber:number = 60 * secondNumber;
    const hourNumber:number = 60 * minuteNumber;
    const dayNumber:number = 24 * hourNumber;
    const weekNumber:number = 7 * dayNumber;
    const yearNumber:number = 365 * dayNumber;
    const monthNumber:number = yearNumber / 12;
    const now = typeof nowDate === 'object' ? nowDate.getTime() : new Date(nowDate).getTime();
    const diff:number = now - (typeof date === 'object' ? date : new Date(date)).getTime();
    const diffAbs:number = Math.abs(diff);
    const intervals:any = [
        { ge: yearNumber, divisor: yearNumber, unit: 'year' },
        { ge: monthNumber, divisor: monthNumber, unit: 'month' },
        { ge: weekNumber, divisor: weekNumber, unit: 'week' },
        { ge: dayNumber, divisor: dayNumber, unit: 'day' },
        { ge: hourNumber, divisor: hourNumber, unit: 'hour' },
        { ge: minuteNumber, divisor: minuteNumber, unit: 'minute' },
        { ge: 30 * secondNumber, divisor: secondNumber, unit: 'seconds' },
        { ge: 0, divisor: 1, text: 'just now' },
    ];

    // Small loop through intervals with condition
    for (const interval of intervals) {
        if (diffAbs >= interval.ge) {
            const x = Math.round(Math.abs(diff) / interval.divisor);
            const isFuture = diff < 0;
            return interval.unit ? rft.format(isFuture ? x : -x, interval.unit) : interval.text;
        }
    }
}