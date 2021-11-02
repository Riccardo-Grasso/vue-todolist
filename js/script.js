Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        titolo: "Hello Vueoolean - ToDoList",
        nuovaAttivita: "",
        listaAttivita: [
            {
                attivita: "Lezione Boolean: 9:30",
                check: false
            },
            {
                attivita: "Esercitazione: 15:00",
                check: false
            },
            {
                attivita: "Masterclass: 18:30",
                check: false
            }
        ]
    },
    methods: {
        pushElement() {

            if (this.nuovaAttivita.trim() === "") {
                return;
            }
            this.listaAttivita.push({
                attivita: this.nuovaAttivita.trim(),
                check: false
            });
            this.nuovaAttivita = "";
        },

        deleteActivity(index) {
            this.listaAttivita.splice(index, 1);
        }
    }

});