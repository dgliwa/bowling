describe("Bowling Analyzer", function () {
    beforeEach(function () {

    });

    it("should set the score to 9 and move to the second frame after a roll of 7 and 2", function(){
      var game = new BowlingGame();

      game.roll(7);
      game.roll(2);
      expect(game.score).toEqual(9);
      expect(game.game_frame).toEqual(2);
    });

    it("should add the first roll of the frame after a spare twice", function(){
      var game = new BowlingGame();

      game.roll(7);
      game.roll(3);

      game.roll(3);
      game.roll(4);
      expect(game.score).toEqual(20);
    });

    it("should add the both rolls of the next frame after a strike twice", function(){
      var game = new BowlingGame();

      game.roll(10);

      game.roll(3);
      game.roll(4);
      expect(game.score).toEqual(24);
    });

    it("should properly compute score after 2 strikes and a frame.", function(){
      var game = new BowlingGame();

      game.roll(10);

      game.roll(10);
      game.roll(4);
      game.roll(4);
      expect(game.score).toEqual(50);
    });

    it("should properly compute score after 3 strikes and a frame.", function(){
      var game = new BowlingGame();

      game.roll(10);
      game.roll(10);
      game.roll(10);

      game.roll(4);
      game.roll(4);
      expect(game.score).toEqual(80);
    });

});
