import { render, screen } from '@testing-library/angular';
import { SpinnerComponent } from './spinner.component';

// I didn't find a way to cleanup the dom in afterEach. I'm used to testing
// with testing library in react with jest but it works a bit different in
// Angular i found out.

// I tried out some things, but it was more involving then I thought.
// Due to some other obligations comming week I have to leave this topic
// open for now.

// I left this broken/unfinished code here so you can see the intentions I had.

describe('SpinnerComponent', () => {
  it('should be rendered if loading is true', async () => {
    await render(SpinnerComponent, {
      componentProperties: { loading: true },
    });

    const element = screen.getByTestId('spinner');

    expect(element).toBeTruthy();
  });

  it('should not be renderd if loading is false', async () => {
    await render(SpinnerComponent, {
      componentProperties: { loading: false },
    });

    const element = screen.getByTestId('spinner');

    expect(element).toBeFalsy();
  });
});
