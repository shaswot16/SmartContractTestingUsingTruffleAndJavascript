const Storage = artifacts.require("./Storage.sol");

contract("Storage",()=>{
    let storage = null;
    before(async()=>{
        storage= await Storage.deployed();
    })
    it("Should return item", async()=>{
        
        await storage.set("Good Morning");
        const result = await storage.get();
        assert(result=="Good Morning");
    })
    it("Should return another item", async()=>{
        
        await storage.set("Good Evening");
        const result = await storage.get();
        assert(result=="Good Evening");
    })
})