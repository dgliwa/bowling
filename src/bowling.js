var BowlingGame = function(){
  this.score = 0;
  this.game_frame = 1;
  this.frame_roll = 0;
  this.frame_score = 0;
  this.bonus_pins = 0;
  this.multiplier = [];
}



BowlingGame.prototype.roll=function(pins) {
    if(this.multiplier.length !== 0){
      this.bonus_pins += pins * this.multiplier.shift() - pins;
    }
    this.frame_score += pins;
    this.frame_roll = (this.frame_roll + 1) % 2;
    if(this.frame_roll === 0 || pins === 10){
      this.game_frame += 1;
      this.score += this.frame_score;
      this.score += this.bonus_pins;
      if(pins === 10){
        if(this.multiplier[0] > 0){
          this.multiplier[0] += 1;
        }
        else{
        this.multiplier.push(2);
      }
      }
      if(this.frame_score === 10){
        this.multiplier.push(2);
      }
      this.frame_score = 0;
      this.bonus_pins = 0;
      this.frame_roll = 0;
    }
}
