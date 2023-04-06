import { defineStore } from "pinia"

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: []
  }),
  actions: {
    addNote(newNote) {
      this.notes.push({
        id: this.notes.length + 1,
        text: newNote.value,
        date: new Date(),
        backgroundColor: `hsl(${Math.random() * 360}, 100%, 75%)`
      })
    }
  }
})
