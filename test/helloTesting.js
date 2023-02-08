const HelloTesting = artifacts.require("./HelloTesting.sol");

contract("HelloTesting", () => {
    it("Should return hello testing", async () => {
        const helloTesting = await HelloTesting.deployed();
        const result = await helloTesting.print();
        //console.log(result);
        assert(result === "Hello Testing");
    });

    it("Should return 1", async () => {
        const helloTesting = await HelloTesting.deployed();
        const result = await helloTesting.printNum();
        console.log(typeof result.toNumber());
        assert(result.toNumber() === 1);
    })
})