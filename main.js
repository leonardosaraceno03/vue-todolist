var app = new Vue ({
    el: '#app',
    data: {
        todoList: [
            {
                text: 'uscire il cane', 
                done: false
            },
            {
                text: 'mangiare il cane', 
                done: false
            },
            {
                text: 'addormentare il cane', 
                done: false
            },
            {
                text: 'svegliare il cane', 
                done: false
            },
        ],
        textInput: '',
    },
    methods: {
        rimuovoElemento(index){

            this.todoList.splice( index, 1)
        },
        todoCompleted( index, elem ){

            if( elem.done == false){
                elem.done = true;
            } else {
                elem.done = false;
            }
        },
        aggiungiTodo(){
            let newText = { text: this.textInput, done: false }
            this.todoList.push(newText)
        }
    }
})