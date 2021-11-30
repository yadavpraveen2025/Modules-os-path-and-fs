// //fs module
// const fs = require('fs')
// const path = require('path') // 

// // readsync agar file h to wo read krta h nhi to bana dega file
// let content = fs.writeFileSync('f1.txt') // readFileSync read krta h write wala usme likhta h aur file nhi h to write wala jakar filew bana deta h
// console.log('This is F1 data-> ' + content)
//      / create
// // mkdirSync is used to create a new directory
// //fs.mkdirSync('myDirectory')

// //delete
// //rmdirSync is used to remove or delete a directory
// //fs.rmdirSync('myDirectory')

// // to check whether a directory exists or not we can us existsSync method
// // if the directory exists the method returns true otherwise false
// // let doesExist = fs.existsSync('myDirectory')
// // console.log(doesExist)


// // //stats of a path (details of a folder)
// // // lstatsync provides us with all the statistics of a directory

// // let statsofPath = fs.lstatSync('myDirectory')
// // console.log(statsofPath)

// // console.log('isFile?' ,statsofPath.isFile()) 
// // // isFile is a metnod that checks wheter a passed path is a file or not
// // console.log('isDirectory' , statsofPath.isDirectory()) 
// // // isDirectory that checks wheter a passed path is a directory or not

// // readdirSync method is used to check the content of a particular directory
// // let folderPath = 'D:\\FJP2 Dev\\Node Modules\\myDirectory'
// // let folderContent = fs.readdirSync(folderPath)
// // console.log('directory content '+ folderContent)



// //copy files

// // src file , destFolder

// let srcFilePath = 'D:\\FJP2 Dev\\Node Modules\\myDirectory\\f3.txt'
// let destFolder = 'D:\\FJP2 Dev\\Node Modules\\myDirectory2\\'

// let tobecopiedFileName = path.basename(srcFilePath)
// console.log(tobecopiedFileName) // f3.txt
// // basename method gets the actual name of the file or directory

// let destPath = path.join(destFolder, tobecopiedFileName)
// console.log(destPath)

// fs.copyFileSync(srcFilePath, destPath)
// console.log("file Copied")