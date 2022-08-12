import { SlugTextPipe } from './slug-text.pipe';

describe('SlugTextPipe', () => {
  it('create an instance', () => {
    const pipe = new SlugTextPipe();
    expect(pipe).toBeTruthy();
  });
});
