let expect = chai.expect;

describe("combineCards", function() {
    describe("combineCards", function(){
        it("should combine suits and values", function(){
            var x = combineCards(suits, values);
            expect(x).to.equal(suits + values);
        });

        it("should throw an error if first parameter is not a string", function(){
            expect(function(){
                combineCards(suit);
            }).to.throw(Error);
        });
    });
});