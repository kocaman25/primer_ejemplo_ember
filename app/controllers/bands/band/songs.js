import Controller from '@ember/controller';
import Song from 'rarwe/models/song';
import { empty } from '@ember/object/computed';

export default Controller.extend({

    isAddingSong:false,
    newSongTitle:'',

    isAddingButtonDisabled: empty('newSongTitle'),

    actions:{
        addSong(){
            this.set('isAddingSong',true);
        },
        cancelAddSong(){
            this.set('isAddingSong',false);
        },

        saveSong(event){
            event.preventDefault();
            let newSong=Song.create({title: this.get('newSongTitle')});
            this.get('model.songs').pushObject(newSong);
            this.set('newSongTitle','');
        },
        updateRating(song, rating){
           let currentRating=song.get('rating');
           song.set('rating',currentRating===rating ? 0 : rating);
           return song.save();
        }

    }
})