Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        titolo: "Hello Vueoolean - ToDoList",
        nuovaAttivita: "",
        listaAttivita: [
            { attivita: "Lezione Boolean: 9:30" },
            { attivita: "Esercitazione: 15:00" },
            { attivita: "Masterclass: 18:30" }
        ]
    },
    methods: {
        pushElement() {

            if (this.nuovaAttivita.trim() === "") {
                return;
            }
            this.listaAttivita.push({
                attivita: this.nuovaAttivita.trim()
            });
            this.nuovaAttivita = "";
        }
    }

});