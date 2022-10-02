alert('1111')

//冒泡排序
let arr1 = [1,4,6,2,3,11,8]
for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
        if (arr1[j] > arr1[j + 1]) {
            let temp = arr1[j]
            arr1[j] = arr1[j + 1]
            arr1[j + 1] = temp
        }
    }
}
console.log(arr1)

let arr2 = []
for (let i = 1; i <= 4; i++) {
    arr2.push(prompt(`请输入第${i}季度的数据`))
}
document.write('<div class="box">')

for (let i = 0; i < arr2.length; i++) {
    document.write(`
        <div style="height: ${arr2[i]}px;">
            <span>${arr2[i]}</span>
            <h4>第${i + 1}季度</h4>
        </div>
    `)
}
document.write('</div>')
