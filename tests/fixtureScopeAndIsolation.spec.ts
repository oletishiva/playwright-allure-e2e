import {test as base} from '@playwright/test'

let counter=0

const test= base.extend({
counterFixture :[async({},use)=>{
counter++;
await use(counter);


},{scope:'worker'}] // interchange with test 
// we have test scope and worker scope
})

test("Test 1",async({counterFixture})=>{
await console.log(`test 1 counter: ${counterFixture}`);

});

test("Test 2",async({counterFixture})=>{
   await  console.log(`test 2 counter: ${counterFixture}`);
    
    });

    test("Test 3",async({counterFixture})=>{
     await   console.log(`test 3 counter: ${counterFixture}`);
        
        });
