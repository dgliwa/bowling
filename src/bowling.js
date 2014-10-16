var BowlingGame = function(){
  this.total_score = [];
  this.frame_roll = 0;
  this.frame_score = 0;
  this.bonus_pins = 0;
  this.multiplier = [];
}



BowlingGame.prototype.roll=function(pins) {
  if(!this.gameOver()){
    if(this.multiplier.length !== 0){
      this.bonus_pins += pins * this.multiplier.shift() - pins;
    }
    this.frame_score += pins;

    if(this.isTenthFrameAndMarks(pins)){
      this.frame_roll = (this.frame_roll + 1) % 3;
      if(this.frame_roll === 2){
        this.multiplier = [];
      }
    }
    else if(this.isMark(pins)){
      this.frame_roll = 0;
      this.computeMultiplier(pins);
    }
    else{
      this.frame_roll = (this.frame_roll + 1) % 2;
    }
    if(this.frame_roll === 0){
      this.total_score.push(this.frame_score + this.bonus_pins);
      this.frame_score = 0;
      this.bonus_pins = 0;
      this.frame_roll = 0;
    }
  }
}

BowlingGame.prototype.gameOver=function(){
  return this.total_score.length === 10;
}

BowlingGame.prototype.isTenthFrameAndMarks=function(pins){
  return (pins === 10 || this.frame_score >= 10) && this.framesCompleted() === 9;
}

BowlingGame.prototype.isMark=function(pins){
  return pins === 10 || this.frame_score === 10;
}

BowlingGame.prototype.framesCompleted=function(){
  return this.total_score.length;
}

BowlingGame.prototype.score=function(){
   return _.reduce(this.total_score, function(score, frame){ return score + frame; }, 0);
}

BowlingGame.prototype.computeMultiplier=function(pins){
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
}
