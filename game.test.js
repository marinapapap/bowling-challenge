const Frame = require('./frame');
const Game = require('./game');

describe('Game class', () => {
  it('returns the score for a gutter game', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(0);
    frame1.addRoll(0);

    const frame2 = new Frame;
    frame2.addRoll(0);
    frame2.addRoll(0);

    const frame3 = new Frame;
    frame3.addRoll(0);
    frame3.addRoll(0);

    const frame4 = new Frame;
    frame4.addRoll(0);
    frame4.addRoll(0);

    const frame5 = new Frame;
    frame5.addRoll(0);
    frame5.addRoll(0);

    const frame6 = new Frame;
    frame6.addRoll(0);
    frame6.addRoll(0);

    const frame7 = new Frame;
    frame7.addRoll(0);
    frame7.addRoll(0);

    const frame8 = new Frame;
    frame8.addRoll(0);
    frame8.addRoll(0);

    const frame9 = new Frame;
    frame9.addRoll(0);
    frame9.addRoll(0);

    const frame10 = new Frame;
    frame10.addRoll(0);
    frame10.addRoll(0);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.updateScorecard()).toEqual([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);

    expect(game.updateScore()).toEqual(0);
  })

  it('returns the score for a game with no strikes or spares', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(3);
    frame1.addRoll(2);

    const frame2 = new Frame;
    frame2.addRoll(3);
    frame2.addRoll(2);

    const frame3 = new Frame;
    frame3.addRoll(4);
    frame3.addRoll(5);

    const frame4 = new Frame;
    frame4.addRoll(5);
    frame4.addRoll(4);

    const frame5 = new Frame;
    frame5.addRoll(3);
    frame5.addRoll(4);

    const frame6 = new Frame;
    frame6.addRoll(0);
    frame6.addRoll(0);

    const frame7 = new Frame;
    frame7.addRoll(5);
    frame7.addRoll(3);

    const frame8 = new Frame;
    frame8.addRoll(2);
    frame8.addRoll(3);

    const frame9 = new Frame;
    frame9.addRoll(0);
    frame9.addRoll(0);

    const frame10 = new Frame;
    frame10.addRoll(7);
    frame10.addRoll(0);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.updateScorecard()).toEqual([ 5, 5, 9, 9, 7, 0, 8, 5, 0, 7 ]);

    expect(game.updateScore()).toEqual((55));
  })

  it('returns the score for a game with 2 strikes (not in 10th frame)', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(3);
    frame1.addRoll(2);

    const frame2 = new Frame;
    frame2.addRoll(3);
    frame2.addRoll(2);

    const frame3 = new Frame;
    frame3.addRoll(10);

    const frame4 = new Frame;
    frame4.addRoll(5);
    frame4.addRoll(4);

    const frame5 = new Frame;
    frame5.addRoll(3);
    frame5.addRoll(4);

    const frame6 = new Frame;
    frame6.addRoll(10);

    const frame7 = new Frame;
    frame7.addRoll(5);
    frame7.addRoll(3);

    const frame8 = new Frame;
    frame8.addRoll(2);
    frame8.addRoll(3);

    const frame9 = new Frame;
    frame9.addRoll(0);
    frame9.addRoll(0);

    const frame10 = new Frame;
    frame10.addRoll(7);
    frame10.addRoll(0);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.updateScorecard()).toEqual([ 5, 5, 19, 9, 7, 18, 8, 5, 0, 7 ]);

    expect(game.updateScore()).toEqual((83));
  })

  it('returns the score for a game with 2 spares (not in 10th frame)', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(3);
    frame1.addRoll(2);

    const frame2 = new Frame;
    frame2.addRoll(3);
    frame2.addRoll(2);

    const frame3 = new Frame;
    frame3.addRoll(5);
    frame3.addRoll(5);

    const frame4 = new Frame;
    frame4.addRoll(5);
    frame4.addRoll(4);

    const frame5 = new Frame;
    frame5.addRoll(3);
    frame5.addRoll(4);

    const frame6 = new Frame;
    frame6.addRoll(4);
    frame6.addRoll(6);

    const frame7 = new Frame;
    frame7.addRoll(5);
    frame7.addRoll(3);

    const frame8 = new Frame;
    frame8.addRoll(2);
    frame8.addRoll(3);

    const frame9 = new Frame;
    frame9.addRoll(0);
    frame9.addRoll(0);

    const frame10 = new Frame;
    frame10.addRoll(7);
    frame10.addRoll(0);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.updateScorecard()).toEqual([ 5, 5, 15, 9, 7, 15, 8, 5, 0, 7 ]);

    expect(game.updateScore()).toEqual((76));
  })

  it('returns the score for a game with strike in 9th frame', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(3);
    frame1.addRoll(2);

    const frame2 = new Frame;
    frame2.addRoll(3);
    frame2.addRoll(2);

    const frame3 = new Frame;
    frame3.addRoll(5);
    frame3.addRoll(5);

    const frame4 = new Frame;
    frame4.addRoll(5);
    frame4.addRoll(4);

    const frame5 = new Frame;
    frame5.addRoll(3);
    frame5.addRoll(4);

    const frame6 = new Frame;
    frame6.addRoll(4);
    frame6.addRoll(6);

    const frame7 = new Frame;
    frame7.addRoll(5);
    frame7.addRoll(3);

    const frame8 = new Frame;
    frame8.addRoll(2);
    frame8.addRoll(3);

    const frame9 = new Frame;
    frame9.addRoll(10);

    const frame10 = new Frame;
    frame10.addRoll(10);
    frame10.addRoll(10);
    frame10.addRoll(10);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.updateScorecard()).toEqual([ 5, 5, 15, 9, 7, 15, 8, 5, 30, 30 ]);

    expect(game.updateScore()).toEqual((129));
  })

  it('updates scorecard and score for unfinished game', () => {

    const frame1 = new Frame;
    frame1.addRoll(0);
    frame1.addRoll(0);

    const frame2 = new Frame;
    frame2.addRoll(0);
    frame2.addRoll(0);

    const frame3 = new Frame;
    frame3.addRoll(0);
    frame3.addRoll(0);

    const frame4 = new Frame;
    frame4.addRoll(10);

    const frame5 = new Frame;
    frame5.addRoll(5);
    frame5.addRoll(2);

    const frame6 = new Frame;
    frame6.addRoll(6);
    frame6.addRoll(4);

    const frame7 = new Frame;
    frame7.addRoll(6);
    frame7.addRoll(4);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);

    expect(game.updateScorecard()).toEqual([ 0, 0, 0, 17, 7, 16, 10 ]);

    expect(game.updateScore()).toEqual((50));
  })

  it('returns the score for a straight strikes', () => {
    
    const frame1 = new Frame;
    frame1.addRoll(10);

    const frame2 = new Frame;
    frame2.addRoll(10);
    
    const frame3 = new Frame;
    frame3.addRoll(10);

    const frame4 = new Frame;
    frame4.addRoll(10);
    

    const frame5 = new Frame;
    frame5.addRoll(10);
    

    const frame6 = new Frame;
    frame6.addRoll(10);
    

    const frame7 = new Frame;
    frame7.addRoll(10);
    

    const frame8 = new Frame;
    frame8.addRoll(10);
    

    const frame9 = new Frame;
    frame9.addRoll(10);
    

    const frame10 = new Frame;
    frame10.addRoll(10);
    frame10.addRoll(10);
    frame10.addRoll(10);

    const game = new Game;
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    game.addFrame(frame4);
    game.addFrame(frame5);
    game.addFrame(frame6);
    game.addFrame(frame7);
    game.addFrame(frame8);
    game.addFrame(frame9);
    game.addFrame(frame10);

    expect(game.updateScorecard()).toEqual([ 30, 30, 30, 30, 30, 30, 30, 30, 30, 30 ]);

    expect(game.updateScore()).toEqual(300);
  })
})