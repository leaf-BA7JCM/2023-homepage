/**
 * 璁＄畻瀹為檯骞撮緞锛岀簿纭埌澶�
 * @param {*} birthday array [year, month, day]
 * @return array
 */
function getAge(birthday) {
    // 鏂板缓鏃ユ湡瀵硅薄
    let date = new Date()
        // 浠婂ぉ鏃ユ湡锛屾暟缁勶紝鍚� birthday
    let today = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
        // 鍒嗗埆璁＄畻骞存湀鏃ュ樊鍊�
    let age = today.map((value, index) => {
            return value - birthday[index]
        })
        // 褰撳ぉ鏁颁负璐熸暟鏃讹紝鏈堝噺 1锛屽ぉ鏁板姞涓婃湀鎬诲ぉ鏁�
    if (age[2] < 0) {
        // 绠€鍗曡幏鍙栦笂涓湀鎬诲ぉ鏁扮殑鏂规硶锛屼笉浼氶敊
        let lastMonth = new Date(today[0], today[1], 0)
        age[1]--
            age[2] += lastMonth.getDate()
    }
    // 褰撴湀鏁颁负璐熸暟鏃讹紝骞村噺 1锛屾湀鏁板姞涓� 12
    if (age[1] < 0) {
        age[0]--
            age[1] += 12
    }
    return age
}
// console.log(getAge('2006-1-9'.split('-')))
// document.getElementById("age").innerHTML = getAge('2006-1-9'.split('-'))
var age_all = getAge('2006-1-9'.split('-'))
document.getElementById("age").innerHTML = age_all[0]
console.log("实际准确年龄" + age_all[0] + "年" + age_all[1] + "个月" + age_all[2] + "天")
console.log("写的稀烂，有更好的设计或者写法还望多多指教")