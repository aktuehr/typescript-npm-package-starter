import { sample } from "../dist/sample";

const sampleProps = {
  sampleString: 'hoge',
  sampleNum: 123,
};

const result = sample(sampleProps);

console.log(result); // 'hoge123'