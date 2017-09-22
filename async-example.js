import assert from 'assert';
import { test, testSuite, setup, teardown } from './describe';

const obj = {};
testSuite('True Or False? ', () => {
    testSuite('setup', () => {
        test('should setup num', async () => {
            try{
                await assert.equal(obj.num, 2);
            }catch(e){
                console.log('Setup error');
            }
        });
        setup(() => {
            obj.num = 2;
        });
        teardown(() => {
            obj.num = null;
        });
    });

    testSuite('teardown', () => {
        test('should teardown num', async () => {
            try{
                await assert.equal(obj.num, null);
            }catch(e){
                console.log('Tearing down error');
            }
        });
    });

    testSuite('truthy => ', () => {
        test('empty array', async () => {
            try{
                await assert.equal(!![0], true);
            }catch(e){
                console.log('Empty array error');
            }
        });

        test('empty object', async () => {
            try{
                await assert.equal(!!{}, true);
            }catch(e){
                console.log('Empty object error');
            }
        });
    });

    testSuite('falsy => ', () => {
        testSuite('undefined & nil', () => {
            test('undefined', async () => {
                try{
                    await assert.equal(!(void 0), true);
                }catch(e){
                    console.log('undefined error');
                }
            });
            test('null', async () => {
                try{
                    await assert.equal(!null, true);
                }catch(e){
                    console.log('null error');
                }
            });
        });

        test('should test ![] === true ', async () => {
            try{
                await assert.equal(![], true);
            }catch(e){
                console.log('empty array error');
            }
        });

        test('!NaN === true', async () => {
            try{
                await assert.equal(!NaN, true);
            }catch(e){
                console.log('nan error');
            }
        });
        test('!(empty string) === true', async () => {
            try{
                await assert.equal(!'', true);
            }catch(e){
                console.log('empty string error');
            }
        });
    });
});
