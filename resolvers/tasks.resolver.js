const { newData, updateData, removeData, getData } = require("../services/data");
const pagination = require("../utils/pagination");
const filterTasks = require("../utils/filterTasks");
const { filtered } = require("../utils/filterTasks2");
const { db } = require('../services/data')

let atividades = [];
getData("/atividades").then((res) => (atividades = res));

module.exports = {
  Query: {
    async allTasks(_, args){
        // async function filterList() {
        //     const filter = await filterTasks(tasks, args);
        //     return pagination(filter, args.page, 5);
        // }
        // return filterList();
        console.log(args)
        let res = []
        const req = await db.ref('atividades').once("value", function(snapshot){
           Object.keys(snapshot.val()).map(item => {
            const itemArr = snapshot.val()[item].realizado.includes(args.status)
            // const filter =  filtered(args, item)
            // if(snapshot.val()[item].realizado === 'Pendente') 
            console.log(itemArr)
            return res.push(snapshot.val()[item])
          })
        })
        return res
    }
},
  Mutation: {
    newTask(_, args){
        return newData("/atividades", args)
    },
    updateTask(_, args){
        return updateData("/atividades", args)
    },
    removeTask(_, args){
        return removeData("/atividades", args)
    }
}
}