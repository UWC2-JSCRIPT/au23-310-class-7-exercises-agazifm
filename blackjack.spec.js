//from following in class

describe('Tests for the BlackJack Game', () => {
    it('should calculate the score of a hand', () => {
        const hand = [
        {displayVal: 'six', val: 6, suit: 'hearts'},
        {displayVal: 'Seven', val: 7, suit: 'hearts'},
        ]

        const result = calcPoints(hand)

        expect(result.total).toEqual(13)

        console.log('After calling calcPoints:', typeof calcPoints);
    });
}); 