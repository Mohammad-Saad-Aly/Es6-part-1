// var let and const

// const fname = "Saad"
//  fname = "rafeh"         value change nahi karega
// console.log(fname)


// var fname = "Saad"
// var fname = "rafeh"      // override karega
// console.log(fname)


// var fname = "Saad"
// fname = "rafeh"      // override ab karega
// console.log(fname)


// let fname = "Saad"
// fname = "rafeh"           // Error through nahi karega
// console.log(fname)

// let fname = "Saad"
// let fname = "rafeh"           // Error through karega
// console.log(fname)

// templete literals

// document.write(2+"x"+1+"+ +2*1)
// let fname = "saad"
// let lname = "ali"
// document.write(`Your name is ${fname} ${lname} `)

// spread operators

// var arr = ["rafeh","saad"]
// var b = ["naghsj","anhsjknhas"]
// var arr2 = [...arr,"usama","maaz",...b]
// var c = arr.concat(arr2)
// console.log(arr2)



//  spread operators

// var obj = {
//     name : "saad",
//     age : 21
// }
// var dusraobj = {
//     ...obj,
//     umar : 87,
//     gender : "male"
// }
// console.log(dusraobj)



// object destructuring

// var obj = {
//     // name : "rafeh",
//     name : "saad",
//     age :21
// }
// var { age,name} = obj
// console.log(name)
// var name = "khizer"
// console.log(name)


// async & sync

// setTimeout(function(){
// console.log("number 1")
// },1000)
// console.log("number 2")
// console.log("number 3")



var pro = new Promise(function(resolve,reject){
    var assg = "nhi dedia"
    if(assg == "dedia"){
        resolve("hn bhai dedia")
    }
    else{
        reject("topi")
    }
})
// console.log(pro)
// pro.then(function(data){
//     console.log(data)
// })
pro.catch(function(error){
    console.log(error)
})
