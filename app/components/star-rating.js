import { computed }  from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
    classNames: ['rating-panel'],

    rating: 0,
    maxRating: 5,
    onClick: '',

    stars:computed('rating','maxRating',function(){
        let stars=[]
        let rating=this.get('rating');
        for(let i=1; i<=this.get('maxRating'); i++){
            stars.push({rating: i, isFull: rating>=i });
        }
        return stars;
    }),

    actions: {
        setRating: function(){ //        setRating: function(newRating){
            return this.get('onClick');// return this.get('onClick')(rating);
        }
    }

});
