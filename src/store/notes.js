import firebase from 'firebase/app'

export default {
  actions: {
    async createNote({ commit, dispatch }, { action, month, day, date, time, enable = true }) {
      try {
        const uid = await dispatch("getUid");
        const note = await firebase
          .database()
          .ref(`/users/${uid}/${month}/${day}/${action}`)
          .push({ date, time, enable });
        return { date, time, enable, id: note.key };
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async createDayStats({ commit, dispatch }, { action, month, day, enable = true }) {
      try {
        const uid = await dispatch("getUid");
        const note = await firebase
          .database()
          .ref(`/stats/${month}/${day}/${action}/${uid}`)
          .push({ enable });
        return { enable, id: note.key };
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async fetchNotes({ commit, dispatch }) {
      try {
        const uid = await dispatch("getUid");
        const notes =
          (
            await firebase
              .database()
              .ref(`/users/${uid}`)
              .once("value")
          ).val() || {};
        return Object.keys(notes).map(key => ({...notes[key], id: key}))
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async updateNote({ commit, dispatch }, { text, id }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/notes`)
          .child(id)
          .update({text})
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async disableNote({ commit, dispatch }, { enable = false, id }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/notes`)
          .child(id)
          .update({enable})
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
  }
}