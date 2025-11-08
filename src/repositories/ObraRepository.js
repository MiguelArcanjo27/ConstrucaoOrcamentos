
const STORAGE_KEY = 'Oobrass'
export default {
    getAll (){
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    },
    save(obra) {
        const obras = this.getAll()
        obras.push(obra)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(obras))
    },
    
    findById(id) {
        return this.getAll().find(obra => obra.id === id)
    },

    update(updatedObra) {
        const obras = this.getAll().map(obra => (obra.id === updatedObra.id ? updatedObra : obra))
        localStorage.setItem(STORAGE_KEY, JSON.stringify(obras))
    },

    delete(id) {
        const obras = this.getAll().filter(obra => obra.id !== id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(obras))
    }
}
