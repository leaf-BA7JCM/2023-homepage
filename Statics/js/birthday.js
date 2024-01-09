/**
 * 计算实际年龄，精确到天
 * Calculate the actual age, accurate to the day
 * @param {*} birthday array [year, month, day]
 * @return array
 */
function getAge(birthday) {
    // 新建日期对象
    // Create a new date object
    let date = new Date()
    // 今天日期，数组，同 birthday
    // Today's date, array, same as birthday
    let today = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    // 分别计算年月日差值
    // Calculate the difference between the year, month, and day separately
    let age = today.map((value, index) => {
        return value - birthday[index]
    })
    // 当天数为负数时，月减 1，天数加上月总天数
    // When the number of days is negative, the month is subtracted by 1, and the number of days is added to the total number of days in the month
    if (age[2] < 0) {
        // 简单获取上个月总天数的方法，不会错
        // A simple way to get the total number of days for the previous month without error
        let lastMonth = new Date(today[0], today[1], 0)
        age[1]--
        age[2] += lastMonth.getDate()
    }
    // 当月数为负数时，年减 1，月数加上 12
    // When the number of months is negative, the year is subtracted by 1 and the number of months is added to 12
    if (age[1] < 0) {
        age[0]--
        age[1] += 12
    }
    return age
}
var age_all = getAge('2006-1-9'.split('-'))
// 判断是否在浏览器环境
if (typeof document !== 'undefined') {
    document.getElementById("age").innerHTML = age_all[0]
} else {
    console.log("今年" + age_all[0] + "岁了")
}
console.log("实际准确年龄" + age_all[0] + "年" + age_all[1] + "个月" + age_all[2] + "天")
console.log("写的稀烂，有更好的设计或者写法还望多多指教")