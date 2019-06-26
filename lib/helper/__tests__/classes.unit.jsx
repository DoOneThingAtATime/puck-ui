import classes, { scopedClassMaker } from '../classes';

describe('classes', () => {
  it('接受 1 个 classname', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受 2 个 classname', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受 undefined 但是结果不会出现 undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受各种奇怪值', () => {
    const result = classes('a', undefined, '中文', false, null);
    expect(result).toEqual('a 中文');
  });
  it('接受 0 个参数', () => {
    const result = classes();
    expect(result).toEqual('');
  });
});

describe('scopedClassMaker', () => {
  it('x', () => {
    const sc = scopedClassMaker('puck-prefix');
    expect(sc('')).toEqual('puck-prefix');
    expect(sc('x')).toEqual('puck-prefix-x');
    expect(sc({y: true, z: false})).toEqual('puck-prefix-y');
    expect(sc({y: true, z: true})).toEqual('puck-prefix-y puck-prefix-z');
    expect(sc({y: false, z: false})).toEqual('');
    expect(sc({y: true, z: true}, { extra: ''})).toEqual('puck-prefix-y puck-prefix-z');
    expect(sc({y: true, z: true}, { extra: 'red'})).toEqual('puck-prefix-y puck-prefix-z red');
    expect(sc({y: true, z: true}, { extra: 'red blue'})).toEqual('puck-prefix-y puck-prefix-z red blue');
  });
});
