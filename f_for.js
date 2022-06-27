names = ['alex', 'Inna', 'Vadim', 'Natalia', 'Anatoliy']

function names_editor(person_name){
    let name_1 ='hello ' + person_name+ " !"
    console.log(name_1)
}
for (let i=0; i<names.length; i ++){
    names_editor(names[i])
}
