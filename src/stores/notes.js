import { defineStore } from "pinia"
import api from "../services/api"

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [],
  }),
  actions: {
    fetchNotes() {
      api.get('/notes')
      .then(res => {
        this.notes = res.data
      })
    },
    addNote(newNote) {
      const note = {
        content: newNote.content,
        background_color: `hsl(${Math.random() * 360}, 50%, 75%)`
      }

      api.post('/notes', note)
      .then(res => {
        this.notes.unshift(res.data)
      })
    },
    updateNote(noteId, updatedNote) {
      api.put(`/notes/${noteId}`, updatedNote)
      .then(res => {
        this.notes = this.notes.map(n => {
          if (n.id == noteId) {
            return res.data
          }

          return n
        })
      })
    },
    destroyNote(note) {
      api.delete(`/notes/${note.id}`)
      .then(res => {
        this.notes = this.notes.filter(n => {
          return n.id != note.id
        })
      })
    }
  }
})
