describe("Bowling Analyzer", function () {
    beforeEach(function () {

    });

    it("should set the score() to 9 and move to the second frame after a roll of 7 and 2", function(){
      var game = new BowlingGame();

      game.roll(7);
      game.roll(2);
      expect(game.score()).toEqual(9);
      expect(game.framesCompleted()).toEqual(1);
    });

    it("should add the first roll of the frame after a spare twice", function(){
      var game = new BowlingGame();

      game.roll(7);
      game.roll(3);

      game.roll(3);
      game.roll(4);
      expect(game.score()).toEqual(20);
    });

    it("should add the both rolls of the next frame after a strike twice", function(){
      var game = new BowlingGame();

      game.roll(10);

      game.roll(3);
      game.roll(4);
      expect(game.score()).toEqual(24);
    });

    it("should properly compute score() after 2 strikes and a frame.", function(){
      var game = new BowlingGame();

      game.roll(10);

      game.roll(10);
      game.roll(4);
      game.roll(4);
      expect(game.score()).toEqual(50);
    });

    it("should properly compute score() after 3 strikes and a frame.", function(){
      var game = new BowlingGame();

      game.roll(10);
      game.roll(10);
      game.roll(10);

      game.roll(4);
      game.roll(4);
      expect(game.score()).toEqual(80);
    });

    it("should stay in 10th frame after a strike on the first roll.", function(){
      var game = new BowlingGame();

      game.total_score = [1,1,1,1,1,1,1,1,1];

      game.roll(10);
      game.roll(2);
      expect(game.framesCompleted()).toEqual(9);
    });

    it("should not add to score() once the game is over.", function(){
      var game = new BowlingGame();

      game.total_score = [0,0,0,0,0,0,0,0,0];

      game.roll(7);
      game.roll(2);

      game.roll(1);
      game.roll(1);
      expect(game.score()).toEqual(9);
    });

    it("should bowl 300", function(){
      var game = new BowlingGame();
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);

      expect(game.score()).toEqual(300);
    });
});
