// Tests for the Soccer Game
describe("Tests for the Soccer Game", () => {
    describe("Tests for the getTotalPoints function", () => {
      it("should return an accurate total score for a string", () => {
        // Test for wins
        let result = getTotalPoints('wwdlw');
        expect(result).toEqual(10); // 3 (win) + 3 (win) + 1 (draw) + 0 (loss) + 3 (win) = 10
  
        // Test for draws
        result = getTotalPoints('dldld');
        expect(result).toEqual(3); // 1 (draw) + 0 (loss) + 1 (draw) + 0 (loss) + 1 (draw) = 3
  
        // Test for losses
        result = getTotalPoints('lllld');
        expect(result).toEqual(0); // 0 (loss) + 0 (loss) + 0 (loss) + 0 (loss) + 0 (loss) = 0
      });
    });
  
        
    // Tests for the orderTeams function
    describe("Tests for the orderTeams function", () => {
        it("should correctly order teams based on points", () => {
            const team1 = { name: 'Team1', results: 'wwldw' };
            const team2 = { name: 'Team2', results: 'lwdww' };
            const team3 = { name: 'Team3', results: 'dllld' };

            // Test for the order of Teams
            const result = orderTeams(team1, team2, team3);
            expect(result).toEqual('Team1: 9\nTeam2: 9\nTeam3: 2');
        });
    });
});
