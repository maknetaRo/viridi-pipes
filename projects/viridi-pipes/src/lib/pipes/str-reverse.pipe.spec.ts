import { StrReversePipe } from './str-reverse.pipe';

describe('StrReversePipe', () => {
  it('create an instance', () => {
    const pipe = new StrReversePipe();
    expect(pipe).toBeTruthy();
  });
});
